# Refúgio Pet — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **Refúgio Pet**, hotel e creche para pets com serviços premium,
> galeria e depoimentos.

---

## 1. Project Overview

### Project Name

```
Refúgio Pet - Hotel & Creche para Pets
```

### Category

```
landing
```

### Description

```
Hotel e creche para pets com serviços premium, galeria e depoimentos.
```

### Target Audience

```
Donos de pets que buscam serviços de hospedagem, creche, banho e adestramento
com qualidade e confiança.
```

### Main Goal

```
Apresentar o Refúgio Pet como um hotel/creche premium, gerar confiança através
de depoimentos e galeria, e converter visitantes em contatos via formulário.
```

### Brand Voice

- **Acollhedor** — tons quentes, linguagem amigável, foco no bem-estar animal
- **Confiável** — depoimentos reais, equipe qualificada, estrutura apresentada
- **Premium** — serviços de qualidade com preço justo
- **Divertido** — elementos lúdicos (patinhas, ilustrações), tom positivo

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, landmarks semânticas (`<nav>`, `<section>`, `<footer>`) |
| Styling | CSS3 com custom properties + BEM |
| Behavior | Vanilla JavaScript ES6+ (DOMContentLoaded) |
| Animations | GSAP 3.12.5 + ScrollTrigger (CDN) |
| Icons | Lucide icons (CDN) |
| Fonts | Google Fonts: Nunito 400–800 (body) + Fredoka 400–700 (headings) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | HTML semântico com todas as seções: nav, hero, services, about, gallery, testimonials, team, FAQ, contact, footer |
| `css/main.css` | CSS principal com variáveis, tema, BEM blocks, responsivo |
| `js/main.js` | Lógica de hamburger, animações GSAP, lightbox gallery, carrossel de depoimentos, accordion FAQ |
| `preview.png` | Gallery card preview for the showcase |
| `favicon/paw.svg` | Favicon em formato SVG |

---

## 4. Visual Identity

### 4.1 Color Palette

Todas as cores definidas como CSS custom properties no `:root` em `main.css`.

| Token | CSS Variable | Hex | Usage |
|---|---|---|---|
| Background | `--color-bg` | `#FEFCF3` | Page background |
| Primary | `--color-primary` | `#5B8C5A` | CTAs, headings, acentos principais |
| Secondary | `--color-secondary` | `#D4A373` | Badges, highlights, elementos secundários |
| Accent | `--color-accent` | `#E87461` | Destaques, hover states, calls-to-action |
| Text | `--color-text` | `#2D3436` | Body text, headings |
| Muted | `--color-muted` | `#636E72` | Subtítulos, texto secundário |
| Surface | `--color-surface` | `#FFFFFF` | Cards, formulários, superfícies elevadas |

**Nota**: Tema fixo claro (sem dark mode).

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Headings (h1–h3) | Fredoka | 400, 500, 600, 700 | `clamp()` ajustável |
| Body | Nunito | 400, 500, 600, 700, 800 | 1rem base |
| Nav links | Nunito | 600 | 1rem |
| Buttons | Nunito | 700 | 1rem |
| Card titles | Fredoka | 600 | 1.25rem |
| Testimonials | Nunito | 400 | 1.125rem (italic opcional) |

### 4.3 Buttons / Interactive Elements

| Element | Style |
|---|---|
| CTA primary | `--color-primary` background, `#FFFFFF` text, `border-radius: 2rem`, padding `0.75rem 2rem` |
| CTA secondary | Transparente com borda `--color-primary`, texto `--color-primary` |
| Nav links | Hover com cor `--color-primary` |
| Accordion headers | Cursor pointer, background `--color-surface`, ícone rotacionado |
| Testimonial dots | Active state com `--color-primary`, inactive com `--color-muted` |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Container max-width | 1200px (centrado) |
| Container padding | `0 1.5rem` |
| Section padding | `clamp(4rem, 8vw, 6rem)` vertical |
| Card gap | 24px |
| Card padding | 1.5rem |
| Grid columns | 4 colunas (services), 3 colunas (team) |

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
NAV (fixed, transparent → primary on scroll)
  Logo (Refúgio Pet + paw icon)
  Nav links (Home, Serviços, Sobre, Galeria, Depoimentos, FAQ, Contato)
  Hamburger (mobile overlay)

HERO (min-height 100vh, illustration backdrop)
  Headline: "O melhor hotel para seu pet"
  Subheadline descritivo
  CTA: "Agende uma Visita"
  Floating paw prints (decorative, GSAP)

SERVICES (section)
  4 cards em grid: Hotel, Creche, Banho & Tosa, Adestramento
  Cada card: Lucide icon, título, descrição, link "Saiba mais"

ABOUT (section)
  Título + texto institucional
  Imagem ilustrativa
  Destaques numéricos (anos de experiência, pets atendidos, etc.)

GALLERY (section)
  Grid de fotos da estrutura
  Lightbox modal ao clicar
  GSAP reveal nas imagens

TESTIMONIALS (section)
  Carrossel com depoimentos de clientes
  Auto-rotate + dots de navegação

TEAM (section)
  Grid 3 colunas com cards da equipe
  Cada card: foto, nome, cargo, descrição

FAQ (section)
  Accordion com perguntas frequentes
  GSAP para animação de abertura/fechamento

CONTACT (section)
  Formulário com nome, email, telefone, mensagem
  Validação básica + submit

FOOTER
  Logo, informações de contato, links sociais
  <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Components

### 6.1 Navbar

```html
<nav class="nav" role="navigation" aria-label="Navegação principal">
  <div class="nav__container">
    <a href="#" class="nav__logo">
      <img src="favicon/paw.svg" alt="" class="nav__logo-icon" />
      Refúgio Pet
    </a>
    <ul class="nav__list" id="nav-list">
      <li class="nav__item"><a href="#services" class="nav__link">Serviços</a></li>
      <li class="nav__item"><a href="#about" class="nav__link">Sobre</a></li>
      <li class="nav__item"><a href="#gallery" class="nav__link">Galeria</a></li>
      <li class="nav__item"><a href="#testimonials" class="nav__link">Depoimentos</a></li>
      <li class="nav__item"><a href="#faq" class="nav__link">FAQ</a></li>
      <li class="nav__item"><a href="#contact" class="nav__link">Contato</a></li>
    </ul>
    <button class="nav__hamburger" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

- BEM: `.nav`, `.nav__container`, `.nav__logo`, `.nav__logo-icon`, `.nav__list`, `.nav__item`, `.nav__link`, `.nav__hamburger`
- Fixed no topo, transparente → fundo `--color-surface` ao scrollar (via ScrollTrigger)

### 6.2 Hero

```html
<section class="hero" id="hero">
  <div class="hero__content">
    <h1 class="hero__title">O melhor hotel para seu pet</h1>
    <p class="hero__subtitle">...</p>
    <a href="#contact" class="btn btn--primary hero__cta">Agende uma Visita</a>
  </div>
  <div class="hero__illustration">
    <!-- Ilustração SVG ou imagem -->
  </div>
  <div class="hero__paws">
    <!-- Floating paw prints animados com GSAP -->
  </div>
</section>
```

- BEM: `.hero`, `.hero__content`, `.hero__title`, `.hero__subtitle`, `.hero__cta`, `.hero__illustration`, `.hero__paws`
- Ilustração à direita (desktop) / abaixo do texto (mobile)

### 6.3 Services Cards

```html
<section class="services" id="services">
  <div class="services__grid">
    <article class="service-card">
      <i data-lucide="building-2" class="service-card__icon"></i>
      <h3 class="service-card__title">Hotel</h3>
      <p class="service-card__desc">...</p>
      <a href="#" class="service-card__link">Saiba mais</a>
    </article>
    <!-- 4 cards total -->
  </div>
</section>
```

- BEM: `.services`, `.services__grid`, `.service-card`, `.service-card__icon`, `.service-card__title`, `.service-card__desc`, `.service-card__link`
- Grid 4 colunas no desktop, 2 no tablet, 1 no mobile

### 6.4 Gallery Lightbox

```html
<section class="gallery" id="gallery">
  <div class="gallery__grid">
    <figure class="gallery__item">
      <img src="assets/gallery-1.jpg" alt="Foto do ambiente de hotel" loading="lazy" />
    </figure>
    <!-- múltiplos itens -->
  </div>
  <div class="gallery__lightbox" role="dialog" aria-modal="true" aria-hidden="true">
    <button class="gallery__close" aria-label="Fechar">&times;</button>
    <img class="gallery__lightbox-img" src="" alt="" />
  </div>
</section>
```

- BEM: `.gallery`, `.gallery__grid`, `.gallery__item`, `.gallery__lightbox`, `.gallery__close`, `.gallery__lightbox-img`
- Lightbox via JS: clicar na imagem abre modal com overlay escuro

### 6.5 Testimonials Carousel

```html
<section class="testimonials" id="testimonials">
  <div class="testimonials__track">
    <blockquote class="testimonial">
      <p class="testimonial__text">"...</p>
      <cite class="testimonial__author">— Nome do Cliente</cite>
    </blockquote>
    <!-- múltiplos depoimentos -->
  </div>
  <div class="testimonials__dots" role="tablist">
    <button role="tab" aria-selected="true"></button>
  </div>
</section>
```

- BEM: `.testimonials`, `.testimonials__track`, `.testimonial`, `.testimonial__text`, `.testimonial__author`, `.testimonials__dots`
- Auto-rotate a cada 7s via GSAP

### 6.6 FAQ Accordion

```html
<section class="faq" id="faq">
  <div class="faq__item">
    <button class="faq__question" aria-expanded="false">
      <span>Quanto tempo dura a hospedagem?</span>
      <i data-lucide="chevron-down" class="faq__icon"></i>
    </button>
    <div class="faq__answer" role="region">
      <p>...</p>
    </div>
  </div>
  <!-- múltiplos itens -->
</section>
```

- BEM: `.faq`, `.faq__item`, `.faq__question`, `.faq__icon`, `.faq__answer`
- GSAP anima altura do `faq__answer` ao toggle

### 6.7 Team Cards

```html
<section class="team" id="team">
  <div class="team__grid">
    <article class="team-card">
      <img src="assets/team-1.jpg" alt="Foto de Maria" class="team-card__photo" loading="lazy" />
      <h3 class="team-card__name">Maria</h3>
      <p class="team-card__role">Veterinária</p>
      <p class="team-card__desc">...</p>
    </article>
    <!-- 3 cards total -->
  </div>
</section>
```

### 6.8 Contact Form

```html
<section class="contact" id="contact">
  <form class="contact__form" novalidate>
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" required aria-required="true" />
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required aria-required="true" />
    <label for="phone">Telefone</label>
    <input type="tel" id="phone" name="phone" />
    <label for="message">Mensagem</label>
    <textarea id="message" name="message" required aria-required="true"></textarea>
    <button type="submit" class="btn btn--primary">Enviar</button>
  </form>
</section>
```

### 6.9 Footer

```html
<footer class="footer" role="contentinfo">
  <div class="footer__container">
    <div class="footer__brand">
      <img src="favicon/paw.svg" alt="" class="footer__logo" />
      <p>Refúgio Pet</p>
    </div>
    <div class="footer__contact">
      <p>Rua Exemplo, 123</p>
      <p>(11) 99999-8888</p>
    </div>
    <div class="footer__social">
      <!-- Lucide social icons -->
    </div>
    <a href="../../index.html" class="footer__back">← Voltar ao Showcase</a>
    <p class="footer__copy">&copy; 2025 Refúgio Pet. Todos os direitos reservados.</p>
  </div>
</footer>
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
| `.hero__title` | y: 80, opacity: 0 | 1s | `power3.out` |
| `.hero__subtitle` | y: 40, opacity: 0 | 0.8s | `power3.out` (delay 0.2s) |
| `.hero__cta` | y: 30, opacity: 0 | 0.6s | `power3.out` (delay 0.4s) |
| `.hero__illustration` | x: 100, opacity: 0 | 1s | `power3.out` (delay 0.3s) |

### 7.3 Floating Paw Prints

```js
gsap.to('.hero__paw', {
  y: 'random(-20, 20)',
  x: 'random(-15, 15)',
  rotation: 'random(-20, 20)',
  opacity: 0.2,
  duration: 'random(3, 5)',
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut'
});
```

### 7.4 Scroll-Triggered Reveals

| Element | Trigger | Animation |
|---|---|---|
| `.service-card` (×4) | scroll into view | stagger: 0.15s, y: 60 → 0, opacity: 0 → 1 |
| `.about` content | scroll into view | fadeIn + slideUp |
| `.gallery__item` | scroll into view | stagger fadeIn + scale |
| `.testimonials` | scroll into view | fadeIn |
| `.team-card` (×3) | scroll into view | stagger slideUp |
| `.faq__item` | scroll into view | slideUp reveals |
| `.contact` | scroll into view | fadeIn |

### 7.5 Testimonial Auto-Rotate

```js
let current = 0;
const interval = setInterval(() => {
  current = (current + 1) % total;
  gsap.to(track, { x: -current * slideWidth, duration: 0.6, ease: 'power2.inOut' });
  updateDots(current);
}, 7000);
```

### 7.6 Counter Animation (About)

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
| > 1024px | Layout desktop: grid 4 colunas (services), 3 colunas (team/ gallery) |
| 768px–1024px | Grid 2 colunas, fontes reduzidas |
| < 768px | Grid 1 coluna, hamburger menu, seções empilhadas |

### 8.2 Mobile Nav

- Hamburger toggle com overlay fullscreen (ou slide-in)
- Nav links em coluna, centralizados
- `aria-expanded` controlado por JS
- GSAP anima entrada/saída do menu mobile

### 8.3 Mobile Adaptations

| Element | Mobile |
|---|---|
| Hero layout | Ilustração abaixo do texto (stacked) |
| Services grid | 1 coluna |
| Gallery grid | 1–2 colunas |
| Team grid | 1 coluna |
| Floating paws | Menores ou ocultos |
| Testimonials | Padding reduzido |
| FAQ | Full width |
| Hero title | `font-size: clamp(2rem, 8vw, 3rem)` |

---

## 9. Assets

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |
| `favicon/paw.svg` | Favicon da aba do navegador |

### Images

| Path | Description |
|---|---|
| `assets/hero-illustration.svg` (ou .png) | Ilustração principal do hero |
| `assets/gallery-1.jpg` … `assets/gallery-6.jpg` | Fotos da estrutura/galeria |
| `assets/team-1.jpg`, `assets/team-2.jpg`, `assets/team-3.jpg` | Fotos da equipe |
| `assets/about.jpg` | Imagem da seção Sobre |

### Fonts

| Font | Source | Usage |
|---|---|---|
| Nunito (400–800) | Google Fonts CDN | Body text, nav, buttons |
| Fredoka (400–700) | Google Fonts CDN | Headings (h1–h3), card titles |

### Icons

| Asset | Source | Usage |
|---|---|---|
| Lucide icons | CDN | Service cards, accordion chevron, social links, nav |

---

## 10. Accessibility

### Implemented

- **Semantic HTML** — `<nav>`, `<section>`, `<footer>`, `<figure>`, `<blockquote>`, `<cite>`
- **ARIA labels** — `aria-label` on nav, hamburger, lightbox, carousel dots
- **`aria-expanded`** — on hamburger button and accordion questions
- **`aria-selected`** — on testimonial dots (`role="tab"`)
- **`aria-required`** — on form inputs
- **`aria-modal`** — on lightbox dialog
- **`role="region"`** — on accordion answers
- **`role="tablist"`** + **`role="tab"`** — on testimonial dots
- **Focus-visible** — custom `:focus-visible` outline with primary color
- **Reduced motion** — `prefers-reduced-motion: reduce` media query
- **Alt text** — all images have descriptive `alt`
- **Heading hierarchy** — h1 (hero) → h2 (section titles) → h3 (card titles)
- **Skip link** — `href="#main-content"`, visible on focus
- **Back link** — presente no footer para navegação de volta ao showcase

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
| Lazy loading | `loading="lazy"` on gallery and team images |
| Single CSS file | Apenas `css/main.css` |

### Considerations

- GSAP 3.12.5 + ScrollTrigger via CDN (~50KB) — reasonable for animation-rich page
- Lucide icons via CDN — tree-shaken by usage
- Google Fonts — Nunito + Fredoka (~35KB combined)
- Floating paw animation runs continuously — potential perf impact on low-end devices
- No heavy frameworks, no build tools

---

## 12. UX Principles

- **Warm & Conviting** — paleta verde + terracota + cream transmite aconchego e confiança
- **Scroll-Driven Narrative** — seções revelam conteúdo progressivamente conforme o usuário explora
- **Social Proof** — depoimentos com auto-rotate e fotos da estrutura geram confiança
- **Micro-Interações** — hover em cards, stagger reveal, accordion suave, botões com transição
- **Mobile First** — hamburger overlay, grid adaptável, fontes fluidas
- **Clear CTAs** — hero com CTA principal, formulário de contato acessível
- **Visual Hierarchy** — Fredoka headings destacam-se do Nunito body, criando hierarquia clara
- **FAQ Pattern** — accordion expande conteúdo sem navegação, `aria-expanded` para leitores de tela
- **Lightbox Gallery** — fotos em tamanho real sem sair da página
- **Back Link** — footer sempre retorna ao showcase principal

---

## 13. Observations

- **No build tools**: HTML+CSS+JS puro, fontes via Google Fonts CDN, Lucide via CDN
- **BEM consistente**: `.service-card__title`, `.gallery__item`, `.testimonial__text`, `.faq__question`
- **GSAP ScrollTrigger**: reveals progressivos com stagger nos cards de serviços e equipe
- **Carrossel manual**: depoimentos com auto-rotate 7s via JS/GSAP (sem Swiper/Glide)
- **Accordion com GSAP**: animação de altura suave com `power2.inOut`
- **Contadores animados**: GSAP `textContent` + `snap` com ScrollTrigger
- **Patinhas flutuantes**: GSAP `repeat: -1, yoyo: true` com random positions
- **Lightbox custom**: galeria com modal overlay via JS puro (sem biblioteca externa)
- **Hamburger overlay**: GSAP anima entrada/saída do menu mobile
- **Skip link presente**: `href="#main-content"` com `:focus` visível
- **Reduced motion**: media query que desativa animações
- **Favicon SVG**: `favicon/paw.svg` para identidade visual na aba
- **Footer back link**: `<a href="../../index.html">← Voltar ao Showcase</a>` presente
- **Formulário**: validação HTML5 + `aria-required`, submit com feedback visual
- **Preview image**: `preview.png` precisa ser criado para exibição na galeria

---

## 14. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json`:
   ```json
   {
     "id": "17",
     "title": "REFÚGIO PET",
     "category": "landing",
     "href": "projects/exemplo-17/index.html",
     "preview": "projects/exemplo-17/preview.png",
     "description": "Hotel e creche para pets com serviços premium, galeria e depoimentos.",
     "tags": ["HTML5", "CSS3", "GSAP"]
   }
   ```

2. Preview image at `projects/exemplo-17/preview.png`

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Refúgio Pet — Hotel & Creche para Pets**
> conforme projetada, documentada de forma que um designer consiga replicar o
> layout no Figma e um desenvolvedor consiga implementar ou modificar a interface
> — sem necessidade de briefing adicional.
