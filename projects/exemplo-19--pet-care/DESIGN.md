# The Void — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **The Void**, landing page com temática espacial e design
> escuro imersivo.

---

## 1. Project Overview

### Project Name

```
The Void | Landing Page Espacial
```

### Category

```
dark-space
```

### Description

```
Landing page com temática espacial e design escuro imersivo.
```

### Target Audience

```
Desenvolvedores, designers e entusiastas de ficção científica interessados em
landing pages imersivas com temática espacial, animações de partículas,
efeitos neon e narrativa visual escura.
```

### Main Goal

```
Showcase — Demonstrar uma landing page completa com canvas starfield particles,
efeitos de glow, scroll-triggered parallax, cards com brilho neon, timeline
animada, formulário de contato e glass-morphism UI em tema espacial escuro.
```

### Brand Voice

- **Misterioso** — deep space blacks, purple/cyan neon glow, atmosfera cósmica
- **Imersivo** — animações de partículas que reagem ao mouse, parallax profundo
- **Futurista** — tipografia sci-fi (Orbitron), GLSL-like visual language
- **Épico** — seções dramáticas com reveals impactantes e stagger
- **Premium** — glass-morphism, glow sutis, micro-interações responsivas

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 + BEM methodology + CSS custom properties |
| Behavior | Vanilla JavaScript ES6+ (DOMContentLoaded) |
| Animations | GSAP 3.12.5 + ScrollTrigger (CDN) |
| Icons | Lucide icons (CDN) |
| Fonts | Google Fonts: Inter 400–800 (body) + Orbitron 400–900 (headings) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | HTML semântico com todas as seções: nav, hero, about, features, technology, timeline, team, contact, footer |
| `css/main.css` | CSS principal com variáveis dark, tema espacial, BEM blocks, animações, responsivo |
| `js/main.js` | Lógica de starfield particles (canvas), hamburger, animações GSAP, parallax, timeline reveals |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#050508` | Fundo geral da página — deep space black |
| `--color-surface` | `#0A0A14` | Cards, seções, superfícies elevadas |
| `--color-primary` | `#6C5CE7` | Headings, acentos principais, glow primário |
| `--color-secondary` | `#00D2D3` | Subtítulos, metadados, destaques cyan |
| `--color-accent` | `#FF6B6B` | CTAs, links, bordas decorativas, alerts |
| `--color-text` | `#E8E8F0` | Corpo de texto |
| `--glow-primary` | `0 0 30px rgba(108,92,231,0.4)` | Glow de cards e elementos |

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Headings (h1–h3) | Orbitron | 400, 500, 700, 900 | `clamp()` ajustável |
| Body | Inter | 400, 500, 600, 700, 800 | 1rem base |
| Nav links | Orbitron | 500 | 0.875rem |
| Buttons | Orbitron | 600 | 0.9375rem |
| Code/mono elements | Inter | 400 | 0.875rem |

### 4.3 Buttons / Interactive Elements

| Element | Style |
|---|---|
| CTA primary | `--color-primary` background, `--color-text` text, glow shadow, rounded |
| CTA secondary | Transparente com borda `--color-secondary`, texto `--color-secondary` |
| Nav links | Hover com glow effect e underline animado |
| Feature cards | Hover com glow intensificado e translateY |
| Team cards | Hover com overlay e info reveal |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Section padding | `clamp(4rem, 8vw, 8rem)` vertical |
| Container max-width | 1200px (centrado) |
| Card gap | 24px |
| Grid columns | 3 colunas (features), 4 colunas (team) |

### 4.5 Glass-Morphism Base

```css
.glass {
  background: rgba(10, 10, 20, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(108, 92, 231, 0.15);
}
```

### 4.6 Focus-Visible

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  box-shadow: var(--glow-primary);
}
```

---

## 5. Page Structure

```
NAV (fixed, glass on scroll)
  Logo (THE VOID)
  Nav links (Home, About, Features, Technology, Timeline, Team, Contact)
  Hamburger (mobile overlay)

HERO (fullscreen, min-height 100vh)
  Canvas starfield (partículas com mouse interaction)
  Headline: "EMBRACE THE VOID"
  Subheadline: "Beyond the stars lies the infinite"
  CTA: "Explore" (primary, glow effect)

ABOUT (section)
  Título + descrição sobre o vácuo/o infinito
  Destaques numéricos (contadores animados com GSAP)

FEATURES (section)
  3 cards em grid com glow nas bordas e stagger reveal
  Cada card: ícone Lucide, título sci-fi, descrição

TECHNOLOGY (section)
  Parallax background + texto em camadas
  Indicadores de tecnologia com barras animadas

TIMELINE (section)
  Timeline vertical com milestones
  Entrada com stagger conforme scroll

TEAM (section)
  4 cards de membros em grid
  Avatar, nome, role, social links

CONTACT (section)
  Formulário com input glow on focus
  Nome, email, mensagem, submit

FOOTER
  Logo, links, copyright
  <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Components

### 6.1 Navbar

```html
<nav class="nav" role="navigation" aria-label="Navegação principal">
  <div class="nav__logo">THE VOID</div>
  <ul class="nav__links">
    <li><a href="#hero">Home</a></li>
    <!-- About, Features, Technology, Timeline, Team, Contact -->
  </ul>
  <button class="nav__hamburger" aria-label="Abrir menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
```

### 6.2 Hero

```html
<section class="hero" id="hero">
  <canvas class="hero__canvas" role="presentation" aria-hidden="true"></canvas>
  <div class="hero__content">
    <h1 class="hero__title">EMBRACE THE VOID</h1>
    <p class="hero__subtitle">Beyond the stars lies the infinite</p>
    <a href="#features" class="btn btn--primary">Explore</a>
  </div>
</section>
```

### 6.3 Features Cards

```html
<section class="features" id="features">
  <div class="features__grid">
    <article class="feature-card" data-delay="0">
      <i data-lucide="infinity" class="feature-card__icon"></i>
      <h3 class="feature-card__title">Infinite Space</h3>
      <p class="feature-card__desc">Descrição</p>
    </article>
    <!-- 3 cards total -->
  </div>
</section>
```

### 6.4 Technology Section

```html
<section class="technology" id="technology">
  <div class="technology__parallax" data-speed="0.5">
    <!-- Camada de fundo com parallax -->
  </div>
  <div class="technology__content">
    <h2 class="technology__title">Tecnologia</h2>
    <div class="technology__bars">
      <div class="tech-bar">
        <span class="tech-bar__label">Propulsão</span>
        <div class="tech-bar__track">
          <div class="tech-bar__fill" data-width="90%"></div>
        </div>
      </div>
      <!-- múltiplas barras -->
    </div>
  </div>
</section>
```

### 6.5 Timeline

```html
<section class="timeline" id="timeline">
  <div class="timeline__container">
    <div class="timeline__item">
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <h3 class="timeline__year">2147</h3>
        <p class="timeline__desc">Marco histórico...</p>
      </div>
    </div>
    <!-- múltiplos itens -->
  </div>
</section>
```

### 6.6 Team Cards

```html
<section class="team" id="team">
  <div class="team__grid">
    <article class="team-card">
      <div class="team-card__avatar"><!-- img --></div>
      <h3 class="team-card__name">Nome</h3>
      <p class="team-card__role">Role</p>
      <div class="team-card__social">
        <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
      </div>
    </article>
    <!-- 4 cards -->
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

### 6.8 Starfield Particle System

- Canvas element posicionado atrás do hero content
- 150–300 partículas (estrelas) com posições Z simuladas
- Mouse move: parallax sutil nas partículas
- Animação contínua via requestAnimationFrame
- Partículas brancas + algumas coloridas (purple/cyan)

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
| `.hero__title` | y: 100, opacity: 0, scale: 0.9 | 1.2s | `power4.out` |
| `.hero__subtitle` | y: 50, opacity: 0 | 1s | `power3.out` (delay 0.3s) |
| `.hero__cta` | y: 30, opacity: 0 | 0.8s | `power3.out` (delay 0.6s) |

### 7.3 Scroll-Triggered Reveals

| Element | Trigger | Animation |
|---|---|---|
| `.about` content | scroll into view | fadeIn + slideUp |
| `.feature-card` (×3) | scroll into view | stagger: 0.15s, y: 80 → 0, opacity: 0 → 1 |
| `.technology` parallax | scroll progress | y: based on data-speed |
| `.timeline__item` | scroll into view | stagger: 0.2s, x: -60 → 0, opacity |
| `.team-card` (×4) | scroll into view | stagger: 0.1s, scale: 0.8 → 1 |
| `.contact` | scroll into view | fadeIn |

### 7.4 Floating Cards Animation

```js
gsap.to('.feature-card', {
  y: 'random(-10, 10)',
  duration: 'random(3, 5)',
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});
```

### 7.5 Counters Animation

```js
gsap.to(counter, {
  textContent: targetValue,
  duration: 2,
  ease: 'power2.out',
  snap: { textContent: 1 },
  scrollTrigger: { trigger: counter, start: 'top 80%' }
});
```

### 7.6 Navbar Glass on Scroll

```js
ScrollTrigger.create({
  trigger: document.body,
  start: 'top -80px',
  onEnter: () => nav.classList.add('nav--glass'),
  onLeaveBack: () => nav.classList.remove('nav--glass')
});
```

### 7.7 Performance Optimizations

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

### 7.8 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .hero__canvas {
    display: none;
  }
}
```

---

## 8. Responsive

### 8.1 Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 1024px | Layout desktop: grid 3 colunas, nav horizontal |
| 768px–1024px | Grid 2 colunas, fontes reduzidas |
| < 768px | Grid 1 coluna, hamburger menu, seções empilhadas |

### 8.2 Mobile Nav

- Hamburger toggle com overlay fullscreen
- Nav links em coluna, centralizados
- `aria-expanded` controlado por JS
- Animação de entrada com GSAP (slide + fade)

### 8.3 Mobile Adaptations

| Element | Mobile |
|---|---|
| Hero title | `font-size: clamp(2rem, 10vw, 4rem)` |
| Features grid | 1 coluna |
| Team grid | 2 colunas |
| Starfield particles | Reduzidas para 50 partículas (performance) |
| Timeline | Itens empilhados, linha vertical contínua |
| Technology parallax | Efeito reduzido ou desativado |

---

## 9. Assets

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |
| `js/starfield.js` (opcional) | Canvas starfield particle system modular |

### Fonts

| Font | Source | Usage |
|---|---|---|
| Inter (400–800) | Google Fonts CDN | Body text, nav, buttons |
| Orbitron (400–900) | Google Fonts CDN | Headings (h1–h3), logo, nav |

### Icons

| Asset | Source | Usage |
|---|---|---|
| Lucide icons | CDN | Feature cards, social links, form, nav |

---

## 10. Accessibility

### Implemented

- **Skip link** — `href="#main-content"`, visible on focus
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **ARIA labels** — `aria-label` on nav, hamburger, buttons
- **`aria-expanded`** — on hamburger button
- **`aria-required`** — on form inputs
- **Canvas role** — `role="presentation"` + `aria-hidden="true"` no starfield
- **Focus-visible** — custom `:focus-visible` outline with accent color + glow
- **Reduced motion** — `prefers-reduced-motion: reduce` media query
- **Alt text** — all images have appropriate `alt`
- **Landmarks** — clear page regions with semantic elements
- **Heading hierarchy** — h1 → h2 → h3 structured

### Missing / Improvements

- Form validation feedback via `aria-live` region

---

## 11. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| GPU acceleration | `will-change: transform` on animated elements |
| Debounced resize | ScrollTrigger.refresh() debounced at 250ms |
| Visibility API | GSAP pauses when tab hidden |
| Canvas optimization | Particle count reduzido em mobile |
| CDN preloading | `<link rel="preload">` for GSAP CDN |
| DNS prefetch | `dns-prefetch` for CDN + Google Fonts |
| Preconnect | `preconnect` for fonts.gstatic.com |
| Font display | `font-display: swap` on @font-face |
| Reduced motion | `prefers-reduced-motion` desativa animações e canvas |

### Considerations

- GSAP 3.12.5 + ScrollTrigger via CDN (~50KB) — reasonable for animation-rich page
- Lucide icons via CDN — tree-shaken by usage
- Google Fonts — Inter + Orbitron (~50KB combined)
- Canvas starfield roda em requestAnimationFrame — pausado quando tab oculta
- Particle count dinâmico baseado em viewport (menos em mobile)
- Glass-morphism com backdrop-filter pode impactar performance em browsers antigos
- No heavy frameworks, no build tools

---

## 12. UX Principles

- **Cosmic Narrative** — cada seção aprofunda a imersão no tema do vácuo/espaço
- **Micro-Interações** — hover em cards com glow, stagger reveal, botões com transição
- **Mouse Interaction** — starfield reage ao movimento do mouse no hero
- **Mobile First** — hamburger overlay, grid adaptável, partículas reduzidas
- **Scroll-Driven Story** — parallax na tecnologia, timeline progressiva, contadores animados
- **Clean CTAs** — hero com CTA glow, formulário de contato acessível
- **Glass-morphism UI** — nav e cards com backdrop-filter blur para profundidade
- **Performance Conscious** — will-change, visibility pause, debounce, reduced motion
- **Back Link** — footer sempre retorna ao showcase principal

---

## 13. Observations

- **No build tools**: HTML+CSS+JS puro, fontes via Google Fonts CDN, Lucide via CDN
- **Tema dark fixo**: sem toggle claro/escuro — a experiência é 100% imersiva no escuro
- **BEM consistente**: `.hero__title`, `.feature-card__icon`, `.nav__links`, `.tech-bar__fill`
- **GSAP ScrollTrigger**: reveals progressivos com stagger nos cards e timeline
- **Starfield canvas nativo**: partículas com profundidade Z simulada e interação com mouse
- **Parallax via GSAP**: seção Technology com data-speed e animação no scroll
- **Contadores animados**: GSAP `textContent` + `snap` com ScrollTrigger
- **Cards flutuantes**: GSAP `repeat: -1, yoyo: true` com random positions
- **Hamburger overlay**: GSAP anima entrada/saída do menu mobile
- **Skip link presente**: `href="#main-content"` com `:focus` visível
- **Reduced motion**: media query desativa animações e oculta canvas
- **Footer back link**: `<a href="../../index.html">← Voltar ao Showcase</a>` presente
- **Formulário**: validação HTML5 + `aria-required`, submit com feedback visual
- **Glow effects**: box-shadow com `--glow-primary` em cards e CTAs para neon feel
- **Fontes sci-fi**: Orbitron para headings cria identidade futurista imediata

---

## 14. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json`:
   ```json
   {
     "id": "19",
     "title": "THE VOID",
     "category": "dark-space",
     "href": "projects/exemplo-19/index.html",
     "preview": "projects/exemplo-19/preview.png",
     "description": "Landing page com temática espacial e design escuro imersivo.",
     "tags": ["HTML5", "CSS3", "GSAP", "ScrollTrigger", "Canvas"]
   }
   ```

2. Preview image at `projects/exemplo-19/preview.png`

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **The Void** conforme projetada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
