# AniPage — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **AniPage**, landing page animada com transições suaves e
> storytelling visual usando GSAP e ScrollTrigger.

---

## 1. Project Overview

### Project Name

```
AniPage | Landing Page Animada
```

### Category

```
animation
```

### Description

```
Landing page animada com transições suaves e storytelling visual usando GSAP e ScrollTrigger.
```

### Target Audience

```
Desenvolvedores, designers e profissionais de marketing interessados em landing
pages animadas com narrativa visual, transições suaves e scroll-driven storytelling.
```

### Main Goal

```
Showcase — Demonstrar uma landing page completa com animações GSAP progressivas,
scroll-triggered reveals, carrossel de depoimentos, acordeão FAQ, formulário
de contato e alternância de tema claro/escuro.
```

### Brand Voice

- **Sofisticado** — paleta neutra/quente, tipografia contrastante (serifada + sans-serif)
- **Narrativo** — animações que contam uma história conforme o usuário scrolla
- **Confiável** — tons terrosos, superfícies claras, tipografia limpa
- **Convidativo** — CTAs claros, micro-interações, depoimentos sociais
- **Profissional** — seções completas (hero, about, features, portfolio, testimonials, FAQ, contact)

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 + BEM methodology + CSS custom properties |
| Behavior | Vanilla JavaScript ES6+ (DOMContentLoaded) |
| Animations | GSAP 3.12.5 + ScrollTrigger (CDN) |
| Icons | Lucide icons (CDN) |
| Fonts | Google Fonts: Inter 400–700 (body) + Playfair Display 400–700 (headings) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | HTML semântico com todas as seções: nav, hero, about, features, portfolio, testimonials, FAQ, contact, footer |
| `css/main.css` | CSS principal com variáveis, tema, BEM blocks, responsivo |
| `js/main.js` | Lógica de tema, hamburger, animações GSAP, carrossel, acordeão, contadores |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F8F5F0` | Fundo geral da página |
| `--color-surface` | `#FFFFFF` | Cards, seções, superfícies elevadas |
| `--color-primary` | `#2D2D2D` | Headings, texto principal |
| `--color-secondary` | `#8C7C6B` | Subtítulos, metadados, texto secundário |
| `--color-accent` | `#C4A882` | CTAs, links, bordas decorativas, destaque |
| `--color-text` | `#1A1A1A` | Corpo de texto |

**Dark mode**: invertido via `data-theme="dark"` com cores equivalentes escuras.

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Headings (h1–h3) | Playfair Display | 400, 700 | `clamp()` ajustável |
| Body | Inter | 400, 500, 600, 700 | 1rem base |
| Nav links | Inter | 500 | 0.875rem |
| Buttons | Inter | 600 | 0.9375rem |
| Testimonials | Inter | 400 | 1.125rem |

### 4.3 Buttons / Interactive Elements

| Element | Style |
|---|---|
| CTA primary | `--color-accent` background, `--color-surface` text, rounded |
| CTA secondary | Transparente com borda `--color-accent`, texto `--color-accent` |
| Nav links | Hover com underline ou opacidade |
| Accordion headers | Cursor pointer, toggle icon rotacionado |
| Testimonial dots | Active state com `--color-accent`, inactive com `--color-secondary` |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Section padding | `clamp(4rem, 8vw, 8rem)` vertical |
| Container max-width | 1200px (centrado) |
| Card gap | 24px |
| Grid columns | 3 colunas (features), 3 colunas (portfolio) |

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
NAV (fixed, transparent → solid on scroll)
  Logo (AniPage)
  Nav links (Home, Sobre, Features, Portfolio, FAQ, Contato)
  Toggle tema (dark/light)
  Hamburger (mobile overlay)

HERO (fullscreen, min-height 100vh)
  Headline: "Criamos Experiências Digitais"
  Subheadline descritivo
  2 CTAs: "Fale Conosco" (primary) + "Saiba Mais" (secondary)
  Floating animated circles (decorative, GSAP)

ABOUT (section)
  Título + descrição
  Destaques numéricos (contadores animados)

FEATURES (section)
  3 cards em grid com stagger na entrada
  Cada card: ícone Lucide, título, descrição

PORTFOLIO (section)
  Grid de projetos (imagens + overlay com info)
  Hover com escala e opacidade

TESTIMONIALS (section)
  Carrossel com depoimentos
  Auto-rotate a cada 7s
  Dots de navegação

FAQ (section)
  Accordion com perguntas expansíveis
  GSAP para animação de abertura/fechamento

CONTACT (section)
  Formulário com nome, email, mensagem
  Validação básica + submit

FOOTER
  Logo, links sociais, copyright
  <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Components

### 6.1 Navbar

```html
<nav class="nav" role="navigation" aria-label="Navegação principal">
  <div class="nav__logo">AniPage</div>
  <ul class="nav__links">
    <li><a href="#hero">Home</a></li>
    <!-- Sobre, Features, Portfolio, FAQ, Contato -->
  </ul>
  <button class="nav__theme-toggle" aria-label="Alternar tema">
    <!-- Lucide sun/moon icon -->
  </button>
  <button class="nav__hamburger" aria-label="Abrir menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
```

### 6.2 Hero

```html
<section class="hero" id="hero">
  <div class="hero__content">
    <h1 class="hero__title">Criamos Experiências Digitais</h1>
    <p class="hero__subtitle">...</p>
    <div class="hero__ctas">
      <a href="#contact" class="btn btn--primary">Fale Conosco</a>
      <a href="#about" class="btn btn--secondary">Saiba Mais</a>
    </div>
  </div>
  <div class="hero__circles">
    <!-- Floating decorative circles animados com GSAP -->
  </div>
</section>
```

### 6.3 Features Cards

```html
<section class="features" id="features">
  <div class="features__grid">
    <article class="feature-card" data-delay="0">
      <i data-lucide="zap" class="feature-card__icon"></i>
      <h3 class="feature-card__title">Título</h3>
      <p class="feature-card__desc">Descrição</p>
    </article>
    <!-- 3 cards total -->
  </div>
</section>
```

### 6.4 Testimonials Carousel

```html
<section class="testimonials" id="testimonials">
  <div class="testimonials__track">
    <blockquote class="testimonial">...</blockquote>
    <blockquote class="testimonial">...</blockquote>
    <blockquote class="testimonial">...</blockquote>
  </div>
  <div class="testimonials__dots" role="tablist">
    <button role="tab" aria-selected="true"></button>
    <button role="tab" aria-selected="false"></button>
    <button role="tab" aria-selected="false"></button>
  </div>
</section>
```

### 6.5 FAQ Accordion

```html
<section class="faq" id="faq">
  <div class="faq__item">
    <button class="faq__question" aria-expanded="false">
      Pergunta?
      <i data-lucide="chevron-down" class="faq__icon"></i>
    </button>
    <div class="faq__answer" role="region">
      <p>Resposta...</p>
    </div>
  </div>
  <!-- múltiplos itens -->
</section>
```

### 6.6 Contact Form

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

### 6.7 Floating Circles Hero

- 3–6 círculos decorativos posicionados absolutamente no hero
- Diferentes tamanhos, opacidades e cores (accent, secondary)
- GSAP floating animation: translateY + rotate suave e contínuo
- GPU accelerated: `will-change: transform`

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
| `.hero__title` | y: 80, opacity: 0 | 1s | `power3.out` |
| `.hero__subtitle` | y: 40, opacity: 0 | 0.8s | `power3.out` (delay 0.2s) |
| `.hero__ctas` | y: 30, opacity: 0 | 0.6s | `power3.out` (delay 0.5s) |
| `.hero__circles` circles | scale: 0, opacity: 0 | 1.2s | `elastic.out(1, 0.5)` (stagger) |

### 7.3 Scroll-Triggered Reveals

| Element | Trigger | Animation |
|---|---|---|
| `.about` content | scroll into view | fadeIn + slideUp |
| `.feature-card` (×3) | scroll into view | stagger: 0.15s, y: 60 → 0, opacity: 0 → 1 |
| `.portfolio` items | scroll into view | stagger grid items |
| `.testimonials` | scroll into view | fadeIn |
| `.faq` items | scroll into view | slideUp reveals |
| `.contact` | scroll into view | fadeIn |

### 7.4 Floating Circles Animation

```js
gsap.to('.hero__circle', {
  y: 'random(-30, 30)',
  x: 'random(-20, 20)',
  rotation: 'random(-15, 15)',
  duration: 'random(3, 6)',
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});
```

### 7.5 Testimonial Auto-Rotate

```js
let currentTestimonial = 0;
const interval = setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % total;
  gsap.to(track, { x: -currentTestimonial * slideWidth, duration: 0.6, ease: 'power2.inOut' });
  updateDots(currentTestimonial);
}, 7000);
```

### 7.6 Counters Animation

```js
gsap.to(counter, {
  textContent: targetValue,
  duration: 2,
  ease: 'power2.out',
  snap: { textContent: 1 },
  scrollTrigger: { trigger: counter, start: 'top 80%' }
});
```

### 7.7 Accordion

```js
button.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isOpen);
  gsap.to(answer, {
    height: isOpen ? 0 : answer.scrollHeight,
    duration: 0.35,
    ease: 'power2.inOut'
  });
});
```

### 7.8 Navbar Solid on Scroll

```js
ScrollTrigger.create({
  trigger: document.body,
  start: 'top -80px',
  onEnter: () => nav.classList.add('nav--solid'),
  onLeaveBack: () => nav.classList.remove('nav--solid')
});
```

### 7.9 Performance Optimizations

```js
// Resize debounce for ScrollTrigger
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 250);
});

// Visibility pause
document.addEventListener('visibilitychange', () => {
  if (document.hidden) gsap.globalTimeline.pause();
  else gsap.globalTimeline.resume();
});
```

### 7.10 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
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
| Hero title | `font-size: clamp(2rem, 10vw, 3.5rem)` |
| Features grid | 1 coluna |
| Portfolio grid | 1–2 colunas |
| Floating circles | Menores ou ocultos em telas pequenas |
| Testimonials | Padding reduzido |
| FAQ | Full width |

---

## 9. Assets

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |

### Fonts

| Font | Source | Usage |
|---|---|---|
| Inter (400–700) | Google Fonts CDN | Body text, nav, buttons |
| Playfair Display (400–700) | Google Fonts CDN | Headings (h1–h3) |

### Icons

| Asset | Source | Usage |
|---|---|---|
| Lucide icons | CDN | Feature cards, nav theme, accordion chevron |

---

## 10. Accessibility

### Implemented

- **Skip link** — `href="#main-content"`, visible on focus
- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **ARIA labels** — `aria-label` on nav, theme toggle, hamburger, carousel dots
- **`aria-expanded`** — on hamburger button and accordion questions
- **`aria-selected`** — on testimonial dots (role="tab")
- **`aria-required`** — on form inputs
- **`role="region"`** — on accordion answers
- **`role="tablist"`** — on testimonial dots container
- **`role="tab"`** — on each testimonial dot
- **Focus-visible** — custom `:focus-visible` outline with accent color
- **Reduced motion** — `prefers-reduced-motion: reduce` media query
- **Alt text** — all images have appropriate `alt`
- **Landmarks** — clear page regions with semantic elements
- **Heading hierarchy** — h1 → h2 → h3 structured

### Missing / Improvements

- Form validation feedback via `aria-live` region
- Keyboard carousel navigation (arrow keys)

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
| Lazy loading | `loading="lazy"` on portfolio images |

### Considerations

- GSAP 3.12.5 + ScrollTrigger via CDN (~50KB) — reasonable for animation-rich page
- Lucide icons via CDN — tree-shaken by usage
- Google Fonts — Inter + Playfair Display (~40KB combined)
- Floating circles animation runs continuously — potential perf impact on low-end devices
- No heavy frameworks, no build tools

---

## 12. UX Principles

- **Scroll-Driven Narrative** — cada seção revela conteúdo progressivamente, contando uma história visual
- **Micro-Interações** — hover em cards, stagger reveal, botões com transição, accordion suave
- **Dark Mode** — toggle salvo em localStorage, respeita preferência do sistema
- **Mobile First** — hamburger overlay, grid adaptável, fontes fluidas
- **Social Proof** — depoimentos com auto-rotate criam confiança
- **Clear CTAs** — hero com 2 CTAs, formulário de contato acessível
- **FAQ Pattern** — accordion expande conteúdo sem navegação, `aria-expanded` para leitores de tela
- **Performance Conscious** — will-change, visibility pause, debounce, reduced motion
- **Back Link** — footer sempre retorna ao showcase principal

---

## 13. Observations

- **No build tools**: HTML+CSS+JS puro, fontes via Google Fonts CDN, Lucide via CDN
- **Dark/light mode**: completo com `data-theme`, CSS custom properties, localStorage
- **BEM consistente**: `.hero__title`, `.feature-card__icon`, `.nav__links`, `.faq__question`
- **GSAP ScrollTrigger**: reveals progressivos com stagger nos cards de features e portfolio
- **Carrossel manual**: depoimentos com auto-rotate 7s via JS/GSAP (sem Swiper/Glide)
- **Accordion com GSAP**: animação de altura suave com `power2.inOut`
- **Contadores animados**: GSAP `textContent` + `snap` com ScrollTrigger
- **Círculos flutuantes**: GSAP `repeat: -1, yoyo: true` com random positions
- **Hamburger overlay**: GSAP anima entrada/saída do menu mobile
- **Skip link presente**: `href="#main-content"` com `:focus` visível
- **Reduced motion**: media query que desativa animações
- **Footer back link**: `<a href="../../index.html">← Voltar ao Showcase</a>` presente
- **Formulário**: validação HTML5 + `aria-required`, submit com feedback visual

---

## 14. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json`:
   ```json
   {
     "id": "14",
     "title": "ANIPAGE",
     "category": "animation",
     "href": "projects/exemplo-14/index.html",
     "preview": "projects/exemplo-14/preview.png",
     "description": "Landing page animada com transições suaves e storytelling visual usando GSAP e ScrollTrigger.",
     "tags": ["HTML5", "CSS3", "GSAP", "ScrollTrigger"]
   }
   ```

2. Preview image at `projects/exemplo-14/preview.png`

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **AniPage** conforme projetada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
