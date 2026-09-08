# Florea — Sentimentos em forma de flores

Landing page / catálogo floral com estética editorial e minimalista. Catálogo dinâmico com filtros de categorias, favoritos persistidos em `localStorage`, suavização de scroll, animações de entrada em GSAP e slider de depoimentos via Swiper.

**Stack:** HTML5 · CSS3 (15 arquivos modulares) · JavaScript ES6+ (7 módulos) · GSAP 3 + ScrollTrigger · Lenis · Swiper · Lucide Icons — sem build tools.

## Estrutura

```
exemplo-27--florea/
├── index.html              # Shell da página (9 seções semânticas)
├── css/
│   ├── style.css           # Entry point — imports dos módulos
│   ├── reset.css           # Reset / normalização
│   ├── variables.css       # CSS custom properties (paleta floral)
│   ├── global.css          # Tipografia (DM Sans + Inter), containers, base
│   ├── header.css          # Header sticky + nav + menu mobile
│   ├── hero.css            # Hero full-bleed + badge "+1.500 buquês"
│   ├── categories.css      # Grid de 6 categorias com hover
│   ├── catalog.css         # Filtros + grid responsivo (vitrine Swiper no mobile)
│   ├── banner.css          # Banner editorial ("As flores dizem…")
│   ├── services.css        # Lista de serviços (row layout editorial)
│   ├── gallery.css         # Grid irregular de 8 fotos (masonry-like)
│   ├── testimonials.css    # Slider Swiper de depoimentos
│   ├── newsletter.css      # Formulário de newsletter
│   ├── footer.css          # Footer 4 colunas + links legais
│   └── responsive.css      # Breakpoints 768px / 1024px / 1440px
├── js/
│   ├── data.js             # Array de produtos (id, nome, descrição, categoria, preço, imagem)
│   ├── catalog.js          # Renderiza cards no DOM a partir de data.js
│   ├── filters.js          # Filtragem por categoria com animação de saída/entrada
│   ├── favorites.js        # Toggle de favoritos + persistência em localStorage
│   ├── navigation.js       # Menu mobile (slide-in, ARIA, lock scroll, Escape)
│   ├── animations.js       # GSAP: hero entrance, ScrollTrigger, parallax, stagger
│   └── main.js             # Orquestra inicialização de todos os módulos
├── assets/
│   ├── images/
│   │   ├── hero/           # hero-01.webp, hero-bg.webp
│   │   ├── categories/     # 6 imagens de categoria (cat-buques.webp, etc.)
│   │   ├── products/       # Imagens dos cards do catálogo
│   │   ├── gallery/        # 8 fotos da galeria editorial
│   │   └── editorial.webp  # Banner editorial full-width
│   └── sociais/            # Ícones de redes sociais (SVG)
├── preview.png             # Thumbnail do projeto
└── florea_moodboard_planejamento.md  # Documento de planejamento completo
```

## Como rodar

Na raiz do showcase:

```bash
npx http-server -p 8000
# Abra http://localhost:8000/projects/exemplo-27--florea/
```

## Funcionalidades

### Catálogo dinâmico
- Produtos definidos em `js/data.js` e renderizados via `js/catalog.js`
- 6 categorias: Buquês, Presentes, Casamentos, Flores secas, Plantas, Assinaturas
- Filtros com animação: fade-out dos cards antigos → atualização → fade-in dos novos
- **Vitrine no mobile:** em telas ≤640px o catálogo vira um slider Swiper horizontal (cards em destaque centralizado, pagination clicável); no desktop permanece grid responsivo. Swiper é destruído/recriado automaticamente conforme o viewport muda.

### Favoritos
- Coração (♡/♥) em cada card com toggle animado (scale + fade)
- Persistidos em `localStorage` — sobrevivem a reloads

### Navegação
- Header sticky que muda background ao rolar
- Menu mobile lateral (drawer da direita): painel slide-in com overlay escuro, fechável por botão X, clique no overlay, clique no link ou tecla `Escape`. Acessível (ARIA + lock de scroll)
- Smooth scroll via Lenis integrado com GSAP ScrollTrigger

### Animações (GSAP)
- **Hero entrance:** título, descrição e CTA entram com fade + translateY; imagem com scale suave
- **ScrollTrigger:** seções revelam ao entrar no viewport (fade + slide)
- **Stagger:** cards de categoria e catálogo aparecem em sequência
- **Parallax:** imagem do hero com movimento diferenciado no scroll
- **Banner editorial:** texto animado linha a linha

### Slider de depoimentos
- Swiper com 3 depoimentos, pagination clicável
- Dados hardcoded no HTML (sem backend)

### Newsletter
- Formulário com validação de e-mail via `required`
- Feedback em `aria-live="polite"`

## Paleta

| Nome | Cor |
|------|-----|
| Off White (bg) | `#F3F2EE` |
| Surface | `#E9E8E4` |
| Texto primário | `#252525` |
| Texto secundário | `#656565` |
| Rosa | `#D99A9A` |
| Pêssego | `#E9AD8F` |
| Creme | `#F4E4D2` |
| Verde suave | `#9AA88D` |
| Azul céu | `#A9C5CF` |
| Destaque | `#B76E6E` |

## Tipografia

- **Títulos:** DM Sans (300/400) — hero com `clamp(42px, 6vw, 96px)`
- **Corpo:** Inter (400/500) — 16px, `line-height: 1.6`

## Responsividade

- **Mobile:** coluna única, menu hamburger, grid 1 coluna
- **Tablet (≥768px):** grid 2 colunas
- **Desktop (≥1024px):** grid 3-4 colunas, nav horizontal
- **Desktop grande (≥1440px):** espaçamentos generosos

## Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`)
- `aria-label` em botões com ícones, `aria-hidden` em ícones decorativos
- `aria-live="polite"` no feedback do formulário
- `alt` descritivo em todas as imagens
- Suporte a `prefers-reduced-motion` (via CSS)

## SEO

- `<meta name="description">` e `<title>` otimizados
- Canonical apontando para domínio de produção
- Open Graph (`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`, `og:site_name`)
- Twitter Card (`summary_large_image`)
- Preload da imagem hero com `fetchpriority="high"`

## Notas de manutenção

- Bibliotecas carregadas via CDN no `<body>` (GSAP, ScrollTrigger, Lenis, Swiper, Lucide) — sem `package.json`
- CSS organizado em 15 arquivos modulares, importados via `style.css`
- JS organizado em 7 módulos — `main.js` orquestra a inicialização
- Dados dos produtos em `js/data.js` — para adicionar/remover itens, editar apenas esse arquivo
- Cada imagem usa `loading="lazy"` (exceto hero) e `width`/`height` explícitos para evitar CLS

[Voltar ao Showcase](../../index.html)
