# Meteora — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **Meteora**, loja de streetwear premium com coleções exclusivas
> e showcase de produtos.

---

## 1. Project Overview

### Project Name

```
Meteora | Streetwear Premium
```

### Category

```
ecommerce
```

### Description

```
Meteora - Loja de streetwear premium com coleções exclusivas e showcase de produtos.
```

### Target Audience

```
Jovens adultos e entusiastas de streetwear (18–35 anos) que buscam roupas com
identidade urbana, design ousado e curadoria exclusiva.
```

### Main Goal

```
Apresentar a marca Meteora como referência em streetwear premium, exibir
coleções e produtos com curadoria, e conduzir o usuário ao checkout por meio
de uma experiência visual impactante e de alto contraste.
```

### Brand Voice

- **Ousado** — tipografia condensada expansiva, contraste extremo (preto + laranja)
- **Urbano** — referências visuais do streetwear, cultura de rua, atitude
- **Premium** — superfícies escuras, espaçamento generoso, tipografia display
- **Direto** — CTAS claros, hierarquia tipográfica forte, sem ruído visual
- **Dark** — tema exclusivamente escuro, sem variação light

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 + BEM methodology + CSS custom properties |
| Behavior | Vanilla JavaScript ES6+ (DOMContentLoaded, IntersectionObserver) |
| Icons | Lucide icons (CDN) |
| Fonts | Google Fonts: Inter 400–700 (body) + Oswald 400–700 (headings) |

**No build tools, no GSAP, no Tailwind** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | HTML semântico com todas as seções: nav, hero, collections, featured, lookbook, about, newsletter, footer |
| `css/style.css` | CSS principal com variáveis, tema escuro, BEM blocks, responsivo |
| `js/script.js` | Lógica de hamburger menu, filtros de coleção, add to cart simulation, IntersectionObserver reveals |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

Todas as cores definidas como CSS custom properties no `:root` em `style.css`.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0D0D0D` | Fundo geral da página |
| `--color-surface` | `#1A1A1A` | Cards, seções, superfícies elevadas |
| `--color-primary` | `#FFFFFF` | Headings, texto principal, logo |
| `--color-secondary` | `#808080` | Subtítulos, metadados, texto secundário |
| `--color-accent` | `#FF3D00` | CTAs, links, destaque, hover states |
| `--color-text` | `#F5F5F5` | Corpo de texto |

**Nota**: Tema exclusivamente escuro — sem light mode. O alto contraste (preto + branco + laranja) é a identidade visual da marca.

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Headings (h1–h3) | Oswald | 700 (bold condensed) | `clamp()` ajustável |
| Body | Inter | 400, 500, 600, 700 | 1rem base |
| Nav links | Inter | 600 | 0.875rem |
| Buttons | Inter | 600 | 0.9375rem |
| Product name | Inter | 600 | 1rem |
| Product price | Inter | 700 | 1.125rem |

### 4.3 Buttons / Interactive Elements

| Element | Style |
|---|---|
| CTA primary | `--color-accent` background, `#FFFFFF` text, sem border-radius ou bordas retas |
| CTA secondary | Outline com `--color-accent`, texto `--color-accent` |
| Add to cart | `--color-accent` background, full width no card |
| Nav links | Hover com `--color-accent` |
| Product card | Hover com overlay sutil e scale |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Section padding | `clamp(4rem, 8vw, 8rem)` vertical |
| Container max-width | 1200px (centrado) |
| Card gap | 24px |
| Grid columns | 3–4 colunas (produtos), 2 colunas (coleções) |

### 4.5 Focus-Visible

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

## 5. Page Structure

```
NAV (fixed, dark)
  Logo (METEORA — Oswald bold condensed)
  Nav links (Home, Coleções, Lookbook, Sobre, Contato)
  Ícone de sacola (Lucide shopping-bag)
  Hamburger (mobile overlay)

HERO (fullscreen, 100vh)
  Headline: "METEORA" (massivo, Oswald 700)
  Subheadline: "Streetwear Premium"
  Descrição curta
  CTA: "Explorar Coleção"

COLLECTIONS (section)
  Título "Coleções"
  Grid de coleções (2 ou 3 cards com imagem de fundo)
  Cada card: nome da coleção + ano

FEATURED / PRODUCT GRID (section)
  Título "Destaques"
  Grid de produtos (3–4 colunas)
  Cada card: preview, nome, preço, botão "Adicionar"

LOOKBOOK (section)
  Layout visual com imagens em grid assimétrico
  Estilo editorial — fotos em corte

ABOUT (section)
  História da marca
  Imagem lateral + texto descritivo

NEWSLETTER (section)
  Input de email + CTA "Inscrever"
  Fundo escuro com destaque no input

FOOTER
  Logo, redes sociais, links
  <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Components

### 6.1 Navbar

```html
<nav class="nav" role="navigation" aria-label="Navegação principal">
  <a href="#" class="nav__logo">METEORA</a>
  <ul class="nav__list">
    <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
    <!-- Coleções, Lookbook, Sobre, Contato -->
  </ul>
  <button class="nav__cart" aria-label="Abrir sacola">
    <i data-lucide="shopping-bag"></i>
  </button>
  <button class="nav__hamburger" aria-label="Abrir menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
```

- BEM: `.nav`, `.nav__logo`, `.nav__list`, `.nav__item`, `.nav__link`, `.nav__cart`, `.nav__hamburger`
- Fixed no topo, fundo `--color-bg` com borda inferior sutil
- Logo em Oswald 700, links em Inter 600
- `will-change: transform` para GPU acceleration

### 6.2 Hero

```html
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">METEORA</h1>
    <p class="hero__subtitle">Streetwear Premium</p>
    <p class="hero__description">...</p>
    <a href="#" class="btn btn--primary hero__cta">Explorar Coleção</a>
  </div>
</section>
```

- BEM: `.hero`, `.hero__content`, `.hero__title`, `.hero__subtitle`, `.hero__description`, `.hero__cta`
- Fullscreen (`min-height: 100vh`), centralizado verticalmente
- Título massivo: `clamp(4rem, 15vw, 10rem)` Oswald 700
- Subtítulo em `--color-accent`

### 6.3 Collections

```html
<section class="collections" id="colecoes">
  <h2 class="section__title">Coleções</h2>
  <div class="collections__grid">
    <article class="collection-card">
      <div class="collection-card__image"><!-- background --></div>
      <h3 class="collection-card__title">Urban Legacy</h3>
      <span class="collection-card__year">2025</span>
    </article>
    <!-- 2–3 cards -->
  </div>
</section>
```

- BEM: `.collections`, `.collections__grid`, `.collection-card`, `.collection-card__image`, `.collection-card__title`, `.collection-card__year`

### 6.4 Product Card

```html
<article class="product-card">
  <div class="product-card__image">
    <img src="..." alt="Nome do Produto" loading="lazy" />
  </div>
  <div class="product-card__info">
    <h3 class="product-card__name">Oversized Tee</h3>
    <span class="product-card__price">R$ 189,90</span>
    <button class="btn btn--primary product-card__add">Adicionar</button>
  </div>
</article>
```

- BEM: `.product-card`, `.product-card__image`, `.product-card__info`, `.product-card__name`, `.product-card__price`, `.product-card__add`
- Grid responsivo: 4 colunas desktop → 2 tablets → 1 mobile
- Hover: `transform: translateY(-4px)`, imagem com scale sutil
- Botão "Adicionar" acionado via JS com feedback visual

### 6.5 Lookbook

```html
<section class="lookbook" id="lookbook">
  <h2 class="section__title">Lookbook</h2>
  <div class="lookbook__grid">
    <figure class="lookbook__item lookbook__item--wide">
      <img src="..." alt="..." loading="lazy" />
    </figure>
    <figure class="lookbook__item">
      <img src="..." alt="..." loading="lazy" />
    </figure>
    <!-- grid assimétrico 3–4 imagens -->
  </div>
</section>
```

- BEM: `.lookbook`, `.lookbook__grid`, `.lookbook__item`, `.lookbook__item--wide`
- Grid assimétrico estilo editorial (masonry ou grid explícito)

### 6.6 About

```html
<section class="about" id="sobre">
  <div class="about__content">
    <h2 class="section__title">Sobre Nós</h2>
    <p class="about__text">...</p>
    <a href="#" class="btn btn--secondary">Saiba Mais</a>
  </div>
  <div class="about__image">
    <img src="..." alt="..." loading="lazy" />
  </div>
</section>
```

### 6.7 Newsletter

```html
<section class="newsletter">
  <div class="newsletter__content">
    <h2 class="newsletter__title">Fique por Dentro</h2>
    <p class="newsletter__text">...</p>
    <form class="newsletter__form">
      <input type="email" class="newsletter__input" placeholder="Seu email" required />
      <button type="submit" class="btn btn--primary newsletter__submit">Inscrever</button>
    </form>
  </div>
</section>
```

### 6.8 Footer

```html
<footer class="footer" role="contentinfo">
  <div class="footer__container">
    <div class="footer__brand">
      <span class="footer__logo">METEORA</span>
      <p class="footer__tagline">Streetwear Premium</p>
    </div>
    <div class="footer__links">
      <!-- redes sociais, links -->
    </div>
    <div class="footer__bottom">
      <a href="../../index.html" class="footer__back">← Voltar ao Showcase</a>
      <p class="footer__copyright">&copy; 2025 Meteora. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
```

- `role="contentinfo"` para acessibilidade
- Link de volta com classe `.footer__back`
- Copyright com ano e nome do projeto

---

## 7. Responsive

### 7.1 Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 1024px | Layout desktop: grid 4 colunas, nav horizontal |
| 768px–1024px | Grid 2 colunas, fontes reduzidas |
| < 768px | Grid 1 coluna, hamburger menu, seções empilhadas |

### 7.2 Mobile Nav

- Hamburger toggle com overlay fullscreen escuro
- Nav links em coluna, centralizados, Oswald 700
- `aria-expanded` controlado por JS
- Transição CSS suave (sem GSAP)

### 7.3 Mobile Adaptations

| Element | Mobile |
|---|---|
| Hero title | `font-size: clamp(3rem, 15vw, 6rem)` |
| Product grid | 1 coluna |
| Lookbook grid | 1–2 colunas |
| About layout | Imagem acima do texto (stack vertical) |
| Newsletter | Full width, input + botão empilhados |

---

## 8. Animations

### 8.1 Scroll-Triggered Reveals (IntersectionObserver)

| Element | Animation |
|---|---|
| Sections | `opacity: 0 → 1` + `translateY(30px) → 0` via CSS class `.is-visible` |
| Product cards | Reveal com stagger (CSS transition-delay via JS) |
| Collection cards | Fade + slideUp |

Implementado com IntersectionObserver em Vanilla JS — sem GSAP.

### 8.2 Hover Animations (CSS)

| Element | Effect |
|---|---|
| Product card | `transform: translateY(-4px)` + `box-shadow` |
| Product image | `transform: scale(1.05)` |
| Nav links | `color: var(--color-accent)` |
| Buttons | `opacity: 0.9` + `transform: translateY(-1px)` |

### 8.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .product-card:hover {
    transform: none;
  }
}
```

---

## 9. Assets

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |

### Fonts

| Font | Source | Usage |
|---|---|---|
| Inter (400–700) | Google Fonts CDN | Body text, nav, buttons, product info |
| Oswald (400–700) | Google Fonts CDN | Headings, logo, hero headline |

### Icons

| Asset | Source | Usage |
|---|---|---|
| Lucide icons (shopping-bag, menu, x, arrow-right, etc.) | CDN | Nav cart, hamburger, CTAs |

---

## 10. Accessibility

### Implemented

- **Skip link** — `href="#main-content"`, visible on focus
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **ARIA labels** — `aria-label` on nav, hamburger, cart button
- **`aria-expanded`** — on hamburger button
- **Focus-visible** — custom `:focus-visible` outline with `--color-accent`
- **Reduced motion** — `prefers-reduced-motion: reduce` media query
- **Alt text** — all images have appropriate `alt`
- **Landmarks** — clear page regions with semantic elements
- **Heading hierarchy** — h1 (hero) → h2 (sections) → h3 (cards)
- **Language** — `lang="pt-BR"` no HTML

### Missing / Improvements

- Form validation feedback via `aria-live` region
- Keyboard navigation para o grid de produtos

---

## 11. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| GPU acceleration | `will-change: transform` on animated elements |
| Lazy loading | `loading="lazy"` on product/card images |
| IntersectionObserver | Vanilla JS reveals instead of GSAP (zero library overhead) |
| DNS prefetch | `dns-prefetch` for CDN + Google Fonts |
| Preconnect | `preconnect` for fonts.gstatic.com |
| Font display | `font-display: swap` |
| Single CSS file | Apenas `style.css` |
| Deferred JS | `<script defer>` |
| Reduced motion | `prefers-reduced-motion` disables animations |

### Considerations

- Sem GSAP, sem frameworks — JavaScript mínimo e performático
- Google Fonts (Inter + Oswald, ~30KB combined)
- Lucide icons via CDN — tree-shaken by usage
- Hero sem imagens de fundo pesadas (tipografia como protagonista)
- Produtos com lazy loading nativo

---

## 12. UX Principles

- **Streetwear Identity** — contraste extremo, tipografia display bold, laranja como cor de ação
- **Visual Hierarchy** — headline massivo seguido de subtítulo e CTA claro
- **Dark-First** — tema exclusivamente escuro como parte da identidade da marca
- **Product Showcase** — grid limpo com cards de produto focados na imagem + preço
- **Scroll Narrative** — seções reveladas progressivamente via IntersectionObserver
- **Mobile First** — hamburger menu, grid adaptável, fontes fluidas
- **Social Proof** — lookbook editorial e seção sobre para construir credibilidade
- **Clear CTAs** — "Explorar Coleção", "Adicionar", "Inscrever" — ação direta
- **Back Link** — footer sempre retorna ao showcase principal
- **Zero Library Animations** — IntersectionObserver + CSS transitions, sem depender de GSAP

---

## 13. Observations

- **Sem GSAP**: todas as animações são CSS transitions + IntersectionObserver vanilla — mantém o projeto leve
- **Tema escuro fixo**: sem toggle light/dark — a identidade Meteora é escura por definição
- **BEM consistente**: `.hero__title`, `.product-card__name`, `.collection-card__image`, `.nav__link`
- **Vanilla JS**: hamburger, IntersectionObserver, add to cart simulation — sem frameworks
- **Lucide icons**: apenas ícones essenciais (shopping-bag, menu, x, arrow-right)
- **Produtos simulados**: dados injetados via JS ou HTML estático (sem backend)
- **Hero tipográfico**: headline massivo como hero — sem imagem de fundo, tipografia como protagonista
- **Lookbook editorial**: grid assimétrico para transmitir curadoria visual
- **Reduced motion**: media query desativa animações para acessibilidade
- **Footer back link**: `<a href="../../index.html">← Voltar ao Showcase</a>` presente
- **preview.png pendente**: precisa ser criada se o projeto for exibido na galeria

---

## 14. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (not yet present — needs to be added):
   ```json
   {
     "id": "20",
     "title": "METEORA",
     "category": "ecommerce",
     "href": "projects/exemplo-20/index.html",
     "preview": "projects/exemplo-20/preview.png",
     "description": "Meteora - Loja de streetwear premium com coleções exclusivas e showcase de produtos.",
     "tags": ["HTML5", "CSS3", "JAVASCRIPT"]
   }
   ```

2. Preview image at `projects/exemplo-20/preview.png` — **não existe ainda**, precisa ser criada se o projeto for exibido na galeria.

3. Footer link back (must be present):
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Meteora** conforme projetada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
