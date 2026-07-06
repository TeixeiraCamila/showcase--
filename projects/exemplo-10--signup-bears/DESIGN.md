# Sign Up Bears — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da página de cadastro **Sign Up Bears**, formulário interativo com tema lúdico.

---

## 1. Project Overview

### Project Name

```
Sign Up Bears
```

### Industry

```
Web Application — User Authentication & Signup
```

### Tagline

```
Hello! Welcome Aboard
```

### Target Audience

```
New users registering for a web platform. General audience seeking a friendly,
playful onboarding experience.
```

### Main Goal

```
User Registration — Collect name, email, and password to create an account.
Provide social login alternatives (Google, Facebook, X) for faster onboarding.
```

### Brand Voice

- **Playful** — bear-themed illustration background, warm colors, rounded inputs
- **Friendly** — "Hello! Welcome Aboard", "We are Glad to see you", heart emoji accent
- **Clean** — minimal form layout, soft shadows, gentle hover transitions
- **Reassuring** — terms checkbox, validation feedback via toast notifications
- **Delightful** — swap animation on successful signup, success checkmark screen

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic form elements (`<form>`, `<label>`, `<input>`) |
| Styling | Vanilla CSS via `css/style.css` (384 lines, flat selectors) |
| Behavior | Vanilla JavaScript ES6+ via `js/script.js` (deferred) |
| Fonts | Google Fonts — Nunito 400–700 |
| Illustrations | External Pinterest image as visual-side background |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Split-screen layout: visual side (illustration) + form side (social buttons, form fields, signup) |
| `css/style.css` | All styling: layout, colors, clip-path shapes, form inputs, toast, swap animation, responsive |
| `js/script.js` | Form validation, toast notifications, social button handlers, swap animation on success |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

All colors defined as flat values in `style.css` (no CSS custom properties).

| Token | Hex | Usage |
|---|---|---|
| Form background | `#DDE6ED` | Right side form panel |
| Text primary | `#2C3E50` | Welcome text, labels, signup button |
| Text secondary | `#5D6D7E` | Subtitle text, terms text |
| Input / button bg | `#F5F1EE` | Social buttons, input fields, signup btn |
| Accent blue | `#3498DB` | Heart emoji, focus ring, checkbox accent |
| Placeholder | `#A0AEC0` | Input placeholder text |
| Divider | `#B8C5D0` | Divider line, checkbox border |
| Toast bg | `#2C3E50` | Default toast background |
| Toast error | `#E74C3C` | Error toast background |
| Toast success | `#27AE60` | Success toast background |

**Note**: No light/dark mode — fixed light theme only.

### 4.2 Typography

| Element | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Welcome heading | Nunito | 700 | 32px (24px mobile) | — |
| Subtitle | Nunito | 400 | 16px | — |
| Labels | Nunito | 600 | 14px | — |
| Input text | Nunito | 400 | 14px | — |
| Signup button | Nunito | 600 | 16px | — |
| Google button | Nunito | 600 | 14px | — |
| Divider text | Nunito | 400 | 13px | — |
| Terms text | Nunito | 400 | 13px | — |
| Toast text | Nunito | 500 | 14px | — |

**Import** (Google Fonts CDN):
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 4.3 Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Google signup | `#F5F1EE` | `#2C3E50` | None | `opacity: 0.9`, `translateY(-1px)`, enhanced shadow |
| Social circle (Facebook/X) | `#F5F1EE` | — | None | `opacity: 0.9`, `translateY(-1px)`, enhanced shadow |
| Sign Up primary | `#F5F1EE` | `#2C3E50` | None | `translateY(-1px)`, enhanced shadow |

All buttons share `border-radius: 30px`, `transition: all 0.3s ease`, and `box-shadow: 0 2-4px rgba(0,0,0,0.06-0.08)`.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Form container max-width | 480px |
| Form padding | 40px (24px mobile ≤480px) |
| Social buttons gap | 12px |
| Divider margin | 24px 0 |
| Form grid gap | 16px |
| Input padding | 14px 18px |
| Input border radius | 30px |
| Checkbox size | 18×18 |
| Toast padding | 16px 24px |
| Toast border radius | 30px |

### 4.5 Decorative Elements

| Element | Description |
|---|---|
| Bear illustration | Right side background image from Pinterest (cover, centered bottom) |
| Zigzag clip-path | Form side left edge with 6 zigzag notches (15%→8% alternating) — creates dynamic split-screen boundary |
| Heart emoji | `♥` character in `#3498DB` blue as playful accent in subtitle |
| Toast notification | Fixed bottom-right, slides in with cubic-bezier spring, auto-dismisses after 3s |
| Swap animation | On successful signup: visual side slides out left, form side slides in right, layout reverses |
| Success screen | Checkmark SVG + "Welcome aboard!" message replacing form after signup |
| SVG social icons | Inline SVGs for Google (4-color), Facebook (`#1877F2`), X (`#000000`) |

### 4.6 Focus-Visible

Input fields have `outline: none` with `box-shadow: 0 0 0 2px #3498DB` on `:focus`. No explicit `:focus-visible` styling.

---

## 5. Page Structure

```
CONTAINER (flex row, 100vh)

VISUAL SIDE (45% width)
  Bear illustration background image (cover, center bottom)

FORM SIDE (66% width, -10% margin-left, clip-path zigzag left edge)
  FORM CONTAINER (max-width: 480px, centered)

    WELCOME
      h1: "Hello! Welcome Aboard"
      p: "We are Glad to see you ♥"

    SOCIAL BUTTONS (horizontal row)
      "Sign up with Google" button (pill, Google SVG)
      Facebook circle button (SVG icon)
      X (Twitter) circle button (SVG icon)

    DIVIDER
      "or" between horizontal lines

    FORM (2-column grid)
      Name input
      Email Address input
      Password input
      Confirm Password input

    TERMS
      Checkbox + "I agree terms of service and privacy policy"

    BUTTON
      "Sign Up" button (full width, pill)

SUCCESS STATE (after valid signup — swap animation)
  Layout reverses (row-reverse)
  Zigzag clip-path flips to right side
  Form content replaced with checkmark SVG + "Welcome aboard!" message + "Back to Home" button
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Sign Up Bears |
| Title | Sign Up - Welcome Aboard |
| Category | tools |

### 6.2 Taglines (literal from HTML)

| Element | Text |
|---|---|
| h1 | `Hello! Welcome Aboard` |
| Subtitle | `We are Glad to see you ♥` |
| Name label | `Name` |
| Email label | `Email Address` |
| Password label | `Password` |
| Confirm label | `Confirm Password` |
| Name placeholder | `Enter your name` |
| Email placeholder | `Enter your email` |
| Password placeholder | `Enter password` |
| Confirm placeholder | `Confirm password` |
| Terms | `I agree terms of service and privacy policy` |
| Divider | `or` |
| Google btn | `Sign up with Google` |
| Submit btn | `Sign Up` |
| Success heading | `Welcome aboard!` |
| Success text | `Your account has been created successfully.` |
| Success btn | `Back to Home` |

### 6.3 Toast Messages

| Message | Type | Condition |
|---|---|---|
| `This feature is not implemented yet` | error | Social button click |
| `Please agree to the terms of service` | error | Submit without terms |
| `Please fill in all fields` | error | Submit with empty fields |
| `Passwords do not match` | error | Password ≠ Confirm |
| `Account created successfully!` | success | Valid form submission |

### 6.4 Social Login

| Button | Icon Style |
|---|---|
| Google | Inline SVG with Google brand colors (blue, green, yellow, red) |
| Facebook | Inline SVG `#1877F2` fill |
| X (Twitter) | Inline SVG `#000000` fill |

All social buttons show error toast: "This feature is not implemented yet"

---

## 7. Components

### 7.1 Split-Screen Layout

```html
<div class="container">
  <div class="visual-side"></div>
  <div class="form-side">
    <div class="form-container">...</div>
  </div>
</div>
```

- Flexbox row, `min-height: 100vh`, `overflow: hidden` on body
- Visual side: 45% width, bear illustration as `background-image: url(...)`, `background-size: cover`, `background-position: center bottom`
- Form side: 66% width, `margin-left: -10%` (overlaps visual side), zigzag `clip-path` on left edge
- Zigzag alternates between 15% (peaks) and 8% (valleys) every 12% of height — 6 notches total
- On success (`.swap-completed`): layout reverses, clip-path flips to right edge, widths swap (71% form, 66% visual)

### 7.2 Social Buttons

```html
<div class="social-buttons">
  <button class="google-btn">
    <svg class="google-logo">...</svg>
    Sign up with Google
  </button>
  <button class="social-circle" title="Facebook">
    <svg viewBox="0 0 24 24" fill="#1877F2">...</svg>
  </button>
  <button class="social-circle" title="X (Twitter)">
    <svg viewBox="0 0 24 24" fill="#000000">...</svg>
  </button>
</div>
```

- Google: pill button (flex: 1) with inline SVG logo + text label
- Facebook/X: 48×48 circle buttons with SVG icons only, `title` attribute for tooltip
- All share `background: #F5F1EE`, `border-radius: 30px`/`50%`, `box-shadow`, hover lift effect
- On mobile (≤480px): `flex-wrap: wrap`, Google button becomes full width

### 7.3 Form Grid

```html
<form class="form-grid">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Enter your name">
  </div>
  <!-- 4 fields total in 2x2 grid -->
</form>
```

- 2-column CSS grid (`grid-template-columns: 1fr 1fr`), gap 16px
- 4 fields: name (text), email, password, confirm-password
- Inputs: `background: #F5F1EE`, no border, `border-radius: 30px`, `padding: 14px 18px`
- Focus state: blue ring (`box-shadow: 0 0 0 2px #3498DB`)
- On mobile (≤900px): collapses to single column

### 7.4 Toast Notification

```html
<div class="toast error show">Please fill in all fields</div>
```

- Fixed position: `bottom: 30px`, `right: 30px`
- Background varies by type: `#2C3E50` (default), `#E74C3C` (error), `#27AE60` (success)
- Entrance: `transform: translateX(150%) → translateX(0)` with `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (spring)
- Auto-dismisses after 3s (remove class, then remove element after 400ms transition)
- Previous toast removed before creating new one

### 7.5 Swap Animation (Success State)

```css
.container.swap-animation .visual-side {
  animation: slideOutLeft 0.8s ease forwards;
}
.container.swap-animation .form-side {
  animation: slideInRight 0.8s ease forwards;
}
```

- Triggered after validation passes and success toast shown
- Visual side slides out left, form side slides in right
- After 400ms: layout reverses via `flex-direction: row-reverse`, clip-path flips, widths swap
- Form content replaced with success message + checkmark SVG + "Back to Home" button
- "Back to Home" reloads the page (`window.location.reload()`)

---

## 8. Animations

### 8.1 CSS Animations

| Animation | Element | Keyframes | Duration | Easing |
|---|---|---|---|---|
| Slide out left | `.visual-side` (swap) | `slideOutLeft` (x 0→-100%, opacity 1→0) | 0.8s | ease |
| Slide in right | `.form-side` (swap) | `slideInRight` (x 100%→0, opacity 0→1) | 0.8s | ease |
| Toast slide in | `.toast` | — | 0.4s | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |

### 8.2 CSS Transitions (hover/interaction)

| Element | Property | Duration | Effect |
|---|---|---|---|
| Google button | opacity, box-shadow, transform | 0.3s | 0.9 opacity, lift -1px, enhanced shadow |
| Social circles | opacity, box-shadow, transform | 0.3s | 0.9 opacity, lift -1px, enhanced shadow |
| Input fields | box-shadow | 0.3s | Focus ring |
| Signup button | box-shadow, transform | 0.3s | Lift -1px, enhanced shadow |
| Toast | transform | 0.4s | Slide in/out |

### 8.3 Reduced Motion

Not explicitly implemented (no `@media (prefers-reduced-motion: reduce)` block).

---

## 9. Responsive

### 9.1 Breakpoints

| Breakpoint | Target | Changes |
|---|---|---|
| 900px | Tablet/mobile | Layout → column; visual side → 100% width, 35vh height, min-height 250px; form side → full width, no clip-path, no negative margin; form grid → single column |
| 480px | Small mobile | Form container padding → 24px; social buttons → wrap; Google button → 100% width; welcome text → 24px |

### 9.2 Layout Adaptations

| Element | Desktop (>900px) | Mobile (≤900px) |
|---|---|---|
| Container | Flex row, side by side | Flex column, stacked |
| Visual side | 45% width, full height | 100% width, 35vh (min 250px) |
| Form side | 66% width, -10% margin, clip-path | 100% width, no clip-path |
| Form grid | 2 columns | Single column |
| Form container | 480px max-width | Full width |
| Social buttons | Flex row, Google flex:1 | Wrap, Google full width (≤480px) |

---

## 10. Assets

### 10.1 Images

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |

### 10.2 External Images

| Image | Section | Source |
|---|---|---|
| Bear illustration | Visual side (background) | Pinterest CDN (`i.pinimg.com/736x/55/1e/8d/...`) |

### 10.3 Inline SVGs

All icons are inline SVGs in `index.html` (no external icon library):

| Icon | Location | Size |
|---|---|---|
| Google 4-color logo | Google signup button | 18×18 |
| Facebook `#1877F2` | Social circle button | 20×20 |
| X (Twitter) `#000000` | Social circle button | 20×20 |
| Green checkmark | Success state | 80×80 |

### 10.4 Favicon

Not present — no favicon or apple-touch-icon defined.

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<form>`, `<label>`, `<input>`, proper heading hierarchy (h1 → p)
- **Form labels** — all form fields have `<label>` elements with `for` attributes matching `id`
- **Placeholder text** — all inputs have descriptive placeholders
- **ARIA Labels** — `title` attribute on social circle buttons ("Facebook", "X (Twitter)")
- **Responsive** — mobile breakpoints for smaller screens

### Missing / Improvements Needed

- **Skip link** — not present
- **Focus states** — only on form inputs (`box-shadow` ring); buttons lack visible focus indicators
- **Reduced motion** — no `prefers-reduced-motion` media query
- **Dark mode** — not implemented
- **`aria-required`** — not present on required fields
- **Error announcements** — toast notifications not announced to screen readers
- **Password field types** — no show/hide toggle, no `autocomplete` attributes
- **Form validation** — no HTML5 `required` or `pattern` attributes; validation is JS-only
- **Footer back link** — `<a href="../../index.html">← Voltar ao Showcase</a>` not present — needs adding per AGENTS.md convention

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Single CSS file | `style.css` (384 lines, ~8KB) |
| No external libraries | Zero JS/CDN dependencies — vanilla CSS + JS |
| Inline SVGs | Social icons embedded in HTML — no extra HTTP requests |
| Toast auto-remove | DOM node removed after animation completes |

### Considerations

- External Pinterest image depends on third-party CDN availability — could break if URL changes
- No image optimization — Pinterest image served as-is
- No lazy loading (not applicable — single viewport page)
- No font-display swap configured for Google Fonts

---

## 13. UX Principles

- **Single Focus** — one primary action (Sign Up) with clear form fields
- **Social Proof** — alternative login methods (Google, Facebook, X) reduce friction
- **Clear Validation** — toast notifications provide immediate, contextual feedback
- **Delightful Microinteraction** — swap animation and success screen reward completed registration
- **Minimal Cognitive Load** — 4 fields only, terms checkbox, one submit button
- **Split-Screen Balance** — bear illustration provides visual interest without distracting from form
- **Progressive Disclosure** — social options first, then email form, with divider clearly separating them

---

## 14. Observations

- **No CSS custom properties**: All colors are flat values — harder to maintain than a token system
- **No BEM naming**: Uses flat class names (`.google-btn`, `.social-circle`, `.form-grid`) — inconsistent with other projects
- **No validation tabs or password strength**: Unlike the design brief, the implementation uses a single form without Sign Up/Log In tabs, show/hide password, or strength indicator
- **Single bear illustration**: A Pinterest background image, not multiple SVG bears in various poses — the bear theme comes solely from the background
- **Nunito instead of Fredoka/Inter**: Uses Nunito 400–700 from Google Fonts, not the Fredoka/Inter pairing from the original spec
- **Limited form validation**: JS checks for empty fields and password match only — no email format validation, no password requirements
- **Social buttons are decorative**: All social login buttons show "not implemented" toast — no actual OAuth flow
- **No data persistence**: Form submission does not store data — success is simulated
- **Swap animation on success**: Layout flips visually but state is ephemeral (page reload on "Back to Home")
- **Clip-path creates accessibility concern**: Zigzag edge is purely decorative but affects form side width calculation
- **`overflow: hidden` on body**: Prevents scrolling — content must fit viewport, breaks on very small screens if form overflows

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "10",
     "title": "SIGN UP BEARS",
     "category": "tools",
     "href": "projects/exemplo-10--signup-bears/index.html",
     "preview": "projects/exemplo-10--signup-bears/preview.png",
     "description": "Create your account and join our platform. Sign up with Google, Facebook, or email.",
     "tags": ["HTML5", "CSS3", "JAVASCRIPT"]
   }
   ```

2. Preview image at `projects/exemplo-10--signup-bears/preview.png` (already present)

3. Footer link back needs adding:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a página de cadastro **Sign Up Bears** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
