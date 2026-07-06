# Notely — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page da **Notely**, e-commerce de cadernos personalizados.

---

## 1. Project Overview

### Project Name

```
Notely
```

### Industry

```
E-commerce — Personalized Notebooks & Stationery
```

### Tagline

```
Your story, your notebook
```

### Target Audience

```
Creative individuals (18–45 years old) who journal, sketch, plan, or dream.
People who value self-expression and tactile, thoughtfully designed products.
```

### Main Goal

```
Lead Generation & Product Awareness — Drive email signups and encourage
visitors to start designing their custom notebook ("Design Yours Now").
```

### Brand Voice

- **Warm** — cream backgrounds, soft rounded corners, handcrafted feel
- **Playful** — floating blobs, split-text logo animation, card hover scales
- **Creative** — "blank canvas" messaging, sparkle icons, personalization focus
- **Confident** — bold magenta CTAs, high-contrast navy text, clear hierarchy
- **Tactile** — vintage paper textures, handcrafted typographic touches, notebook mockup with rotation

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<nav>`, `<section>`, `<footer>`) |
| Styling | Tailwind CSS v4 (CDN, deferred) + custom CSS via `style.css` + `reset.css` |
| Behavior | Vanilla JavaScript ES6+ (deferred) |
| Animations | GSAP 3.13.0 + ScrollTrigger + SplitText (CDN, deferred) |
| Icons | Lucide icons (CDN, deferred) |
| Fonts | Google Fonts — Karla (200–800) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Semantic HTML: nav, hero, features, history, email CTA, story section, footer |
| `css/style.css` | Custom utility classes (bg/text/border colors), card shadows, history wrapper, responsive overrides |
| `css/reset.css` | Base reset, container (max-width: 1422px), body defaults, list reset |
| `js/script.js` | Lucide icon init, GSAP animations: split text, hero entrance, blob float, scroll reveals, story bars/squares |
| `assets/favicon.svg` | SVG book-open icon (Lucide) — cream on transparent |
| `assets/mockup.png` | Vintage open notebook mockup image used in history section |

---

## 4. Visual Identity

### 4.1 Color Palette

All colors defined as utility classes in `style.css` (no CSS custom properties).

| Token | Tailwind Class | Hex | Usage |
|---|---|---|---|
| Cream | `bg-cream` / `text-cream` | `#FFF7E3` | Page background, card backgrounds, light text on dark |
| Yellow | `bg-yellow` / `text-yellow` | `#FDEB9E` | Decorative blobs, icon circles, story bars, decorative rings |
| Magenta | `bg-magenta` / `text-magenta` | `#850E35` | Primary CTA buttons, logo circle, accent text, heart icon, story bars |
| Navy | `bg-navy` / `text-navy` | `#0C2B4E` | Body text, headings, section backgrounds (story/footer), secondary buttons outline |

**Note**: No light/dark mode — fixed light theme with cream background.

### 4.2 Typography

| Element | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| Logo | Karla (via `.split` class) | 700 | `text-2xl` (1.5rem) | — |
| h1 (hero) | Karla | 900 | `text-6xl md:text-7xl` | `leading-tight` |
| h2 (section titles) | Karla | 900 (bold) | `text-4xl md:text-5xl` | — |
| h3 (feature cards) | Karla | 900 | `text-xl` | — |
| Body / description | Karla (system fallback) | 400 | `text-lg` / `text-xl` | `leading-relaxed` |
| Nav links | Karla | 500 (font-medium) | — | — |
| Buttons | Karla | 600–700 | `text-lg` | — |
| Badge | Karla | 500 | `text-sm` | — |

**Import** (Google Fonts CDN):
```html
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
```

**Logo split effect**: Letters separated by zero-width joiner (`&#8205;`) and animated via GSAP SplitText — each letter drops from above with random rotation (`back` easing).

### 4.3 Buttons

| Variant | Classes | Background | Text | Border | Hover |
|---|---|---|---|---|---|
| Primary (magenta) | `bg-magenta text-white px-8 py-4 rounded-full font-semibold text-lg` | `#850E35` | `#FFFFFF` | — | `opacity-90` + `scale-105` |
| Secondary (navy outline) | `bg-white text-navy px-8 py-4 rounded-full font-semibold text-lg border-2 border-navy` | `#FFFFFF` | `#0C2B4E` | `#0C2B4E` | `scale-105` |
| Nav CTA | `bg-navy text-cream px-6 py-2.5 rounded-full font-medium` | `#0C2B4E` | `#FFF7E3` | — | `opacity-90` + `scale-105` |
| Email submit | `bg-yellow text-navy px-8 py-4 rounded-full font-semibold` | `#FDEB9E` | `#0C2B4E` | — | `opacity-90` + `scale-105` |

All buttons share `transition-all hover:scale-105 cursor-pointer` and `shadow-lg` on primary variants.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Container max-width | Tailwind default (`container mx-auto`) |
| Section padding Y (hero) | `pt-16 pb-24` |
| Section padding Y (features) | `py-32` |
| Section padding Y (history) | `py-20` |
| Section padding Y (email) | `py-20` |
| Section padding Y (story) | `py-16` |
| Nav padding | `px-6 py-6` |
| Card padding | `p-8` |
| Card border radius | `rounded-3xl` (1.5rem) |
| Card shadow | Custom `box-shadow: 0 10px 40px #00000010` |
| History wrapper | `p-8`, `rounded-[18px]`, custom shadow `0 10px 40px #00000010` |
| History image | `rotate(-3deg)`, shadow `0 20px 50px #00000020`, `max-width: 520px` |
| Feature icon circle | `w-16 h-16` (64×64) |
| Nav logo circle | `w-10 h-10` (40×40) |
| Grid gap (features) | `gap-8` |
| Grid gap (story) | `gap-12` |

### 4.5 Decorative Elements

| Element | Description |
|---|---|
| Hero blobs | `#blob1` (top-right, 384×384, yellow, 40% opacity, blur-2xl) and `#blob2` (bottom-left, 320×320, magenta, 15% opacity, blur-3xl) — floating animation via GSAP `yoyo: true` |
| Feature icon circles | 64×64 circles with Lucide icons: sparkles (yellow), heart (magenta), shopping-bag (navy) |
| SVG waves | Two inline SVG waves (1440×120 and 1440×60) with `#FFF7E3` fill — separator between sections |
| Decorative rings | Email section: two empty circles with `border-8` — yellow (top-left) and magenta (bottom-right) |
| Story bars | `rounded-full` bars in magenta, yellow, navy at varying widths (3/4, 1/2, 5/6) |
| Story squares | Two 2-column grid squares in yellow and magenta with `rounded-2xl` |

### 4.6 Focus-Visible

Not explicitly styled (relies on browser defaults + Tailwind `focus:outline-none focus:border-magenta` on email input).

---

## 5. Page Structure

```
NAV
  Logo circle (40×40, magenta, book-open icon) | "notely" (split letters)
  Nav links: Home — History — Features — Contact
  CTA button: "Shop Now" (navy pill)

HERO (cream background)
  Badge pill (white, shadow): sparkles icon + "Crafted just for you"
  h1: "Your story, your notebook" [magenta emphasis on "your notebook"]
  p: description [max-w-2xl, opacity 75%]
  Two CTAs: "Design Yours Now" (magenta) | "See Examples" (white/navy outline)
  Floating blobs: yellow (top-right), magenta (bottom-left)

FEATURES (white background, SVG wave transition)
  3 cards (cream, rounded-3xl, shadow):
    - Fully Customizable (sparkles icon)
    - Made with Love (heart icon)
    - Quick Delivery (shopping-bag icon)

HISTORY (cream background)
  Left: h2 "Our History" + 2 paragraphs (origin story)
  Right: notebook mockup image (rotated -3deg, shadow)

EMAIL CTA (gradient white→cream)
  h2: "Start creating today"
  p: "Join thousands of happy creators..."
  Form: email input (rounded-full, navy border) + yellow submit button (mail icon)
  Decorative rings (yellow + magenta)

STORY (navy background, SVG wave transition)
  Grid 2 cols:
    Left (storyText):
      h2: "Every notebook tells a story"
      p: description
      button: "Start Designing" (magenta)
    Right:
      Glowing yellow circle (blur-2xl, 20% opacity)
      Cream card with story bars (magenta, yellow, navy) + squares (yellow, magenta)

FOOTER (navy)
  p: "© 2025 notely. Made with ♥ for creative minds" (heart icon in magenta)
  Link back: <a href="../../index.html">← Voltar ao Showcase</a> (not present — needs adding per AGENTS.md)
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Notely |
| Title | Notely - Your Story, Your Notebook \| Personalized Design |
| Year | 2025 |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Badge | `Crafted just for you` |
| Hero (h1) | `Your story,` / `your notebook` |
| Hero (p) | `Create beautifully personalized notebooks that inspire your creativity. Every page is a blank canvas waiting for your unique ideas.` |
| Feature 1 | `Fully Customizable` / `Choose covers, colors, and add your personal touch to every detail` |
| Feature 2 | `Made with Love` / `Each notebook is carefully crafted with premium materials` |
| Feature 3 | `Quick Delivery` / `Fast, eco-friendly shipping right to your doorstep` |
| History (h2) | `Our History` |
| History (p1) | `Notely began as a simple experiment: sketching layouts and notes in well-loved notebooks, then translating those ideas into handcrafted landing pages. Over time, passion for thoughtful details and tactile design led to a distinct voice — warm, confident, and playful.` |
| History (p2) | `We mix analog warmth with digital precision: vintage paper textures, handcrafted typographic touches, and modern interactions — all tuned to make each page feel personal.` |
| Email (h2) | `Start creating today` |
| Email (p) | `Join thousands of happy creators who've made their perfect notebook` |
| Story (h2) | `Every notebook tells a story` |
| Story (p) | `Whether you're journaling, sketching, planning, or dreaming, your notebook should be as unique as you are. Let's create something special together.` |
| Footer | `© 2025 notely. Made with ♥ for creative minds` |

### 6.3 CTAs

| Label | Usage | Style |
|---|---|---|
| `Shop Now` | Nav | Navy pill, cream text |
| `Design Yours Now` | Hero primary | Magenta pill, white text, shadow-lg |
| `See Examples` | Hero secondary | White pill, navy border |
| `Start Designing` | Story section | Magenta pill, white text |
| Email submit (mail icon) | Email form | Yellow circle, navy icon |

### 6.4 Navigation

| Menu | Location | Items |
|---|---|---|
| Desktop nav | Nav bar (hidden on mobile via `hidden md:flex`) | Home — History — Features — Contact |

### 6.5 Icons

All icons via Lucide CDN (`https://unpkg.com/lucide@latest`):

| Icon | Location | Size |
|---|---|---|
| `book-open` | Logo circle (nav) | 24×24 |
| `sparkles` | Badge + feature card 1 | 16×16 / 32×32 |
| `heart` | Feature card 2 + footer | 32×32 / 16×16 |
| `shopping-bag` | Feature card 3 | 32×32 |
| `mail` | Email submit button | 20×20 |

---

## 7. Components

### 7.1 Navigation Bar

```html
<nav class="shadow-sm" role="navigation" aria-label="Main Navigation">
  <div class="container mx-auto px-6 py-6 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 bg-magenta rounded-full flex items-center justify-center">
        <i data-lucide="book-open" class="w-6 h-6 text-cream"></i>
      </div>
      <span class="split text-2xl font-bold text-navy">n&#8205;o&#8205;t&#8205;e&#8205;l&#8205;y&#8205;</span>
    </div>
    <!-- Nav links (hidden mobile) -->
    <ul class="hidden md:flex items-center gap-6 font-medium">...</ul>
    <!-- CTA -->
    <button class="bg-navy text-cream px-6 py-2.5 rounded-full font-medium ...">Shop Now</button>
  </div>
</nav>
```

- Logo: 40×40 magenta circle + Lucide book-open icon (cream)
- Logo text: Karla 700, navy, split-letter animation via GSAP SplitText
- Desktop nav: 4 links with `hover:text-magenta transition-soft`
- CTA: navy pill, no mobile menu (no hamburger — responsive via `hidden md:flex`)

### 7.2 Hero Section

```html
<section class="container mx-auto px-6 pt-16 pb-24 relative">
  <div class="max-w-4xl mx-auto text-center relative z-20">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
      <i data-lucide="sparkles" class="w-4 h-4 text-magenta"></i>
      <span class="text-sm font-medium text-navy">Crafted just for you</span>
    </div>
    <!-- Title -->
    <h1 class="text-6xl md:text-7xl font-bold text-navy mb-6 leading-tight">
      Your story,<br /><span class="text-magenta">your notebook</span>
    </h1>
    <!-- Description -->
    <p class="text-xl text-navy opacity-75 mb-10 max-w-2xl mx-auto leading-relaxed">...</p>
    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">...</div>
  </div>
  <!-- Floating blobs -->
  <div id="blob1" class="absolute top-0 right-0 w-96 h-96 bg-yellow ..."></div>
  <div id="blob2" class="absolute bottom-0 left-0 w-80 h-80 bg-magenta ..."></div>
</section>
```

- Responsive: `flex-col sm:flex-row` for CTA buttons
- Animated entrance via GSAP (badge: scale from 0, title: y-50, description: y-30, buttons: y-30)
- Blobs float perpetually via GSAP `yoyo: true`

### 7.3 Feature Cards

```html
<div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
  <div class="card text-center p-8 rounded-3xl bg-cream hover:scale-105 hover:transition-transform">
    <div class="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
      <i data-lucide="sparkles" class="w-8 h-8 text-navy"></i>
    </div>
    <h3 class="text-xl font-bold text-navy mb-3">Fully Customizable</h3>
    <p class="text-navy opacity-75 leading-relaxed">...</p>
  </div>
  <!-- 3 cards total -->
</div>
```

- 3-column grid on desktop, single column on mobile
- Custom card shadow: `0 10px 40px #00000010`
- Hover: `scale-105` with `transition-transform`
- Scroll reveal via GSAP ScrollTrigger: y-60, stagger 0.2s

### 7.4 History Section

```html
<section id="history" class="py-20">
  <div class="container mx-auto px-6">
    <div class="history-wrapper md:grid md:grid-cols-2 md:items-center gap-8">
      <div class="history-text max-w-xl">
        <h2 class="text-4xl font-bold text-navy mb-4">Our History</h2>
        <p class="text-lg text-navy opacity-85 leading-relaxed mb-4">...</p>
        <p class="text-lg text-navy opacity-75 leading-relaxed">...</p>
      </div>
      <div class="history-visual flex justify-center">
        <img src="./assets/mockup.png" alt="Vintage open notebook mockup on desk" class="history-image" />
      </div>
    </div>
  </div>
</section>
```

- `.history-wrapper`: cream background, 18px radius, padding 2rem, custom shadow
- `.history-image`: max-width 520px, `rotate(-3deg)`, shadow `0 20px 50px #00000020`, radius 12px
- On mobile: rotation removed, stacks vertically

### 7.5 Email CTA

```html
<section class="py-20 bg-gradient-to-b from-white to-cream relative overflow-hidden">
  <div class="container mx-auto px-6">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-navy mb-6">Start creating today</h2>
      <p class="text-lg text-navy opacity-75 mb-8">...</p>
      <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input type="email" placeholder="Enter your email" required class="flex-1 px-6 py-4 rounded-full border-2 border-navy focus:outline-none focus:border-magenta" />
        <button type="submit" class="bg-yellow text-navy px-8 py-4 rounded-full font-semibold ...">
          <i data-lucide="mail" class="w-5 h-5"></i>
        </button>
      </form>
    </div>
  </div>
  <!-- Decorative rings -->
  <div class="absolute top-20 left-10 w-24 h-24 border-8 border-yellow rounded-full opacity-50"></div>
  <div class="absolute bottom-20 right-10 w-32 h-32 border-8 border-magenta rounded-full opacity-30"></div>
</section>
```

- Gradient background: `from-white to-cream`
- Form: `flex-col sm:flex-row` — stacked on mobile, inline on desktop
- Input: rounded-full, navy border, focus state changes to magenta
- Button: yellow circle with mail icon (no text label)
- GSAP scroll reveal: scale 0.9 → 1

### 7.6 Story Section

```html
<section class="bg-navy py-16 relative overflow-hidden">
  <div class="container mx-auto px-6 pt-8">
    <div class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
      <div id="storyText">
        <h2 class="text-4xl font-bold text-cream mb-4">Every notebook tells a story</h2>
        <p class="text-cream opacity-90 text-lg leading-relaxed mb-6">...</p>
        <button class="bg-magenta text-white px-8 py-3 rounded-full font-semibold ...">Start Designing</button>
      </div>
      <div class="relative">
        <!-- Glow -->
        <div class="w-full aspect-square bg-yellow rounded-full opacity-20 absolute ... blur-2xl"></div>
        <!-- Card -->
        <div class="relative bg-cream rounded-3xl p-8 shadow-2xl">
          <div class="space-y-4">
            <div class="story-bar h-4 bg-magenta rounded-full w-3/4"></div>
            <div class="story-bar h-4 bg-yellow rounded-full w-1/2"></div>
            <div class="story-bar h-4 bg-navy rounded-full w-5/6"></div>
            <div class="mt-8 grid grid-cols-2 gap-4">
              <div class="story-square aspect-square bg-yellow rounded-2xl"></div>
              <div class="story-square aspect-square bg-magenta rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- Navy background, cream text
- Right card: abstract visual representation (bars + squares) — not literal content
- GSAP animations: bars animate width 0→target, squares animate width + rotation 0→180 with `back.out(1.7)`, text slides in from left

---

## 8. Animations

### 8.1 GSAP Setup

All animations register `ScrollTrigger` and `SplitText` plugins on `DOMContentLoaded`.

```js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
```

### 8.2 Entrance Animations (on load)

| Element | From | Duration | Delay | Easing |
|---|---|---|---|---|
| Nav | y: -100, opacity: 0 | 2s | 0 | `power3.out` |
| `.split` (logo letters) | y: -100, opacity: 0, rotation: random(-80,80) | 1s | 0 (stagger 0.1) | `back` |
| Hero badge | scale: 0, opacity: 0 | 0.6s | 0.3s | `back.out(1.7)` |
| Hero title | y: 50, opacity: 0 | 1s | 0.5s | `back.out(1.7)` |
| Hero description | y: 30, opacity: 0 | 1s | 0.7s | `power3.out` |
| Hero buttons | y: 30, opacity: 0 | 1s | 0.9s | `power3.out` |

### 8.3 Floating Blobs (continuous)

| Element | From | Duration | Repeat | Easing |
|---|---|---|---|---|
| `#blob1` | y: 30, x: 50 | 3s | -1, yoyo | `sine.inOut` |
| `#blob2` | y: 40, x: -30 | 4s | -1, yoyo | `sine.inOut` |

### 8.4 Scroll-Reveal Animations

| Element | Trigger | From | Duration | Stagger | Easing |
|---|---|---|---|---|---|
| Feature cards | `top 80%` | y: 60, opacity: 0 | 0.8s | 0.2s | `power3.out` |
| History section | `top 85%` | y: 40, opacity: 0 | 1s | — | `power3.out` |
| Email section | `top 80%` | scale: 0.9, opacity: 0 | 1s | — | `power3.out` |
| Story bars | `top 80%` | width: 0 | 1s | 0.15s (delay 0.3) | `power2.out` |
| Story squares | `top 80%` | width: 0, rotation: 180 | 0.6s | 0.2s (delay 0.6) | `back.out(1.7)` |
| Story text | `top 80%` | x: -50, opacity: 0 | 0.6s | — (delay 0.6) | `power3.out` |

All scroll reveals use `clearProps: 'all'` (cards) or don't specify it.

### 8.5 Reduced Motion

Not explicitly implemented (no `@media (prefers-reduced-motion: reduce)` block).

---

## 9. Responsive

### 9.1 Breakpoint 768px (`md:` in Tailwind)

| Element | Desktop | Mobile |
|---|---|---|
| Nav links | Visible (`hidden md:flex`) | Hidden |
| Hero title | `text-7xl` | `text-6xl` |
| Hero buttons | `flex-row` | `flex-col` |
| Features grid | `md:grid-cols-3` | Single column |
| History | `md:grid md:grid-cols-2` | Stacked |
| History image | `rotate(-3deg)` | `transform: none` |
| Email title | `text-5xl` | `text-4xl` |
| Email form | `flex-row` | `flex-col` |
| Story grid | `md:grid-cols-2` | Single column |

### 9.2 Implicit Smaller Breakpoints

- No explicit mobile-first breakpoints beyond `md:` (768px)
- Layout works via Tailwind stacking defaults on mobile

---

## 10. Assets

### 10.1 Images

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |
| `assets/mockup.png` | Vintage open notebook mockup — history section (max-width 520px, rotated -3deg) |
| `css/branding-board.jpg` | Not referenced in HTML — possibly a design reference file |

### 10.2 Icon (Favicon)

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
     fill="none" stroke="#FFF7E3" stroke-width="1.5"
     class="lucide lucide-book-open">
  <path d="M12 7v14"/>
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
</svg>
```

- Cream stroke (#FFF7E3) on transparent
- Book-open icon from Lucide

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<nav>`, `<section>`, `<footer>`, proper heading hierarchy (h1 → h2 → h3)
- **ARIA Labels** — `role="navigation"`, `aria-label="Main Navigation"` on nav
- **Alt Text** — mockup image has descriptive alt: "Vintage open notebook mockup on desk"
- **Form labels** — email input has `placeholder` + `required` attribute

### Missing / Improvements Needed

- **Skip link** — not present
- **Focus states** — only on email input (`focus:outline-none focus:border-magenta`); button focus states rely on browser defaults
- **Reduced motion** — no `prefers-reduced-motion` media query
- **Mobile menu** — no hamburger menu; nav links hidden on mobile with no alternative navigation
- **`aria-expanded`** — not applicable (no mobile menu toggle)
- **Dark mode** — not implemented

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Deferred scripts | All `<script>` tags use `defer` |
| CDN loading | Tailwind, GSAP, Lucide from CDN |
| Single CSS file | `style.css` + `reset.css` (2 small files) |
| SVG favicon | Lightweight, no extra HTTP request |
| Scroll-triggered animations | GSAP ScrollTrigger — only animates visible content |

### Considerations

- Tailwind CSS v4 from CDN adds ~30KB+ — consider purging for production
- GSAP 3.13.0 with ScrollTrigger + SplitText adds ~80KB — heavy for a landing page

---

## 13. UX Principles

- **Single Focus Per Section** — each section has one primary CTA
- **Warm & Inviting** — cream backgrounds, soft shadows, rounded corners, playful animations
- **Clear Visual Hierarchy** — oversized hero headline, badge for social proof, stacked feature cards
- **Mobile-First Layout** — responsive via Tailwind breakpoints, stacked on mobile
- **Scroll-Triggered Engagement** — elements reveal as user scrolls, creating narrative flow
- **Decorative But Not Distracting** — blobs, waves, and rings add personality without competing with content

---

## 14. Observations

- **No mobile menu**: Nav links hide on mobile with no hamburger alternative — needs UX improvement
- **Tailwind CDN + custom CSS**: Utility classes for colors are duplicated in `style.css` rather than using Tailwind config — keeps it simple for a demo project
- **GSAP heavy for landing page**: SplitText is used only for the logo (5 letters) — could be simplified
- **No dark mode**: Fixed light theme (different from the showcase's main dark/light toggle)
- **Single page**: All content is in one scrollable page with anchor links (`#home`, `#history`, `#features`, `#emailSection`)
- **`#home` anchor**: Nav link points to `#home` but no element has that ID — defaults to top of page
- **No BEM**: Uses Tailwind utility classes + flat custom classes (different from other projects that use BEM)
- **Footer back link missing**: `<a href="../../index.html">← Voltar ao Showcase</a>` is not present — needs adding per AGENTS.md convention

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "04",
     "title": "NOTELY",
     "category": "landing",
     "href": "projects/exemplo-04--notely/index.html",
     "preview": "projects/exemplo-04--notely/preview.png",
     "description": "E-commerce landing page for personalized notebooks with Tailwind CSS and GSAP animations.",
     "tags": ["HTML5", "Tailwindcss", "GSAP"]
   }
   ```

2. Preview image at `projects/exemplo-04--notely/preview.png` (already present)

3. Footer link back needs adding:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Notely** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
