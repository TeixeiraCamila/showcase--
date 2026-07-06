# Blue Tone Retreats — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page da **Blue Tone Retreats**, wellness retreat de breathwork
> imersivo com sessões em grupo, coaching privado e retiros multi-dia.

---

## 1. Project Overview

### Project Name

```
Blue Tone Retreats
```

### Industry

```
Wellness — Breathwork & Meditation Retreats
```

### Tagline

```
Be More You
```

### Target Audience

```
Adults (25–55 years old) seeking stress reduction, emotional healing,
personal growth, or deeper mind-body connection through breathwork
and meditation practices in natural settings.
```

### Main Goal

```
Lead Generation & Service Awareness — Drive contact form submissions
for group sessions, private coaching, retreat bookings, and online
program memberships.
```

### Brand Voice

- **Calm & Grounded** — deep blue palette, nature imagery, relaxed typography
- **Transformational** — "Discover yourself" messaging, evidence-based language
- **Premium but Accessible** — refined design, clear pricing tiers
- **Nurturing** — supportive tone, community-oriented, inviting CTAs
- **Nature-connected** — ocean/coast imagery, earthy accent colors, organic feel

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<nav>`, `<section>`, `<footer>`) |
| Styling | Tailwind CSS v4 (CDN, deferred) + custom CSS via `style.css` + `reset.css` |
| Behavior | Vanilla JavaScript ES6+ (deferred, IIFE pattern) |
| Animations | GSAP 3.12.5 + ScrollTrigger + ScrollToPlugin (CDN, deferred) |
| Icons | Lucide icons (CDN, deferred) |
| Fonts | Google Fonts — Atkinson Hyperlegible (400, 700) + Cormorant Garamond (400, 500, 600) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Semantic HTML: nav, hero, about, services (4 cards), benefits (6 cards), testimonials (3 cards), contact form, footer |
| `css/style.css` | CSS custom properties, BEM utility classes, nav scroll state, mobile menu overlay, parallax, hover-lift |
| `css/reset.css` | Base reset, container (max-width: 1422px), body defaults, list reset, image block |
| `js/script.js` | IIFE: Tailwind config, GSAP animations (hero entrance, scroll reveals, benefit stagger, hover-lift), mobile menu, contact form validation, smooth scroll |
| `assets/favicon.svg` | SVG wave emoji (`🌊`) as favicon |
| `assets/moodboard.jpg` | Design reference moodboard image |

---

## 4. Visual Identity

### 4.1 CSS Custom Properties

Defined in `style.css` `:root`:

| Token | Value | Usage |
|---|---|---|
| `--color-twilight` | `#26466d` | Deep navy blue — body text, nav background, dark sections, footer |
| `--color-moonlight` | `#e7ebd7` | Warm off-white — page background, light text on dark, hero |
| `--color-amber-sunset` | `#e0a866` | Warm amber — primary CTAs, accent text, decorative line |
| `--color-moss` | `#baa45c` | Olive gold — button hover, secondary accent, pricing |
| `--transition-smooth` | `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)` | Hover transitions |
| `--shadow-lift` | `0 20px 40px rgba(38, 70, 109, 0.15)` | Card hover shadow |
| `--shadow-nav` | `0 4px 20px rgba(0, 0, 0, 0.1)` | Scrolled nav shadow |
| `--gradient-overlay` | `linear-gradient(to bottom, rgba(38, 70, 109, 0.3), rgba(38, 70, 109, 0.7))` | Hero image gradient |
| `--gradient-menu` | `linear-gradient(135deg, #26466d 0%, #669788 100%)` | Mobile menu background |

### 4.2 Tailwind Extended Colors

Defined in `js/script.js` via `tailwind.config`:

| Token | Hex | Usage |
|---|---|---|
| `cool-river` | `#669788` | Muted teal-green — section labels, benefit card borders, backgrounds |
| `sky` | `#A9CFDF` | Soft sky blue — secondary text on dark, icon colors, light backgrounds |
| `twilight` | `#26466D` | Deep navy — body text, section backgrounds, footer |
| `moss` | `#BAA45C` | Olive gold — accent hover, pricing, benefit border, secondary buttons |
| `amber-sunset` | `#E0A866` | Warm amber — primary buttons, accent text, decorative divider line |
| `fawn` | `#CFB8A0` | Warm beige/tan — section gradient transitions, benefit card border |
| `moonlight` | `#E7EBD7` | Warm off-white — page background, light text on dark, hero |

### 4.3 Typography

| Element | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| Logo | Cormorant Garamond (serif) | 600 | `text-2xl` (1.5rem) | — |
| h1 (hero) | Cormorant Garamond (serif) | 400 | `text-5xl md:text-7xl` | `leading-tight` |
| h2 (section titles) | Cormorant Garamond (serif) | 400 | `text-4xl md:text-5xl` | `leading-tight` |
| h3 (card titles) | Cormorant Garamond (serif) | 400 | `text-2xl` | — |
| h4 (subheadings) | Atkinson Hyperlegible (sans) | 600 | inherit | — |
| Body / description | Atkinson Hyperlegible (sans) | 400 | `text-lg` / `text-xl` | `leading-relaxed` |
| Section labels | Atkinson Hyperlegible (sans) | 600 | `text-sm` | uppercase, `tracking-widest` |
| Nav links | Atkinson Hyperlegible (sans) | 400 | inherit | — |
| Buttons | Atkinson Hyperlegible (sans) | 600 | `text-lg` | — |
| Tagline hero | Cormorant Garamond (serif) | 400 | `text-4xl md:text-5xl` | `tracking-wider` |
| Pricing | Cormorant Garamond (serif) | 400 | `text-2xl` | — |

**Import** (Google Fonts CDN):
```html
<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">
```

### 4.4 Buttons

| Variant | Classes | Background | Text | Hover |
|---|---|---|---|---|
| Primary (amber) | `bg-amber-sunset text-twilight px-10 py-4 rounded-full text-lg font-semibold` | `#E0A866` | `#26466D` | `bg-moss` + `hover-lift` |
| Book Now (nav CTA) | `bg-amber-sunset text-twilight px-6 py-2 rounded-full` | `#E0A866` | `#26466D` | `bg-moss` + `hover-lift` |
| Mobile CTA | `bg-amber-sunset text-twilight px-10 py-4 rounded-full text-xl font-semibold` | `#E0A866` | `#26466D` | `bg-moss` |
| Form submit | `w-full bg-amber-sunset text-twilight px-8 py-4 rounded-full text-lg font-semibold` | `#E0A866` | `#26466D` | `bg-moss` + `hover-lift` |

All buttons share `transition-all hover-lift cursor-pointer`.

### 4.5 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Container max-width | 1422px (reset.css) |
| Section padding Y | `py-24` (6rem) |
| Nav padding | `px-6 py-4` |
| Card padding | `p-8` |
| Card border radius | `rounded-2xl` (1rem) |
| Card shadow | `shadow-lg` / `shadow-2xl` (form) |
| Grid gap (services) | `gap-8` |
| Grid gap (benefits) | `gap-6` |
| Grid gap (testimonials) | `gap-8` |
| Icon circle | `w-16 h-16` (64×64) |
| Section label underline | `h-1 w-16` bg-amber-sunset |

### 4.6 Focus-Visible

Form inputs use `focus:outline-none focus:ring-2 focus:ring-amber-sunset`. No explicit global `:focus-visible` rule.

---

## 5. Page Structure

```
NAV (fixed, transparent → scrolled #26466D)
  Logo: waves icon + "Blue Tone Retreats" (serif)
  Desktop links: About — Services — Benefits — Testimonials — Book Now (amber CTA)
  Mobile: hamburger → full-screen overlay (gradient menu, link stagger)

HERO (full-screen, parallax background image, gradient overlay)
  wind icon (floating animation)
  h1: "Discover Your Breath, / Discover Yourself" [amber emphasis]
  p: "Immersive breathwork practice in harmony with nature"
  Tagline: "BE MORE YOU" [amber serif, tracking-wider]
  CTA: "Begin Your Journey" (amber pill)
  Scroll indicator: chevron-down bounce

ABOUT (moonlight background)
  Grid 2 cols:
    Left (order 2 mobile): 3-image asymmetrical grid (main tall + 2 stacked right)
    Right (order 1 mobile):
      Label: "Our Philosophy" + amber underline
      h2: "The Power of / Conscious Breathing" [moss accent]
      2 paragraphs
      check-circle icon + "Evidence-Based Practice"

SERVICES (gradient moonlight → fawn)
  Label: "Our Offerings" + h2: "Pathways to Inner Peace" + amber divider
  4 cards (white, shadow-lg, hover-lift):
    - Group Sessions ($45/session): 3 features (90-min, max 12, all levels)
    - Private Sessions ($120/session): 3 features (60/90-min, customized, flexible)
    - Multi-day Retreats ($850/3 days) — featured with amber border: 3 features (accommodation, meals, nature)
    - Online Programs ($29/month): 3 features (live classes, video library, community)

BENEFITS (twilight background)
  Label: "The Benefits" + h2: "Transform Your Life Through Breath" + amber divider
  6 benefit cards (gradient backgrounds, left border accent, rounded-r-2xl):
    - Reduce Stress & Anxiety (sky border, smile icon)
    - Enhance Mental Clarity (amber border, brain icon)
    - Emotional Release (moss border, heart icon)
    - Boost Energy Levels (cool-river border, zap icon)
    - Improve Sleep Quality (fawn border, moon icon)
    - Strengthen Immunity (amber border, shield icon)
  CTA: "Start Your Practice Today" (amber pill)

TESTIMONIALS (gradient fawn → moonlight)
  Label: "Testimonials" + h2: "Stories of Transformation" + amber divider
  3 cards (white, shadow-lg, hover-lift):
    - Sarah Chen — "After years of anxiety..." — 5 stars — avatar SC (sky)
    - Michael Rodriguez — "The 5-day retreat was life-changing..." — 5 stars — avatar MR (amber)
    - Emma Patel — "As a busy professional..." — 5 stars — avatar EP (moss)

CONTACT (gradient twilight → cool-river, breath-pattern SVG overlay)
  Label: "Get Started" + h2: "Begin Your Breathwork Journey" + amber divider
  Glassmorphism form (bg-white/10, backdrop-blur-md, border-white/20):
    Row 1: Full Name * | Email Address *
    Row 2: Phone Number | Interested In * (select: Group/Private/Retreat/Online/Unsure)
    Message textarea
    Newsletter checkbox
    Submit: "Send Inquiry" (amber pill)
    Form message (success/error, GSAP reveal)
  Contact info (3 columns): Email Us | Call Us | Visit Us (Sedona, Arizona)

FOOTER (twilight)
  4-column grid:
    Brand: waves icon + "Blue Tone Retreats" + tagline + "BE MORE YOU"
    Quick Links: About — Services — Benefits — Testimonials — Contact
    Social: Instagram — Facebook — YouTube (40×40 circles)
  Bottom bar: © 2025 Blue Tone Retreats | Privacy Policy | Terms of Service
  Back link: <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Blue Tone Retreats |
| Title | Blue Tone Retreats \| Immersive Breathwork Practice |
| Meta description | Discover inner stillness through immersive breathwork practice. Group sessions, private coaching, and multi-day retreats in serene natural settings. Be More You. |
| Author | Blue Tone Retreats |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Hero (h1) | `Discover Your Breath,` / `Discover Yourself` |
| Hero (p) | `Immersive breathwork practice in harmony with nature` |
| Hero (tagline) | `BE MORE YOU` |
| Hero (CTA) | `Begin Your Journey` |
| About (label) | `Our Philosophy` |
| About (h2) | `The Power of` / `Conscious Breathing` |
| About (feature) | `Evidence-Based Practice` / `Grounded in ancient wisdom and modern science` |
| Services (label) | `Our Offerings` |
| Services (h2) | `Pathways to Inner Peace` |
| Benefits (label) | `The Benefits` |
| Benefits (h2) | `Transform Your Life Through Breath` |
| Benefits (CTA) | `Start Your Practice Today` |
| Testimonials (label) | `Testimonials` |
| Testimonials (h2) | `Stories of Transformation` |
| Contact (label) | `Get Started` |
| Contact (h2) | `Begin Your Breathwork Journey` |
| Footer tagline | `Immersive breathwork practice in harmony with nature. Discover your breath, discover yourself.` |

### 6.3 Testimonials (literal)

| Person | Text |
|---|---|
| Sarah Chen | `"After years of anxiety, breathwork has been the missing piece. The group sessions create such a supportive, transformative space. I leave feeling lighter and more connected to myself every single time."` |
| Michael Rodriguez | `"The 5-day retreat was life-changing. Being immersed in nature while learning these powerful techniques helped me break through patterns I'd carried for decades. I'm forever grateful."` |
| Emma Patel | `"As a busy professional, the online program is perfect. I can practice at home on my schedule, and the live sessions keep me accountable. My sleep has improved dramatically!"` |

### 6.4 Services Pricing

| Service | Price | Unit | Featured |
|---|---|---|---|
| Group Sessions | $45 | /session | No |
| Private Sessions | $120 | /session | No |
| Multi-day Retreats | $850 | /3 days | Yes (amber border) |
| Online Programs | $29 | /month | No |

### 6.5 Navigation

| Menu | Location | Items |
|---|---|---|
| Desktop nav | Fixed top bar (hidden on mobile via `hidden md:flex`) | About — Services — Benefits — Testimonials — Book Now |
| Mobile menu | Full-screen overlay (`#mobile-menu-overlay`) | About — Services — Benefits — Testimonials — Book Now + contact info |

### 6.6 Contact Info

| Field | Value |
|---|---|
| Email | hello@bluetoneretreats.com |
| Phone | +1 (555) 123-4567 |
| Location | Sedona, Arizona |

---

## 7. Components

### 7.1 Navigation Bar

```html
<nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <a href="#hero" class="flex items-center space-x-3 group">
        <i data-lucide="waves" class="w-10 h-10 text-moonlight ..."></i>
        <span class="text-2xl font-serif font-semibold text-moonlight">Blue Tone Retreats</span>
      </a>
      <!-- Desktop: hidden md:flex -->
      <div class="hidden md:flex items-center space-x-8">...</div>
      <!-- Mobile: md:hidden -->
      <button id="mobile-menu-btn" class="md:hidden ...">...</button>
    </div>
  </div>
</nav>
```

- Logo: waves icon (Lucide) + brand name
- Transparent on hero → scrolled: `background-color: rgba(38,70,109,0.95)` + `backdrop-filter: blur(10px)` after 50px scroll
- Desktop links: moonlight → amber-sunset hover
- CTA: amber pill with hover-lift
- Mobile: hamburger → X icon, full-screen overlay with gradient background

### 7.2 Mobile Menu Overlay

```css
#mobile-menu-overlay {
  position: fixed; top: 0; right: -100%;
  width: 100%; height: 100vh;
  background: var(--gradient-menu);
  z-index: 999;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
#mobile-menu-overlay.active { right: 0; }
.mobile-menu-link { opacity: 0; transform: translateX(50px); }
```

- Fixed full-screen slide-in from right
- Close button (X icon) + footer with email/phone
- Links animate via GSAP: opacity 0→1, x 50→0, stagger 0.1s, delay 0.2s
- Body scroll locked when open

### 7.3 Hero Section

```html
<section id="hero" class="relative min-h-screen flex items-center justify-center parallax gradient-overlay"
  style="background-image: url('...unsplash...meditation...')">
  <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
    <i data-lucide="wind" class="w-20 h-20 mx-auto text-moonlight"></i>
    <h1 class="font-serif text-5xl md:text-7xl text-moonlight ...">
      Discover Your Breath,<br /><span class="text-amber-sunset">Discover Yourself</span>
    </h1>
    <p class="text-xl md:text-2xl text-sky ...">Immersive breathwork practice in harmony with nature</p>
    <div class="text-4xl md:text-5xl font-serif text-amber-sunset ...">BE MORE YOU</div>
    <a href="#contact" class="bg-amber-sunset text-twilight px-10 py-4 rounded-full ...">Begin Your Journey</a>
  </div>
</section>
```

- Full-screen min-height, parallax background image (unsplash meditation, gradient overlay)
- GSAP entrance stagger: icon (elastic scale), title (y 30→0, 0.3s delay), subtitle (0.5s), tagline (0.7s), CTA (0.9s)
- Wind icon floats perpetually: scale 1→1.1, yoyo, 2.5s, sine.inOut

### 7.4 Service Cards

```html
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div class="reveal bg-white rounded-2xl p-8 shadow-lg hover-lift" data-delay="0">
    <div class="w-16 h-16 bg-sky/20 rounded-full flex items-center justify-center mb-4">
      <svg class="w-8 h-8 text-twilight">...</svg>
    </div>
    <h3 class="font-serif text-2xl text-twilight mb-3">Group Sessions</h3>
    <p class="text-twilight/70 leading-relaxed mb-6">...</p>
    <div class="space-y-2 text-sm text-twilight/60">3 features with check marks</div>
    <div class="pt-6 border-t border-twilight/10">
      <span class="text-2xl font-serif text-moss">$45</span>
      <span class="text-twilight/60 text-sm">/session</span>
    </div>
  </div>
</div>
```

- 4-column grid on desktop, 2 on tablet, single on mobile
- Each card has colored icon circle (sky/amber-sunset/moss/cool-river backgrounds)
- Multi-day retreat card featured with `border-2 border-amber-sunset`
- Scroll reveal via GSAP

### 7.5 Benefit Cards

```html
<div class="benefit-card group relative bg-gradient-to-br from-sky/10 to-transparent
            border-l-4 border-sky p-8 rounded-r-2xl hover:bg-sky/5 transition-all duration-300">
  <div class="flex items-start space-x-4">
    <i data-lucide="smile" class="w-10 h-10 text-sky"></i>
    <div>
      <h3 class="font-serif text-2xl text-moonlight mb-2 group-hover:text-sky transition-colors">
        Reduce Stress & Anxiety
      </h3>
      <p class="text-sky/80 leading-relaxed">...</p>
    </div>
  </div>
</div>
```

- 3-column grid (desktop), each with unique left border color + gradient background
- 6 cards total, stagger animation via GSAP (x -50→0, index * 0.1 delay)
- Group hover: title color shifts to match accent

### 7.6 Contact Form

```html
<div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
  <form id="contact-form" class="space-y-6">
    <div class="grid md:grid-cols-2 gap-6">
      <input type="text" id="name" required class="w-full px-4 py-3 bg-white/90 border border-twilight/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-sunset ..." />
      <input type="email" id="email" required ... />
    </div>
    <!-- phone + select -->
    <textarea id="message" rows="5" ...></textarea>
    <input type="checkbox" id="newsletter" ... />
    <button type="submit" class="w-full bg-amber-sunset text-twilight px-8 py-4 rounded-full ...">Send Inquiry</button>
    <p id="form-message" class="text-center text-sky text-sm hidden"></p>
  </form>
</div>
```

- Glassmorphism container: transparent background, backdrop-blur, white border
- Grid layout for name/email row, phone/service row
- Select dropdown for service interest
- GSAP success/error message reveal, auto-hide after 5s
- Console log for form data (no server submission)

### 7.7 Footer

```html
<footer class="bg-twilight py-12 px-6 border-t border-sky/20">
  <div class="container mx-auto max-w-7xl">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div class="md:col-span-2">Brand + tagline + "BE MORE YOU"</div>
      <div>Quick Links</div>
      <div>Social (Instagram, Facebook, YouTube — SVG 40×40 circles)</div>
    </div>
    <div class="pt-8 border-t border-sky/20 flex flex-col md:flex-row justify-between ...">
      <p>© 2025 Blue Tone Retreats. All rights reserved.</p>
      <div>Privacy Policy | Terms of Service</div>
    </div>
    <a href="../../index.html">← Voltar ao Showcase</a>
  </div>
</footer>
```

- 4-column grid: brand spans 2 columns, quick links, social
- Social icon circles: `w-10 h-10 bg-sky/20` hover `bg-amber-sunset text-twilight`
- Bottom bar responsive: column on mobile, row on desktop

---

## 8. Animations

### 8.1 GSAP Setup

```js
gsap.registerPlugin(ScrollTrigger);
```

All animations in IIFE, safe-call pattern.

### 8.2 Entrance Animations (on load)

| Element | From | Duration | Delay | Easing |
|---|---|---|---|---|
| Hero icon (wind) | scale: 0.8, opacity: 0 | 1.2s | 0 | `elastic.out(1, 0.5)` |
| Hero title | y: 30, opacity: 0 | 1s | 0.3s | `power3.out` |
| Hero subtitle | y: 30, opacity: 0 | 1s | 0.5s | `power3.out` |
| Hero tagline | y: 30, opacity: 0 | 1s | 0.7s | `power3.out` |
| Hero CTA | y: 30, opacity: 0 | 1s | 0.9s | `power3.out` |

### 8.3 Floating Icon (continuous)

| Element | From | Duration | Repeat | Easing |
|---|---|---|---|---|
| Hero wind icon | scale: 1 → 1.1 | 2.5s | -1, yoyo | `sine.inOut` |

### 8.4 Scroll-Reveal Animations

| Element | Trigger | From | Duration | Stagger | Easing |
|---|---|---|---|---|---|
| `.gsap-slide` elements | `top 80%` | y: 60, opacity: 0 | 1s | — | `power3.out` |
| `.benefit-card` items | `top 85%` | x: -50, opacity: 0 | 0.8s | 0.1s | `power3.out` |

### 8.5 Hover Effects

| Element | Effect | Duration | Easing |
|---|---|---|---|
| `.hover-lift` (cards, buttons) | y: -10px | 0.3s | `power2.out` |
| `.hover-lift` (leave) | y: 0 | 0.3s | `power2.out` |
| Benefit cards (CSS) | `hover:bg-{color}/5` | 0.3s | CSS transition |
| Nav links | color → amber-sunset | 0.3s | CSS transition |

### 8.6 Mobile Menu Links

| Element | From | Duration | Stagger | Delay | Easing |
|---|---|---|---|---|---|
| `.mobile-menu-link` | x: 50, opacity: 0 | 0.5s | 0.1s | 0.2s | `power3.out` |

### 8.7 Form Message

| Element | From | Duration | Easing |
|---|---|---|---|
| Success/error message | y: -10, opacity: 0 | 0.5s | `power3.out` |
| Message fade out | opacity: 0 | 0.5s | — (auto 5s) |

### 8.8 Smooth Scroll

Anchor links use GSAP `ScrollToPlugin`: duration 1s, `power3.inOut`, offsetY 80.

### 8.9 Reduced Motion

Not explicitly implemented (no `@media (prefers-reduced-motion: reduce)` block).

---

## 9. Responsive

### 9.1 Breakpoint 768px (`md:` in Tailwind)

| Element | Desktop | Mobile |
|---|---|---|
| Nav links | Visible (`hidden md:flex`) | Hidden (hamburger) |
| Hero title | `text-7xl` | `text-5xl` |
| Hero subtitle | `text-2xl` | `text-xl` |
| Hero tagline | `text-5xl` | `text-4xl` |
| About grid | `md:grid-cols-2` | Single column (image order 2, text order 1) |
| Services grid | `md:grid-cols-2 lg:grid-cols-4` | Single column |
| Benefits grid | `md:grid-cols-2 lg:grid-cols-3` | Single column |
| Testimonials grid | `md:grid-cols-3` | Single column |
| Contact form rows | `md:grid-cols-2` | Single column |
| Contact info | `md:grid-cols-3` | Single column |
| Footer grid | `md:grid-cols-4` | Single column |
| Footer bottom | `md:flex-row` | `flex-col` |
| Parallax | `background-attachment: fixed` | `background-attachment: scroll` |
| Hero CTA | inline-block | full width (via padding) |

### 9.2 Implicit Smaller Breakpoints

- No explicit breakpoints beyond `md:` (768px)
- Layout stacks vertically on mobile via Tailwind defaults

---

## 10. Assets

### 10.1 Images

| Source | Usage |
|---|---|
| Unsplash (meditation, sea, mountains) | Hero background + about grid images (3) |
| `preview.png` | Gallery card preview for the showcase |
| `assets/moodboard.jpg` | Design reference moodboard |
| `assets/favicon.svg` | SVG wave emoji favicon |

All images use `loading="lazy"` and `decoding="async"` (except hero background which is inline style).

### 10.2 Favicon

```svg
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
  <text y='.9em' font-size='90'>🌊</text>
</svg>
```

Wave emoji on transparent background.

### 10.3 Social Links

| Platform | Icon | URL |
|---|---|---|
| Instagram | Inline SVG | `#` (placeholder) |
| Facebook | Inline SVG | `#` (placeholder) |
| YouTube | Inline SVG | `#` (placeholder) |

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<nav>`, `<section>`, `<footer>`, proper heading hierarchy (h1 → h2 → h3 → h4)
- **ARIA Labels** — hamburger menu: `aria-label="Open navigation menu"`, `aria-expanded="false"`, close: `aria-label="Close navigation menu"`, mobile overlay: `role="dialog"`, `aria-label="Navigation menu"`, `aria-modal="true"`, social links: `aria-label="Instagram"`, etc.
- **Alt Text** — all images have descriptive alt text
- **Form labels** — all form fields have explicit `<label>` elements with `for` attributes
- **Form validation** — `required` on name, email, service select
- **Keyboard** — mobile menu closes on link click; anchor links smooth scroll
- **Color Contrast** — moonlight text on twilight background passes WCAG AA
- **Noscript fallback** — `.js-only` hidden, parallax set to scroll

### Missing / Improvements Needed

- **Skip link** — not present
- **Focus states** — only on form inputs (`focus:ring-2`); no global `:focus-visible`
- **Reduced motion** — no `prefers-reduced-motion` media query
- **Mobile menu** — no Escape key handler to close overlay
- **Dark mode** — not implemented (single light theme with twilight sections)
- **Social links** — `href="#"` placeholders (no real URLs)

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Deferred scripts | All `<script>` tags use `defer` |
| CDN loading | Tailwind, GSAP, Lucide from CDN |
| Single CSS file | `style.css` + `reset.css` (2 small files) |
| SVG favicon | Inline data URI, no extra request |
| Scroll-triggered animations | GSAP ScrollTrigger — only animates visible content |
| Lazy loading | All below-fold images use `loading="lazy"` |
| Noscript fallback | Disables parallax when JS off |

### Considerations

- Tailwind CSS v4 from CDN adds ~30KB+ — consider purging for production
- GSAP 3.12.5 with ScrollTrigger + ScrollToPlugin adds ~60KB — consider lighter alternative for scroll reveals
- Unsplash images loaded externally — no CDN control, potential for slow loads

---

## 13. UX Principles

- **Single Focus Per Section** — each section has one primary CTA (hero, benefits, contact)
- **Calm & Inviting** — deep blues, warm off-white, generous whitespace, smooth animations
- **Clear Visual Hierarchy** — oversized serif headlines, section labels, tiered pricing
- **Mobile-First Layout** — responsive via Tailwind breakpoints, stacked on mobile
- **Scroll-Triggered Engagement** — elements reveal as user scrolls, creating narrative flow
- **Trust Signals** — testimonials with real names and avatars, evidence-based language
- **Low Friction Contact** — clear form with service selector, no unnecessary fields
- **Visual Consistency** — every section uses same label/heading/divider pattern

---

## 14. Observations

- **No server-side form handling**: Contact form logs to console only — needs backend or form service
- **No real social links**: `href="#"` placeholders for Instagram, Facebook, YouTube
- **No dark mode**: Fixed light theme (different from showcase's main dark/light toggle)
- **GSAP heavy for scroll reveals**: Benefit stagger could use IntersectionObserver — but GSAP provides more control
- **Tailwind CDN + custom CSS**: Colors duplicated in `js/script.js` (tailwind.config) — follows project convention
- **BEM not used**: Uses Tailwind utility classes + custom CSS classes (`.hover-lift`, `.gsap-fade`, `.gsap-slide`)
- **Config-driven animation constants**: `CONFIG` object with `SCROLL_THRESHOLD`, `ANIMATION_DURATION`, `GSAP_EASE`
- **IIFE safety pattern**: `safeCall` wrapper prevents JS errors from breaking page
- **Mobile menu no Escape key**: Overlay cannot be closed via keyboard Escape
- **Footer back link**: `<a href="../../index.html">← Voltar ao Showcase</a>` per AGENTS.md convention

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "06",
     "title": "Blue Tone Retreats",
     "category": "landing",
     "href": "projects/exemplo-06--grounded/index.html",
     "preview": "projects/exemplo-06--grounded/preview.png",
     "description": "Blue Tone Retreats - Immersive breathwork practice with group sessions, private coaching and multi-day retreats.",
     "tags": ["HTML5", "Tailwindcss", "GSAP"]
   }
   ```

2. Preview image at `projects/exemplo-06--grounded/preview.png` (already present)

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Blue Tone Retreats** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
