# Gourmet On — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **Gourmet On**, experiência gastronômica premium com menu
> sazonal, eventos especiais e reservas online.

---

## 1. Project Overview

### Project Name

```
Gourmet On - Experiência Gastronômica
```

### Category

```
landing
```

### Description

```
Experiência gastronômica premium com menu sazonal, eventos especiais e reservas online.
```

### Target Audience

```
Amantes da alta gastronomia, foodies, clientes em busca de experiências
culinárias refinadas e eventos privados.
```

### Main Goal

```
Showcase — Demonstrar uma landing page completa para restaurante premium com
navegação fixa, hero com vídeo de fundo, menu tabulado por curso, equipe,
depoimentos em carrossel, galeria, formulário de reserva e animações GSAP.
```

### Brand Voice

- **Sofisticado** — tons escuros com acentos dourados/âmbar, tipografia serifada nobre
- **Convidativo** — hero com vídeo e overlay escuro, CTAs dourados que evocam exclusividade
- **Premium** — letter-spacing amplo, espaçamento generoso, hierarquia tipográfica contrastante
- **Sensorial** — descrições de pratos e ingredientes que despertam os sentidos
- **Exclusivo** — menu sazonal, eventos privados, experiência de reserva personalizada

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 + BEM methodology + CSS custom properties |
| Behavior | Vanilla JavaScript ES6+ (DOMContentLoaded) |
| Animations | GSAP 3.12.5 + ScrollTrigger (CDN) |
| Icons | Lucide icons (CDN) |
| Fonts | Google Fonts: Inter 400–700 (UI), Playfair Display 400–700 (headings), Cormorant Garamond 400–700 (body) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

**Dark only** — sem light mode toggle, tema escuro fixo.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | HTML semântico com todas as seções: nav, hero, about, menu, chef, testimonials, events, reservation, gallery, footer |
| `css/main.css` | CSS principal com variáveis, tema escuro, BEM blocks, responsivo, animações |
| `js/main.js` | Lógica de navegação, hamburger, animações GSAP, tabs do menu, carrossel, contadores, parallax, formulário |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#1A1A1A` | Fundo geral da página |
| `--color-primary` | `#C9A84C` | CTAs, acentos, headings dourados, destaque |
| `--color-secondary` | `#8B4513` | Bordas decorativas, subtítulos, elementos secundários |
| `--color-accent` | `#D4A574` | Hover states, detalhes, tons quentes complementares |
| `--color-text` | `#F5F0E8` | Corpo de texto, parágrafos |
| `--gradient-gold` | `linear-gradient(135deg, #C9A84C, #D4A574)` | Decorativo em títulos, dividers, badges |

**Sem light mode** — tema dark exclusivo.

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Headings (h1–h3) | Playfair Display | 400, 700 | `clamp()` ajustável |
| Body text | Cormorant Garamond | 400, 700 | 1.125rem base |
| UI / Nav / Buttons | Inter | 400, 500, 600, 700 | 0.875rem–1rem |

### 4.3 Buttons / Interactive Elements

| Element | Style |
|---|---|
| CTA primary | `--color-primary` background, `--color-bg` text, dourado sólido |
| CTA outline | Transparente com borda `--color-primary`, texto `--color-primary`, hover preenchido |
| Nav links | Hover com transição de cor para `--color-primary` |
| Menu tabs | Active com underline dourado e `--color-primary`, inactive `--color-text` |
| Testimonial dots | Active `--color-primary`, inactive `--color-text` com 30% opacidade |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Section padding | `clamp(5rem, 10vw, 8rem)` vertical |
| Container max-width | 1200px (centrado) |
| Card gap | 32px |
| Grid columns | 3 colunas (menu), 3 colunas (chef), 3 colunas (gallery) |

### 4.5 Focus-Visible

```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 5. Page Structure

```
NAV (fixed, dark, transparent → solid on scroll)
  Logo (Gourmet On)
  Nav links (Home, Sobre, Menu, Chef, Depoimentos, Eventos, Reservas, Galeria)
  Hamburger (mobile overlay)

HERO (fullscreen, 100vh, video bg)
  Background video with dark overlay
  Headline: "Gourmet On"
  Subheadline: "Experiência Gastronômica Premium"
  CTA: "Reserve Sua Mesa" (primary)
  Scroll indicator (animated down arrow)

ABOUT (section)
  Título + descrição do conceito
  Destaques numéricos (anos de experiência, pratos, prêmios — contadores GSAP)
  Imagem decorativa com parallax

MENU (section)
  Tabs: Entradas, Principais, Sobremesas, Bebidas
  Grid de pratos com imagem, nome, descrição, preço
  GSAP stagger reveal ao trocar de tab

CHEF (section)
  Cards da equipe: foto, nome, cargo, bio
  Efeito parallax sutil

TESTIMONIALS (section)
  Carrossel de depoimentos
  Auto-rotate com GSAP
  Dots de navegação
  Avaliação com estrelas

EVENTS (section)
  Cards de eventos sazonais e especiais
  Datas, descrições, links para mais info

RESERVATION (section)
  Formulário de reserva: nome, email, telefone, data, hora, número de pessoas, observações
  Validação básica + submit
  Background com gradiente dourado sutil

GALLERY (section)
  Grid de imagens do restaurante e pratos
  Lightbox ou hover reveal

FOOTER
  Logo, endereço, telefone, email
  Redes sociais (ícones Lucide)
  Horários de funcionamento
  <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Components

### 6.1 Navbar

```html
<nav class="nav" role="navigation" aria-label="Navegação principal">
  <div class="nav__logo">Gourmet On</div>
  <ul class="nav__links">
    <li><a href="#hero">Home</a></li>
    <!-- Sobre, Menu, Chef, Depoimentos, Eventos, Reservas, Galeria -->
  </ul>
  <button class="nav__hamburger" aria-label="Abrir menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
```

### 6.2 Hero

```html
<section class="hero" id="hero">
  <video class="hero__video" autoplay muted loop playsinline poster="assets/hero-poster.jpg">
    <source src="assets/hero-bg.mp4" type="video/mp4">
  </video>
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <h1 class="hero__title">Gourmet On</h1>
    <p class="hero__subtitle">Experiência Gastronômica Premium</p>
    <a href="#reservation" class="btn btn--primary">Reserve Sua Mesa</a>
  </div>
  <div class="hero__scroll-indicator">
    <i data-lucide="chevron-down"></i>
  </div>
</section>
```

### 6.3 Menu Tabs

```html
<section class="menu" id="menu">
  <div class="menu__tabs" role="tablist">
    <button class="menu__tab menu__tab--active" role="tab" aria-selected="true" data-course="entradas">Entradas</button>
    <button class="menu__tab" role="tab" aria-selected="false" data-course="principais">Principais</button>
    <button class="menu__tab" role="tab" aria-selected="false" data-course="sobremesas">Sobremesas</button>
    <button class="menu__tab" role="tab" aria-selected="false" data-course="bebidas">Bebidas</button>
  </div>
  <div class="menu__grid" data-course="entradas">
    <article class="menu__item">...</article>
    <article class="menu__item">...</article>
    <!-- items -->
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

### 6.5 Reservation Form

```html
<section class="reservation" id="reservation">
  <form class="reservation__form" novalidate>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" required aria-required="true" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required aria-required="true" />
    <label for="phone">Telefone</label>
    <input type="tel" id="phone" name="phone" required aria-required="true" />
    <label for="date">Data</label>
    <input type="date" id="date" name="date" required aria-required="true" />
    <label for="time">Horário</label>
    <input type="time" id="time" name="time" required aria-required="true" />
    <label for="guests">Número de Pessoas</label>
    <input type="number" id="guests" name="guests" min="1" max="20" required aria-required="true" />
    <label for="observations">Observações</label>
    <textarea id="observations" name="observations"></textarea>
    <button type="submit" class="btn btn--primary">Confirmar Reserva</button>
  </form>
</section>
```

### 6.6 Gallery

```html
<section class="gallery" id="gallery">
  <div class="gallery__grid">
    <figure class="gallery__item">
      <img src="assets/gallery-1.jpg" alt="Prato da casa" loading="lazy" />
    </figure>
    <!-- múltiplos itens -->
  </div>
</section>
```

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
| `.hero__title` | y: 100, opacity: 0 | 1.2s | `power3.out` |
| `.hero__subtitle` | y: 50, opacity: 0 | 1s | `power3.out` (delay 0.3s) |
| `.hero__cta` | y: 30, opacity: 0 | 0.8s | `power3.out` (delay 0.6s) |
| `.hero__scroll-indicator` | opacity: 0 | 0.6s | `power2.out` (delay 1.2s) |

### 7.3 Scroll-Triggered Reveals

| Element | Trigger | Animation |
|---|---|---|
| `.about` content | scroll into view | fadeIn + slideUp |
| `.menu__item` cards | scroll into view | stagger: 0.1s, y: 60 → 0, opacity: 0 → 1 |
| `.chef__card` (×3) | scroll into view | stagger: 0.15s, scale: 0.9 → 1 |
| `.testimonials` | scroll into view | fadeIn |
| `.events__card` | scroll into view | stagger slideUp |
| `.gallery__item` | scroll into view | stagger reveal with scale |
| `.reservation` | scroll into view | fadeIn |

### 7.4 Menu Tab Switch

```js
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    gsap.to(currentGrid, { opacity: 0, y: -20, duration: 0.3, onComplete: () => {
      showNewGrid(course);
      gsap.fromTo(newGrid, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
      gsap.from(newGrid.querySelectorAll('.menu__item'), { opacity: 0, y: 30, stagger: 0.08, duration: 0.4, ease: 'power2.out' });
    }});
  });
});
```

### 7.5 Testimonial Auto-Rotate

```js
let currentTestimonial = 0;
const interval = setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % total;
  gsap.to(track, { x: -currentTestimonial * slideWidth, duration: 0.8, ease: 'power3.inOut' });
  updateDots(currentTestimonial);
}, 6000);
```

### 7.6 Counters Animation (About Section)

```js
gsap.to(counter, {
  textContent: targetValue,
  duration: 2.5,
  ease: 'power2.out',
  snap: { textContent: 1 },
  scrollTrigger: { trigger: counter, start: 'top 80%' }
});
```

### 7.7 Parallax Effect

```js
gsap.to('.parallax__image', {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.parallax',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});
```

### 7.8 Navbar Solid on Scroll

```js
ScrollTrigger.create({
  trigger: document.body,
  start: 'top -100px',
  onEnter: () => nav.classList.add('nav--solid'),
  onLeaveBack: () => nav.classList.remove('nav--solid')
});
```

### 7.9 Performance Optimizations

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
| Hero title | `font-size: clamp(2rem, 10vw, 4rem)` |
| Menu grid | 1 coluna |
| Chef grid | 1 coluna |
| Gallery grid | 1–2 colunas |
| Reservation form | Full width, inputs empilhados |
| Hero video | `object-fit: cover` mantém proporção |

---

## 9. Assets

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |
| `assets/hero-bg.mp4` | Background video do hero |
| `assets/hero-poster.jpg` | Poster image fallback do vídeo |
| `assets/gallery-1.jpg` | Galeria — imagens do restaurante e pratos |
| `assets/gallery-2.jpg` | Galeria |
| `assets/gallery-3.jpg` | Galeria |
| `assets/gallery-4.jpg` | Galeria |
| `assets/gallery-5.jpg` | Galeria |
| `assets/gallery-6.jpg` | Galeria |

### Fonts

| Font | Source | Usage |
|---|---|---|
| Inter (400–700) | Google Fonts CDN | UI, nav, buttons |
| Playfair Display (400–700) | Google Fonts CDN | Headings (h1–h3) |
| Cormorant Garamond (400–700) | Google Fonts CDN | Body text |

### Icons

| Asset | Source | Usage |
|---|---|---|
| Lucide icons | CDN | Nav, scroll indicator, social links, form |

---

## 10. Accessibility

### Implemented

- **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **ARIA labels** — `aria-label` on nav, hamburger, carousel dots, tabs
- **`aria-expanded`** — on hamburger button
- **`aria-selected`** — on menu tabs and testimonial dots (`role="tab"`)
- **`aria-required`** — on form inputs
- **`role="tablist"`** — on menu tabs container and testimonial dots container
- **`role="tab"`** — on each menu tab and testimonial dot
- **Role `region`** — on accordion answers (se aplicável)
- **Focus-visible** — custom `:focus-visible` outline with `--color-primary`
- **Reduced motion** — `prefers-reduced-motion: reduce` media query
- **Alt text** — all images have appropriate `alt`
- **Landmarks** — clear page regions with semantic elements
- **Heading hierarchy** — h1 → h2 → h3 structured
- **Video fallback** — poster image for hero video, fallback content

### Missing / Improvements

- Form validation feedback via `aria-live` region
- Skip link (não implementado)

---

## 11. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| GPU acceleration | `will-change: transform` on animated elements |
| Debounced resize | ScrollTrigger.refresh() debounced at 250ms |
| Visibility API | GSAP pauses when tab hidden |
| DNS prefetch | `dns-prefetch` for CDN + Google Fonts |
| Preconnect | `preconnect` for fonts.gstatic.com |
| Font display | `font-display: swap` on @font-face |
| Reduced motion | `prefers-reduced-motion` disables animations |
| Lazy loading | `loading="lazy"` on gallery images |
| Video poster | `poster` attribute for instant placeholder |

### Considerations

- GSAP 3.12.5 + ScrollTrigger via CDN (~50KB)
- Lucide icons via CDN — tree-shaken by usage
- Google Fonts — Inter + Playfair Display + Cormorant Garamond (~50KB combined)
- Hero video (~2-5MB MP4) — maior impacto de performance; considerar compressão ou fallback para poster
- Parallax effects via GSAP ScrollTrigger scrub — GPU accelerated
- No heavy frameworks, no build tools

---

## 12. UX Principles

- **Scroll-Driven Narrative** — seções revelam conteúdo progressivamente, guiando o usuário pela experiência do restaurante
- **Micro-Interações** — hover em cards, stagger reveal, tabs animadas, carrossel com auto-rotate
- **Dark & Elegant** — tema escuro fixo, sem toggle, reforçando atmosfera premium e intimista
- **Mobile First** — hamburger overlay, grid adaptável, fontes fluidas
- **Social Proof** — depoimentos com auto-rotate e avaliações criam confiança
- **Clear CTAs** — hero com CTA principal de reserva, formulário completo e acessível
- **Menu Tabbed** — navegação por curso sem reload, com transição suave GSAP
- **Performance Conscious** — will-change, visibility pause, debounce, reduced motion
- **Back Link** — footer sempre retorna ao showcase principal

---

## 13. Observations

- **Dark only**: tema escuro fixo — sem light mode, sem toggle, sem `data-theme`
- **Hero video**: background MP4 com overlay escuro e poster fallback — requer asset próprio
- **Menu tabs**: navegação por curso (Entradas, Principais, Sobremesas, Bebidas) com GSAP transition e stagger
- **Carrossel manual**: depoimentos com auto-rotate 6s via JS/GSAP (sem Swiper/Glide)
- **Contadores animados**: GSAP `textContent` + `snap` com ScrollTrigger na seção About
- **Parallax**: imagem com efeito parallax via ScrollTrigger `scrub: true`
- **Três fontes**: Playfair Display (headings), Cormorant Garamond (body), Inter (UI) — camadas tipográficas distintas
- **Gold accent**: paleta monocromática escura com acentos dourados/âmbar
- **Footer back link**: `<a href="../../index.html">← Voltar ao Showcase</a>` presente
- **Formulário de reserva**: validação HTML5 + `aria-required`, submit com feedback visual
- **Gradiente decorativo**: `--gradient-gold` aplicado em títulos e elementos de destaque
- **BEM consistente**: `.menu__item`, `.chef__card`, `.gallery__item`, `.reservation__form`, `.testimonials__track`

---

## 14. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json`:
   ```json
   {
     "id": "18",
     "title": "GOURMET ON",
     "category": "landing",
     "href": "projects/exemplo-18/index.html",
     "preview": "projects/exemplo-18/preview.png",
     "description": "Experiência gastronômica premium com menu sazonal, eventos especiais e reservas online.",
     "tags": ["HTML5", "CSS3", "GSAP"]
   }
   ```

2. Preview image at `projects/exemplo-18/preview.png`

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Gourmet On** conforme projetada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
