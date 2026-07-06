# Catpuccino — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page do **Catpuccino**, cat café landing page.

---

## 1. Project Overview

### Project Name

```
Catpuccino
```

### Industry

```
Food & Beverage / Animal Welfare — Cat Café
```

### Tagline

```
Coffee, Cats & Comfort
```

### Target Audience

```
Cat lovers and coffee enthusiasts (18–45 years old) seeking a relaxing,
unique café experience. Families, remote workers, and adoption-minded visitors.
```

### Main Goal

```
Lead Generation & Visit Booking — Encourage visitors to book a spot,
explore the menu, meet the resident cats, and learn about adoption.
```

### Brand Voice

- **Warm** — cream backgrounds (#D2C8B6, #F5F0E8), soft rounded corners, cozy imagery
- **Playful** — floating SVG cats, paw-print cursor, pun-driven item names (Meow-cappuccino, Purr-fect Latte)
- **Comforting** — "relax, sip great coffee, and connect with rescued cats"
- **Mission-driven** — adoption program, 300+ cats adopted, partner NGOs
- **Approachable** — clear section headers, large CTAs, multi-step booking flow

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<nav>`, `<section>`, `<footer>`), ARIA roles on tabs |
| Styling | Vanilla CSS via `assets/css/style.css` (BEM methodology, 2173 lines) |
| Behavior | Vanilla JavaScript ES6+ via `assets/js/script.js` (deferred) |
| Animations | CSS `@keyframes` (floating cats, bounce, fadeInUp, fadeIn) |
| Slider | Swiper.js 11 (CDN) |
| Icons | Lucide Icons (CDN, via `lucide.createIcons()`) |
| Fonts | Google Fonts — Inter 400–700, Playfair Display 400–700 |
| Cursor | Custom SVG paw-print cursor on interactive elements |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Semantic HTML: nav, hero, about, how-it-works, experience, menu (tabs), cats, adoption, experiences, testimonials (Swiper), visit, contact, final CTA, footer |
| `assets/css/style.css` | All styling: CSS custom properties, BEM blocks, floating cat animations, Swiper overrides, responsive breakpoints |
| `assets/js/script.js` | Lucide init, mobile nav toggle, smooth scroll, menu tabs, Swiper testimonials, auto year in footer |
| `assets/imgs/cats/*.svg` | 6 unique SVG cat illustrations, each duplicated for 12 floating elements |
| `assets/imgs/hero-bg.jpg` | Hero background image (dark coffee/café scene) |
| `assets/imgs/sociais/*.svg` | Social media icons: Instagram, Facebook, YouTube |
| `assets/imgs/cats/paw.svg` | Favicon — paw print SVG |

---

## 4. Visual Identity

### 4.1 Color Palette

All colors defined as CSS custom properties in `:root` in `style.css`.

| Token | CSS Variable | Hex | Usage |
|---|---|---|---|
| Primary | `--color-primary` | `#7D7362` | Nav icons, tag labels, feature icons, menu prices, primary headings muted |
| Primary Light | `--color-primary-light` | `#D2C8B6` | Badge, icon backgrounds, hero btn, map placeholder, social link bg |
| Accent | `--color-accent` | `#492E12` | Nav logo, section titles (Playfair), mobile CTA, adoption section bg |
| Accent Warm | `--color-accent-warm` | `#3B3F1A` | Final CTA section bg, btn hover states |
| Neutral | `--color-neutral` | `#8C8A80` | Body text, descriptions, muted labels |
| Dark | `--color-dark` | `#000000` | Footer bg, body text |
| Olive | `--color-olive` | `#727C64` | Secondary btn hover, accent variation |
| White | `--color-white` | `#FFFFFF` | Card backgrounds, nav bg, contact form |
| Cream | `--color-cream` | `#F5F0E8` | Page background, menu item bg, testimonials section bg |

**Note**: No light/dark mode — fixed light theme with cream background.

### 4.2 Typography

| Element | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| Logo | Playfair Display | 700 | 1.4rem | — |
| h1 (hero) | Playfair Display | 700 | `clamp(2.5rem, 6vw, 4.5rem)` | 1.1 |
| h2 (section titles) | Playfair Display | 700 | `clamp(2rem, 4vw, 3rem)` | — |
| h3 (card titles) | Playfair Display | 600–700 | 1.25rem–1.5rem | — |
| h4 (item names) | Playfair Display | 600 | 1rem–1.25rem | — |
| Body / description | Inter | 400 | 0.95rem–1.1rem | 1.6–1.8 |
| Nav links | Inter | 500 | 0.95rem | — |
| Buttons | Inter | 600 | 1rem | — |
| Tags / badges | Inter | 500 | 0.85rem (uppercase, letter-spacing 2px) | — |
| Menu price | Inter | 700 | 1rem | — |

**Import** (Google Fonts CDN):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 4.3 Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Hero primary | `#D2C8B6` | `#3B3F1A` | `#D2C8B6` | `#8C8A80` bg, `#D2C8B6` text, `translateY(-3px)` |
| Hero secondary | `#3B3F1A` | `#D2C8B6` | `#3B3F1A` | `#727C64` bg, translateY(-3px) |
| Adoption / menu CTA | `#492E12` | `#FFFFFF` | — | `#3B3F1A`, translateY(-2px) |
| Adoption btn (alt) | `#D2C8B6` | `#492E12` | — | translateY(-2px) |
| Final CTA btn | `#D2C8B6` | `#492E12` | — | translateY(-2px) |
| Contact submit | `#492E12` | `#FFFFFF` | — | `#3B3F1A`, translateY(-2px) |
| Mobile CTA | `#492E12` | `#FFFFFF` | — | translateY(-2px), box-shadow |
| Menu tab (active) | `#492E12` | `#FFFFFF` | `#492E12` | — |
| Menu tab (inactive) | `#FFFFFF` | `#000000` | `#D2C8B6` | `#492E12` bg, white text |

All buttons share `border-radius: 50px`, `font-weight: 600`, and `transition: var(--transition-fast)`.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Container max-width | 1200px (most sections), 1000px (menu, adoption, contact) |
| Section padding Y | `var(--space-xl)` = 6rem (desktop), 4rem (mobile ≤480px) |
| Card border radius | 20px (cats, experiences, testimonials, visit map) |
| Menu item radius | 15px |
| Nav height | 70px desktop, 60px mobile |
| Grid gap (cats) | 1.5rem |
| Grid gap (menu) | 1.5rem |
| Grid gap (visit/contact) | 3rem |
| Feature icon size | 80px (how-it-works), 70px (experiences) |

### 4.5 Decorative Elements

| Element | Description |
|---|---|
| Floating cats | 12 SVG cat images (6 unique × 2) positioned absolutely across viewport, `opacity: 0.15`, `filter: grayscale(100%)`, animated via `@keyframes blob-float` (12s, ease-in-out infinite, staggered delay) |
| Paw-print cursor | Custom SVG `url("data:image/svg+xml,...")` applied to all interactive elements (`a`, `button`, `.menu__tab`, `input`, `textarea`, `select`) |
| Map placeholder | `#D2C8B6` background with Lucide `map` icon + "Map View" text |
| Testimonials paw pagination | Custom paw-print SVG dots via Lucide `paw-print` icons |
| Scroll bounce | Hero `hero__scroll` with Lucide `chevrons-down` and CSS `@keyframes bounce` |

### 4.6 Focus-Visible

Not explicitly styled (relies on browser defaults). Contact form inputs have `:focus` with `border-color: var(--color-primary)`.

---

## 5. Page Structure

```
NAV (fixed, white bg, z-index: 998)
  Logo: paw-print SVG icon + "Catpuccino" (Playfair)
  Desktop links: Home — Menu — Cats — Visit
  Mobile toggle: 3-line hamburger

1. HERO (dark bg #170D0B, hero-bg.jpg as overlay at 40% opacity)
  Badge: "Welcome to"
  h1: "Coffee, Cats & Comfort" [gold gradient text]
  p: "Relax, sip great coffee, and connect with rescued cats"
  Two CTAs: "Book Your Spot" (primary) | "Reserve Your Visit" (secondary)
  Scroll indicator: "Scroll to explore" + chevrons-down icon

2. ABOUT / WHAT IS A CAT CAFÉ (cream bg, 2-col grid)
  Left: tag "What is a Cat Café?" — h2 "A Unique Experience" — 2 paragraphs
  3 features: coffee icon + "Specialty Single-Origin Coffee", cat icon + "12 Resident Cats", heart-handshake + "300+ Adoptions"
  Right: Unsplash image — cozy cat café interior

3. HOW IT WORKS (cream bg, 3 col)
  Tag "How It Works" — h2 "Three Simple Steps"
  3 steps with number, icon circle, title, text:
    01 — Enjoy the Café, 02 — Book the Cat Lounge, 03 — Relax & Interact

4. THE EXPERIENCE (cream bg, 2-col grid 2fr:1fr)
  Tag "The Experience" — h2 "Safe & Relaxing Environment"
  Left (highlight card): shield-check icon + "Our Cat Lounge" — description text — 3 stats (15 Max Guests, 30min/Session, $12-25)
  Right (rules card): h4 "House Rules" — 6 rules with x icons

5. MENU (white bg, max-width 1000px)
  Tag "Our Menu" — h2 "Coffee & Treats" — p subtitle
  2 tabs with Lucide icons: Drinks (cup-soda) | Desserts (cake)
  Drinks panel: 8 items in 2-col grid (Catpuccino Classic, Whisker's Espresso, Purr-fect Latte, Meow-cappuccino, Tail-wag Mocha, Purr-ro Cold Brew, Frosty Paws Frappé, Kitten Hot Chocolate)
  Desserts panel: 8 items in 2-col grid (Homemade Cake, Sweet Tart, Petit Gateau, Nutella Bread, Paw-shaped Cookies, Kitten Brigadeiros, Tail Tiramisu, Miau Pudim)
  Each item: image (120px) + name + price + description

6. OUR CATS (cream bg, 4-col grid)
  Tag "Meet the Family" — h2 "Our Resident Cats" — p "12 furry friends waiting to meet you"
  12 cat cards: image + name + breed + personality emoji
  Adoption banner: heart icon + "Falling in love? Our cats are available for adoption!" + CTA

7. ADOPTION MISSION (accent #492E12 bg, centered)
  Tag "Adoption Program" — h2 "Every Cat Deserves a Forever Home"
  p: mission text — 3 stats (300+ Adopted, 12 Available, 5 Partner NGOs)
  CTA: "Start Adoption Process"

8. EXPERIENCES (white bg, 3 cards)
  Tag "Experiences" — h2 "Special Moments"
  3 cards: Cat Lounge Visit ($15), Café + Lounge Combo ($22), Cat Yoga Weekends ($25)

9. TESTIMONIALS (cream bg, Swiper.js slider)
  Tag "Testimonials" — h2 "What Our Guests Say"
  Swiper with 9 slides: 5-star rating + quote + avatar initial + name
  Custom paw-print pagination (9 dots) + prev/next arrows
  Breakpoints: 1 slide <480px, 2 slides 768px, 3 slides 1024px

10. VISIT (white bg, 2-col grid)
  Tag "Plan Your Visit" — h2 "Find Us"
  Left: hours (Mon-Fri 2-8PM, Sat-Sun 9AM-8PM), location (123 Whiskers Street...), entry fee ($15pp, 30min, max 15)
  Right: map placeholder with Lucide map icon

11. CONTACT (cream bg, 2-col grid)
  Tag "Get in Touch" — h2 "Contact Us"
  Left: form with name, email, subject select (6 options), message textarea, submit btn
  Right: email (hello@catpuccino.com), phone ((555) 123-CATS), social links (Instagram, Facebook, YouTube SVG icons)

12. FINAL CTA (accent-warm #3B3F1A bg)
  h2: "Take a Break. Meet Our Cats. Enjoy Great Coffee."
  p: "Book your visit today and experience the purr-fect combination"
  CTA: "Book Your Visit Today"

FOOTER (black bg)
  4-column grid: About, Experience, Visit, Contact (links)
  Bottom: Terms | Privacy + © 2025 Catpuccino. All rights reserved. (auto year via JS)
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Catpuccino |
| Title | Catpuccino - Coffee, Cats & Comfort |
| Year | 2025 (auto via JS) |
| Category | landing |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Hero badge | `Welcome to` |
| Hero (h1) | `Coffee, Cats & Comfort` |
| Hero (p) | `Relax, sip great coffee, and connect with rescued cats` |
| About tag | `What is a Cat Café?` |
| About (h2) | `A Unique Experience` |
| About (p1) | `A cat café is a space where you can enjoy delicious coffee while spending time with adorable rescue cats. It's the perfect blend of specialty coffee culture and feline companionship.` |
| About (p2) | `Founded in 2014, Catpuccino was one of the first cat cafés in Brazil. Our cats come from partner NGOs and streets, rescued from abandonment and urban situations. Every cat receives veterinary care, vaccination, and microchipping until they find their forever home.` |
| How It Works tag | `How It Works` |
| How It Works (h2) | `Three Simple Steps` |
| Experience tag | `The Experience` |
| Experience (h2) | `Safe & Relaxing Environment` |
| Menu tag | `Our Menu` |
| Menu (h2) | `Coffee & Treats` |
| Menu subtitle | `Single-origin specialty coffee from Brazilian farms • Handcrafted beverages • Fresh baked desserts` |
| Cats tag | `Meet the Family` |
| Cats (h2) | `Our Resident Cats` |
| Cats subtitle | `12 furry friends waiting to meet you` |
| Adoption tag | `Adoption Program` |
| Adoption (h2) | `Every Cat Deserves a Forever Home` |
| Experiences tag | `Experiences` |
| Experiences (h2) | `Special Moments` |
| Testimonials tag | `Testimonials` |
| Testimonials (h2) | `What Our Guests Say` |
| Visit tag | `Plan Your Visit` |
| Visit (h2) | `Find Us` |
| Contact tag | `Get in Touch` |
| Contact (h2) | `Contact Us` |
| Final CTA (h2) | `Take a Break. Meet Our Cats. Enjoy Great Coffee.` |
| Final CTA (p) | `Book your visit today and experience the purr-fect combination` |
| Footer | `© 2024 Catpuccino. All rights reserved.` |

### 6.3 CTAs

| Label | Usage | Style |
|---|---|---|
| `Book Your Spot` | Hero primary | Light pill, dark text |
| `Reserve Your Visit` | Hero secondary | Dark olive pill, light text |
| `Learn About Adoption` | Cats section | Dark bg, white text |
| `Start Adoption Process` | Adoption section | Light pill, dark text |
| `Send Message` | Contact form | Dark bg, white text |
| `Book Your Visit Today` | Final CTA | Light pill, dark text |
| `Book Your Visit` | Mobile footer CTA | Dark bg, white text, gradient |

### 6.4 Navigation

| Menu | Location | Items |
|---|---|---|
| Desktop nav | Nav bar (hidden on mobile via `@media (max-width: 768px)`) | Home — Menu — Cats — Visit |
| Mobile nav | Side panel (slide from right, 320px / 85vw) | Home — About — How It Works — Menu — Cats — Adoption — Experiences — Testimonials — Visit — Contact |

### 6.5 Icons

All icons via Lucide CDN (`https://unpkg.com/lucide@latest`):

| Icon | Location |
|---|---|
| `chevrons-down` | Hero scroll indicator |
| `coffee` | About feature 1, How It Works step 1, Experiences card 2 |
| `cat` | About feature 2, Footer About column title |
| `heart-handshake` | About feature 3, How It Works step 3 |
| `calendar-days` | How It Works step 2 |
| `shield-check` | Experience highlight |
| `x` | Experience rules list (×6) |
| `cup-soda` | Menu tab — Drinks |
| `cake` | Menu tab — Desserts |
| `heart` | Cats adoption banner |
| `home` | Experiences card 1 |
| `flower-2` | Experiences card 3 |
| `chevron-left` | Testimonials prev arrow |
| `chevron-right` | Testimonials next arrow |
| `paw-print` | Testimonials pagination dots (×9) |
| `clock` | Visit hours |
| `map-pin` | Visit location, Footer Visit column |
| `ticket` | Visit entry fee |
| `map` | Visit map placeholder |
| `mail` | Contact info, Footer Contact column |
| `phone` | Contact info |

---

## 7. Components

### 7.1 Navigation Bar

```html
<nav class="nav">
  <div class="nav__container">
    <a href="#home" class="nav__logo">
      <!-- SVG paw-print icon -->
      <span>Catpuccino</span>
    </a>
    <!-- Desktop nav -->
    <ul class="nav__menu">
      <li><a href="#home" class="nav__link">Home</a></li>
      <li><a href="#menu" class="nav__link">Menu</a></li>
      <li><a href="#cats" class="nav__link">Cats</a></li>
      <li><a href="#visit" class="nav__link">Visit</a></li>
    </ul>
    <!-- Mobile toggle -->
    <button class="nav__toggle" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

- Fixed position, white background, 70px height, z-index 998
- Logo: inline SVG paw-print + Playfair Display "Catpuccino"
- Desktop: 4 links with `hover: color + bg` effect
- Mobile: hamburger hidden on desktop, 3-line toggle with X animation on active
- Scroll: shadow intensifies after 50px scroll via JS

### 7.2 Mobile Menu (Side Panel)

```html
<div class="nav__mobile-wrap">
  <div class="nav__mobile-backdrop"></div>
  <div class="nav__mobile">
    <div class="nav__mobile-header">
      <a href="#home" class="nav__logo">...</a>
      <button class="nav__mobile-close" aria-label="Close menu">
        <!-- X icon SVG -->
      </button>
    </div>
    <ul class="nav__mobile-list">
      <li><a href="#home" class="nav__mobile-link">Home</a></li>
      <li><a href="#about" class="nav__mobile-link">About</a></li>
      <!-- 10 links total -->
    </ul>
    <div class="nav__mobile-footer">
      <a href="#visit" class="nav__mobile-cta">Book Your Visit</a>
    </div>
  </div>
</div>
```

- Fixed overlay (z-index 999), backdrop at 50% opacity
- Side panel: 320px/85vw, slide from right via `transform: translateX(100%)` → `0`
- Close triggers: X button, backdrop click, link click, Escape key
- 10 nav links with full section coverage
- Footer CTA with gradient bg and shadow
- Body scroll locked when open (`overflow: hidden`)

### 7.3 Hero Section

```html
<section class="hero" id="home">
  <div class="hero__bg"></div>
  <div class="hero__content">
    <span class="hero__badge">Welcome to</span>
    <h1 class="hero__title">
      <span class="hero__title-accent">Coffee, Cats & Comfort</span>
    </h1>
    <p class="hero__subtitle">Relax, sip great coffee, and connect with rescued cats</p>
    <div class="hero__cta">
      <a href="#visit" class="hero__btn hero__btn--primary">Book Your Spot</a>
      <a href="#how-it-works" class="hero__btn hero__btn--secondary">Reserve Your Visit</a>
    </div>
  </div>
  <div class="hero__scroll">
    <span>Scroll to explore</span>
    <i data-lucide="chevrons-down"></i>
  </div>
</section>
```

- Full-screen (`min-height: 100vh`), dark background `#170D0B`
- Background image overlay at 40% opacity (`hero-bg.jpg`)
- Title uses gradient text: `linear-gradient(135deg, #f5e6d3, #d4b896)` with `background-clip: text`
- Entrance animation via CSS `@keyframes fadeInUp` (1s ease)
- Floating cats are hidden on hero section via JS IntersectionObserver-like logic (`getBoundingClientRect`)
- Scroll indicator bounces perpetually

### 7.4 About Section

```html
<section class="about" id="about">
  <div class="about__container">
    <div class="about__content">
      <span class="about__tag">What is a Cat Café?</span>
      <h2 class="about__title">A Unique Experience</h2>
      <p class="about__text">...</p>
      <p class="about__text">...</p>
      <div class="about__features">
        <div class="about__feature"><i data-lucide="coffee"></i><span>Specialty Single-Origin Coffee</span></div>
        <div class="about__feature"><i data-lucide="cat"></i><span>12 Resident Cats</span></div>
        <div class="about__feature"><i data-lucide="heart-handshake"></i><span>300+ Adoptions</span></div>
      </div>
    </div>
    <div class="about__image">
      <img src="https://images.unsplash.com/..." alt="Cozy cat café interior" loading="lazy">
    </div>
  </div>
</section>
```

- 2-column grid on desktop, single column on mobile
- Image: Unsplash CDN, 600×500, `object-fit: contain`
- Features horizontal row, stacks vertically on mobile

### 7.5 Menu Tabs

```html
<div class="menu__tabs" role="tablist">
  <button class="menu__tab menu__tab--active" data-tab="drinks" role="tab" aria-selected="true" aria-controls="drinks">
    <i data-lucide="cup-soda"></i>Drinks
  </button>
  <button class="menu__tab" data-tab="desserts" role="tab" aria-selected="false" aria-controls="desserts">
    <i data-lucide="cake"></i>Desserts
  </button>
</div>
```

- Two tabs with Lucide icons, pill-shaped (border-radius: 50px)
- Active tab: dark bg (`#492E12`), white text — Inactive: white bg, dark border
- JS toggles `.menu__tab--active` and `.menu__panel--active` classes
- Panel transition via CSS `@keyframes fadeIn` (0.5s)
- Each item: horizontal card with 120px image + name + price + description
- 2-column grid on desktop, single column on mobile

### 7.6 Cats Cards

```html
<div class="cats__grid">
  <div class="cats__card">
    <div class="cats__card-image">
      <img src="https://images.unsplash.com/..." alt="Luna the cat" loading="lazy">
    </div>
    <div class="cats__card-info">
      <h4 class="cats__card-name">Luna</h4>
      <p class="cats__card-breed">British Shorthair</p>
      <p class="cats__card-personality">🧡 Queen of the café</p>
    </div>
  </div>
  <!-- 12 cards total -->
</div>
```

- 4-column grid desktop, 2 columns tablet, 1 column mobile ≤480px
- Card hover: `translateY(-10px) rotate(1deg)` + enhanced shadow
- Images: Unsplash CDN, 300×250, `object-fit: contain`

### 7.7 Testimonials Slider

```html
<section class="testimonials" id="testimonials">
  <div class="testimonials__wrapper">
    <div class="swiper testimonials__slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="testimonials__card">
            <div class="testimonials__card-rating">★★★★★</div>
            <p class="testimonials__card-text">"..."</p>
            <div class="testimonials__card-author">
              <div class="testimonials__card-avatar">S</div>
              <span class="testimonials__card-name">Sarah M.</span>
            </div>
          </div>
        </div>
        <!-- 9 slides total -->
      </div>
    </div>
    <!-- Arrows + custom paw-print pagination -->
  </div>
</section>
```

- Swiper.js 11 with loop, autoplay (5s delay, pause on hover)
- Breakpoints: 1 slide (<480px), 2 slides (768px), 3 slides (1024px)
- Custom pagination: paw-print SVG dots (Lucide), synced with `swiper.realIndex`
- Arrows visible on mobile/tablet (`display: flex` at ≤768px), paw pagination hidden at ≤768px
- Each card: 5 stars, italic quote, circular avatar with initial, name

### 7.8 Contact Form

```html
<form class="contact__form">
  <div class="contact__field">
    <label for="name" class="contact__label">Name</label>
    <input type="text" id="name" name="name" class="contact__input" required>
  </div>
  <!-- Email, Subject (select with 6 options), Message (textarea) -->
  <button type="submit" class="contact__submit">Send Message</button>
</form>
```

- 4 fields: name, email, subject (select), message (textarea)
- Select styled with custom chevron SVG background
- All inputs have `2px solid var(--color-primary-light)` border, `var(--color-primary)` on focus
- 2-column layout on desktop, stacked on mobile

---

## 8. Animations

### 8.1 Global CSS Animations

All animations are CSS-only (no JS animation library):

| Animation | Element | Keyframes | Duration | Easing | Delay |
|---|---|---|---|---|---|
| Fade in up | Hero content | `fadeInUp` (opacity 0→1, y 30→0) | 1s | ease | 0 |
| Bounce | Hero scroll indicator | `bounce` (y 0→-10→-5→0) | 2s | ease | infinite |
| Float | `.floating-cat` (×12) | `blob-float` (translate + scale + rotate) | 12s | ease-in-out | staggered (0s–11s) |
| Fade in | Menu panels | `fadeIn` (opacity 0→1) | 0.5s | ease | 0 |
| Rotate | Mobile close btn hover | `transform: rotate(90deg)` | 0.25s | ease | 0 |

### 8.2 CSS Transitions (hover/interaction)

| Element | Property | Duration | Effect |
|---|---|---|---|
| Nav links | color, background | 0.2s | Color + bg change |
| Hero buttons | transform, box-shadow | 0.4s (normal) | TranslateY(-3px) + shadow |
| Menu item cards | transform, box-shadow | 0.4s | TranslateY(-5px) + shadow |
| Cat cards | transform, box-shadow | 0.4s | TranslateY(-10px) rotate(1deg) + shadow |
| Experience cards | transform | 0.4s | TranslateY(-10px) |
| Social links | background, transform | 0.2s | TranslateY(-3px) + accent bg |
| Contact buttons | background, transform | 0.2s | TranslateY(-2px) |
| Mobile menu | transform, opacity, visibility | 0.3s–0.4s | Slide in from right |

### 8.3 Floating Cats (blob-float keyframe)

```css
@keyframes blob-float {
  0%, 100% { transform: translate(0,0) rotate(0deg) scale(1); }
  15%  { transform: translate(25px, -30px) rotate(15deg) scale(1.1); }
  30%  { transform: translate(-15px, 20px) rotate(-10deg) scale(0.95); }
  45%  { transform: translate(35px, -10px) rotate(20deg) scale(1.05); }
  60%  { transform: translate(-25px, -25px) rotate(-15deg) scale(0.9); }
  75%  { transform: translate(10px, 30px) rotate(10deg) scale(1.08); }
  90%  { transform: translate(-20px, -15px) rotate(-5deg) scale(0.98); }
}
```

- 12 cat SVGs positioned across viewport (top 3%–88%, left/right 2%–25%)
- Each 150px (100px on mobile ≤480px)
- Hidden on hero section via JS (`getBoundingClientRect` check)

### 8.4 Reduced Motion

Not explicitly implemented (no `@media (prefers-reduced-motion: reduce)` block).

---

## 9. Responsive

### 9.1 Breakpoints

| Breakpoint | Target | Changes |
|---|---|---|
| 900px | Nav | Desktop links hidden, hamburger visible |
| 768px | Layout | About, experience, visit, contact → single column; menu → 1-col; cats → 2-col; testimonials arrows visible, paw pagination hidden; footer → 2-col; how-it-works, experiences → stacked |
| 480px | Mobile | `--space-xl` reduced to 4rem; cats → 1-col; hero CTAs → stacked; menu tabs → stacked; floating cats → 100px; footer → 1-col |

### 9.2 Layout Adaptations

| Element | Desktop | Tablet (≤768px) | Mobile (≤480px) |
|---|---|---|---|
| Nav | Fixed, horizontal links | Relative, hamburger | Same as tablet |
| Hero | Full viewport height | `min-height: auto` | Same as tablet |
| About | 2-col grid | 1-col | Same |
| Features | Horizontal row | Vertical stack | Same |
| How It Works | 3 horizontal steps | Vertical stack | Same |
| Experience | 2-col grid (2fr:1fr) | 1-col | Same |
| Menu | 2-col grid | 1-col | Same |
| Menu items | Horizontal (image + content) | Vertical (image full width) | Same |
| Cats | 4-col grid | 2-col | 1-col |
| Adoption stats | Horizontal row | Vertical stack | Same |
| Experiences | 3 horizontal cards | Vertical stack | Same |
| Visit | 2-col grid | 1-col | Same |
| Contact | 2-col grid | 1-col | Same |
| Footer | 4-col | 2-col | 1-col |
| Testimonials arrows | Hidden | Visible | Visible |
| Testimonials pagination | Visible | Hidden | Hidden |

---

## 10. Assets

### 10.1 Images

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |
| `assets/imgs/hero-bg.jpg` | Hero background — dark coffee/café interior (40% opacity overlay) |
| `assets/imgs/cats/cat1.svg` through `cat6.svg` | 6 unique SVG cat illustrations for floating animation (each duplicated = 12 elements) |
| `assets/imgs/cats/paw.svg` | Favicon — paw print SVG |
| `assets/imgs/sociais/instagran.svg` | Instagram social link |
| `assets/imgs/sociais/facebook.svg` | Facebook social link |
| `assets/imgs/sociais/youtube.svg` | YouTube social link |

### 10.2 External Images (Unsplash CDN)

| Image | Section | Dimensions |
|---|---|---|
| Café interior | About | 600×500 |
| Catpuccino coffee | Menu item | 300×200 |
| Espresso | Menu item | 300×200 |
| Latte | Menu item | 300×200 |
| Cappuccino | Menu item | 300×200 |
| Mocha | Menu item | 300×200 |
| Cold brew | Menu item | 300×200 |
| Frappé | Menu item | 300×200 |
| Hot chocolate | Menu item | 300×200 |
| Cake, tart, petit gateau, Nutella bread, cookies, brigadeiros, tiramisu, pudim | Menu items | 300×200 |
| 12 cat photos | Cats cards | 300×250 |

### 10.3 Icon (Favicon)

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <circle cx="11" cy="4" r="2"/>
  <circle cx="18" cy="8" r="2"/>
  <circle cx="20" cy="16" r="2"/>
  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>
</svg>
```

- Paw-print SVG — loaded from `./assets/imgs/cats/paw.svg`

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<nav>`, `<section>`, `<footer>`, proper heading hierarchy (h1 → h2 → h3/h4)
- **ARIA roles** — `role="tablist"`, `role="tab"`, `role="tabpanel"` on menu tabs
- **ARIA attributes** — `aria-selected`, `aria-controls`, `aria-labelledby` on tabs
- **ARIA Labels** — `aria-label="Open menu"`, `aria-label="Close menu"`, `aria-label="Previous"`, `aria-label="Next"`, `aria-label="Slide N"` on buttons
- **Alt Text** — all images have descriptive alt text
- **Form labels** — all form fields have `<label>` elements with `for` attributes
- **Lazy loading** — all images use `loading="lazy"`
- **Responsive** — mobile-first breakpoints
- **Escape key** — mobile menu closes on Escape key press

### Missing / Improvements Needed

- **Skip link** — not present
- **Focus states** — only on contact form inputs (`border-color: var(--color-primary)` on focus)
- **Reduced motion** — no `prefers-reduced-motion` media query
- **Dark mode** — not implemented
- **Footer back link** — `<a href="../../index.html">← Voltar ao Showcase</a>` not present — needs adding per AGENTS.md convention

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Deferred scripts | Main JS uses `defer` |
| CDN loading | Swiper.js, Lucide from CDN |
| Single CSS file | `style.css` (one file, 2173 lines) |
| SVG favicon | Lightweight, no extra HTTP request |
| Lazy images | All `<img>` use `loading="lazy"` attribute |
| Local SVGs | Cat illustrations and social icons served locally |
| CSS animations | Floating cats use GPU-composited `transform` properties |

### Considerations

- Swiper.js 11 adds ~30KB — heavy for a testimonials slider that could be vanilla JS
- All menu item images are external (Unsplash) — depends on CDN availability
- No image optimization or WebP conversion
- No critical CSS inlining
- Font loading: Preconnect hints (`<link rel="preconnect">`) for Google Fonts and CDNs

---

## 13. UX Principles

- **Guided Narrative Flow** — hero → what is a cat café → how it works → menu → cats → adoption → testimonials → visit → contact, creating a complete journey
- **Single Focus Per Section** — each section has one primary CTA (book, learn, send)
- **Warm & Inviting** — cream backgrounds, soft shadows, rounded corners (20px), friendly typography
- **Clear Visual Hierarchy** — Playfair Display for headings (serif, warm), Inter for body (sans-serif, clean)
- **Mobile-First Layout** — responsive via CSS media queries, hamburger menu, stacked layouts on mobile
- **Playful Personality** — floating cats, paw-print cursor, punny item names, emoji personalities
- **Social Proof** — 300+ adoptions stat, 9 testimonials, partner NGOs
- **Reassurance** — separate cat lounge, hygiene protocols, adoption process details
- **Multiple Entry Points** — "Book Your Spot", "Reserve Your Visit", "Learn About Adoption", "Start Adoption Process" across sections

---

## 14. Observations

- **No animation library**: Despite stack listing GSAP, the actual implementation uses pure CSS animations (`@keyframes`) and transitions — no GSAP or ScrollTrigger is loaded
- **12 floating cats**: 6 unique SVG illustrations, each duplicated once (12 total), with staggered animation delays (0s–11s)
- **Mobile menu is extensive**: 10 links covering every section (vs only 4 in desktop nav)
- **Menu is hardcoded**: All 16 menu items (8 drinks + 8 desserts) are static HTML, not loaded from JSON — contradicts the brief description
- **Custom paw-print pagination**: Testimonials use custom paw-print SVG dots instead of Swiper's built-in pagination, synced via `swiper.realIndex`
- **No dark mode**: Fixed light theme (different from the showcase's main dark/light toggle)
- **External images**: All cat photos and food images are hotlinked from Unsplash — will break if URLs change
- **No form handler**: Contact form has no `action` or `method` — submission does nothing (static demo)
- **Duplicate CSS**: `.nav__mobile-cta`, `.nav__mobile-list`, `.nav__mobile-link` blocks are defined twice in `style.css` (lines 411–601 and 549–600)
- **GSAP mentioned but unused**: The stack in this document reflects the brief; actual code relies entirely on CSS animations
- **Floating cat hidden logic**: Uses `getBoundingClientRect` on scroll (not IntersectionObserver) — performant but could be improved
- **BEM naming**: Consistent BEM methodology throughout all components

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "05",
     "title": "CATPUCCINO",
     "category": "landing",
     "href": "projects/exemplo-05--catpuccino/index.html",
     "preview": "projects/exemplo-05--catpuccino/preview.png",
     "description": "Catpuccino - Coffee, Cats & Comfort - Cat café landing page with Menu, Events, Location and GSAP scroll animations.",
     "tags": ["HTML5", "CSS3", "JAVASCRIPT"]
   }
   ```

2. Preview image at `projects/exemplo-05--catpuccino/preview.png` (already present)

3. Footer link back needs adding:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Catpuccino** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
