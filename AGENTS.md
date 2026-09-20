# Showcase — Agent Instructions

## Stack
- Vanilla HTML5 / CSS3 / JavaScript ES6+ — no build tools, no frameworks, no npm installs
- GSAP (CDN) em alguns projetos; Tailwind CSS v4 (CDN) em poucos
- Dependências via `<link>`/`<script>`/CDN. **`package.json` é vestigial** (dep sobrando, sem scripts) — ignore.
- **Sem Python no projeto** (nem scripts, nem dependência de runtime); `preview.png` é asset estático versionado.

## Estrutura
```
index.html, css/main.css, css/variables-main.css, js/main.js  ← galeria (root, não é projeto)
data/projects.json   ← fonte de verdade da galeria (lista curada)
projects/exemplo-NN--name/  ← cada projeto é standalone (index.html, css/, js/, assets/)
docs/exemplo-design-system.md  ← blueprint template de landing page
robots.txt, sitemap.xml, vercel.json  ← infra/SEO raiz
```

## Regra crítica do catálogo
- A galeria só exibe o que está em `data/projects.json` — folders sem entrada não aparecem. Ids **não-sequenciais** e omissões são normais (lista curada).
- `href` pode ser URL externa completa (ex.: id 26 aponta para app externo).
- Manter `sitemap.xml` em sincronia: toda URL usa domínio de produção com **barra final**. Atualizar ao adicionar/remover projeto.

## Adicionar novo projeto
1. Criar `projects/exemplo-NN--name/` com `index.html`, `css/`, `js/`
2. Adicionar entrada em `data/projects.json` (`id`, `title`, `category`, `href`, `preview`, `description`, `tags`)
3. Preview image em `projects/exemplo-NN--name/preview.png`
4. Footer volta ao showcase: `<a href="../../index.html">← Voltar ao Showcase</a>`
5. Adicionar URL no `sitemap.xml`

## Dev local
```bash
npx http-server -p 8000   # abrir http://localhost:8000
```
Sem build step — só servir a raiz.

## Tema
- **Galeria**: `data-theme` no `<html>` via inline script + toggle no header + `localStorage` (em `index.html` raiz).
- **Projetos**: CSS próprio com `:root[data-theme]`; alguns setam `data-theme` via `prefers-color-scheme` no próprio page (ex.: exemplo-23). Verificar por projeto.

## Deploy
- **Vercel**: `vercel.json` → `outputDirectory: "."` + `buildCommand` sem build (100% estático). Redirect `/projects/:name` → `/projects/:name/` (permanente): **canonical sempre com barra final**.
- **GitHub Pages**: push `main`, habilitar Pages em Settings → Pages → main branch root.
- Arquivos de infra raiz (`vercel.json`, `robots.txt`, `sitemap.xml`) → commit separado `chore(seo)`.

## Auditoria / melhoria de projetos
Aplicar apenas em `projects/exemplo-NN--name/` — **nunca** no core da galeria (`css/main.css`, `js/main.js`, `index.html` raiz desses carregam de um jeito diferente). Referência: `exemplo-02--real-state`. Produção: `https://showcase-theta-opal.vercel.app`; canonical de cada projeto = `<domain>/projects/<name>/`.

### Padrão de cookies/tracking (se presente)
Projetos auditados seguem o padrão LGPD: Meta Pixel (`fbq`) + Google Analytics (`gtag`) no `<head>` **acompanhados** de banner de consentimento (`<aside class="cookie-banner">`, `js/cookie-banner.js`, `css/cookie-banner.css`). Ao auditar: repetir o padrão OU remover os trackers por completo (ex.: pomodoro removeu tudo) — **nunca** deixar tracker sem banner.

### 1. SEO (`<head>`)
- Garantir `<html lang>`, viewport, `<meta name="description">` e `<title>` adequados
- `<link rel="canonical" href="https://showcase-theta-opal.vercel.app/projects/<name>/">`
- Open Graph + Twitter Card com **URLs absolutas** de produção (usar `preview.png` ou a hero mais representativa)
- JSON-LD se representa negócio/organização (`RealEstateAgent`, `CafeOrCoffeeShop`, `Organization`, `WebSite`, etc.)
- Não duplicar metas válidas; corrigir placeholders (`seudominio.com`, `se-site.com`, `mathscool.com` → domínio de produção)

### 2. Performance / Core Web Vitals
- Remover `@import url('https://...')` de CSS (render-blocking) → `<link rel="stylesheet">` no `<head>` + `preconnect` fonts.googleapis/gstatic; incluir só famílias usadas
- LCP: `<link rel="preload" as="image" ... fetchpriority="high">` na imagem hero
- Imagens: `decoding="async"` nas significativas; `loading="lazy"` + `width`/`height` (evita CLS) abaixo da dobra
- Corrigir refs quebradas (ex.: `../imgs/` → `../assets/`)

### 3. Remover assets não usados
- Cruzar arquivos do projeto (HTML/CSS/JS) com referências; apagar apenas **imagens** claramente órfãs. Conservador: não apagar CSS/JS referenciados por script nem arquivos `data/*.json`.

### 4. Responsividade
- Media queries mobile e ausência de overflow horizontal; corrigir issues pontuais de posicionamento
- Não over-engineering; preservar BEM, mobile-first e funcionalidade

### 5. Validação (após alterar cada projeto)
- HTML bem-formado: `python3 -c` com `html.parser` (sem tags soltas / atributos duplicados)
- JS: `node --check <arquivo>.js`
- Sem refs de assets quebradas (src/href/url() apontando para arquivos existentes)

## Conventions
- **BEM** naming para CSS (`.block__element--modifier`)
- **IDs no HTML e nomes em JS/CSS em `snake_case`** (`_`): sem camelCase em variáveis, funções, ids e atributos `for` — exceção apenas para APIs nativas do browser (`getElementById`, `toDataURL`, `devicePixelRatio`, `offsetX`, `fillRect` etc.). CSS usa BEM (`__`/`--`).
- **Código JS em inglês** (nomes de variáveis e funções); **comentários em pt-BR**; documentação/portugol em português.
- **Conventional Commits**: `feat`, `fix`, `refactor`, `redesign`, `style`, `docs`, `chore`
- 2-space indent
- **Mobile-first, responsivo, HTML semântico, ARIA labels** — por padrão em cada projeto
- Cursor custom `.cursor` / `.cursor__trail` (desabilitado em touch)
- Card reveal via IntersectionObserver em `js/main.js`
- Comentários: CSS 1 linha; JS máx 2 linhas por seção
- **Commit apenas quando explicitamente pedido** — nunca sem permissão
- **Commit por projeto separado** (ex.: `refactor(real-state): ...`); infra raiz (`vercel.json`, `robots.txt`, `sitemap.xml`) vai em `chore(seo)` à parte