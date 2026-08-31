# Showcase — Agent Instructions

## Stack
- Vanilla HTML5 / CSS3 / JavaScript ES6+ — **no build tools, no npm, no frameworks**
- GSAP (CDN) in some projects; Tailwind CSS v4 (CDN) in a few
- All dependencies loaded via `<link>`/`<script>` or CDN — no `package.json`

## Project structure
```
index.html           ← app shell (gallery)
css/main.css         ← gallery styles + imports default.css + variables-main.css
css/variables-main.css  ← light/dark theme CSS custom properties
js/main.js           ← gallery logic: fetches data/projects.json, renders cards + filters
data/projects.json   ← project list (id, title, category, href, preview, tags)
projects/exemplo-NN--name/  ← each project is a self-contained folder with its own index.html
docs/exemplo-design-system.md  ← landing page blueprint template
```

## Adding a new project
1. Create `projects/exemplo-NN--name/` with its own `index.html`, `css/`, `js/`
2. Add entry to `data/projects.json` (fields: `id`, `title`, `category`, `href`, `preview`, `description`, `tags`)
3. Add preview image at `projects/exemplo-NN--name/preview.png`
4. Each project footer must link back: `<a href="../../index.html">← Voltar ao Showcase</a>`

## Local dev
```bash
npx http-server -p 8000
# Open http://localhost:8000
```
No build step needed — just serve the root.

## Theme
- Dark/light via `data-theme` attribute on `<html>`, set by inline script in `index.html`
- CSS custom properties in `css/variables-main.css` drive all themed colors
- Toggle button in header saves preference to `localStorage`

## Deploy
- **Vercel**: `vercel.json` sets `"outputDirectory": "."`. Build runs `vercel-build.sh` which injects env vars into `projects/exemplo-08--poster/js/config.js` (OMDB_API_KEY, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET). `.env` is gitignored — set vars in Vercel dashboard.
- **GitHub Pages**: push to `main`, enable Pages at Settings → Pages → main branch root

## Auditoria e melhoria de projetos (SEO, performance, responsividade)

Ao auditar/melhorar um projeto (`projects/exemplo-NN--name/`), aplicar o mesmo checklist usado no `exemplo-02--real-state`. Produção: `https://showcase-theta-opal.vercel.app`; canonical de cada projeto = `<domain>/projects/<name>/`.

### 1. SEO (`<head>` do `index.html`)
- Garantir `<html lang>`, `<meta name="viewport">`, `<meta name="description">` e `<title>` adequado.
- Adicionar `<link rel="canonical" href="https://showcase-theta-opal.vercel.app/projects/<name>/">`.
- Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`) e Twitter Card, com **URLs absolutas** do domínio de produção (usar `preview.png` do próprio projeto ou a imagem hero mais representativa).
- Se o site representa negócio/organização, adicionar JSON-LD de schema apropriado (`RealEstateAgent`, `CafeOrCoffeeShop`, `Organization`, `WebSite`, etc.).
- Não duplicar metas válidas já existentes; corrigir domínios placeholders (ex.: `seudominio.com`, `se-site.com`, `mathscool.com` → domínio de produção).

### 2. Performance / Core Web Vitals
- Fontes: **remover `@import url('https://...')`** de CSS (render-blocking) e mover para `<link rel="stylesheet">` no `<head>`, com `preconnect` para `fonts.googleapis.com` / `fonts.gstatic.com`. Incluir apenas famílias realmente usadas.
- LCP: `<link rel="preload" as="image" href="...hero..." fetchpriority="high">` na imagem hero.
- Imagens: `decoding="async"` nas significativas; `loading="lazy"` + `width`/`height` (evita CLS) nas abaixo da dobra.
- Corrigir referências de assets quebradas (ex.: `../imgs/` → `../assets/`).

### 3. Remover assets não usados
- Cruzar cada arquivo do projeto (HTML/CSS/JS) com referências em `index.html`, CSS e JS; apagar apenas **imagens** claramente órfãs. Conservador: não apagar CSS/JS referenciados por script nem arquivos de dados (`data/*.json`).
- Não remover `js/config.js` (gitignored, injetado pelo `vercel-build.sh`).

### 4. Responsividade
- Garantir media queries mobile e ausência de overflow horizontal; corrigir issues pontuais de elementos posicionados (ex.: ícone centralizado no mobile).
- Não over-engineering; preservar BEM, mobile-first e funcionalidade.

### 5. Validação (após alterar cada projeto)
- HTML bem-formado: `python3 -c` com `html.parser` (sem tags soltas / atributos duplicados).
- JS: `node --check <arquivo>.js`.
- Sem referências de assets quebradas (src/href/url() apontando para arquivos existentes).

## Conventions
- **BEM** naming for CSS (`.block__element--modifier`)
- **Conventional Commits**: `feat`, `fix`, `refactor`, `redesign`, `style`, `docs`, `chore`
- VSCode: 2-space tabs (`editor.tabSize: 2`)
- **Mobile-first, responsive, semantic HTML, ARIA labels** — enforced per project standards
- Cursor: custom `.cursor` / `.cursor__trail` elements (disabled on touch devices)
- Scroll-triggered card reveal via IntersectionObserver in `js/main.js`
- Comments: CSS single-line, JS max 2 lines per section
- **Commit only when explicitly asked** — never commit without permission
- **Commit por projeto separado**: ao alterar vários projetos, commitar cada um em um commit próprio (ex.: `refactor(real-state): ...`). Arquivos de infra raiz (`vercel.json`, `robots.txt`, `sitemap.xml`) vão em um commit `chore(seo)` à parte.
