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
python -m http.server 8000   # or: npx http-server
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

## Conventions
- **BEM** naming for CSS (`.block__element--modifier`)
- **Conventional Commits**: `feat`, `fix`, `refactor`, `redesign`, `style`, `docs`, `chore`
- VSCode: 2-space tabs (`editor.tabSize: 2`)
- **Mobile-first, responsive, semantic HTML, ARIA labels** — enforced per project standards
- Cursor: custom `.cursor` / `.cursor__trail` elements (disabled on touch devices)
- Scroll-triggered card reveal via IntersectionObserver in `js/main.js`
- Comments: CSS single-line, JS max 2 lines per section
