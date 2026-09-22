# Between Lines — Book Quotes

Interactive landing page with book quotes stacked onto cards, powered by GSAP animations (card stacking, draggable and scroll).

## Stack

- Semantic HTML5
- CSS3 custom properties
- GSAP (Draggable, InertiaPlugin, ScrollTrigger)
- Vercel serverless proxy for the Quotes API

## Estrutura

```
css/style.css
js/script.js
assets/
index.html
```
A função `api/quotes.js` vive na raiz do repositório (diretório `api/` da Vercel).

## Citações via API Ninjas

Os cards são populados dinamicamente pelo endpoint Quotes da [API Ninjas](https://api-ninjas.com/api/quotes), sempre com fallback para as citações literárias curadas que já estão no HTML — se a API falhar, a página continua íntegra.

O client chama `GET /api/quotes?categories=wisdom,philosophy&count=11` e a função serverless (`api/quotes.js` na raiz do repo) repassa ao upstream `https://api.api-ninjas.com/v2/randomquotes` com a chave guardada no servidor. A resposta é cacheada na CDN por 1h.

A função é declarada pelo `vercel.json` raiz (propriedade `functions`), apontando para `api/quotes.js`.

### Configuração da chave (Vercel)

A chave **nunca** vai para o repositório nem para o client:

1. No painel da [Vercel](https://vercel.com), projeto → Settings → Environment Variables.
2. Adicionar `API_NINJAS_KEY` com o valor gerado na [API Ninjas](https://api-ninjas.com/api/quotes).
3. Redeploy. Para testes locais com `vercel dev`, usar o `.env` da raiz (gitignored).

> Nota: o proxy é feature da Vercel (via `functions` no `vercel.json`). Em GitHub Pages ou dev com `http-server`, a chamada a `/api/quotes` falha e o fallback curado assume.

[Voltar ao Showcase](../../index.html)