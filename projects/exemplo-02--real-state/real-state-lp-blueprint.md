# Landing Page Blueprint — SK Builders

---

## Project Standards

These standards apply to every section of this landing page.

### Core Stack

* HTML5
* CSS3
* Vanilla JavaScript (ES6+)

### Styling

* BEM Methodology (no utility-first frameworks)

### Animations

* GSAP 3
* ScrollTrigger — scroll-driven animations
* SplitText — character/word/line headline animations
* ScrollSmoother — native smooth scroll with parallax
* Observer — pointer/touch/wheel event unification
* DrawSVG — SVG botanical line-draw reveals

### Quality Standards

* Mobile First
* Fully Responsive
* Accessibility First
* Lighthouse Score 95+
* Semantic HTML
* Optimized Images (AVIF/WebP)
* SEO Friendly

---

# Project Information

## Project Name

```text
SK Builders
```

## Industry

```text
Real Estate — Luxury Residential Properties
```

## Target Audience

```text
High-income buyers and investors (35–60 years old) seeking luxury residential
properties, vacation homes, or real estate investment opportunities.
International clientele with purchasing power.
```

## Main Goal

```text
Lead Generation — Drive qualified prospects to contact the sales team
or schedule a property visit.
```

---

# Design Direction

## Keywords

* Premium
* Modern
* Nature-connected
* Trustworthy
* Sophisticated

## Visual References

Based on the provided design preview:

* **Reference 01** — Deep forest green as dominant background with large
  bold white headlines. Maximum visual contrast, luxury real estate feel.
* **Reference 02** — Organic shapes for image containers (pill/squircle
  with large border-radius), breaking the typical grid rigidity.
* **Reference 03** — Subtle SVG leaf/botanical line art overlaid on
  sections at low opacity (5–10%), creating texture without noise.

## Design Signature

The single memorable element: **oversized typography with a ghost layer** —
the headline appears in full-weight white, and the same text repeats directly
below in a low-opacity muted green, shifted slightly, creating a dimensional
echo effect. This is used exclusively in the Hero and the CTA section for
maximum impact.

---

# Tech Stack

## Core

* HTML5
* CSS3 custom properties + BEM
* Vanilla JavaScript (ES6+)

---

## Styling — BEM Examples

```html
<!-- Navigation -->
<nav class="nav">
  <div class="nav__container">
    <a class="nav__logo" href="/">...</a>
    <ul class="nav__menu">
      <li class="nav__item"><a class="nav__link" href="#">Home</a></li>
    </ul>
    <a class="nav__cta btn btn--outline" href="#">Get Started</a>
    <button class="nav__toggle" aria-label="Open menu">...</button>
  </div>
</nav>

<!-- Hero -->
<section class="hero">
  <div class="hero__container">
    <div class="hero__content">
      <h1 class="hero__headline">
        <span class="hero__headline-main">Experience The</span>
        <span class="hero__headline-ghost" aria-hidden="true">Experience The</span>
      </h1>
      <p class="hero__description">...</p>
      <a class="hero__cta btn btn--primary" href="#">Get Started</a>
    </div>
    <div class="hero__media">
      <div class="hero__image-wrapper">
        <img class="hero__image" src="..." alt="..." />
      </div>
      <div class="hero__badge">...</div>
    </div>
  </div>
  <div class="hero__shapes" aria-hidden="true">...</div>
</section>

<!-- About -->
<section class="about">
  <div class="about__container">
    <div class="about__text">...</div>
    <div class="about__stats">
      <div class="stat">
        <span class="stat__number">10+</span>
        <span class="stat__label">Homes Delivered</span>
      </div>
    </div>
    <div class="about__media">
      <div class="about__image-wrapper">
        <img class="about__image" src="..." alt="..." />
        <span class="about__image-label">Dream House</span>
      </div>
    </div>
  </div>
</section>
```

---

## JavaScript Convention

```javascript
// Naming: camelCase, modular, no frameworks

const navController = {};       // sticky nav + hamburger logic
const heroAnimation = {};       // GSAP hero entrance sequence
const statsCounter = {};        // animated number counter
const projectSlider = {};       // Swiper instance for project gallery
const scrollAnimations = {};    // ScrollTrigger reveal registrations
const mobileMenu = {};          // mobile drawer open/close
```

Rules:

* camelCase for all variables and functions
* Modular structure — one responsibility per object/function
* Reusable utility functions (e.g., `animateOnScroll(el, vars)`)
* No frameworks — GSAP + ScrollTrigger only

---

## Allowed Libraries

### Required — GSAP Plugin Suite

All loaded via CDN (`cdnjs.cloudflare.com` or GSAP's own CDN). Register all
plugins immediately after import.

```html
<!-- GSAP Core -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>

<!-- Scroll -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollSmoother.min.js" defer></script>

<!-- Text -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js" defer></script>

<!-- UI / Interaction -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Observer.min.js" defer></script>

<!-- SVG -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/DrawSVGPlugin.min.js" defer></script>
```

```javascript
// Register all plugins at top of main.js
gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Observer,
  DrawSVGPlugin
);
```

### Plugin Responsibilities

| Plugin | Used For | Sections |
|---|---|---|
| `ScrollTrigger` | Scroll-driven reveals, counters, parallax | All sections |
| `ScrollSmoother` | Native smooth scroll + `data-speed` parallax | Global wrapper |
| `SplitText` | Headline char/word entrance animations | Hero, CTA |
| `Observer` | Swipe detection for mobile slider fallback | Project slider |
| `DrawSVGPlugin` | SVG botanical line-draw reveal on scroll | Hero, About shapes |

### Optional

```text
Swiper — Project gallery slider (if Observer-based custom slider is not used)
```

---

# Layout System

## Content Width

```css
.container {
  max-width: 1440px;
  padding-inline: clamp(20px, 4vw, 48px);
  margin-inline: auto;
}
```

## Text Width

```css
max-width: 720px;
```

Used for: hero descriptions, section intros, about body text.

## Article Width

```css
max-width: 860px;
```

Used for: FAQ answers, long-form text blocks.

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

All colors defined as CSS custom properties on `:root`.

## Primary — Forest Green

```css
--color-primary: #2D5A3D;
```

Usage: Hero background, section backgrounds, nav background (scrolled state),
footer background. The dominant identity color of the brand.

## Primary Dark — Deep Forest

```css
--color-primary-dark: #1A3D28;
```

Usage: About section dark background, CTA section dark variant, hover states
on dark surfaces.

## Secondary — Warm Amber / Peach

```css
--color-secondary: #E8A87C;
```

Usage: Arrow-CTA buttons (circular icon buttons), stat highlight accents,
badge outlines, hover glow on CTAs. The warm counterpoint to the green.

## Accent — Off-White / Cream

```css
--color-accent: #F0EDE6;
```

Usage: Primary headline text, body text on dark backgrounds, logo text,
nav links in default state.

## Ghost — Muted Sage

```css
--color-ghost: rgba(144, 179, 156, 0.18);
```

Usage: Ghost headline layer behind the main headline (the signature
typographic echo effect). Also used for subtle decorative SVG lines.

## Background

```css
--color-background: #F5F4F0;   /* Off-white page base (light sections) */
--color-surface: #FFFFFF;      /* Card surfaces */
--color-surface-dark: #1C1C1C; /* About section dark strip, CTA section */
```

## Text

```css
--color-text-primary:   #F0EDE6; /* On dark backgrounds */
--color-text-secondary: rgba(240, 237, 230, 0.65); /* Muted on dark */
--color-text-dark:      #1A1A1A; /* On light backgrounds */
--color-text-muted:     #6B7B72; /* Subtitles, labels on light */
```

---

# Typography

All fonts loaded from Google Fonts with `display=swap`.

## Heading Font — Barlow Condensed

```css
font-family: 'Barlow Condensed', sans-serif;
```

Weights: 700, 800, 900

Usage: All section headings (H1–H3), hero headline, CTA headline.
Characteristic uppercase, extra-condensed treatment for the hero.

Import:
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap" rel="stylesheet">
```

## Body Font — DM Sans

```css
font-family: 'DM Sans', sans-serif;
```

Weights: 400, 500, 600

Usage: Body copy, navigation links, button labels, stat labels, footer text.
Clean geometric sans-serif that complements the condensed display face.

Import:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

## Type Scale

```css
--text-xs:   0.75rem;    /* 12px — labels, captions */
--text-sm:   0.875rem;   /* 14px — nav links, footer links */
--text-base: 1rem;       /* 16px — body text */
--text-lg:   1.125rem;   /* 18px — lead paragraph */
--text-xl:   1.25rem;    /* 20px — card headings */
--text-2xl:  1.5rem;     /* 24px — sub-headings */
--text-3xl:  2rem;       /* 32px — section headings */
--text-4xl:  2.75rem;    /* 44px — secondary headlines */
--text-5xl:  4rem;       /* 64px — hero headline (mobile) */
--text-6xl:  6rem;       /* 96px — hero headline (desktop) */
--text-7xl:  8rem;       /* 128px — ghost layer (desktop) */
```

---

# Radius System

## Buttons

```css
--radius-btn: 999px;  /* fully rounded pill */
```

## Cards

```css
--radius-card: 24px;
```

## Images — Organic Pill

```css
--radius-image: 120px 120px 120px 120px / 80px 80px 80px 80px;
/* Squircle-like with more rounding on all sides */
/* Hero main image and about video thumbnail use this shape */
```

## Image Small

```css
--radius-image-sm: 32px;
```

## Icon Buttons (Arrow CTA)

```css
--radius-icon-btn: 50%;  /* perfect circle */
```

---

# Shadow System

## Card

```css
--shadow-card: 0 8px 32px rgba(0, 0, 0, 0.12);
```

## Hover

```css
--shadow-hover: 0 16px 48px rgba(0, 0, 0, 0.20);
```

## Image Float

```css
--shadow-image: 0 24px 64px rgba(0, 0, 0, 0.30);
```

---

# Spacing System

```css
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-30: 120px
--space-40: 160px
```

Section vertical padding: `clamp(64px, 8vw, 120px)` top and bottom.

---

# Favicon

## Status

```text
✅ Favicon já adicionado ao projeto — usar o arquivo existente.
   Não gerar novo arquivo; apenas referenciar corretamente no <head>.
```

## HTML Reference

```html
<head>
  <!-- Favicon — arquivo já presente no projeto -->
  <link rel="icon"             type="image/x-icon"            href="/favicon.ico">
  <link rel="icon"             type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon"             type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180"                href="/apple-touch-icon.png">
  <link rel="manifest"                                        href="/site.webmanifest">
  <meta name="theme-color" content="#2D5A3D">
</head>
```

O `theme-color` usa `#2D5A3D` (verde primário) para que a barra do navegador
mobile adote a identidade visual da SK Builders.

## Conceito Visual (referência)

O ícone da SK Builders é o logotipo presente no nav: dois ângulos abstratos
formando um telhado estilizado, em branco sobre fundo verde floresta `#2D5A3D`.

---

# Navigation

## Desktop Layout

```text
[ SK Logo + Icon ]  [ Home | Propriedades | Comprar | Investir | Blog ]  [ Get Started ]
```

Left: Logo (icon + "SK BUILDERS" text in cream/white).
Center: Horizontal menu links in a pill-shaped container with subtle border.
Right: Single CTA button "Get Started" — pill shaped, outlined style.

## Mobile Layout

```text
[ SK Logo + Icon ]                           [ ☰ Hamburger ]
```

Hamburger opens a full-screen overlay drawer from the right.
Menu items animate in staggered with GSAP.

## Nav Container Style

```css
.nav__menu-wrapper {
  background: rgba(255, 255, 255, 0.10);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 999px;
  padding: 8px 24px;
  backdrop-filter: blur(8px);
}
```

## Sticky Behavior

Default: transparent background, positioned over the hero.
On scroll (>80px): background transitions to `--color-primary-dark` with
`box-shadow: 0 2px 24px rgba(0,0,0,0.25)` and a smooth 300ms transition.
Active link: underline dot or slight weight increase.

---

# Shapes System

## Shape A — Botanical SVG Overlay

Thin line-art leaf/branch motifs (stroke, no fill), opacity 6–8%.
Used as full-bleed background texture on hero and about sections.
Color: `rgba(144, 179, 156, 0.12)`.

```
Purpose: Adds organic warmth and depth to flat color backgrounds
         without competing with content.
```

## Shape B — Circular Badge / Stamp

Used in the hero section bottom-left area.
White stroke circle with rotating text "THE BEST PROPERTY PLATFORM" and
a 4-point star icon in the center.
Animated: slow continuous rotation (20s, linear, infinite) via CSS.

```
Purpose: Trust signal + visual interest in lower hero zone.
```

## Shape C — Arrow Circle Button

Warm amber/peach (#E8A87C) filled circle with a northeast arrow icon
(Lucide `arrow-up-right`).
Used as interactive CTAs on the hero image, about image, and CTA section.
On hover: scale(1.08) + shadow increase.

```
Purpose: Visual action affordance that breaks the rectangular grid rhythm.
```

## Decorative Elements

* SVG botanical lines (Shape A above)
* CSS-drawn decorative horizontal dividers (1px, 10% opacity)
* Icon dots / bullet markers for feature lists
* Rounded pill tags / badges (e.g., "Our Quality", "About us" labels)

---

# Sections

## 01 Hero

### Goal

Immediately communicate the brand's premium positioning and drive visitors
to either explore properties or contact the team.

### Layout

```
Desktop (two-column, 55/45 split):

┌──────────────────────────────────────────────────────────────────┐
│  NAV: Logo ────────── Menu Links ─────────────── [Get Started]  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  EXPERIENCE THE          ┌──────────────────────┐              │
│  EPITOME OF HOME         │                      │              │
│  COMFORT                 │   [Property Image]   │              │
│  (ghost echo below)      │   organic pill shape │ ↗            │
│                          └──────────────────────┘              │
│  Body text (2 lines)                                             │
│                                                                  │
│  ✈ [Explore Properties]     ⊙ Rotating Badge                   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

Mobile (stacked):
Headline → description → CTA → Image below
```

### Components

* `hero__headline` — H1, Barlow Condensed 900, uppercase, text-5xl→text-6xl
* `hero__headline-ghost` — aria-hidden duplicate, color `--color-ghost`,
  positioned absolute offset -4px/-2px, text-6xl→text-7xl
* `hero__description` — DM Sans 400, text-base, color `--color-text-secondary`
* `hero__cta` — pill button with left airplane icon (Lucide `plane`),
  bg `--color-accent`, text dark
* `hero__image-wrapper` — organic border-radius container with `--shadow-image`
* `hero__arrow-btn` — amber circle arrow button overlaid on image corner
* `hero__badge` — rotating stamp badge (Shape B)
* `hero__shapes` — SVG botanical overlay (Shape A)

### Background

Full section: `--color-primary` (#2D5A3D).
SVG botanical texture at 6% opacity overlaid.

### CTA

Primary: "Explore Properties" — pill button, off-white bg, dark text, plane icon.
Secondary: Arrow button on the property image → links to property listings.

---

## 02 About

### Goal

Build credibility with a decade of experience, stats, and a property showcase video thumbnail.

### Layout

```
Desktop (split: text+stats left / large image right):

┌───────────────────────────────────────────────────────┐
│  DARK BG (#1C1C1C)                                    │
│                                                       │
│  About us ●                                           │
│  WE'VE FOUND LUXURY HOMES FOR CLIENTS FOR A DECADE.  │
│                                                       │
│  [Body paragraph text]       ┌───────────────────┐   │
│                              │                   │   │
│  10+   20+   598+            │  [Property Video  │   │
│  Homes Exp.  Happy           │   Thumbnail]      │   │
│  Delivered   Clients         │   ▶ Play button   │   │
│                              │   "DREAM HOUSE"   │   │
│  [Get Started]               └───────────────────┘   │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### Components

* `about__label` — small pill tag "About us" with dot indicator
* `about__headline` — H2, Barlow Condensed 800, text-3xl→text-4xl
* `about__body` — DM Sans 400, text-base, max-width 420px
* `about__stats` — three stat items horizontally arranged
* `stat__number` — Barlow Condensed 800, text-3xl, color `--color-secondary`
* `stat__label` — DM Sans 500, text-xs, uppercase, letter-spacing 0.08em
* `about__cta` — amber pill button "Get Started"
* `about__media` — large pill-radius image container
* `about__play-btn` — circle play button overlay centered on image
* `about__image-label` — "DREAM HOUSE" text caption over bottom of image

---

## 03 The Project (Gallery Slider)

### Goal

Showcase featured properties with a swipeable image carousel.

### Layout

```
Desktop (text left / slider right):

┌───────────────────────────────────────────────────────┐
│  BG: --color-primary (#2D5A3D)                        │
│                                                       │
│  The Project ●                                        │
│                        ┌─────────────────────────┐   │
│  Together, we can      │  [Property Image 1]     │   │
│  conquer challenges,   │                         │   │
│  utilize our strengths │  [Property Image 2]     │   │
│  and achieve           │  (offset, peek behind)  │   │
│  remarkable success.   └─────────────────────────┘   │
│                                                       │
│   ● ● ○   [→ arrow]    Explore More →                 │
└───────────────────────────────────────────────────────┘
```

### Components

* `project__label` — small section label "The Project" with dot
* `project__headline` — H2, Barlow Condensed 700, text-2xl→text-3xl
* `project__description` — DM Sans 400, max-width 320px
* `project__slider` — Swiper instance, overflow visible to show peek of next slide
* `project__slide` — individual slide, border-radius `--radius-card`
* `project__pagination` — custom dot pagination (Swiper)
* `project__arrow` — circle amber arrow button for next slide
* `project__link` — "Explore More →" text link

---

## 04 Our Quality

### Goal

Highlight the interior design / quality standard with a feature text + image split.

### Layout

```
Desktop (two-column, text left / image right):

┌───────────────────────────────────────────────────────┐
│  BG: --color-background (light)                       │
│                                                       │
│  Our Quality ●                                        │
│  DESIGN A COZY AND            ┌────────────────────┐  │
│  FRESH INTERIOR.              │                    │  │
│                               │  [Interior Photo]  │  │
│  Supporting body text         │  organic radius    │  │
│  about quality and crafts-    │                    │  │
│  manship in detail.           └────────────────────┘  │
│                                              ↗        │
│  [Get Started]                                        │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### Components

* `quality__label` — pill section label "Our Quality"
* `quality__headline` — H2, Barlow Condensed 800, uppercase
* `quality__body` — DM Sans 400, text-base, max-width 400px
* `quality__cta` — amber pill button "Get Started"
* `quality__media` — large rounded image (border-radius `--radius-image`)
* `quality__arrow-btn` — amber circle arrow overlaid on image corner

---

## 05 CTA Section

### Goal

Final conversion push — encourage prospects to reach out or get started.

### Layout

```
Desktop (full-width dark strip, centered content):

┌──────────────────────────────────────────────────────┐
│  BG: #1C1C1C (near-black)                            │
│                                                      │
│         LET'S COMBINE OUR                            │
│         STRENGTHS                    [Property Img]  │
│         (ghost echo below)           ↗               │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Components

* `cta__headline` — H2, Barlow Condensed 900, text-4xl→text-5xl, white
* `cta__headline-ghost` — aria-hidden ghost layer, same signature effect as hero
* `cta__media` — small pill-rounded property image, right-aligned
* `cta__arrow-btn` — amber circle arrow button

---

## 06 Footer

### Layout

```
┌──────────────────────────────────────────────────────┐
│  BG: --color-primary                                 │
│                                                      │
│  [ SK Logo ]                                         │
│  We take great pride in ensuring the satisfaction   │
│  of our customers, which is why we guarantee        │
│  quality in every project.                          │
│                                                      │
│  [ Twitter ]  [ YouTube ]  [ Instagram ]  [ LinkedIn ]│
│                                                      │
│  HOME  |  ABOUT  |  PROPERTIES  |  BLOG  |  PRICING  │
│                                                      │
│  © 2024 SK Builders. All rights reserved.            │
└──────────────────────────────────────────────────────┘
```

### Components

* `footer__logo` — logo mark + brand name
* `footer__tagline` — DM Sans 400, text-sm, max-width 280px, cream color
* `footer__socials` — icon row: Twitter, YouTube, Instagram, LinkedIn (Lucide)
* `footer__nav` — horizontal link list with pipe dividers
* `footer__copyright` — DM Sans 400, text-xs, low opacity

---

# Components

## Buttons

### Primary (Pill CTA)

```css
.btn--primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--color-accent);      /* Off-white */
  color: var(--color-text-dark);
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: var(--text-sm);
  border-radius: var(--radius-btn);
  border: none;
  cursor: pointer;
  transition: background 200ms ease, transform 150ms ease;
}
.btn--primary:hover {
  background: #e0ddd6;
  transform: translateY(-1px);
}
```

### Secondary (Outlined Pill)

```css
.btn--outline {
  background: transparent;
  border: 1.5px solid rgba(240, 237, 230, 0.60);
  color: var(--color-text-primary);
  padding: 12px 24px;
  border-radius: var(--radius-btn);
  font-weight: 500;
  transition: border-color 200ms ease, background 200ms ease;
}
.btn--outline:hover {
  border-color: var(--color-accent);
  background: rgba(240, 237, 230, 0.08);
}
```

### Arrow Circle Button (Amber)

```css
.btn--arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-secondary);   /* #E8A87C */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.btn--arrow:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 24px rgba(232, 168, 124, 0.40);
}
/* Icon: Lucide arrow-up-right, 20px, dark color */
```

---

## Cards

### Property Card (used in slider)

```css
.property-card {
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  background: var(--color-surface);
  transition: box-shadow 300ms ease, transform 300ms ease;
}
.property-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}
.property-card__image { width: 100%; aspect-ratio: 4/3; object-fit: cover; }
.property-card__body  { padding: 20px 24px; }
```

---

## Stat Item

```css
.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat__number {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  font-size: var(--text-3xl);
  color: var(--color-secondary);
  line-height: 1;
}
.stat__label {
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-secondary);
}
```

Stat numbers animate from 0 to their target value when scrolled into view
(ScrollTrigger + custom counter function).

---

## Section Label / Eyebrow

```css
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: 16px;
}
.section-label::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-secondary);
  flex-shrink: 0;
}
/* Some variants use a pill border wrapper instead of the dot */
```

---

## Rotating Badge (Hero Stamp)

```html
<div class="badge-stamp" aria-label="The Best Property Platform">
  <svg class="badge-stamp__ring" viewBox="0 0 120 120">
    <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"/>
    <text>
      <textPath href="#circlePath">THE BEST PROPERTY PLATFORM · </textPath>
    </text>
  </svg>
  <div class="badge-stamp__icon">✦</div>
</div>
```

```css
.badge-stamp {
  width: 100px;
  height: 100px;
  position: relative;
  animation: rotate-stamp 20s linear infinite;
}
.badge-stamp__ring { fill: none; stroke: none; }
.badge-stamp__ring text {
  font-family: 'DM Sans', sans-serif;
  font-size: 10px;
  fill: var(--color-accent);
  letter-spacing: 2px;
}
.badge-stamp__icon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--color-accent);
}
@keyframes rotate-stamp { to { transform: rotate(360deg); } }
```

---

# Icon System

## Library

* Lucide Icons (via CDN or SVG sprite)

## Icons Used

```text
arrow-up-right  — Arrow CTAs throughout
plane           — Hero CTA button
play            — About section video trigger
chevron-right   — Slider next button
twitter         — Footer social
youtube         — Footer social
instagram       — Footer social
linkedin        — Footer social
menu            — Mobile hamburger (open)
x               — Mobile hamburger (close)
```

---

# Photography Direction

## Style

* Warm, golden-hour lighting preferred
* Exterior and interior shots of high-end residential properties
* Lush green landscaping visible — connects to brand color
* Modern architecture: clean lines, large windows, open spaces
* Slight warmth / lifestyle feel (not cold architectural photography)

## Avoid

* Stock photo people (staged smiling couples)
* Low-contrast or overexposed images
* Properties with visible distress, clutter, or dated aesthetics
* Cold blue-tinted photography

## Suggested Image Slots

```text
hero__image     — Hero: exterior of luxury villa, landscaped garden, warm light
about__image    — About: stylish outdoor terrace / pool area "Dream House" label
project__slide-1 — Project: modern exterior with palm trees
project__slide-2 — Project: contemporary facade, clean white architecture
quality__image  — Quality: luxury interior, warm tones, designer furniture
cta__image      — CTA: aerial or exterior hero shot
```

---

# GSAP Motion System

## Plugin Registration (main.js — antes de qualquer animação)

```javascript
gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  Observer,
  DrawSVGPlugin
);
```

---

## ScrollSmoother — Smooth Scroll Global

**Plugin:** `ScrollSmoother`
Envolve o `<body>` em dois wrappers e ativa smooth scroll nativo com suporte
a `data-speed` para parallax declarativo no HTML.

```html
<!-- HTML structure obrigatória para ScrollSmoother -->
<div id="smooth-wrapper">
  <div id="smooth-content">
    <!-- todo o conteúdo da página aqui -->
  </div>
</div>
```

```javascript
const smoother = ScrollSmoother.create({
  wrapper:  '#smooth-wrapper',
  content:  '#smooth-content',
  smooth:   1.5,          // intensidade do smooth (1 = normal, 2 = mais suave)
  effects:  true,         // ativa leitura de data-speed / data-lag
  smoothTouch: 0.1        // toque suave no mobile (0 = desativa)
});
```

```html
<!-- Parallax declarativo no HTML via data-speed -->
<!-- Valores < 1 = movimento mais lento que scroll (flutua para trás) -->
<!-- Valores > 1 = movimento mais rápido que scroll (avança)          -->

<div class="hero__image-wrapper" data-speed="0.85">...</div>
<div class="about__image-wrapper" data-speed="0.90">...</div>
<div class="hero__shapes" data-speed="0.70" data-lag="0.2">...</div>
```

---

## SplitText — Headline Animations

**Plugin:** `SplitText`
Divide as headlines em chars/words/lines para animações de entrada
letra por letra ou palavra por palavra.

```javascript
// Hero headline — chars voam de baixo para cima com stagger
function animateHeroHeadline() {
  const split = SplitText.create('.hero__headline-main', {
    type: 'chars,words',
    charsClass: 'hero__char',
    mask: 'chars'           // cria overflow:hidden automático por char
  });

  gsap.from(split.chars, {
    y: '110%',              // sai de baixo do mask (overflow hidden)
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: {
      amount: 0.5,          // 0.5s distribuídos entre todos os chars
      from: 'start'
    },
    delay: 0.3
  });
}

// CTA Section headline — words entram com fade-up
function animateCtaHeadline() {
  const split = SplitText.create('.cta__headline', {
    type: 'words',
    mask: 'words'
  });

  gsap.from(split.words, {
    scrollTrigger: {
      trigger: '.cta',
      start: 'top 75%'
    },
    y: '100%',
    opacity: 0,
    duration: 0.6,
    ease: 'power2.out',
    stagger: 0.08
  });
}
```

---

## DrawSVGPlugin — Botanical Line Reveal

**Plugin:** `DrawSVGPlugin`
Os paths SVG das formas botânicas (Shape A) ficam invisíveis inicialmente
e são "desenhados" conforme a seção entra no viewport, criando um efeito
de crescimento orgânico.

```html
<!-- SVG botanical overlay na hero section -->
<svg class="hero__shapes" aria-hidden="true" viewBox="0 0 1440 800">
  <path class="botanical__line botanical__line--01" d="M-20,400 Q200,100 500,300 T1000,200 T1440,350"/>
  <path class="botanical__line botanical__line--02" d="M100,0 Q300,200 200,500 T400,800"/>
  <path class="botanical__line botanical__line--03" d="M1200,0 Q1100,300 1300,500 T1200,800"/>
</svg>
```

```css
.botanical__line {
  fill: none;
  stroke: rgba(144, 179, 156, 0.15);
  stroke-width: 1.5px;
}
```

```javascript
// Linhas botânicas se "desenham" ao entrar no viewport
gsap.utils.toArray('.botanical__line').forEach((line, i) => {
  gsap.from(line, {
    drawSVG: '0%',           // começa sem nenhum traço visível
    scrollTrigger: {
      trigger: line.closest('section'),
      start: 'top 80%',
      end:   'bottom 20%',
      scrub: 0.5             // sincroniza suavemente com o scroll
    },
    delay: i * 0.15,
    ease: 'none'
  });
});
```

---

## Observer — Mobile Slider (Project Section)

**Plugin:** `Observer`
Detecta swipe/drag/wheel no slider de projetos sem depender de biblioteca
externa, servindo como alternativa nativa ao Swiper no mobile.

```javascript
let currentSlide = 0;
const slides = gsap.utils.toArray('.project__slide');
const totalSlides = slides.length;

function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return;

  gsap.to(slides[currentSlide], { opacity: 0.4, scale: 0.95, duration: 0.4 });
  gsap.to(slides[index],        { opacity: 1,   scale: 1,    duration: 0.4 });

  currentSlide = index;
  updateDots(currentSlide);
}

Observer.create({
  target:    '.project__slider',
  type:      'touch,pointer',   // touch e mouse drag
  onRight:   () => goToSlide(currentSlide - 1),
  onLeft:    () => goToSlide(currentSlide + 1),
  tolerance: 10                 // px mínimos de movimento para registrar swipe
});
```

---

## Hero — Entrance Sequence

```javascript
// Executado em DOMContentLoaded — após SplitText e ScrollSmoother iniciados
function initHeroAnimation() {
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.nav',               { y: -40, opacity: 0, duration: 0.6 })
    .add(animateHeroHeadline,   '-=0.1') // chama a função SplitText acima
    .from('.hero__headline-ghost', { y: 80, opacity: 0, duration: 0.9, ease: 'power2.out' }, '-=0.5')
    .from('.hero__description', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero__cta',         { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
    .from('.hero__image-wrapper',{ x: 60, opacity: 0, duration: 0.9, ease: 'power2.out' }, '-=0.7')
    .from('.hero__badge',       { scale: 0.5, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3');
}
```

---

## ScrollTrigger — Scroll Reveals & Parallax

```javascript
// Reveals genéricos — adicionar classe .reveal-up nos elementos desejados
gsap.utils.toArray('.reveal-up').forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out'
  });
});

// Stagger — stat items (About section)
gsap.from('.stat', {
  scrollTrigger: { trigger: '.about__stats', start: 'top 80%' },
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.12,
  ease: 'power2.out'
});

// Section labels deslizam da esquerda
gsap.utils.toArray('.section-label').forEach(label => {
  gsap.from(label, {
    scrollTrigger: { trigger: label, start: 'top 88%' },
    x: -20,
    opacity: 0,
    duration: 0.5
  });
});
```

---

## Statistics Counter

```javascript
// data-value="10" no HTML do elemento .stat__number
gsap.utils.toArray('.stat__number').forEach(el => {
  const target = parseInt(el.dataset.value);

  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: function() {
          el.textContent = Math.round(this.targets()[0].val) + '+';
        }
      });
    }
  });
});
```

---

## Hover Effects

```javascript
// Arrow buttons — scale + glow via GSAP quickTo
const scaleUp   = gsap.utils.toArray('.btn--arrow').map(btn =>
  gsap.quickTo(btn, 'scale', { duration: 0.2, ease: 'power1.out' })
);

document.querySelectorAll('.btn--arrow').forEach((btn, i) => {
  btn.addEventListener('mouseenter', () => scaleUp[i](1.1));
  btn.addEventListener('mouseleave', () => scaleUp[i](1));
});

// Nav links — underline tratada via CSS ::after (transition width 0→100%)
```

---

## Reduced Motion — Gating Global

```javascript
// gsap.matchMedia garante que animações só rodam quando não há preferência
// de movimento reduzido — é a abordagem recomendada pelo GSAP v3
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Todas as animações ficam dentro deste callback
  initHeroAnimation();
  initScrollAnimations();
  initDrawSVG();
  initStatsCounter();
  // ... etc
});

mm.add('(prefers-reduced-motion: reduce)', () => {
  // Estado final sem movimento — apenas garante visibilidade
  gsap.set('.hero__headline-main, .hero__description, .hero__cta, .nav', {
    opacity: 1, y: 0, x: 0
  });
});
```

---

# Accessibility

Requirements:

* **Semantic HTML** — `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`,
  headings in correct H1→H2→H3 hierarchy
* **Keyboard Navigation** — all interactive elements reachable and operable
  via Tab/Enter/Space/Escape
* **Focus States** — visible focus ring on all focusable elements:
  ```css
  :focus-visible { outline: 2px solid var(--color-secondary); outline-offset: 3px; }
  ```
* **Reduced Motion** — all GSAP animations gated behind the
  `(prefers-reduced-motion: no-preference)` media query check
* **ARIA Labels** — all icon-only buttons have `aria-label` attributes;
  decorative images have `alt=""` and `aria-hidden="true"`
* **Alt Text** — all meaningful images have descriptive `alt` attributes
* **Color Contrast** — minimum 4.5:1 for body text; 3:1 for large text
  (off-white #F0EDE6 on green #2D5A3D passes WCAG AA at ~7.2:1)
* **Ghost Headline Layer** — marked `aria-hidden="true"` to avoid
  screen readers reading the headline twice

---

# Performance

Target:

```text
95+ Lighthouse Performance Score
```

Optimizations:

* **Image formats** — AVIF primary, WebP fallback, JPEG legacy via `<picture>`
* **Lazy loading** — `loading="lazy"` on all below-fold images
* **Font preloading** — `<link rel="preload" as="font">` for critical
  Barlow Condensed and DM Sans wary weights
* **GSAP optimization** — single ScrollTrigger.refresh() call; avoid
  per-frame DOM queries; use `will-change: transform` sparingly
* **No render-blocking scripts** — GSAP deferred with `defer` attribute
* **Critical CSS** — inline above-fold styles (hero + nav) in `<style>` tag
* **SVG optimization** — botanical shapes as inline SVG or minified external
  SVG, no raster replacements

---

# UX Principles

* **Mobile First** — all CSS written mobile-first with `min-width` breakpoints
* **Strong Visual Hierarchy** — hero headline draws eye first;
  secondary info layered below with clear typographic scale
* **One Primary CTA Per Section** — each section has a single clear action;
  no competing buttons at the same prominence level
* **Fast Interactions** — all hover transitions ≤ 200ms; tap targets ≥ 44×44px
* **Clear Navigation** — sticky nav always visible; active page highlighted;
  mobile drawer closes on link tap
* **Accessible Components** — every interactive element keyboard-operable
* **Fully Responsive** — tested at 320px, 375px, 768px, 1024px, 1440px
* **Content Legibility** — max 72 characters per line for body text;
  line-height 1.6 for paragraphs, 1.1 for display headlines

---

# Rule

```text
Esta landing page está documentada de forma que um designer
consiga criar o layout completo no Figma e um desenvolvedor
consiga implementar a interface apenas lendo este blueprint —
sem necessidade de briefing adicional.
```