# Magic Art — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **Magic Art ✦ Galeria de Arte Fantástica**, galeria de arte
> fantástica com temática mágica, showcase de ilustrações e animações imersivas.

---

## 1. Project Overview

### Project Name

```
Magic Art ✦ Galeria de Arte Fantástica
```

### Category

```
landing
```

### Description

```
Galeria de arte fantástica com temática mágica, showcase de ilustrações e animações imersivas.
```

### Target Audience

```
Artistas, ilustradores e entusiastas de arte fantástica que buscam uma
experiência imersiva e mágica para showcase de ilustrações.
```

### Main Goal

```
Apresentar uma galeria de arte fantástica com atmosfera mágica escura,
starfield particles animados, lightbox masonry, carrossel de artistas,
vitrine de produtos e formulário de contato — tudo com estética
dark fantasy e glow roxo/magenta.
```

### Brand Voice

- **Mística** — atmosfera escura com glow roxo/magenta, inspirada em fantasia sombria
- **Imersiva** — starfield particles, animações GSAP, parallax, floating elements
- **Literária** — tipografia serifada (Cormorant Garamond) para corpo, Cinzel para títulos
- **Premium** — glow effects, transições suaves, glassmorphism leve
- **Fantástica** — tema mágico com símbolos místicos e paleta noturna

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 + BEM methodology + CSS custom properties |
| Behavior | Vanilla JavaScript ES6+ |
| Animations | GSAP 3.12+ + ScrollTrigger (CDN) |
| Icons | Lucide icons (CDN) |
| Fonts | Google Fonts: Inter 400–700 (UI), Cinzel 400–700 (headings), Cormorant Garamond 400–700 (body) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | HTML semântico com todas as seções: nav, hero, about, gallery, artists, shop, contact, footer |
| `css/main.css` | CSS principal com variáveis, tema, BEM blocks, responsivo, glow effects |
| `js/main.js` | Lógica de starfield particles, hamburger, animações GSAP, lightbox, filtro gallery, carrossel artistas |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0A0A12` | Fundo geral da página — preto azulado profundo |
| `--color-surface` | `#12121E` | Cards, seções, superfícies elevadas |
| `--color-primary` | `#C4A0FF` | Destaques, links, glow, acentos roxos |
| `--color-secondary` | `#7B2D8E` | Elementos secundários, hover states |
| `--color-accent` | `#FF6B9D` | CTAs, badges, acentos magenta |
| `--color-text` | `#E8E0F0` | Corpo de texto — lavanda clara |
| `--glow-primary` | `0 0 20px rgba(196,160,255,0.3)` | Glow suave para cards e elementos |

**Tema fixo escuro** — sem light mode, a experiência é noturna por definição.

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Headings (h1–h3) | Cinzel | 400, 700 | `clamp()` ajustável |
| Body text | Cormorant Garamond | 400, 700 | 1.125rem base |
| UI text (nav, buttons) | Inter | 400, 500, 600, 700 | 0.875rem–1rem |

### 4.3 Buttons / Interactive Elements

| Element | Style |
|---|---|
| CTA primary | `--color-primary` background com `--glow-primary`, texto `#0A0A12` |
| CTA secondary | Transparente com borda `--color-primary`, texto `--color-primary` |
| Nav links | Hover com glow sutil |
| Gallery filter buttons | Active state com `--color-primary`, inactive com `--color-text` opaco |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Section padding | `clamp(5rem, 10vw, 8rem)` vertical |
| Container max-width | 1200px (centrado) |
| Card gap | 24px |
| Masonry columns | 3 colunas (desktop), 2 (tablet), 1 (mobile) |

### 4.5 Focus-Visible

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: 0 0 12px rgba(196, 160, 255, 0.5);
}
```

---

## 5. Page Structure

```
NAV (fixed, transparent → solid on scroll)
  Logo (Magic Art ✦)
  Nav links (Início, Sobre, Galeria, Artistas, Shop, Contato)
  Hamburger (mobile overlay)

HERO (full viewport, 100vh, starfield particles)
  Canvas para starfield (JS particles)
  Símbolos místicos decorativos (flutuantes)
  Headline: "Onde a Magia Ganha Vida"
  Subheadline descritivo
  CTA: "Explorar Galeria"

ABOUT (section)
  Título + descrição sobre a galeria
  Destaques temáticos (ícones + textos)

GALLERY (section)
  Filtros por categoria (botões)
  Grid masonry com ilustrações
  Lightbox ao clicar (overlay + navegação)

ARTISTS (section)
  Carrossel de cards de artistas
  Nome, especialidade, avatar, link para portfólio

SHOP (section)
  Grid de produtos (prints, posters)
  Cada card: imagem, título, preço, botão de compra

CONTACT (section)
  Formulário com nome, email, mensagem
  Validação básica + submit

FOOTER
  Logo, links, copyright
  <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Components

### 6.1 Navbar

```html
<nav class="nav" role="navigation" aria-label="Navegação principal">
  <div class="nav__logo">Magic Art ✦</div>
  <ul class="nav__links">
    <li><a href="#hero">Início</a></li>
    <li><a href="#about">Sobre</a></li>
    <li><a href="#gallery">Galeria</a></li>
    <li><a href="#artists">Artistas</a></li>
    <li><a href="#shop">Shop</a></li>
    <li><a href="#contact">Contato</a></li>
  </ul>
  <button class="nav__hamburger" aria-label="Abrir menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
```

### 6.2 Hero

```html
<section class="hero" id="hero">
  <canvas class="hero__starfield" id="starfield"></canvas>
  <div class="hero__content">
    <div class="hero__symbols"><!-- mystical floating symbols --></div>
    <h1 class="hero__title">Onde a Magia Ganha Vida</h1>
    <p class="hero__subtitle">...</p>
    <a href="#gallery" class="btn btn--primary">Explorar Galeria</a>
  </div>
</section>
```

### 6.3 Gallery Masonry

```html
<section class="gallery" id="gallery">
  <div class="gallery__filters">
    <button class="gallery__filter gallery__filter--active" data-filter="all">Todas</button>
    <button class="gallery__filter" data-filter="dragons">Dragões</button>
    <button class="gallery__filter" data-filter="castles">Castelos</button>
    <button class="gallery__filter" data-filter="characters">Personagens</button>
  </div>
  <div class="gallery__masonry">
    <figure class="gallery__item" data-category="dragons">
      <img src="..." alt="..." loading="lazy" />
    </figure>
    <!-- múltiplos itens masonry -->
  </div>
</section>
```

### 6.4 Lightbox

```html
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Visualização de ilustração">
  <button class="lightbox__close" aria-label="Fechar">&times;</button>
  <button class="lightbox__prev" aria-label="Anterior">&lsaquo;</button>
  <img class="lightbox__image" src="" alt="" />
  <button class="lightbox__next" aria-label="Próximo">&rsaquo;</button>
</div>
```

### 6.5 Artists Carousel

```html
<section class="artists" id="artists">
  <div class="artists__track">
    <article class="artist-card">
      <img class="artist-card__avatar" src="..." alt="..." />
      <h3 class="artist-card__name">Nome do Artista</h3>
      <p class="artist-card__specialty">Especialidade</p>
      <a href="#" class="artist-card__link">Ver Portfólio</a>
    </article>
    <!-- múltiplos artistas -->
  </div>
  <div class="artists__dots" role="tablist">
    <button role="tab" aria-selected="true"></button>
    <!-- dots -->
  </div>
</section>
```

### 6.6 Shop Cards

```html
<section class="shop" id="shop">
  <div class="shop__grid">
    <article class="product-card">
      <img class="product-card__image" src="..." alt="..." loading="lazy" />
      <h3 class="product-card__title">Nome do Produto</h3>
      <span class="product-card__price">R$ 89,90</span>
      <button class="btn btn--secondary product-card__buy">Comprar</button>
    </article>
    <!-- múltiplos produtos -->
  </div>
</section>
```

### 6.7 Contact Form

```html
<section class="contact" id="contact">
  <form class="contact__form" novalidate>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" required aria-required="true" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required aria-required="true" />
    <label for="message">Mensagem</label>
    <textarea id="message" name="message" required aria-required="true"></textarea>
    <button type="submit" class="btn btn--primary">Enviar</button>
  </form>
</section>
```

### 6.8 Starfield Particles

- Canvas HTML5 posicionado absolutamente no hero
- Partículas estelares animadas via JS puro (requestAnimationFrame)
- Variação de tamanho, opacidade e velocidade
- Efeito parallax sutil com movimento do mouse

---

## 7. Animations

### 7.1 GSAP Setup

```js
gsap.registerPlugin(ScrollTrigger);
```

All animations registered on `DOMContentLoaded`.

### 7.2 Hero Timeline

| Element | From | Duration | Easing |
|---|---|---|---|
| `.hero__title` | y: 80, opacity: 0 | 1.2s | `power3.out` |
| `.hero__subtitle` | y: 40, opacity: 0 | 1s | `power3.out` (delay 0.3s) |
| `.hero__cta` | y: 30, opacity: 0 | 0.8s | `power3.out` (delay 0.6s) |
| `.hero__symbols` | scale: 0, rotation: 45 | 1.5s | `elastic.out(1, 0.5)` (stagger) |

### 7.3 Scroll-Triggered Reveals

| Element | Trigger | Animation |
|---|---|---|
| `.about` content | scroll into view | fadeIn + slideUp |
| `.gallery__item` (masonry) | scroll into view | stagger: 0.1s, scale: 0.9 → 1, opacity: 0 → 1 |
| `.artist-card` | scroll into view | stagger: 0.15s, x: -60 → 0, opacity: 0 → 1 |
| `.product-card` | scroll into view | stagger: 0.1s, y: 60 → 0, opacity: 0 → 1 |
| `.contact` form | scroll into view | fadeIn + slideUp |

### 7.4 Floating Elements Animation

```js
gsap.to('.hero__symbols', {
  y: 'random(-20, 20)',
  rotation: 'random(-10, 10)',
  duration: 'random(4, 8)',
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});
```

### 7.5 Parallax on Scroll

```js
gsap.to('.hero__starfield', {
  y: 200,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});
```

### 7.6 Lightbox Animation

```js
gsap.fromTo('.lightbox', { opacity: 0, scale: 0.95 }, {
  opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out'
});
```

### 7.7 Gallery Filter Animation

```js
// GSAP stagger out/in on filter change
gsap.to('.gallery__item:not(.gallery__item--visible)', { scale: 0.8, opacity: 0, duration: 0.3 });
gsap.fromTo('.gallery__item--visible', { scale: 0.8, opacity: 0 }, {
  scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(1.2)'
});
```

### 7.8 Performance Optimizations

```js
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 250);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) gsap.globalTimeline.pause();
  else gsap.globalTimeline.resume();
});
```

### 7.9 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .hero__starfield { display: none; }
}
```

---

## 8. Responsive

### 8.1 Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 1024px | Layout desktop: masonry 3 colunas, nav horizontal |
| 768px–1024px | Grid 2 colunas, fontes reduzidas, nav horizontal |
| < 768px | Grid 1 coluna, hamburger menu, seções empilhadas |

### 8.2 Mobile Nav

- Hamburger toggle com overlay fullscreen
- Nav links em coluna, centralizados
- `aria-expanded` controlado por JS
- Animação de entrada com GSAP (slide + fade)

### 8.3 Mobile Adaptations

| Element | Mobile |
|---|---|
| Hero title | `font-size: clamp(2rem, 10vw, 3.5rem)` |
| Gallery masonry | 1 coluna |
| Artists carousel | 1 card visível por vez |
| Shop grid | 1–2 colunas |
| Starfield particles | Menor densidade de partículas |
| Hero symbols | Menores ou ocultos em telas pequenas |

---

## 9. Assets

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |

### Fonts

| Font | Source | Usage |
|---|---|---|
| Inter (400–700) | Google Fonts CDN | UI text, nav, buttons |
| Cinzel (400–700) | Google Fonts CDN | Headings (h1–h3) |
| Cormorant Garamond (400–700) | Google Fonts CDN | Body text |

### Icons

| Asset | Source | Usage |
|---|---|---|
| Lucide icons | CDN | Feature icons, nav, decorativos |

---

## 10. Accessibility

### Implemented

- **Skip link** — `href="#main-content"`, visible on focus
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **ARIA labels** — `aria-label` on nav, hamburger, lightbox, carousel dots
- **`aria-expanded`** — on hamburger button
- **`aria-selected`** — on artist carousel dots (role="tab")
- **`aria-required`** — on form inputs
- **`role="dialog"` + `aria-modal`** — on lightbox
- **`role="tablist"` + `role="tab"`** — on carousel dots container
- **`role="region"`** — on collapsible elements
- **Focus-visible** — custom `:focus-visible` outline with glow
- **Reduced motion** — `prefers-reduced-motion: reduce` media query
- **Alt text** — all images have appropriate `alt`
- **Heading hierarchy** — h1 → h2 → h3 structured

### Missing / Improvements

- Lightbox keyboard navigation (arrow keys)
- Form validation feedback via `aria-live` region
- Pause carousel on focus/hover

---

## 11. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| GPU acceleration | `will-change: transform` on animated elements |
| Debounced resize | ScrollTrigger.refresh() debounced at 250ms |
| Visibility API | GSAP pauses when tab hidden |
| CDN preloading | `<link rel="preload">` for GSAP CDN |
| DNS prefetch | `dns-prefetch` for CDN + Google Fonts |
| Preconnect | `preconnect` for fonts.gstatic.com |
| Font display | `font-display: swap` on @font-face |
| Reduced motion | `prefers-reduced-motion` disables animations |
| Lazy loading | `loading="lazy"` on gallery and product images |
| Canvas particles | requestAnimationFrame com densidade adaptativa |

### Considerations

- GSAP 3.12+ + ScrollTrigger via CDN (~50KB)
- Lucide icons via CDN — tree-shaken by usage
- Google Fonts — Inter + Cinzel + Cormorant Garamond (~60KB combined)
- Starfield canvas — performance impact on low-end devices; reduced density on mobile
- No heavy frameworks, no build tools

---

## 12. UX Principles

- **Atmosfera Imersiva** — starfield particles + dark palette + glow effects criam entrada mágica
- **Scroll-Driven Narrative** — seções revelam conteúdo progressivamente
- **Gallery Experience** — masonry com lightbox + filtros para navegação visual
- **Social Proof (Artists)** — carrossel destacando artistas com link para portfólio
- **E-commerce (Shop)** — vitrine de produtos com cards e preços
- **Mobile First** — hamburger overlay, grid adaptável, fontes fluidas
- **Micro-Interações** — stagger reveals, hover glow, floating symbols, parallax
- **Performance Conscious** — will-change, visibility pause, debounce, reduced motion
- **Back Link** — footer sempre retorna ao showcase principal

---

## 13. Observations

- **No build tools**: HTML+CSS+JS puro, fontes via Google Fonts CDN, Lucide via CDN
- **Tema fixo escuro**: sem light mode — a experiência noturna é parte da identidade
- **Dark fantasy aesthetic**: paleta preta/roxa com glow magenta, tipografia serifada literária
- **Starfield particles**: canvas HTML5 com JS puro (requestAnimationFrame), parallax com mouse
- **BEM consistente**: `.hero__title`, `.gallery__item`, `.artist-card__name`, `.product-card__price`
- **GSAP ScrollTrigger**: reveals progressivos com stagger em masonry, artistas e produtos
- **Lightbox custom**: overlay com navegação entre imagens, animado com GSAP
- **Filtro de galeria**: botões de categoria com animação stagger in/out
- **Carrossel de artistas**: JS/GSAP manual com dots (sem Swiper/Glide)
- **Hamburger overlay**: GSAP anima entrada/saída do menu mobile
- **Footer back link**: `<a href="../../index.html">← Voltar ao Showcase</a>` presente
- **Formulário**: validação HTML5 + `aria-required`, submit com feedback visual
- **Reduced motion**: media query que desativa animações e oculta starfield

---

## 14. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json`:
   ```json
   {
     "id": "16",
     "title": "MAGIC ART",
     "category": "landing",
     "href": "projects/exemplo-16/index.html",
     "preview": "projects/exemplo-16/preview.png",
     "description": "Galeria de arte fantástica com temática mágica, showcase de ilustrações e animações imersivas.",
     "tags": ["HTML5", "CSS3", "JAVASCRIPT"]
   }
   ```

2. Preview image at `projects/exemplo-16/preview.png`

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Magic Art ✦ Galeria de Arte Fantástica**
> conforme projetada, documentada de forma que um designer consiga replicar o
> layout no Figma e um desenvolvedor consiga implementar ou modificar a
> interface — sem necessidade de briefing adicional.
