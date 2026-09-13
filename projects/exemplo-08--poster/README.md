# Poster Maker

Crie posters de filmes e eventos: busque filmes na API OMDB, personalize a arte (upload de imagem, título, elenco, gênero, diretor) e exporte em PNG (2x) ou compartilhe via Cloudinary.

## Stack

- HTML5 semântico + ARIA
- CSS3 custom properties + BEM
- JavaScript ES6+ vanilla
- html2canvas (CDN) — exportação PNG
- OMDB API — busca de filmes
- Cloudinary Upload (unsigned preset) — compartilhamento por URL

## Estrutura

```
css/style.css
js/script.js
js/cloudinary.js
js/config.js        ← gitignored, gerado pelo build a partir do .env
index.html
preview.png
```

## Variáveis de ambiente

As chaves da OMDB/Cloudinary **não** ficam no repositório. Elas são lidas do `.env` da raiz e injetadas em `js/config.js` pelo `vercel-build.sh`:

```bash
cp .env.exemple .env
# preencha OMDB_API_KEY, CLOUDINARY_CLOUD_NAME e CLOUDINARY_UPLOAD_PRESET
bash vercel-build.sh   # gera projects/exemplo-08--poster/js/config.js
```

Na Vercel, defina as mesmas variáveis em Settings → Environment Variables.

[Voltar ao Showcase](../../index.html)