# SK Builders — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page da **SK Builders**, agência de real estate especializada em
> appraisal internacional, vendas, compras e investimentos.

---

## 1. Project Overview

### Project Name

```
SK Builders
```

### Industry

```
Real Estate — Luxury Residential Properties
```

### Target Audience

```
High-income buyers and investors (35–60 years old) seeking luxury residential
properties, vacation homes, or real estate investment opportunities.
International clientele with purchasing power.
```

### Main Goal

```
Lead Generation — Drive qualified prospects to contact the sales team
or schedule a property visit.
```

### Brand Voice

- **Premium** — every visual choice reinforces luxury positioning
- **Modern** — clean typography, generous whitespace, bold scale
- **Nature-connected** — deep forest green as identity color
- **Trustworthy** — stats, awards, decade of experience
- **Sophisticated** — gradient text, refined color pairings

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 + custom properties + BEM methodology |
| Behavior | Vanilla JavaScript ES6+ (no frameworks) |
| Animations | CSS transitions + IntersectionObserver (no GSAP) |
| Fonts | Google Fonts CDN |
| Icons | Inline SVG + SVG files |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Semantic HTML: header, introduction, about, project (slider), quality, end-banner, footer |
| `css/style.css` | All visual tokens, animations, responsive, mobile menu |
| `css/reset.css` | Base reset + container (max-width: 1422px) |
| `js/script.js` | IntersectionObserver, slider, counter, typing effect, mobile menu |

---

## 4. Visual Identity

### 4.1 Color Palette

All colors are CSS custom properties on `:root`.

| Token | Hex | Usage |
|---|---|---|
| `--color_primary` | `#1d4734` | Forest green — section backgrounds (`.section__green`), header, footer, mobile menu |
| `--color_secondary` | `#849fa8` | Steel blue-gray — body text, description text |
| `--color_tertiary` | `#caa9a3` | Dusty rose — reserve |
| `--color_quaternary` | `#d4c4ba` | Champagne/beige — reserve |
| `--color_accent` | `#e09b6b` | Amber — buttons, hover links, `+` sign on counters |
| `--color_accent_hover` | `#d78e60` | Darker amber — button hover state |
| `--color_white` | `#ffffff` | White — light text, gradients |
| `--color_black` | `#0a0a0a` | Off-black — body background, about section |

**Nav container**: `#e6e8ee` (light gray) — pill background.
**Nav text**: `#050505` (near-black).
**Hover nav**: `border: 1.11px solid #050505`.

### 4.2 Typography

| Element | Font | Weight | Size (clamp) | Line-height | Letter-spacing | Transform |
|---|---|---|---|---|---|---|
| h1 | Clash Display | 700 | `clamp(2.5rem, 6vw+1rem, 7.625rem)` | 110% | -0.02em | uppercase |
| h2 | Clash Display | 700 | `clamp(1.75rem, 3vw+0.5rem, 3.5rem)` | 109% | -0.03em | uppercase |
| h3 | Clash Display | 700 | `clamp(1.25rem, 2vw+0.5rem, 1.75rem)` | 120% | -0.02em | uppercase |
| `.title--entry` | Outfit (inherit) | 500 | `clamp(1.75rem, 3vw+0.5rem, 2.75rem)` | 120% | — | none |
| Body | Outfit | 400–500 | `clamp(1rem, 1.5vw+0.5rem, 1.1875rem)` | 150% | — | — |
| Button | Outfit | 700 | 17px | 120% | — | — |
| End Banner h2 | Outfit (inherit) | 500 | `clamp(3rem, 6vw+1rem, 8.3125rem)` | 120% | — | uppercase |

**Imports** (Google Fonts CDN):

```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Clash+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 4.3 Gradient System

Headings use `background-clip: text` for a glow-to-transparent effect:

| Element | Angle | Colors |
|---|---|---|
| h1 | 171deg | white → transparent |
| h2 | 155deg | white → transparent |
| h3 | 159deg | white → transparent |
| End banner h2 | 180deg | white → black |

### 4.4 Buttons

Default `button` style — pill shape used for all CTAs:

```css
border-radius: 111px;
padding: 19px 35px;
height: 60px;
font: 700 17px/120% Outfit;
background: var(--color_accent);
color: #050505;
margin-top: 16.4px;
transition: all 300ms ease-in-out;
```

**Hover**: `--color_accent_hover` (#d78e60)

Used in:
- `.header__login-btn` (nav CTA)
- `.about__button` (about section)
- `.quality__button` (quality section)
- `.mobile-menu__cta` (mobile drawer)

### 4.5 Focus-Visible

```css
*:focus-visible {
  outline: 3px solid var(--color_accent);
  outline-offset: 3px;
  border-radius: 4px;
}
button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--color_accent);
  outline-offset: 4px;
}
```

### 4.6 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Container max-width | 1422px |
| Container padding | 0 2rem |
| Header padding | 35.56px (mobile: 20px / 16px) |
| Section padding (intro) | 72px |
| Section padding (about) | 95.56px |
| Section padding (quality) | 100px |
| Section padding (end banner) | 134px |
| Nav pill | radius 111px, padding 8.89px, gap 8.89px, height 56px |
| Nav links | padding 13.44px 11.11px, min-width 90px, border 1.11px |
| About flex gap | 200px |
| Achievements gap | 80px |
| Social gap | 27px |
| Footer separator | 1.11px solid white |
| Footer nav padding | 35px 0, li padding 0 70px |
| Intro stamp margin | 44.44px 33.33px |
| Slider gap | 44.44px |
| Arrow buttons gap | 3rem |
| Quality flex gap | 147px |
| Logo | 240×68 (mobile: 180px / 140px) |
| About icon | 122×122 |

### 4.7 Background Patterns

- **Header**: `line-pattern.webp` (968×858, positioned right top, z-index 1)
- **Sections with `.container__detail`**: `bg__detail.webp` via `::after` (centered, 100% width, z-index -1)

---

## 5. Page Structure

```
HEADER
  Logo (240×68) | Nav pill (Home, Propriedades, Comprar, Vender, Alugar) | Login "Get Started"

INTRODUCTION (section__green)
  h1: "Experience the epitome of home comfort." [gradient, uppercase, hero scale]
  p: description [secondary color, max-width 425px]
  stamp: rotating 150×150 [@keyframes spin 10s linear infinite]
  image: introduction__image.webp [absolute, left 472px top 281px]
  icon: scroll anchor to #project

ABOUT (black background)
  left col (scroll-slide-right):
    h2.title--entry: icon (122×122) + "About us" [flex row, gap 27px]
    p: body text
    button: "Get Started"
  right col (scroll-slide-left):
    h3: "We've found luxury homes for clients for a decade."
    p: description
    UL achievements [flex, gap 80px]:
      LI: counter "10+" / "Awards Gained"
      LI: counter "20+" / "Years of Experience"
      LI: counter "598+" / "Rented Home Stay"
  about__image.webp (1200×675) [video placeholder, padding-top 100px]

PROJECT (section__green + container__detail)
  h2.title--entry: icon + "The Project"
  p: description [white, max-width 480px]
  slider [overflow hidden, flex column]:
    track [flex, transition transform 0.8s cubic-bezier(0.77,0,0.175,1)]
      5 slides (1200×800, radius 12px, inactive opacity 0.4)
    arrows [flex, gap 3rem]:
      prev SVG (white circle + arrow)
      next SVG (white circle + arrow)

QUALITY (section__green + container__detail)
  h2.title--entry: icon + "Our Quality"
  flex [gap 147px]:
    left (scroll-slide-right):
      h3: "Design a cozy and fresh interior."
      p: description [secondary color]
      button: "Get Started"
    right (scroll-slide-left):
      quality-image.webp (600×800) [absolute, left 50%]

END BANNER (black background)
  h2: "Let's combine our strengths" [gradient white→black, uppercase, 8.3125rem max]
  end__banner.webp [absolute, left 33%, top 65%]

FOOTER (section__green)
  logo (240×68)
  p: tagline [secondary, max-width 580px]
  social links: Facebook, Twitter/X, Instagram, LinkedIn (40×40 SVG)
  nav: HOME | ABOUT | PROPERTIES | BLOG | PRICING [white border separators]
  back link: <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | SK Builders |
| Title | SK Builders — Luxury Real Estate \| Imóveis Premium |
| Meta description | Luxury real estate agency specializing in international property appraisal, sales, purchases and investments. |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Hero (h1) | `Experience the epitome of home comfort.` |
| Hero (p) | `Our international brand specializes in property appraisal, sales, purchases, and investments. Trust us to deliver exceptional service and help you find your perfect real estate opportunity.` |
| About (h2) | `About us` |
| About (h3) | `We've found luxury homes for clients for a decade.` |
| About (p1) | `We take great pride in ensuring the satisfaction of our customers. That's why we proudly guarantee the quality and reliability of our products.` |
| About (p2) | `We take great pride in ensuring the satisfaction of our customers, which is why we guarantee that the products we sell will bring happiness to each and every customer. Our genuine care for customer satisfaction is what sets us apart.` |
| Project (h2) | `The Project` |
| Project (p) | `Together, we can conquer challenges, utilize our strengths, and achieve remarkable success in this ambitious home project.` |
| Quality (h2) | `Our Quality` |
| Quality (h3) | `Design a cozy and fresh interior.` |
| Quality (p) | `Crafting an Inviting Haven: Unveiling the Art of Designing a Cozy and Fresh Interior for Unmatched Comfort and Serenity` |
| End Banner (h2) | `Let's combine our strengths` |
| Footer (p) | `We take great pride in ensuring the satisfaction of our customers, which is why we guarantee quality in every project.` |

### 6.3 CTA

- **Label**: `Get Started`
- **Usage**: header login, about, quality, mobile menu CTA

### 6.4 Navigation

| Menu | Location | Items |
|---|---|---|
| Header nav (pill, >900px) | `.header__nav` | Home — Propriedades — Comprar — Vender — Alugar |
| Footer nav (separated by `\|`) | `footer nav` | HOME — ABOUT — PROPERTIES — BLOG — PRICING |
| Mobile menu (slide-in, <900px) | `#mobile-menu` | Home, Propriedades, Comprar, Vender, Alugar + CTA |

### 6.5 Stats

| Stat | Value |
|---|---|
| Awards Gained | 10+ |
| Years of Experience | 20+ |
| Rented Home Stay | 598+ |

---

## 7. Components

### 7.1 Section Headers (`.title--entry`)

```html
<h2 class="title--entry">
  <picture><img src="./assets/images/about__icon.webp" width="122" height="122" alt="" /></picture>
  Section Name
</h2>
```

- Flex row with gap 27px
- White text, Outfit 500 weight, `clamp(1.75rem, 3vw+0.5rem, 2.75rem)`
- No text-transform (unlike h1/h2/h3)
- Typing effect animation via JS

### 7.2 Nav Pill

```css
.header__nav {
  border-radius: 111px;
  padding: 8.89px;
  background: #e6e8ee;
  height: 56px;
  display: flex;
  gap: 8.89px;
  align-items: center;
}
.header__menu a {
  padding: 13.44px 11.11px;
  border: 1.11px solid transparent;
  border-radius: 111px;
  min-width: 90px;
  color: #050505;
  font: 500 17px/120% Outfit;
  text-align: center;
  transition: all 300ms ease-in-out;
}
.header__menu a:hover {
  border-color: #050505;
}
```

### 7.3 Login Pill

```css
.header__login {
  border-radius: 111px;
  background: #e6e8ee;
  padding: 8.89px;
  height: 56px;
  display: flex;
  align-items: center;
}
```

Same shape as nav, no internal links.

### 7.4 Stat Items

```html
<ul class="about__achievements flex">
  <li class="about__achievement">
    <h4 class="about__achievement-number" data-number="10">0 <span>+</span></h4>
    <p class="about__achievement-text">Awards Gained</p>
  </li>
  <!-- ... -->
</ul>
```

- Flex row, gap 80px
- Numbers: Clash Display 700, `clamp(2.5rem, 4vw+1rem, 3.875rem)`, white
- `+` sign in accent color (`--color_accent`)
- Labels: Outfit 500, secondary color

### 7.5 Rotating Stamp

```html
<img class="introduction__image animated" src="./assets/images/stamp.webp" alt="" width="150" height="150" aria-hidden="true" />
```

```css
.introduction__image.animated {
  margin: 44.44px 33.33px;
  animation: spin 10s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

### 7.6 Project Slider

```css
.project__slider-track {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}
.project__slider-item {
  width: 100%;
  flex-shrink: 0;
  border-radius: 12px;
  opacity: 0.4;
  transition: opacity 1s ease;
}
.project__slider-item--active {
  opacity: 1;
}
```

- 5 slides (1200×800), horizontal track
- Active slide opacity 1, inactive 0.4
- Arrow buttons: SVG circle + triangle (white, 50% opacity → 1 on hover)
- Autoplay: 8000ms
- Keyboard: ArrowLeft / ArrowRight
- Hover pauses autoplay

### 7.7 Mobile Menu

- **Toggle**: 3 bars (24×2px, white) → X animation (rotate 45°/-45°)
- **Overlay**: fixed inset 0, `rgba(0,0,0,0.5)`, z-index 100
- **Panel**: 280px wide, right, `translateX(100%)→0`, z-index 101
- **BG**: `--color_primary` (#1d4734)
- **Close**: X button, position absolute top 20 right 20
- **Links**: white, 1.25rem, 500 weight, `border-bottom rgba(255,255,255,0.1)`
- **CTA**: amber pill, 600 weight, `margin-top: auto`
- **Escape** key closes

### 7.8 SVG Assets

| Asset | Description |
|---|---|
| Arrow | `arrow.svg` — 16×16, chevron down for submenu indicator |
| Slider arrows | Inline SVG — circle (stroke white, 50% opacity, r≈36) + arrow path |
| Social icons | 4 SVGs (40×40): Facebook, Twitter/X, Instagram, LinkedIn |

---

## 8. Animations

### 8.1 Scroll Reveals (IntersectionObserver)

- **threshold**: 0.1
- **rootMargin**: `0px 0px -50px 0px`
- **unobserve**: after first trigger (one-shot)

| Class | Transform | Opacity | Duration |
|---|---|---|---|
| `.scroll-fade-up` | translateY(40px) → 0 | 0 → 1 | 0.8s ease |
| `.scroll-fade-in` | — | 0 → 1 | 0.8s ease |
| `.scroll-slide-right` | translateX(-60px) → 0 | 0 → 1 | 0.8s ease |
| `.scroll-slide-left` | translateX(60px) → 0 | 0 → 1 | 0.8s ease |
| `.scroll-scale` | scale(0.9) → 1 | 0 → 1 | 0.8s ease |

### 8.2 Counter (`.about__achievement-number`)

- Trigger: when entering viewport
- Increment: `Math.ceil(targetNumber / 60)`
- Interval: 100ms
- Target numbers from `data-number`: 10 (awards), 20 (experience), 598 (rented)

### 8.3 Typing Effect (`.title--entry`)

- Trigger: when entering viewport
- Interval: 100ms per character
- Target: text node (ignores child elements like `<picture>`)

### 8.4 Stamp Rotation

```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

Duration: 10s linear infinite. Element: `img.introduction__image.animated`.

### 8.5 Slider

- Transition: `transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)`
- Autoplay: 8000ms
- Keyboard: ArrowLeft / ArrowRight
- Hover: pauses autoplay
- Active slide: opacity 1 (inactive: 0.4)
- Arrow buttons: opacity 0.5 → 1 on hover

### 8.6 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Responsive

### 9.1 Breakpoint 900px (tablet)

- Header: hides nav and login, shows hamburger
- Header logo: 180px
- Header padding: 20px
- Line pattern: 600×600
- About flex: wrap, gap 100px
- Project flex: wrap
- Quality flex: wrap, gap 2rem
- Quality image: relative (not absolute)
- End banner padding: 50px
- Footer nav: column, border-right removed
- Achievements: `justify-content: space-between`

### 9.2 Breakpoint 600px (mobile)

- Header padding: 16px, logo 140px
- Introduction: text-align center, padding 48px
- About: flex-direction column, gap 2rem
- Achievements: wrap + center
- Project: column + center text
- Quality: column + center
- End banner: padding 40px, image 80% width
- Footer nav + container: 90% max-width

---

## 10. Assets

### 10.1 Images

24 image files in `assets/images/`:

| File | Dimensions | Usage |
|---|---|---|
| `logo.webp` | 240×68 | Header + footer logo |
| `favicon.ico` | — | Browser tab icon |
| `stamp.webp` | 150×150 | Rotating hero badge |
| `introduction__image.webp` | 800×600 | Hero property image |
| `introduction__icon.webp` | 200×200 | Scroll anchor icon |
| `about__icon.webp` | 122×122 | Section header icon (reused in About, Project, Quality) |
| `about__image.webp` | 1200×675 | Video placeholder |
| `quality-image.webp` | 600×800 | Quality section interior |
| `end__banner.webp` | 800×400 | CTA decorative image |
| `line-pattern.webp` | 968×858 | Header background texture |
| `bg__detail.webp` | — | Section pattern overlay |
| `slider-01.webp` → `slider-05.webp` | 1200×800 | Project gallery slides |
| `arrow.svg` | 16×16 | Submenu indicator |
| `social_facebook.svg` | 40×40 | Facebook icon |
| `social__twitter.svg` | 40×40 | Twitter/X icon |
| `social_insta.svg` | 40×40 | Instagram icon |
| `social__linkedin.svg` | 40×40 | LinkedIn icon |

### 10.2 Social Links (actual hrefs)

| Platform | URL |
|---|---|
| Facebook | `https://facebook.com/skbuilders` |
| Twitter / X | `https://twitter.com/skbuilders` |
| Instagram | `https://instagram.com/skbuilders` |
| LinkedIn | `https://linkedin.com/company/skbuilders` |

---

## 11. Accessibility

### Requirements

- **Semantic HTML** — `<nav>`, `<main>`, `<section>`, `<footer>`, headings in correct H1→H2→H3 hierarchy
- **Keyboard Navigation** — all interactive elements reachable and operable via Tab / Enter / Space / Escape
- **Focus States** — visible focus ring on all interactive elements (see §4.5)
- **Reduced Motion** — all animations gated behind the `(prefers-reduced-motion: reduce)` media query
- **ARIA Labels** — all icon-only buttons have `aria-label` attributes; decorative images have `alt=""` and `aria-hidden="true"`
- **Alt Text** — all meaningful images have descriptive `alt` attributes
- **Color Contrast** — white text on forest green `#1d4734` passes WCAG AA
- **Skip Link** — commented out in HTML: re-activate for production accessibility
- **`aria-live="polite"`** — on counter elements and slider region for dynamic content updates
- **`aria-expanded`** — on mobile menu toggle for state communication to assistive tech

---

## 12. Performance

### Targets

- 95+ Lighthouse Performance Score
- Fast load on 3G and slow connections

### Optimizations

| Technique | Implementation |
|---|---|
| Image formats | WebP via `<picture><source>` with PNG fallback |
| Lazy loading | `loading="lazy"` on all below-fold images |
| No render-blocking | Single external CSS + deferred JS |
| Critical CSS | Above-fold styles in stylesheet (single request) |
| SVG | Inline SVGs for slider arrows; external SVGs for social icons |
| Smooth scroll | `scroll-behavior: smooth` on `<html>` |
| Minimal JS | Single 2KB `script.js`, no external dependencies |
| No web fonts render-block | `display=swap` on Google Fonts URL |

---

## 13. UX Principles

- **Mobile First** — responsive at 900px and 600px breakpoints; hamburger on tablet onward
- **Strong Visual Hierarchy** — oversized gradient hero headline draws eye first; secondary info layered below
- **One Primary CTA Per Section** — each section has a single clear action; no competing buttons
- **Fast Interactions** — all hover transitions 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94); tap targets ≥ 44×44px
- **Clear Navigation** — sticky always visible; mobile drawer closes on link tap
- **Accessible Components** — every interactive element keyboard-operable
- **Fully Responsive** — tested at 320px, 375px, 768px, 1024px, 1440px
- **Content Legibility** — max ~72 characters per line for body text; line-height 150%

---

## 14. Observations

- **No build tools**: HTML+CSS+JS puro, fontes via Google Fonts CDN
- **No light/dark mode**: tema fixo escuro (diferente do showcase principal que tem toggle)
- **No GSAP**: todas as animações são CSS transitions + IntersectionObserver vanilla
- **`container__detail`**: adiciona padding 88px + bg pattern via `::after`
- **Slider max 5 slides**: o JS não adapta dinamicamente — hardcoded para 5 imagens
- **Skip link**: comentado no HTML (`<!-- <a href="#introduction" class="skip-link"> -->`) — reativar para acessibilidade
- **Sem Tailwind**: CSS puro com BEM naming

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json`:
   ```json
   {
     "id": "exemplo-02--real-state",
     "title": "SK Builders — Real Estate LP",
     "category": "landing-page",
     "href": "projects/exemplo-02--real-state/",
     "preview": "projects/exemplo-02--real-state/preview.png",
     "description": "Landing page premium para agência de real estate SK Builders com hero tipográfico, slider de projetos e contadores animados.",
     "tags": ["landing-page", "real-estate", "luxury", "css-animations"]
   }
   ```

2. Preview image at `projects/exemplo-02--real-state/preview.png`

3. Footer link back: `<a href="../../index.html">← Voltar ao Showcase</a>` (already present)

---

> Este blueprint descreve a landing page **SK Builders** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
