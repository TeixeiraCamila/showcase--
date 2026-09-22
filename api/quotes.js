// Proxy Vercel serverless: busca citações na API Ninjas sem expor a chave no client.
// Uso: GET /api/quotes?categories=wisdom,philosophy&count=11

const UPSTREAM = 'https://api.api-ninjas.com/v2/randomquotes';

const ALLOWED_CATEGORIES = new Set([
  'wisdom',
  'philosophy',
  'life',
  'truth',
  'inspirational',
  'relationships',
  'love',
  'faith',
  'humor',
  'success',
  'courage',
  'happiness',
  'art',
  'writing',
  'fear',
  'nature',
  'time',
  'freedom',
  'death',
  'leadership'
]);

module.exports = async (req, res) => {
  const api_key = process.env.API_NINJAS_KEY;

  // Sem env var configurada: 503 faz o client cair no fallback das citações curadas
  if (!api_key) {
    res.status(503).json({ error: 'missing_api_key' });
    return;
  }

  const raw_count = Number(req.query.count || '11');
  const count = Number.isInteger(raw_count)
    ? Math.min(Math.max(raw_count, 1), 11)
    : 11;

  const categories = String(req.query.categories || 'wisdom,philosophy')
    .split(',')
    .map((category) => category.trim())
    .filter((category) => ALLOWED_CATEGORIES.has(category));
  const category_param = categories.length
    ? categories.join(',')
    : 'wisdom,philosophy';

  const result = [];
  const seen = new Set();
  let attempts = 0;
  const max_attempts = count * 3;

  // randomquotes retorna 1 quote por request (limit é premium), então busco em loop
  while (result.length < count && attempts < max_attempts) {
    attempts += 1;
    try {
      const upstream = await fetch(
        `${UPSTREAM}?categories=${encodeURIComponent(category_param)}`,
        { headers: { 'X-Api-Key': api_key } }
      );
      if (!upstream.ok) {
        // quota ou erro da upstream: entrega o que já coletou
        break;
      }
      const data = await upstream.json();
      const quote = Array.isArray(data) ? data[0] : data;
      if (quote && quote.quote && quote.author) {
        const dedupe_key = quote.quote.toLowerCase();
        if (!seen.has(dedupe_key)) {
          seen.add(dedupe_key);
          result.push({
            quote: quote.quote,
            author: quote.author,
            work: quote.work || ''
          });
        }
      }
    } catch {
      // falha de rede: mantém o que já coletou
      break;
    }
  }

  // cache na CDN por 1h reduz o consumo da cota de requests da API Ninjas
  res.setHeader('Cache-Control', 'public, s-maxage=3600');
  res.status(200).json({ quotes: result });
};