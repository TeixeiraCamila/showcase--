# Card Stacking Animation — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **Card Stacking Animation**, showcase interativo de
> empilhamento de cards com GSAP.

---

## 1. Project Overview

### Project Name

```
Card Stacking Animation
```

### Category

```
animation
```

### Description

```
Landing page interativa com animação inovadora de empilhamento de cards usando GSAP.
```

### Target Audience

```
Developers, designers, and animation enthusiasts interested in creative GSAP
scroll-driven interactions and stacking card mechanics.
```

### Main Goal

```
Showcase — Demonstrar uma técnica inovadora de empilhamento de cards com
ScrollTrigger, pinning progressivo e animações de entrada com timeline.
```

### Brand Voice

- **Experimental** — animação como protagonista, cards como meio narrativo
- **Minimalista** — poucos textos, foco na experiência visual e interativa
- **Moderna** — fonte script, SVG orgânicos, paleta terrosa
- **Tátil** — elementos draggable, cards que se revelam ao scroll
- **Confiante** — dark green sólido, tipografia ousada, planos de fundo contrastantes

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<main>`, `<footer>`) |
| Styling | CSS3 + BEM methodology (partial) |
| Behavior | Vanilla JavaScript ES6+ (DOMContentLoaded) |
| Animations | GSAP 3.14.1 + ScrollTrigger + Draggable + InertiaPlugin (CDN) |
| Utility | Tailwind CSS v4 (CDN, deferred) |
| SVGs | Inline blobs (haikei-style) + decorative icons |
| Fonts | Story Script (local .ttf) + sans-serif system fallback |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Semantic HTML: header SVG blob, floating draggable icons, card stacking main, footer CTA |
| `css/style.css` | Global reset, body/header/footer base, card stacking layout (sticky + pin), will-change optimizations, @imports |
| `css/header.css` | Header floating book positions, z-index layering hover labels |
| `css/cards.css` | Card color variants, particle animations (stars), checkerboard pattern, ivy SVGs |
| `js/script.js` | GSAP timeline (blob + title entrance), Draggable books, ScrollTrigger card stacking with progressive pin, resize debounce, visibility pause |
| `assets/blob-haikei.svg` | Footer decorative blob shape |
| `assets/favicon.svg` | SVG favicon |
| `assets/favicon.png` | PNG favicon fallback |

---

## 4. Visual Identity

### 4.1 Color Palette

All colors are hardcoded throughout CSS (no CSS custom properties).

| Token | Hex | Usage |
|---|---|---|
| Dark green | `#1f453b` | Header and footer backgrounds, hero SVG rect fill |
| Sage | `#5F7A6F` | Hero SVG blob fill |
| Yellow | `rgb(252, 238, 169)` | Card 1 background (sun/particle theme) |
| Green | `#294e44` | Card 2 background (ivy theme) |
| Blue | `#8bb1fc` | Card 3 background |
| Grey | `#ccc` | Card 4 background (checkerboard) |
| Coral | `#febdaa` | Card 5 background |
| Sage light | `#b2c9ab` | Card 6 background |
| White | `#ffffff` | Hero title, card text on dark |
| Near-black | `rgba(0, 0, 0, 0.2)` | Card inner text (faint) |

**Note**: No light/dark mode — fixed dark theme with dark green header/footer.

### 4.2 Typography

| Element | Font | Weight | Size | Letter-spacing |
|---|---|---|---|---|
| Hero title (h1) | sans-serif (`text-left`) + Story Script (`text-right`) | 400 (Story Script) | `clamp(68px, 14vw, 15vw)` | -0.04em (left) |
| Card content | sans-serif (body fallback) | 700 | 48px | — |
| Card body text | sans-serif (body fallback) | 400 | inherit | — |
| Footer CTA (h2) | sans-serif (body fallback) | 700 | Tailwind `text-6xl` | — |
| Header hover label | sans-serif (body fallback) | 400 | inherit | — |

**Font Face** (local):
```css
@font-face {
  font-family: 'Story Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../font/StoryScript-Regular.ttf') format('truetype');
}
```

Hero title uses a two-line split: `"Landing"` (sans-serif, letter-spacing compressed) + `"Page"` (Story Script cursive).

### 4.3 Buttons / Interactive Elements

There are no traditional buttons. Interactions are:
- **Draggable books**: SVG icons in the header are freely draggable with InertiaPlugin — user can grab and toss them within `.header` bounds
- **CTA hover**: books show `"grab me"` label via `::after` pseudo-element on hover (opacity 0 → 1)

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Header | `h-screen`, `flex items-center justify-center` |
| Card item | `height: 100vh`, `padding-top: 5vh`, `position: sticky; top: 0` |
| Card inner | `width: 95%`, `height: 80vh`, `border-radius: 60px` |
| Card content | `max-width: 80%`, centered flex |
| Footer | `h-screen`, `flex items-center justify-center` |
| Footer SVG | absolute, same dimensions as header blob |

### 4.5 Card Variants

| Class | Background | Special |
|---|---|---|
| `.is--yellow` | `rgb(252, 238, 169)` | 10 `<li>` particles with `@keyframes leftright + updown + blinking` — star-like light effects |
| `.is--green` | `#294e44` | `::after` ivy-1.svg background (50% width, positioned top-left), white text |
| `.is--blue` | `#8bb1fc` | Solid blue |
| `.is--grey` | `#ccc` | Checkerboard pattern via `repeating-linear-gradient` + `background-blend-mode: difference` |
| `.is--coral` | `#febdaa` | Solid coral |
| `.is--sage` | `#b2c9ab` | Solid sage |

### 4.6 Focus-Visible

```css
.sr-only:focus:not-sr-only {
  /* Skip link visible on focus */
}
```
No custom `:focus-visible` styling elsewhere — relies on browser defaults.

---

## 5. Page Structure

```
HEADER (full viewport, dark green #1f453b)
  SVG blob (haikei-style organic shape, sage #5F7A6F, centered)
  Floating icons container (.imgs-container):
    8 draggable SVG book icons (b-1.svg through b-8.svg) at scattered positions
    Each has hover label "grab me" (::after)
  h1 split title:
    "Landing" (sans-serif, left-aligned)
    "Page" (Story Script cursive, right-aligned)

MAIN (card stacking)
  6 card items (.card-item) — each full viewport, position sticky top 0:
    Card 1 (yellow): Star particle animation (10 <li> elements)
    Card 2 (green): Ivy SVG background (ivy-1.svg) + body text
    Card 3 (blue): Body text placeholder
    Card 4 (grey): Checkerboard pattern (CSS repeating gradients)
    Card 5 (coral): Solid color
    Card 6 (sage): Solid color

FOOTER (full viewport, dark green #1f453b)
  SVG blob (same as header, centered)
  h2: "Pronto para começar?" (white, text-6xl, font-bold, z-10)
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Card Stacking Animation |
| Title | Card Stacking Animation |
| Meta description | Landing page interativa com animação inovadora de empilhamento de cards usando GSAP. Showcase de animações web modernas. |
| Author | Camila Cristina Teixeira |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Hero (h1) | `Landing` / `Page` |
| Card 2 (text) | `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores dolores facere officiis.` |
| Card 3 (text) | `03 Lorem ipsum dolor sit amet consectetur adipisicing elit.` |
| Footer (h2) | `Pronto para começar?` |

### 6.3 Icons / SVGs

| Asset | Location | Type |
|---|---|---|
| `b-1.svg` → `b-8.svg` | Header floating books | SVG + PNG (dual format) |
| `ivy-1.svg` | Card 2 background decoration | SVG via `::after` |
| `blob-haikei.svg` | Not directly referenced in HTML (decorative asset) | SVG |
| Inline blob | Header + footer | `<path>` with organic bezier curve |

---

## 7. Components

### 7.1 Header Blob SVG

```html
<svg class="absolute" id="visual" viewBox="0 0 900 600" width="900" height="600">
  <rect x="0" y="0" width="900" height="600" fill="#1f453b"></rect>
  <g transform="translate(426.08 271.79)">
    <path d="M151.1 -143.8..." fill="#5F7A6F"></path>
  </g>
</svg>
```

- Dark green `#1f453b` background rect
- Sage `#5F7A6F` organic blob path, centered via translate
- 900×600 viewBox, responsive via absolute positioning
- GPU accelerated: `transform: translateZ(0); backface-visibility: hidden`

### 7.2 Floating Draggable Books

```html
<div class="imgs-container">
  <div><img src="./assets/header/b-1.svg" alt="" height="160" width="160" /></div>
  <!-- 8 books total, each at unique absolute position -->
</div>
```

- Each book positioned absolutely via nth-child selectors (top/left scattered)
- `z-index: 1` with hover `::after` label "grab me" (opacity 0→1)
- GSAP Draggable with `bounds: ".header"` and `inertia: true` — users can grab and toss
- GSAP timeline entrance: scale 3→1, opacity 0→1, stagger per item

### 7.3 Hero Title

```html
<h1>
  <span class="text-left">Landing </span>
  <span class="text-right"> Page </span>
</h1>
```

- Two-line layout via `display: flex; flex-direction: column; z-index: 100`
- Left span: sans-serif, `letter-spacing: -0.04em`
- Right span: Story Script cursive
- Color: white
- GSAP entrance: x: -60 / +60, opacity 0→1, `back.out(1.7)` easing, stagger 0.1s

### 7.4 Card Stacking

```html
<div class="card-item">
  <div class="card-inner is--yellow">
    <ul>
      <li></li> <!-- 10 particles -->
    </ul>
  </div>
</div>
<!-- 6 card-items total -->
```

- `.card-item`: `height: 100vh`, `position: sticky; top: 0`
- `.card-inner`: `width: 95%; height: 80vh; border-radius: 60px`
- GSAP ScrollTrigger pins each card at `top top` progressively
- Each subsequent card offsets `y: 30 * index` via `scrub: 1`
- Performance: `will-change: transform; transform: translateZ(0); backface-visibility: hidden`

### 7.5 Star Particles (Card 1)

- 10 `<li>` elements with CSS-only animations:
  - `@keyframes leftright`: horizontal drift (80% → 95% → 10% → 60% → 70% → 5% → 80%)
  - `@keyframes updown`: vertical drift (10px → 90% → 50% → 95% → 10px)
  - `@keyframes blinking`: glow box-shadow with radius oscillation (5px → 0 → 5px)
- Each `<li>` has unique animation-delay and animation-duration (ranges 50s–90s)
- Colors: yellow radial gradients with warm golden glow shadows

### 7.6 Ivy Decoration (Card 2)

```css
.is--green::after {
  content: '';
  width: 50%;
  height: 100%;
  background-image: url(../assets/cards/ivy-1.svg);
  background-size: 50%;
  background-repeat: no-repeat;
  position: absolute;
  top: 24px;
  left: 11px;
}
```

- Semi-transparent ivy SVG overlay on the green card
- `z-index: 1`, positioned top-left

### 7.7 Checkerboard Pattern (Card 4)

```css
.is--grey {
  --tamanho-quadrado: 50px;
  background-image:
    repeating-linear-gradient(to bottom, #fff 0, #fff 50px, #ccc 50px, #ccc 100px),
    repeating-linear-gradient(to right, #ccc 0, #ccc 50px, #fff 50px, #fff 100px);
  background-blend-mode: difference;
}
```

- Pure CSS checkerboard using overlapping repeating gradients with `background-blend-mode: difference`
- `--tamanho-quadrado` custom property controls square size

### 7.8 Footer CTA

```html
<footer class="relative h-screen flex items-center justify-center">
  <svg class="absolute" id="visual" viewBox="0 0 900 600" ...>
    <!-- Same blob as header -->
  </svg>
  <h2 class="text-white relative z-10 text-6xl font-bold">
    Pronto para começar?
  </h2>
</footer>
```

- Full viewport dark green section with matching blob SVG
- Tailwind classes: `text-6xl font-bold`, white text, `z-10` above blob

---

## 8. Animations

### 8.1 GSAP Setup

```js
gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);
```

All animations registered on `DOMContentLoaded`.

### 8.2 Header Entrance Timeline

| Element | From | Duration | Delay | Easing |
|---|---|---|---|---|
| Header blob SVG | scale: 3, opacity: 0 | 2s | 0 | `power3.out` |
| `.text-left` | x: -60, opacity: 0 | 1s | 0.8s | `back.out(1.7)` |
| `.text-right` | x: 60, opacity: 0 | 1s | 0.9s | `back.out(1.7)` |
| Each floating book (×8) | scale: 3, opacity: 0 | 0.4s | staggered | `power3.out` |

Books animate sequentially in the same timeline, each with its own `.from()` call.

### 8.3 Draggable Books

```js
Draggable.create(item, {
  bounds: ".header",
  inertia: true
});
```

- Each book (`.imgs-container div`) is independently draggable
- Constrained to `.header` boundaries
- InertiaPlugin enables throw/fling physics on release

### 8.4 Card Stacking (ScrollTrigger)

```
For each .card-item (index 0–5):
  ScrollTrigger.create({
    trigger: item,
    start: 'top top',
    end: `+=${(cardItems.length - index) * window.innerHeight}`,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1
  })

  If index > 0:
    gsap.to(card, {
      y: 30 * index,
      scrollTrigger: { trigger: item, start: 'top bottom', end: 'top top', scrub: 1 }
    })
```

- Each card pins at `top top` with progressive pin duration
- Cards stack by translating `y: 30px × index` during the scrub phase
- `anticipatePin: 1` and `fastScrollEnd: true` for smooth scrolling
- `invalidateOnRefresh: true` recalculates on resize
- `pinSpacing: false` prevents artificial spacing between pins

### 8.5 CSS-Only Star Animation

| Keyframe | Values | Duration |
|---|---|---|
| `leftright` | 80% → 95% → 10% → 60% → 70% → 5% → 80% | 50–90s (per particle) |
| `updown` | 10px → 90% → 50% → 95% → 10px | 40–88s (per particle) |
| `blinking` | box-shadow glow oscillation, width/height 0→5→0 | 0.01s (instant) |

### 8.6 Performance Optimizations

```js
// Resize debounce
window.addEventListener('resize', () => {
  if (window.innerWidth !== lastWidth) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      lastWidth = window.innerWidth;
    }, 250);
  }
});

// Visibility pause
document.addEventListener('visibilitychange', () => {
  if (document.hidden) gsap.globalTimeline.pause();
  else gsap.globalTimeline.resume();
});

// will-change cleanup after 3s
setTimeout(() => {
  document.querySelectorAll('.card-inner').forEach(card => {
    if (!card.closest('.card-item').classList.contains('animating')) {
      card.style.willChange = 'auto';
    }
  });
}, 3000);
```

### 8.7 Reduced Motion

Not explicitly implemented — no `@media (prefers-reduced-motion: reduce)` block.

---

## 9. Responsive

### 9.1 Breakpoint Behavior

| Element | Behavior |
|---|---|
| Header title | `clamp(68px, 14vw, 15vw)` — scales fluidly |
| Card inner | `width: 95%` — always fits viewport |
| Card border-radius | Fixed 60px — no mobile reduction |
| Star particles | Always visible — no mobile override |
| Footer h2 | Tailwind `text-6xl` — no custom responsive override |

The project is primarily desktop-oriented with no explicit responsive breakpoints or mobile menu. All images use fixed pixel dimensions with no `max-width: 100%` constraints outside of the card wrapper.

### 9.2 Implicit Behavior

- Cards stack vertically via viewport-height units — adapts to any screen height
- No hamburger menu, no mobile-specific layout changes
- Tailwind CDN loaded but used only for footer h2 styling (`text-white`, `text-6xl`, `font-bold`)

---

## 10. Assets

### 10.1 Images / SVGs

| File | Usage |
|---|---|
| `assets/header/b-1.svg` → `b-8.svg` | 8 floating book SVGs in header |
| `assets/header/b-1.png` → `b-8.png` | PNG fallback versions for each book |
| `assets/cards/ivy-1.svg` | Decorative ivy overlay on Card 2 (green) |
| `assets/cards/ivy-2.svg` | Not referenced in HTML — possibly unused |
| `assets/blob-haikei.svg` | Not referenced in HTML — possibly reserved |
| `assets/favicon.svg` | SVG favicon |
| `assets/favicon.png` | PNG favicon fallback |
| `preview.png` | Gallery card preview for the showcase |

### 10.2 Fonts

| File | Format | Usage |
|---|---|---|
| `font/StoryScript-Regular.ttf` | TrueType | Hero title right span ("Page") |
| `font/OFL.txt` | Text | SIL Open Font License |

---

## 11. Accessibility

### Implemented

- **Skip link** — `href="#main-content"`, hidden by default, visible on focus:
  ```html
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute ...">
    Skip to main content
  </a>
  ```
- **Semantic HTML** — `<header>` with `role="banner"`, `<main>` with `role="main"`, `<footer>`
- **Alt text** — all images have `alt=""` (decorative; appropriate for non-informational SVGs)
- **Landmarks** — `role="banner"` on header, `role="main"` on main
- **Performance hints** — `dns-prefetch`, `preconnect`, `preload` for GSAP CDN
- **JSON-LD** — structured data for `CreativeWork` with author and description

### Missing / Improvements Needed

- **Focus states** — only skip link has custom focus styling; interactive draggable books have no focus indicator
- **Reduced motion** — no `prefers-reduced-motion` media query (GSAP animations and CSS particles would benefit)
- **`aria-expanded`** — not applicable (no menu toggles)
- **ARIA labels** — no `aria-label` on header or interactive elements beyond default skip link
- **Heading hierarchy** — h1 present; no h2/h3 in sections (cards use divs, footer uses h2)
- **Keyboard navigation** — draggable books are not keyboard-accessible (no `tabindex`, no `role`)
- **Dark mode** — not implemented (showcase has dark/light toggle)
- **Touch support** — Draggable works on touch devices but `cursor: grab` UX may not translate well
- **Form** — no forms present

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| GPU acceleration | `will-change: transform; transform: translateZ(0); backface-visibility: hidden` on card-inner and SVG |
| Debounced resize | ScrollTrigger.refresh() debounced at 250ms |
| Visibility API | GSAP global timeline pauses when tab is hidden |
| will-change cleanup | Removed after 3s timeout on non-animating cards |
| CDN preloading | `<link rel="preload">` for GSAP CDN |
| DNS prefetch | `dns-prefetch` for CDN + Google Fonts |
| Preconnect | `preconnect` for fonts.gstatic.com |
| Image formats | SVG + PNG dual format for book icons (SVG preferred) |
| Font display | `font-display: swap` on @font-face |

### Considerations

- GSAP 3.14.1 with ScrollTrigger + Draggable + InertiaPlugin adds ~90KB+ — heavy for a showcase
- Tailwind CDN v4 adds ~30KB — only used for 3 classes in footer
- Star particle animation runs 10 concurrent CSS animations — potential perf impact on low-end devices
- No lazy loading on images (`loading="lazy"` not set)
- Images lack explicit `max-width: 100%` on responsive media queries
- No critical CSS inlining

---

## 13. UX Principles

- **Scroll-Driven Narrative** — cards stack and pin as user scrolls, creating a reveal-based storytelling mechanic
- **Playful Interaction** — draggable books invite exploration and set a tactile tone before the stacking experience
- **One Thing at a Time** — full-viewport sections, no competing elements
- **Visual Cohesion** — dark green framing (header + footer) bookends the content; card colors provide rhythmic variety
- **Minimal Text** — content is secondary to the animation mechanic; cards use placeholders or minimal copy
- **Performance Transparency** — will-change hints, debounce, and visibility pause show intentional engineering
- **No Navigation** — linear scroll-only experience with no navbar or menu; footer is a pure CTA

---

## 14. Observations

- **No build tools**: HTML+CSS+JS puro, fontes via Google Fonts CDN e local .ttf
- **No dark/light mode**: tema fixo escuro (diferente do showcase principal que tem toggle)
- **No BEM strict**: classes como `is--yellow`, `text-left`, `text-right`, `imgs-container` — BEM naming inconsistente
- **Tailwind para 3 classes**: `text-white text-6xl font-bold` no footer — poderia ser CSS puro
- **Story Script local**: fonte .ttf no projeto (não via CDN) — diferente dos outros projetos que usam Google Fonts
- **GSAP Draggable + InertiaPlugin**: único projeto no showcase com elementos draggable com física de arremesso
- **Card stacking via pin**: técnica de `ScrollTrigger.create({ pin: true })` com `y: 30 * index` — sem bibliotecas auxiliares
- **Star particles CSS-only**: 10 `<li>` com animações CSS combinadas (leftright + updown + blinking) — sem JS
- **Checkerboard CSS**: `background-blend-mode: difference` com `repeating-linear-gradient` — técnica avançada de CSS puro
- **Sem navegação**: sem navbar, sem hamburger, sem links internos — experiência linear
- **ivy-2.svg não referenciado**: presente em `assets/cards/` mas não usado no HTML
- **blob-haikei.svg não referenciado**: presente em `assets/` mas não usado no HTML — substituído por SVG inline
- **Footer back link ausente**: `<a href="../../index.html">← Voltar ao Showcase</a>` não está presente — precisa adicionar conforme AGENTS.md

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "07",
     "title": "CARD STACKING ANIMATION",
     "category": "animation",
     "href": "projects/exemplo-07--card-stacking/index.html",
     "preview": "projects/exemplo-07--card-stacking/preview.png",
     "description": "Landing page interativa com animação inovadora de empilhamento de cards usando GSAP.",
     "tags": ["HTML5", "CSS3", "GSAP"]
   }
   ```

2. Preview image at `projects/exemplo-07--card-stacking/preview.png` (already present)

3. Footer link back needs adding:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Card Stacking Animation** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
