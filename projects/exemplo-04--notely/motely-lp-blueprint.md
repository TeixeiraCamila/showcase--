# Landing Page Blueprint — Notely

---

## Project Standards

These standards apply to every section of this landing page.

### Core Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

### Styling

- BEM Methodology (sem frameworks utility-first)

### Animations

- GSAP 3
- ScrollTrigger — scroll-driven animations
- SplitText — headline word/char entrance
- ScrollSmoother — smooth scroll global com parallax
- Observer — interações de swipe/drag
- DrawSVGPlugin — reveal de elementos SVG decorativos

### Quality Standards

- Mobile First
- Fully Responsive
- Accessibility First
- Lighthouse Score 95+
- Semantic HTML
- Optimized Images (AVIF/WebP)
- SEO Friendly

---

# Project Information

## Project Name

```text
Notely
```

## Industry

```text
E-commerce — Cadernos personalizados / Papelaria criativa
```

## Target Audience

```text
Criadores, escritores, estudantes e pessoas criativas (20–40 anos) que
valorizam objetos físicos com personalidade. Pessoas que presenteiam,
journalizam, fazem bullet journal ou sketchbook. Público feminino e
masculino com estética apurada e disposição para pagar por produtos
artesanais premium.
```

## Main Goal

```text
Product Sales — Converter visitantes em compradores do caderno personalizado.
CTA principal: "Design Yours Now" → leva ao configurador de produto.
```

---

# Design Direction

## Keywords

- Artesanal
- Caloroso
- Criativo
- Pessoal
- Lúdico com sofisticação

## Visual References

Extraídas do design anexo:

- **Reference 01** — Fundo creme quente (`#FAF6EC`) como base dominante.
  Sensação de papel, escrivaninha, caderno aberto. Anti-digital, anti-frio.
- **Reference 02** — Gradientes blob/aurora sutis no hero (rosa vinho + amarelo)
  simulando manchas de aquarela ou marcadores sobre papel.
- **Reference 03** — Footer em azul-marinho profundo (`#1E2A3B`) com ilustração
  de notebook abstrato (blocos de cor), criando contraste forte com o corpo claro.

## Design Signature

O elemento memorável: **a headline partido em dois pesos e duas cores** —
"Your story," em navy bold (quase black) e "your notebook" em crimson/vinho bold,
mesma fonte, mesma escala, linhas separadas. Cria uma tensão tipográfica que
communica personalização sem precisar dizer a palavra.

---

# Tech Stack

## Core

- HTML5
- CSS3 custom properties + BEM
- Vanilla JavaScript (ES6+)

---

## Styling — BEM Examples

```html
<!-- Navigation -->
<nav class="nav">
  <div class="nav__container">
    <a class="nav__logo" href="/">
      <span class="nav__logo-icon">...</span>
      <span class="nav__logo-text">notely</span>
    </a>
    <ul class="nav__menu">
      <li class="nav__item"><a class="nav__link" href="#home">Home</a></li>
      <li class="nav__item">
        <a class="nav__link" href="#history">History</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#features">Features</a>
      </li>
      <li class="nav__item">
        <a class="nav__link" href="#contact">Contact</a>
      </li>
    </ul>
    <a class="nav__cta btn btn--primary" href="#shop">Shop Now</a>
    <button class="nav__toggle" aria-label="Abrir menu">
      <span class="nav__toggle-bar"></span>
    </button>
  </div>
</nav>

<!-- Hero -->
<section class="hero" id="home">
  <div class="hero__container">
    <span class="hero__eyebrow">
      <svg class="hero__eyebrow-icon" aria-hidden="true">...</svg>
      Crafted just for you
    </span>
    <h1 class="hero__headline">
      <span class="hero__headline--dark">Your story,</span>
      <span class="hero__headline--crimson">your notebook</span>
    </h1>
    <p class="hero__description">...</p>
    <div class="hero__actions">
      <a class="hero__cta-primary btn btn--primary" href="#"
        >Design Yours Now</a
      >
      <a class="hero__cta-secondary btn btn--outline" href="#">See Examples</a>
    </div>
  </div>
  <div class="hero__blobs" aria-hidden="true">
    <div class="hero__blob hero__blob--yellow"></div>
    <div class="hero__blob hero__blob--crimson"></div>
  </div>
</section>

<!-- Features -->
<section class="features" id="features">
  <div class="features__container">
    <div class="features__grid">
      <div class="feature-card">
        <div class="feature-card__icon">...</div>
        <h3 class="feature-card__title">Fully Customizable</h3>
        <p class="feature-card__description">...</p>
      </div>
    </div>
  </div>
</section>

<!-- History -->
<section class="history" id="history">
  <div class="history__container">
    <div class="history__content">
      <h2 class="history__headline">Our History</h2>
      <p class="history__body">...</p>
    </div>
    <div class="history__media">
      <img class="history__image" src="..." alt="..." />
    </div>
  </div>
</section>

<!-- Newsletter -->
<section class="newsletter">
  <div class="newsletter__container">
    <div class="newsletter__shapes" aria-hidden="true">
      <div class="newsletter__shape newsletter__shape--left"></div>
      <div class="newsletter__shape newsletter__shape--right"></div>
    </div>
    <h2 class="newsletter__headline">Start creating today</h2>
    <p class="newsletter__subtext">...</p>
    <div class="newsletter__form">
      <input
        class="newsletter__input"
        type="email"
        placeholder="Enter your email"
      />
      <button class="newsletter__submit btn btn--icon" aria-label="Subscribe">
        <svg>...</svg>
      </button>
    </div>
  </div>
</section>

<!-- CTA Footer Band -->
<section class="cta-band">
  <div class="cta-band__container">
    <div class="cta-band__content">
      <h2 class="cta-band__headline">Every notebook tells a story</h2>
      <p class="cta-band__body">...</p>
      <a class="cta-band__btn btn btn--crimson" href="#">Start Designing</a>
    </div>
    <div class="cta-band__illustration" aria-hidden="true">...</div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="footer__container">
    <p class="footer__copy">© 2025 notely. Made with ♥ for creative minds</p>
  </div>
</footer>
```

---

## JavaScript Convention

```javascript
// Naming: camelCase, modular, sem frameworks

const navController = {}; // sticky nav + hamburger + mobile drawer
const heroAnimation = {}; // GSAP timeline de entrada do hero
const blobAnimation = {}; // animação contínua dos blobs de fundo
const featureCards = {}; // scroll reveal com stagger nos cards
const newsletterForm = {}; // validação de email + feedback visual
const scrollAnimations = {}; // ScrollTrigger reveals globais
```

Regras:

- camelCase para todas as variáveis e funções
- Estrutura modular — uma responsabilidade por objeto/função
- Funções utilitárias reutilizáveis
- Sem frameworks — apenas GSAP + plugins

---

## Allowed Libraries

### Required — GSAP Plugin Suite

```html
<!-- GSAP Core -->
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
  defer
></script>

<!-- Scroll -->
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
  defer
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollSmoother.min.js"
  defer
></script>

<!-- Text -->
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js"
  defer
></script>

<!-- UI / Interaction -->
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Observer.min.js"
  defer
></script>

<!-- SVG -->
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/DrawSVGPlugin.min.js"
  defer
></script>
```

```javascript
// Registrar todos os plugins no topo de main.js
gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Observer,
  DrawSVGPlugin,
);
```

### Responsabilidades por Plugin

| Plugin           | Usado Para                                   | Seções         |
| ---------------- | -------------------------------------------- | -------------- |
| `ScrollTrigger`  | Reveals, fade-ups, parallax dos blobs        | Todas          |
| `ScrollSmoother` | Smooth scroll + `data-speed` nos blobs       | Global         |
| `SplitText`      | Entrada da headline hero word por word       | Hero, CTA Band |
| `Observer`       | Detecção de swipe nos feature cards (mobile) | Features       |
| `DrawSVGPlugin`  | Reveal dos SVG decorativos dos shapes        | Newsletter     |

### Optional

```text
Sem dependências opcionais — projeto usa apenas GSAP nativo.
```

---

# Layout System

## Content Width

```css
.container {
  max-width: 1200px;
  padding-inline: clamp(20px, 4vw, 48px);
  margin-inline: auto;
}
```

## Text Width

```css
max-width: 600px;
```

Usado em: hero description, newsletter subtext, history body.

## Article Width

```css
max-width: 500px;
```

Usado em: history content block, cta-band content.

## Breakpoints

```css
/* sm  */ @media (min-width: 640px)  { ... }
/* md  */ @media (min-width: 768px)  { ... }
/* lg  */ @media (min-width: 1024px) { ... }
/* xl  */ @media (min-width: 1280px) { ... }
/* 2xl */ @media (min-width: 1536px) { ... }
```

---

# Color Palette

Todas as cores como custom properties em `:root`.

## Primary — Creme Quente

```css
--color-background: #faf6ec;
```

Base de toda a página acima do footer. Simula papel de caderno vintage.
Quente, acolhedor, artesanal.

## Surface

```css
--color-surface: #ffffff;
--color-surface-warm: #f5f0e4;
```

Usado em: cards de features, history card background, inputs.

## Navy / Dark

```css
--color-navy: #1e2a3b;
```

Usado em: footer/CTA band background, texto da headline hero ("Your story,"),
nav links, body text escuro.

## Crimson / Vinho

```css
--color-crimson: #8b1a3a;
```

Usado em: segunda linha da headline hero ("your notebook"), logo icon,
botão primário "Design Yours Now", botão "Start Designing", links de destaque,
badge "Fully Customizable" label.

## Amber / Amarelo Manteiga

```css
--color-amber: #f5d87a;
```

Usado em: blob de fundo no hero (canto superior direito), ilustração no
CTA band (blocos de cor), feature card icon background (sutil).

## Texto

```css
--color-text-primary: #1e2a3b; /* navy — headlines e body */
--color-text-secondary: #5a6272; /* cinza slate — subtextos, labels */
--color-text-light: #faf6ec; /* sobre fundos escuros (cta band, footer) */
--color-text-muted: rgba(30, 42, 59, 0.55); /* placeholders, captions */
```

## Blob Colors (Hero background)

```css
--color-blob-yellow: rgba(245, 216, 122, 0.45); /* canto sup direito */
--color-blob-crimson: rgba(139, 26, 58, 0.18); /* canto inf esquerdo */
```

---

# Typography

Fontes carregadas do Google Fonts com `display=swap`.

## Heading Font — Playfair Display

```css
font-family: "Playfair Display", serif;
```

Pesos: 700, 800

Uso: Headline hero (H1), "Our History" (H2), "Every notebook tells a story" (H2).
Serifado com personalidade editorial — evoca cadernos, literatura, artesanato.
Comunica premium sem ser frio.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap"
  rel="stylesheet"
/>
```

## Body Font — Inter

```css
font-family: "Inter", sans-serif;
```

Pesos: 400, 500, 600

Uso: Nav links, descrições, feature cards, newsletter, footer.
Geométrica neutra que equilibra o serifado expressivo do display.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

## Escala Tipográfica

```css
--text-xs: 0.75rem; /* 12px — captions, copyright */
--text-sm: 0.875rem; /* 14px — nav links, labels */
--text-base: 1rem; /* 16px — body text */
--text-lg: 1.125rem; /* 18px — lead text, feature descriptions */
--text-xl: 1.25rem; /* 20px — feature card titles */
--text-2xl: 1.5rem; /* 24px — sub-headings */
--text-3xl: 2rem; /* 32px — section headings */
--text-4xl: 2.75rem; /* 44px — hero headline (mobile) */
--text-5xl: 3.75rem; /* 60px — hero headline (desktop) */
--text-6xl: 5rem; /* 80px — hero headline (wide) */
```

## Tratamento Especial da Headline Hero

```css
.hero__headline {
  font-family: "Playfair Display", serif;
  font-weight: 800;
  font-size: clamp(2.75rem, 6vw, 5rem);
  line-height: 1.1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.hero__headline--dark {
  color: var(--color-navy); /* #1E2A3B */
}

.hero__headline--crimson {
  color: var(--color-crimson); /* #8B1A3A */
  font-style: italic; /* leve inclinação na linha crimson */
}
```

---

# Radius System

## Botões

```css
--radius-btn: 999px; /* pill completo */
```

## Cards (Feature cards, History card)

```css
--radius-card: 20px;
```

## Inputs

```css
--radius-input: 999px; /* pill — consistente com botões */
```

## Imagens

```css
--radius-image: 16px;
```

## Ilustração CTA Band

```css
--radius-illustration: 20px;
```

## Blobs de fundo

```css
/* Sem border-radius — são formas orgânicas com filter: blur() */
border-radius: 50%;
filter: blur(80px);
```

---

# Shadow System

## Card

```css
--shadow-card: 0 4px 24px rgba(30, 42, 59, 0.08);
```

## Card Hover

```css
--shadow-card-hover: 0 8px 40px rgba(30, 42, 59, 0.14);
```

## History Card (card mais proeminente)

```css
--shadow-history: 0 12px 48px rgba(30, 42, 59, 0.1);
```

## Input Focus

```css
--shadow-focus: 0 0 0 3px rgba(139, 26, 58, 0.2);
```

---

# Spacing System

```css
--space-1: 4px --space-2: 8px --space-3: 12px --space-4: 16px --space-6: 24px
  --space-8: 32px --space-12: 48px --space-16: 64px --space-20: 80px
  --space-30: 120px --space-40: 160px;
```

Section padding vertical: `clamp(64px, 8vw, 100px)` top e bottom.
Exceção: Hero tem padding-top extra para compensar nav transparente.

---

# Favicon

## Status

```text
✅ Favicon já adicionado ao projeto — usar o arquivo existente.
   Referenciar corretamente no <head>.
```

## HTML Reference

```html
<head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#FAF6EC" />
</head>
```

`theme-color: #FAF6EC` — o creme quente da marca na barra do navegador mobile.

## Conceito Visual

O ícone da Notely é o logo mark visível no nav: um caderno aberto estilizado
dentro de um quadrado com cantos arredondados, em crimson `#8B1A3A` sobre
branco/creme. Simples, reconhecível em tamanhos pequenos.

---

# Navigation

## Desktop Layout

```text
[ notely logo ]     Home  History  Features  Contact     [ Shop Now ]
```

Alinhamento: logo à esquerda, links centrados, CTA pill à direita.
Nav links em Inter 500, text-sm, cor `--color-text-primary`.

## Mobile Layout

```text
[ notely logo ]                                           [ ☰ ]
```

Hamburger abre overlay drawer com links em tamanho maior (text-xl).
Drawer desliza da direita, fundo branco/creme com leve backdrop blur.

## CTA Nav Style

```css
.nav__cta {
  background: var(--color-navy); /* #1E2A3B */
  color: var(--color-text-light);
  padding: 10px 20px;
  border-radius: var(--radius-btn);
  font-size: var(--text-sm);
  font-weight: 600;
}
.nav__cta:hover {
  background: #2a3a52;
}
```

## Sticky Behavior

Default: fundo transparente sobre o hero creme.
Após scroll (>60px): background `rgba(250, 246, 236, 0.92)` com
`backdrop-filter: blur(12px)` e `box-shadow: 0 1px 20px rgba(30,42,59,0.08)`.
Transição suave 250ms ease.

---

# Shapes System

## Shape A — Blobs de Aquarela (Hero)

Dois `<div>` com `border-radius: 50%`, `filter: blur(80px)` e
`mix-blend-mode: multiply`, posicionados absolutamente no hero.

```css
.hero__blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 0;
}

.hero__blob--yellow {
  width: 360px;
  height: 320px;
  background: var(--color-blob-yellow);
  top: -40px;
  right: -60px;
}

.hero__blob--crimson {
  width: 280px;
  height: 260px;
  background: var(--color-blob-crimson);
  bottom: 40px;
  left: -80px;
}
```

Animados com GSAP `gsap.to()` em loop infinito com movement orgânico sutil
(scale + translate + rotation lenta, 8–12s, yoyo).

```
Propósito: Adicionar profundidade e calor ao fundo creme sem imagens.
           Evoca aquarela, marcadores, papel de caderno artístico.
```

## Shape B — Círculos Decorativos (Newsletter)

Dois círculos outline flutuantes à esquerda e direita da seção newsletter.

```css
.newsletter__shape {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(139, 26, 58, 0.2);
  pointer-events: none;
}

.newsletter__shape--left {
  width: 60px;
  height: 60px;
  left: 8%;
  top: 50%;
  transform: translateY(-50%);
}

.newsletter__shape--right {
  width: 100px;
  height: 100px;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
}
```

Animados com GSAP: flutuação vertical suave (y ±12px, 4s, yoyo, ease: sine.inOut).

```
Propósito: Equilíbrio visual na seção newsletter sem competir com o form.
```

## Shape C — Ilustração de Notebook (CTA Band)

Componente SVG/HTML abstrato no lado direito do CTA band:
retângulo navy com linhas horizontais simulando texto + dois blocos de cor
(amber e crimson) simulando layout de página de caderno.

```html
<div class="notebook-illustration" aria-hidden="true">
  <div class="notebook-illustration__page">
    <div
      class="notebook-illustration__line notebook-illustration__line--navy"
    ></div>
    <div
      class="notebook-illustration__line notebook-illustration__line--crimson"
    ></div>
    <div class="notebook-illustration__blocks">
      <div
        class="notebook-illustration__block notebook-illustration__block--amber"
      ></div>
      <div
        class="notebook-illustration__block notebook-illustration__block--crimson"
      ></div>
    </div>
  </div>
</div>
```

```
Propósito: Âncora visual no CTA band sem necessitar de fotografia.
           Reforça o produto de forma abstrata e marcante.
```

## Decorative Elements

- Blobs CSS blur (Shape A)
- Círculos outline SVG (Shape B)
- Ilustração notebook CSS (Shape C)
- Eyebrow icon: pencil/sparkle pequeno no topo da hero

---

# Sections

## 01 Hero

### Goal

Comunicar imediatamente a proposta de personalização e converter visitantes
no CTA "Design Yours Now".

### Layout

```
Desktop (full-width, centrado):

┌──────────────────────────────────────────────────────────────┐
│  NAV: notely ──────── Home History Features Contact ── [Shop]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│              🖊 Crafted just for you                         │
│                                                              │
│              Your story,                                     │
│              your notebook           ← headline signature    │
│                                                              │
│    Create beautifully personalized notebooks that            │
│    inspire your creativity. Every page is a blank canvas.   │
│                                                              │
│         [ Design Yours Now ]  [ See Examples ]              │
│                                                              │
│  blob yellow (top-right)          blob crimson (btm-left)   │
└──────────────────────────────────────────────────────────────┘

Mobile: idêntico, headline menor, botões em coluna.
```

### Components

- `hero__eyebrow` — Inter 500, text-sm, crimson, ícone pencil à esquerda
- `hero__headline` — Playfair Display 800, duas linhas, dois colors
- `hero__description` — Inter 400, text-base, color `--color-text-secondary`,
  max-width 540px, text-align center
- `hero__cta-primary` — pill crimson bg, branco
- `hero__cta-secondary` — pill outline (border navy), texto navy
- `hero__blobs` — dois divs blur (Shape A), posição absoluta, z-index 0

### Background

`--color-background` (`#FAF6EC`) com os blobs de aquarela.
Todo conteúdo com `position: relative; z-index: 1`.

### CTA

Primary: "Design Yours Now" — bg crimson, texto branco.
Secondary: "See Examples" — outline navy, texto navy.

---

## 02 Features

### Goal

Apresentar os três diferenciais do produto de forma rápida e visualmente balanceada.

### Layout

```
Desktop (três cards lado a lado, centrados):

┌──────────────────────────────────────────────────────────┐
│  BG: --color-background (transição suave do hero)        │
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │   ✦ icon     │  │   ♥ icon     │  │   📦 icon    │   │
│  │              │  │              │  │              │   │
│  │   Fully      │  │   Made with  │  │   Quick      │   │
│  │ Customizable │  │    Love      │  │  Delivery    │   │
│  │              │  │              │  │              │   │
│  │  description │  │  description │  │  description │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
└──────────────────────────────────────────────────────────┘

Mobile: coluna única, cards full-width.
```

### Components

- `feature-card` — bg `--color-surface` (#FFF), border-radius `--radius-card`,
  padding 24px, text-align center, `--shadow-card`
- `feature-card__icon` — container 56x56px, bg `--color-surface-warm`,
  border-radius 50%, icon Lucide 24px no centro
- `feature-card__title` — Inter 600, text-xl, color `--color-crimson`
- `feature-card__description` — Inter 400, text-sm, color `--color-text-secondary`

### Ícones (Lucide)

```text
Fully Customizable → sparkles  (ou cpu, pencil)
Made with Love     → heart
Quick Delivery     → package   (ou truck)
```

---

## 03 History

### Goal

Construir credibilidade e conexão emocional narrando a origem da marca.

### Layout

```
Desktop (dois blocos: card de texto esq / imagem dir, 55/45):

┌──────────────────────────────────────────────────────────────┐
│  BG: --color-background                                      │
│                                                              │
│  ┌─────────────────────────────┐   ┌──────────────────────┐  │
│  │  Our History                │   │                      │  │
│  │                             │   │  [Foto: mãos seguram │  │
│  │  Notely began as a simple   │   │   caderno com texto  │  │
│  │  experiment: sketching...   │   │   "Your Story, Your  │  │
│  │                             │   │    Notebook"]        │  │
│  │  We mix analog warmth with  │   │                      │  │
│  │  digital precision...       │   │                      │  │
│  └─────────────────────────────┘   └──────────────────────┘  │
└──────────────────────────────────────────────────────────────┘

Mobile: empilhado, imagem abaixo do texto.
```

### Components

- `history` — container full-width, bg leve diferente: `--color-surface-warm`
  (`#F5F0E4`) para separar visualmente do hero
- `history__content` — card com bg `--color-surface` (#FFF), padding 40px,
  border-radius `--radius-card`, `--shadow-history`
- `history__headline` — Playfair Display 700, text-3xl, color `--color-navy`
- `history__body` — Inter 400, text-base, color `--color-text-secondary`,
  line-height 1.7. Dois parágrafos distintos.
- `history__media` — imagem com `--radius-image`, `--shadow-history`,
  object-fit: cover, aspect-ratio 4/5

---

## 04 Newsletter

### Goal

Capturar e-mails de visitantes não prontos para comprar, construindo a lista.

### Layout

```
Desktop (centrado, full-width):

┌──────────────────────────────────────────────────────────┐
│  BG: --color-background                                  │
│                                                          │
│  ○ (shape left)          ○ (shape right, maior)         │
│                                                          │
│            Start creating today                          │
│      Join thousands of happy creators who've            │
│         made their perfect notebook                      │
│                                                          │
│         [ Enter your email      ] [→]                   │
└──────────────────────────────────────────────────────────┘
```

### Components

- `newsletter__headline` — Playfair Display 700, text-3xl, color `--color-navy`
- `newsletter__subtext` — Inter 400, text-base, color `--color-text-secondary`
- `newsletter__form` — display flex, gap 8px
- `newsletter__input` — pill, bg `--color-surface`, border `1px solid rgba(30,42,59,0.15)`,
  padding 14px 20px, Inter 400, text-base, placeholder muted
- `newsletter__input:focus` — border-color `--color-crimson`, `--shadow-focus`, outline none
- `newsletter__submit` — quadrado pill (48x48px), bg `--color-crimson`, ícone `send` branco

---

## 05 CTA Band

### Goal

Último empurrão de conversão antes do footer.

### Layout

```
Desktop (dois blocos: texto esq / ilustração dir, 60/40):

┌──────────────────────────────────────────────────────────────┐
│  BG: --color-navy (#1E2A3B)                                  │
│                                                              │
│  Every notebook tells        ┌──────────────────────────┐   │
│  a story                     │  [Notebook Illustration] │   │
│                              │  linhas + blocos amber e  │   │
│  Whether you're journaling,  │  crimson sobre navy       │   │
│  sketching, planning...      └──────────────────────────┘   │
│                                                              │
│  [ Start Designing ]                                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘

Mobile: empilhado, ilustração acima do texto.
```

### Components

- `cta-band` — bg `--color-navy`, padding vertical generoso
- `cta-band__headline` — Playfair Display 800, text-4xl, color white, line-height 1.15
- `cta-band__body` — Inter 400, text-base, color `rgba(250,246,236,0.70)`, max-width 380px
- `cta-band__btn` — pill, bg `--color-crimson`, cor branca, hover: brightness(1.1)
- `cta-band__illustration` — Shape C (notebook illustration CSS)

---

## 06 Footer

### Layout

```
┌──────────────────────────────────────────────────────────┐
│  BG: --color-navy (continuação do CTA band)              │
│  border-top: 1px solid rgba(250,246,236,0.10)            │
│                                                          │
│     © 2025 notely. Made with ♥ for creative minds        │
└──────────────────────────────────────────────────────────┘
```

### Components

- `footer` — bg `--color-navy`, padding 24px 0
- `footer__container` — centrado, text-align center
- `footer__copy` — Inter 400, text-xs, color `rgba(250,246,236,0.50)`
- `♥` — colorido com `--color-crimson` via `<span class="footer__heart">`

---

# Components

## Buttons

### Primary — Crimson Pill

```css
.btn--primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--color-crimson);
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: var(--radius-btn);
  border: none;
  cursor: pointer;
  transition:
    background 200ms ease,
    transform 150ms ease;
}
.btn--primary:hover {
  background: #7a1532;
  transform: translateY(-1px);
}
.btn--primary:active {
  transform: translateY(0);
}
```

### Secondary — Outline Navy

```css
.btn--outline {
  background: transparent;
  border: 1.5px solid var(--color-navy);
  color: var(--color-navy);
  padding: 13px 26px;
  border-radius: var(--radius-btn);
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: var(--text-sm);
  cursor: pointer;
  transition:
    background 200ms ease,
    color 200ms ease;
}
.btn--outline:hover {
  background: var(--color-navy);
  color: var(--color-text-light);
}
```

### Tertiary — CTA Band (Crimson sobre Navy)

```css
.btn--crimson {
  /* Igual ao btn--primary mas com padding maior e font-size base */
  padding: 16px 32px;
  font-size: var(--text-base);
}
```

### Icon Button — Newsletter Submit

```css
.btn--icon {
  width: 48px;
  height: 48px;
  padding: 0;
  background: var(--color-crimson);
  border-radius: var(--radius-btn);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  transition:
    background 200ms ease,
    transform 150ms ease;
}
.btn--icon:hover {
  background: #7a1532;
  transform: scale(1.05);
}
/* Icon: Lucide send, 18px, branco */
```

---

## Feature Card

```css
.feature-card {
  background: var(--color-surface);
  border-radius: var(--radius-card);
  padding: 32px 24px;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition:
    box-shadow 250ms ease,
    transform 250ms ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.feature-card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-4px);
}

.feature-card__icon {
  width: 56px;
  height: 56px;
  background: var(--color-surface-warm);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
/* Icon: Lucide 24px, color --color-crimson ou --color-navy */
```

---

## Newsletter Input

```css
.newsletter__input {
  flex: 1;
  padding: 14px 20px;
  background: var(--color-surface);
  border: 1.5px solid rgba(30, 42, 59, 0.15);
  border-radius: var(--radius-input);
  font-family: "Inter", sans-serif;
  font-size: var(--text-base);
  color: var(--color-text-primary);
  outline: none;
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease;
}
.newsletter__input::placeholder {
  color: var(--color-text-muted);
}
.newsletter__input:focus {
  border-color: var(--color-crimson);
  box-shadow: var(--shadow-focus);
}
```

---

## Eyebrow (Hero)

```css
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--color-crimson);
  margin-bottom: 12px;
}
/* Ícone: Lucide pencil ou sparkles, 14px */
```

---

# Icon System

## Library

- Lucide Icons (CDN ou SVG sprite inline)

## Icons Usados

```text
pencil / sparkles   — Hero eyebrow
sparkles            — Feature: Fully Customizable
heart               — Feature: Made with Love
package             — Feature: Quick Delivery
send                — Newsletter submit button
menu                — Mobile hamburger (open)
x                   — Mobile hamburger (close)
```

---

# Photography Direction

## Style

- Mãos segurando cadernos — sensação de posse, toque, textura do papel
- Iluminação natural, quente (mesa de madeira, luz de janela)
- Cadernos com personalidade: capas coloridas, escritas à mão visíveis
- Ambientes criativos: escrivaninha bagunçada, café, estúdio de arte
- Tons harmônicos com a paleta: cremes, vinhos, amarelos, madeiras

## Avoid

- Pessoas sorridentes staged em contextos corporativos
- Fundos brancos estéreis de estúdio
- Fotografia fria ou azulada
- Close-ups de texto ilegível que pareça genérico
- Stacks de cadernos sem identidade visual

## Slots de Imagem

```text
history__image   — Mãos segurando caderno aberto com "Your Story, Your
                   Notebook" escrito nas páginas. Tom quente, desfoque suave.
                   Aspect ratio 4/5.
```

---

# GSAP Motion System

## Plugin Registration

```javascript
gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Observer,
  DrawSVGPlugin,
);
```

---

## ScrollSmoother — Setup Global

```html
<div id="smooth-wrapper">
  <div id="smooth-content">
    <!-- todo conteúdo da página -->
  </div>
</div>
```

```javascript
ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.2,
  effects: true,
  smoothTouch: 0.1,
});
```

```html
<!-- Parallax declarativo: blobs se movem mais devagar que o scroll -->
<div class="hero__blob hero__blob--yellow" data-speed="0.80"></div>
<div class="hero__blob hero__blob--crimson" data-speed="0.85"></div>
```

---

## SplitText — Headline Hero

```javascript
function animateHeroHeadline() {
  // Divide cada span da headline em words
  const splitDark = SplitText.create(".hero__headline--dark", {
    type: "words",
    mask: "words",
  });
  const splitCrimson = SplitText.create(".hero__headline--crimson", {
    type: "words",
    mask: "words",
  });

  const tl = gsap.timeline({ delay: 0.4 });

  tl.from(splitDark.words, {
    y: "110%",
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.08,
  }).from(
    splitCrimson.words,
    {
      y: "110%",
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
    },
    "-=0.3",
  );
}
```

---

## Blob Animation — Movimento Orgânico Contínuo

```javascript
function initBlobAnimation() {
  // Blob amarelo: expansão e deriva suave
  gsap.to(".hero__blob--yellow", {
    x: 30,
    y: -20,
    scale: 1.08,
    duration: 10,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  // Blob crimson: movimento ligeiramente diferente para não ficarem sincronizados
  gsap.to(".hero__blob--crimson", {
    x: -20,
    y: 25,
    scale: 1.05,
    duration: 8,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1.5,
  });
}
```

---

## Hero — Entrance Sequence

```javascript
function initHeroAnimation() {
  const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

  heroTl
    .from(".nav", { y: -30, opacity: 0, duration: 0.5 })
    .from(".hero__eyebrow", { y: 20, opacity: 0, duration: 0.5 }, "-=0.1")
    .add(() => animateHeroHeadline(), "-=0.1")
    .from(".hero__description", { y: 20, opacity: 0, duration: 0.5 }, "+=0.1")
    .from(
      ".hero__actions > *",
      {
        y: 15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.12,
      },
      "-=0.2",
    );
}
```

---

## Feature Cards — Scroll Reveal com Stagger

```javascript
gsap.from(".feature-card", {
  scrollTrigger: {
    trigger: ".features__grid",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 40,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.15,
});
```

---

## History — Entrada Split

```javascript
// Conteúdo (card de texto) entra da esquerda
gsap.from(".history__content", {
  scrollTrigger: { trigger: ".history", start: "top 75%" },
  x: -40,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});

// Imagem entra da direita
gsap.from(".history__media", {
  scrollTrigger: { trigger: ".history", start: "top 75%" },
  x: 40,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  delay: 0.1,
});
```

---

## Newsletter Shapes — Flutuação Contínua

```javascript
function initShapeFloating() {
  gsap.to(".newsletter__shape--left", {
    y: -12,
    duration: 4,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
  });

  gsap.to(".newsletter__shape--right", {
    y: 12,
    duration: 5.5,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    delay: 1,
  });
}
```

---

## ScrollTrigger — Reveals Genéricos

```javascript
// Classe .reveal-up em qualquer elemento que precise de fade-up on scroll
gsap.utils.toArray(".reveal-up").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 0.65,
    ease: "power2.out",
  });
});
```

---

## Observer — Mobile Feature Cards Swipe

```javascript
// Em mobile, os feature cards viram um slider horizontal
let activeCard = 0;
const cards = gsap.utils.toArray(".feature-card");

function showCard(index) {
  cards.forEach((card, i) => {
    gsap.to(card, {
      opacity: i === index ? 1 : 0.4,
      scale: i === index ? 1 : 0.92,
      duration: 0.3,
    });
  });
  activeCard = index;
}

// Só ativa em mobile
if (window.innerWidth < 768) {
  Observer.create({
    target: ".features__grid",
    type: "touch,pointer",
    onRight: () => showCard(Math.max(activeCard - 1, 0)),
    onLeft: () => showCard(Math.min(activeCard + 1, cards.length - 1)),
    tolerance: 15,
  });
}
```

---

## CTA Band — Entrada Headline

```javascript
function animateCtaBand() {
  const split = SplitText.create(".cta-band__headline", {
    type: "lines",
    mask: "lines",
  });

  gsap.from(split.lines, {
    scrollTrigger: { trigger: ".cta-band", start: "top 70%" },
    y: "100%",
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
    stagger: 0.12,
  });
}

gsap.from(".cta-band__body, .cta-band__btn", {
  scrollTrigger: { trigger: ".cta-band", start: "top 65%" },
  y: 20,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.15,
  delay: 0.3,
});
```

---

## Reduced Motion — gsap.matchMedia

```javascript
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
  initHeroAnimation();
  initBlobAnimation();
  initShapeFloating();
  initFeatureReveals();
  initHistoryAnimation();
  animateCtaBand();
  initGenericReveals();
});

mm.add("(prefers-reduced-motion: reduce)", () => {
  // Garante visibilidade sem movimento
  gsap.set(
    [
      ".hero__eyebrow",
      ".hero__headline--dark",
      ".hero__headline--crimson",
      ".hero__description",
      ".hero__actions > *",
      ".feature-card",
      ".history__content",
      ".history__media",
      ".cta-band__headline",
    ],
    { opacity: 1, y: 0, x: 0 },
  );
});
```

---

# Accessibility

- **HTML Semântico** — `<nav>`, `<main>`, `<section>`, `<footer>`, hierarquia
  H1 → H2 → H3 correta
- **Keyboard Navigation** — todos os elementos interativos acessíveis por
  Tab/Enter/Space/Escape
- **Focus Visible** —
  ```css
  :focus-visible {
    outline: 2px solid var(--color-crimson);
    outline-offset: 3px;
  }
  ```
- **Reduced Motion** — todas animações GSAP dentro de `gsap.matchMedia`
  com condição `prefers-reduced-motion: no-preference`
- **ARIA Labels** — botões icon-only têm `aria-label`; blobs e shapes decorativos
  têm `aria-hidden="true"`
- **Alt Text** — `history__image` descreve a cena da foto; logo tem alt "notely"
- **Contraste de Cor** — crimson `#8B1A3A` sobre creme `#FAF6EC`: ~7.8:1 (WCAG AAA).
  Navy `#1E2A3B` sobre creme `#FAF6EC`: ~12.1:1 (WCAG AAA).
- **Form Label** — input de email tem `<label>` visualmente oculto mas presente
  no DOM: `<label for="newsletter-email" class="sr-only">Seu e-mail</label>`
- **SplitText** — o `mask: 'words'` cria overflow hidden; não impacta screen readers
  (o texto original permanece no DOM)

---

# Performance

Target:

```text
95+ Lighthouse Performance Score
```

Otimizações:

- **Formatos de imagem** — AVIF primário, WebP fallback, via `<picture>`
- **Lazy loading** — `loading="lazy"` em `history__image`; hero sem lazy (above fold)
- **Font preload** — `<link rel="preload" as="font">` para Playfair Display 700/800
  e Inter 400/600
- **GSAP deferred** — todos os `<script>` com atributo `defer`
- **CSS crítico** — estilos do hero + nav inlined no `<head>` para evitar FOUC
- **Blobs** — implementados em CSS puro (sem canvas ou WebGL), zero custo de JS
- **Sem imagens desnecessárias** — ilustração do CTA band é 100% CSS/HTML,
  sem arquivo de imagem
- **ScrollSmoother** — usar `will-change: transform` apenas no `#smooth-content`,
  evitar em elementos individuais

---

# UX Principles

- **Mobile First** — todo CSS escrito com `min-width` breakpoints
- **Hierarquia Clara** — headline hero é o único H1; cada seção tem um H2 distinto
- **Um CTA Principal por Seção** — hero: "Design Yours Now"; newsletter: submit;
  cta-band: "Start Designing". Sem CTAs concorrentes no mesmo nível
- **Interações Rápidas** — todas as hover transitions ≤ 200ms; tap targets ≥ 44×44px
- **Consistência Visual** — crimson usado exclusivamente para ações e destaques;
  navy para autoridade; creme para repouso
- **Feedback de Form** — input com estado de erro (border vermelho + mensagem)
  e sucesso (border verde + "You're on the list! ✓") via JS
- **Legibilidade** — máximo 65 caracteres por linha no body text; line-height 1.7

---

# Rule

```text
Esta landing page está documentada de forma que um designer consiga criar
o layout completo no Figma e um desenvolvedor consiga implementar a interface
apenas lendo este blueprint — sem necessidade de briefing adicional.
```
