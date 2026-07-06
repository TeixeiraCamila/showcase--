# ALPHABET Store — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page da **ALPHABET**, loja de 文具 estilo e criatividade.

---

## 1. Project Overview

### Project Name

```
ALPHABET
```

### Industry

```
E-commerce — Stationery & Desk Accessories
```

### Tagline

```
Sua loja de 文具 estilo e criatividade.
```

### Target Audience

```
Creative individuals (16–40 years old) who love stationery, desk organization,
journaling, and doodling. People who value fun, stylish, and colorful desk
accessories.
```

### Main Goal

```
Product Showcase & Lead Generation — Present product categories and drive
visitors to shop ("Shop Now" CTAs throughout).
```

### Brand Voice

- **Fun** — "FUN & STYLISH DESK" hero headline, playful product names
- **Creative** —文具 (bun'gu / stationery) cultural reference, doodling language
- **Approachable** — clean sans-serif type, bright accent colors, relaxed layout
- **Youthful** — high-contrast colors, rounded elements, carousel autoplay

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`) |
| Styling | CSS3 + BEM methodology (partial) |
| Behavior | Vanilla JavaScript ES6+ (IIFE pattern) |
| Carousel | Swiper.js 12 (CDN) |
| Icons | Lucide icons (CDN) |
| Fonts | Google Fonts — Afacad (400–700) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Semantic HTML: header, hero, news arrivals, shop carousel, footer |
| `css/style.css` | All styles: layout, colors, typography, responsive, mobile menu, Swiper overrides |
| `js/script.js` | Mobile menu toggle (overlay + Escape key), Lucide icon init, Swiper config |
| `images/hero-banner.png` | Hero background — desk scene |
| `images/news__left.png` | Washi Tape arrival card background |
| `images/news__right.png` | Pencils arrival card background |
| `images/swiper-01.png` | Swiper slide — Desk Accessories |
| `images/swiper-02.png` | Swiper slide — Pens & Pencils |
| `images/swiper-03.png` | Swiper slide — Notebooks |
| `images/FOOTER.png` | Footer background pattern |

---

## 4. Visual Identity

### 4.1 Color Palette

No CSS custom properties — colors are hardcoded throughout `style.css`.

| Token | Hex | Usage |
|---|---|---|
| Black | `#000000` | Body text, header borders, nav link text, hero content text |
| Near-black | `#333333` | Side menu link text, close button |
| White | `#ffffff` | Side menu background, footer card background |
| Light gray | `#f9f9f9` | Page background |
| Off-white | `#f0f0f0` | Hero content card background |
| Gray-light | `#f5f5f5` | Side menu link hover |
| Gray-mid | `#f3f1f2` | Newsletter input background |
| Yellow | `#ffee3e` | News left card (Washi Tape) background color |
| Cyan | `#e7fcfd` | News right card (Pencils) background color |
| Coral | `#fd674f` | Swiper pagination bullet (active & border) |
| Light blue | `#beedf3` | Newsletter subscribe button background |
| Overlay | `rgba(0,0,0,0.5)` | Side menu backdrop |
| Shadow soft | `rgba(0,0,0,0.15)` | Side menu box-shadow |
| Shadow btn | `rgba(0,0,0,0.15)` | Newsletter input/button box-shadow |
| Footer text | `rgba(0,0,0,0.15)` | Copyright text |

**Note**: No light/dark mode — fixed light theme only.

### 4.2 Typography

| Element | Font | Weight | Size | Letter-spacing | Transform |
|---|---|---|---|---|---|
| Logo (header/footer) | Afacad | 700 | `1.5rem` | `0.15em` | — |
| Hero sub-label | Afacad | 400 | `1rem` | `0.05em` | uppercase |
| Hero heading (h3) | Afacad | 700 | `2rem` | `0.1em` | uppercase |
| Section heading (h3) | Afacad | 700 | `1.5rem` | — | uppercase |
| Section label (p) | Afacad | 400 | `0.875rem` | `0.05em` | uppercase |
| Swiper slide (p) | Afacad | 400 | `0.875rem` | `0.05em` | uppercase (underline) |
| Swiper slide (h2) | Afacad | 700 | `1.25rem` | — | — |
| Nav links | Afacad (inherit) | 400 | `1rem` | — | — |
| Side menu links | Afacad (inherit) | 400 | `1rem` | — | — |
| Footer heading (h1) | Afacad | 700 | `1.5rem` | `0.15em` | — |
| Footer heading (h3) | Afacad | 700 | `1.125rem` | — | — |
| Footer text | Afacad | 400 | `0.9375rem` | — | — |
| Newsletter input/btn | Afacad (inherit) | 400 | `0.875rem` | — | — |

**Import** (Google Fonts CDN):
```css
@import url("https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&display=swap");
```

### 4.3 Buttons

All buttons share:
```css
background: transparent;
border: none;
cursor: pointer;
text-decoration: underline;
```

| Location | Background | Width/Height | Shadow |
|---|---|---|---|
| Hero "Shop Now" | Transparent (inherits) | Auto | None |
| News "Shop Now" | Transparent (inherits) | Auto | None |
| Newsletter "Subscribe Now" | `#beedf3` | 195×44px | `0px 4px 4px rgba(0,0,0,0.15)` |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Container max-width | 1276px |
| Container padding | `0 0.75rem` |
| Header padding | 21px |
| Header borders | 5px solid `#000` (top + bottom) |
| Header margin-top | 44px |
| Hero min-height | 300px (mobile) / 717px (768px+) |
| Hero content padding | 34px |
| News section margin | 30px 0 |
| News card min-height | 330px (mobile) / 552px (768px+) |
| News card max-width | 781px (768px+) |
| News container gap | 30px (mobile) / 88px (768px+) |
| Shop section margin | 80px 0 |
| Swiper padding | 40px 0 |
| Swiper pagination bullets | 10×10px, border 2px `#fd674f` |
| Footer padding | 100px 50px |
| Footer card padding | 2rem |
| Footer card gap | 2rem |
| Newsletter input/button | 195×44px |
| Side menu width | 80% (max 360px) |
| Side menu header padding | 16px 20px |
| Side menu link padding | 16px 20px |
| Nav link padding | 0 24px |
| Header hamburger | 40×40px |

### 4.5 Borders & Dividers

| Element | Rule |
|---|---|
| Header top/bottom | 5px solid `#000` |
| Nav links separator | `border-right: 3px solid #000` (not last) |
| Side menu header bottom | `1px solid #eee` |
| Side menu item separator | `border-top: 1px solid #f0f0f0` (between items) |

### 4.6 Focus-Visible

Not explicitly styled — relies on browser defaults.

---

## 5. Page Structure

```
HEADER
  Logo: "ALPHABET" (700 weight, 0.15em letter-spacing)
  Desktop nav (768px+): Home | About | Shop | Contact (pipe separators)
  Hamburger icon (<768px): Lucide "menu" icon

SIDE MENU (mobile, <768px)
  Overlay (rgba black 50%, z-index 99)
  Panel slide-in right (80%/360px, z-index 100)
  Header: "ALPHABET" + X close button
  Nav: Home (home icon) | About (package icon) | Shop (info icon) | Contact (phone icon)
  Close via: X button, overlay click, Escape key

MAIN
  HERO (main-hero)
    Background: hero-banner.png (cover, centered)
    Content card (#f0f0f0, centered):
      p: "Introducing Your New"
      h3: "FUN & STYLISH DESK"
      button: "Shop Now"

  NEWS ARRIVALS (main-news)
    Two side-by-side cards (stacked on mobile, flex 768px+):
      LEFT (news__left, yellow #ffee3e bg):
        Background: news__left.png
        p: "New Arrival"
        h3: "WASHI TAPE"
        button: "Shop Now"
      RIGHT (news__right, cyan #e7fcfd bg):
        Background: news__right.png
        p: "Start Doodling With"
        h3: "Perfect pencils"
        button: "Shop Now"

  SHOP CAROUSEL (main-shop)
    Swiper.js carousel (1 slide mobile, 3 slides 768px+):
      SLIDE 1: swiper-01.png / "Desk Accessories" / "Back to Scholl With Style"
      SLIDE 2: swiper-02.png / "Pens & Pencils" / "Our New Writing Collection"
      SLIDE 3: swiper-03.png / "Notebooks" / "Your Ideas. Our Beautiful Notebooks"
    Pagination bullets (coral, clickable)
    Autoplay: 8s, loop

FOOTER
  Background: FOOTER.png
  White card with 4 columns:
    Brand: "ALPHABET" + nav links (Home, About, Shop, Contact)
    Address: 500 Tony Street, Los Angeles, 93 496 / Tel: 333-444-4556
    Opening Hours: Mon-Fri 10am-7pm / Sat 10am-8pm / Sun 10am-7pm
    Newsletter: Email input + "Subscribe Now" button
  Back link: <a href="../../index.html">← Voltar ao Showcase</a>
  Copyright: "© 2026 ALPHABET. Todos os direitos reservados."
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | ALPHABET |
| Title | ALPHABET Store |
| Meta description | ALPHABET — Sua loja de 文具 estilo e criatividade. Descubra mesas divertidas, washi tape, cadernos e acessórios. |
| Meta keywords | ALPHABET, 文具, papelaria, washi tape, cadernos, desk accessories, loja criativa |
| Year | 2026 |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Hero (p) | `Introducing Your New` |
| Hero (h3) | `FUN & STYLISH DESK` |
| News left (p) | `New Arrival` |
| News left (h3) | `WASHI TAPE` |
| News right (p) | `Start Doodling With` |
| News right (h3) | `Perfect pencils` |
| Slide 1 (p) | `Desk Accessories` |
| Slide 1 (h2) | `Back to Scholl With Style` |
| Slide 2 (p) | `Pens & Pencils` |
| Slide 2 (h2) | `Our New Writing Collection` |
| Slide 3 (p) | `Notebooks` |
| Slide 3 (h2) | `Your Ideas. Our Beautiful Notebooks` |
| Footer address | `500 Tony Street` / `Los Angeles, 93 496` / `Tel: 333-444-4556` |

### 6.3 CTAs

| Label | Usage |
|---|---|
| `Shop Now` | Hero section, News left, News right |
| `Subscribe Now` | Newsletter form |

### 6.4 Navigation

| Menu | Location | Items |
|---|---|---|
| Desktop nav (768px+) | `.header__nav` | Home — About — Shop — Contact |
| Side menu (<768px) | `.nav-side` | Home — About — Shop — Contact (with Lucide icons) |

### 6.5 Icons

All icons via Lucide CDN (`https://unpkg.com/lucide@latest`):

| Icon | Location |
|---|---|
| `menu` | Header hamburger button |
| `x` | Side menu close button |
| `home` | Side menu — Home link |
| `package` | Side menu — About link |
| `info` | Side menu — Shop link |
| `phone` | Side menu — Contact link |

---

## 7. Components

### 7.1 Header

```html
<header class="header">
  <div class="container">
    <span class="header__logo">ALPHABET</span>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li><a href="#" class="header__nav-link"><span>Home</span></a></li>
        <!-- About, Shop, Contact -->
      </ul>
    </nav>
    <button class="header__hamburger" aria-label="Abrir menu">
      <i data-lucide="menu" class="header__hamburger-icon"></i>
    </button>
  </div>
</header>
```

- Logo: inline span, 700 weight, `1.5rem`, `letter-spacing: 0.15em`
- Desktop nav: `display: none` by default; `display: flex` at 768px+
- Nav items separated by `border-right: 3px solid #000`
- Hamburger: 40×40px, `display: flex` at <768px; hidden at 768px+

### 7.2 Side Menu (Mobile)

```css
.nav-side {
  position: fixed;
  top: 0; right: 0;
  z-index: 100;
  width: 80%;
  max-width: 360px;
  height: 100vh; height: 100dvh;
  background: #fff;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  transform: translateX(100%);
  transition: transform 0.3s ease;
}
.nav-side--open {
  transform: translateX(0);
}
```

- Overlay: fixed inset, rgba black 50%, z-index 99, opacity 0 → 1 transition
- Open: `body.menu-open` class + `.nav-side--open` on panel
- Close: X button, overlay click, Escape key
- Body scroll locked: `overflow: hidden` (disabled at 768px+)
- Nav links: Lucide icon + text, `padding: 16px 20px`, hover background `#f5f5f5`

### 7.3 Hero Section

```css
.main-hero {
  background-image: url("../images/hero-banner.png");
  min-height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero__content {
  background: #f0f0f0;
  padding: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
}
```

- Full-width background image, centered content card
- Content card: off-white background, centered text, vertical flex
- Mobile: 300px min-height; 768px+: 717px min-height

### 7.4 News Cards

```css
.news__item {
  flex: 1;
  min-height: 330px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
}
.news__left {
  background-image: url("../images/news__left.png");
  background-color: #ffee3e; /* yellow */
}
.news__right {
  background-image: url("../images/news__right.png");
  background-color: #e7fcfd; /* cyan */
}
```

- Two cards in flex row at 768px+ (gap 88px), stacked on mobile (gap 30px)
- Background image + solid color fallback
- Content centered inside card: label (p, uppercase, 0.875rem), heading (h3, 1.5rem, uppercase), button

### 7.5 Swiper Carousel

Configuration:
```js
new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: { delay: 8000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    768: { slidesPerView: 3, spaceBetween: 24 },
  },
})
```

- Swiper 12 from CDN (`swiper-bundle.min.js` + `swiper-bundle.min.css`)
- Custom pagination bullets: 10×10px, `border: 2px solid #fd674f`, active fill `#fd674f`
- Each slide: image (max-width 330px) + p label (underline, uppercase) + h2 title

### 7.6 Footer

```css
.footer {
  background-image: url("../images/FOOTER.png");
  padding: 100px 50px;
}
.footer__content {
  background-color: #ffffff;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
}
```

- Full-width background image (FOOTER.png)
- White card overlay with 4 flex columns:
  1. Brand logo + nav links
  2. Address (street, city/zip, phone)
  3. Opening hours (Mon–Fri, Saturday, Sunday)
  4. Newsletter signup (email input + subscribe button)
- Newsletter input: 195×44px, no border, `#f3f1f2` background, box-shadow
- Newsletter button: 195×44px, `#beedf3` background, box-shadow
- Back link + copyright below the card

---

## 8. Animations

### 8.1 Mobile Menu Transition

- Panel: `transform: translateX(100%) → 0`, 0.3s ease
- Overlay: `opacity: 0 → 1`, 0.3s ease

### 8.2 Swiper Autoplay

- 8000ms interval, loop enabled
- 3 slides per view on desktop (768px+), 1 on mobile

### 8.3 Hover Effects

| Element | Effect |
|---|---|
| Nav link hover | `color: #000000a1` |
| Side menu link hover | `background: #f5f5f5` |

No GSAP, no scroll-triggered animations, no entrance animations.

### 8.4 Reduced Motion

Not explicitly implemented — relies on browser defaults. Swiper autoplay has no pause-on-hover behavior.

---

## 9. Responsive

### 9.1 Breakpoint 768px

| Element | Mobile (<768px) | Desktop (768px+) |
|---|---|---|
| Navigation | Hamburger + side menu (slide-in) | Desktop nav (flex, pipe separators) |
| Side menu | Visible (80%/360px slide-in) | `display: none` |
| Body scroll lock | `overflow: hidden` when menu open | `overflow: auto` |
| Hero min-height | 300px | 717px |
| News layout | Stacked (flex column default) | Flex row, gap 88px |
| News card min-height | 330px | 552px |
| News card max-width | Auto | 781px |
| Swiper slides | 1 per view | 3 per view, gap 24px |

### 9.2 Implicit Behavior

- Container uses `flex` with `width: 100%` — sections stack naturally on mobile
- Footer content uses `flex-wrap: wrap` — wraps on narrow screens
- No explicit breakpoints beyond 768px

---

## 10. Assets

### 10.1 Images

| File | Dimensions (estimated) | Usage |
|---|---|---|
| `hero-banner.png` | — | Hero section background (cover) |
| `news__left.png` | — | Washi Tape news card background (cover, bottom position) |
| `news__right.png` | — | Pencils news card background (cover, bottom position) |
| `swiper-01.png` | — | Swiper slide 1 — Desk Accessories (max-width 330px) |
| `swiper-02.png` | — | Swiper slide 2 — Pens & Pencils (max-width 330px) |
| `swiper-03.png` | — | Swiper slide 3 — Notebooks (max-width 330px) |
| `FOOTER.png` | — | Footer background |

No SVG files, no favicon.

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<footer>`
- **ARIA Labels** — hamburger button: `aria-label="Abrir menu"`
- **Viewport** — `viewport-fit=cover` for notched devices
- **Responsive** — works on mobile and desktop

### Missing / Improvements Needed

- **Skip link** — not present
- **Focus states** — no custom `:focus-visible` styling (relies on browser defaults)
- **Reduced motion** — no `prefers-reduced-motion` media query
- **Alt text** — all images have empty `alt=""` — decorative is correct but meaningful images (swiper slides) could use descriptive alt
- **Keyboard nav** — side menu can be closed via Escape but no `aria-expanded` on hamburger
- **Heading hierarchy** — hero uses h3, shop uses h2 — but page has missing h1 (logo is a span); footer has h1 + h3
- **Form labels** — email input has no `<label>` (only `placeholder`)
- **Dark mode** — not implemented (showcase has dark/light toggle)

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| CDN loading | Swiper.js, Lucide from CDN |
| Single CSS file | One `style.css` (no reset file, no additional imports) |
| Deferred JS | `script.js` uses `defer` |
| IIFE pattern | Script wrapped in IIFE — no global scope pollution |

### Considerations

- Hero/news/footer background images are PNG — converting to WebP would reduce weight
- No lazy loading on images (`loading="lazy"` not set)
- Swiper + Lucide add external dependencies — total ~40KB+
- No critical CSS inlining
- Images lack explicit width/height attributes (no aspect ratio placeholder)

---

## 13. UX Principles

- **Mobile First** — responsive at 768px breakpoint; hamburger menu on small screens
- **Clear Hierarchy** — oversized hero heading draws attention first; news cards below; carousel for product browsing
- **Consistent CTAs** — uniform "Shop Now" label across hero and news sections
- **Simple Navigation** — 4-item nav with Lucide icons in mobile drawer
- **Visual Storytelling** — hero image sets mood, news cards highlight promotions, carousel showcases categories
- **Social Proof (indirect)** — "New Arrival" / "Back to Scholl With Style" seasonal messaging
- **Footer as Information Hub** — address, hours, newsletter, and nav all in one place

---

## 14. Observations

- **No build tools**: HTML+CSS+JS puro, fontes via Google Fonts CDN
- **No dark mode**: tema fixo claro (diferente do showcase principal que tem toggle)
- **No GSAP**: sem animações de scroll ou entrada — apenas transição CSS do menu e Swiper
- **No Tailwind**: CSS puro com naming BEM parcial
- **BEM inconsistente**: classes como `main-hero`, `main-news`, `main-shop` não seguem BEM estrito; Swiper classes são da biblioteca
- **Swiper version**: v12 (CDN via jsdelivr)
- **Lucide ícones**: carregados via `https://unpkg.com/lucide@latest` — sem fallback
- **Typo no HTML**: "Back to Scholl" (deveria ser "School")
- **h1 ausente**: logo usa `<span>`, hero usa `<h3>` — nenhum `<h1>` na página
- **Footer com dois `h1`**: "ALPHABET" aparece como `h1` no footer — quebra hierarquia
- **Side menu~768px**: body scroll lock desabilitado via `overflow: auto` no breakpoint — evita conflito com desktop nav
- **Hero card sem max-width**: pode esticar muito em telas largas
- **Footer card responsivo**: `flex-wrap` permite quebra em 4 colunas para 2 ou 1 conforme espaço
- **Preview image**: `preview.png` não existe ainda — precisa ser criada para o showcase
- **Não listado no showcase**: `data/projects.json` não contém entry `exemplo-21` — precisa ser adicionada

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Create preview image at `projects/exemplo-21--alphabet-store/preview.png`

2. Entry in `data/projects.json`:
   ```json
   {
     "id": "21",
     "title": "ALPHABET STORE",
     "category": "landing",
     "href": "projects/exemplo-21--alphabet-store/index.html",
     "preview": "projects/exemplo-21--alphabet-store/preview.png",
     "description": "Landing page for ALPHABET文具 stationery store with Swiper.js carousel, Lucide icons, and mobile slide-in menu.",
     "tags": ["HTML5", "CSS3", "JAVASCRIPT"]
   }
   ```

3. Footer link back (already present):
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **ALPHABET Store** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
