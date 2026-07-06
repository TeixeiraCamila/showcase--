# Resume Template — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> do **Resume Template**, um currículo profissional moderno com design responsivo
> e animações suaves.

---

## 1. Project Overview

### Project Name

```
Resume Template
```

### Industry

```
Tools — Professional Resume / CV
```

### Target Audience

```
Professionals, job seekers, developers, and designers (20–45 years old)
who need a clean, modern, responsive CV page to showcase their profile,
experience, skills, and portfolio.
```

### Main Goal

```
Utility — Present professional information (name, contact, profile, experience,
education, skills, languages, portfolio links) in a polished A4-like card layout
with smooth scroll reveals, dark mode, and print support.
```

### Brand Voice

- **Professional** — clean typography, generous whitespace, subdued palette
- **Modern** — accent-driven UI, tag chips, timeline, smooth animations
- **Minimal** — single centered card, no clutter, focused content hierarchy
- **Approachable** — warm dark mode, friendly sans-serif body

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<section>`, `<footer>`) |
| Styling | CSS3 + custom properties + BEM methodology |
| Behavior | Vanilla JavaScript ES6+ (IntersectionObserver, event delegation) |
| Icons | Lucide Icons CDN (MapPin, Mail, Phone, Globe, Github, Linkedin) |
| Fonts | Google Fonts CDN — Inter (400–700) + Playfair Display (400–700) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | App shell: header, profile, experience timeline, education, skills, languages, portfolio, footer |
| `css/style.css` | All styles: layout, typography, tags, timeline, responsive, print, dark mode |
| `js/script.js` | Core logic: IntersectionObserver scroll reveals, smooth scroll, print button, dark mode toggle |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

All colors are CSS custom properties on `:root` / `[data-theme="dark"]`.

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--color-bg` | `#F8F9FC` | `#1A1A2E` | Page background |
| `--color-surface` | `#FFFFFF` | `#16213E` | Card background |
| `--color-primary` | `#1A1A2E` | `#E8ECF4` | Headings, name |
| `--color-accent` | `#4361EE` | `#4361EE` | Links, highlights, tag chips |
| `--color-text` | `#2D3436` | `#E8ECF4` | Body text |
| `--color-muted` | `#636E72` | `#A0A8B4` | Secondary/meta text |
| `--color-border` | `#E8ECF4` | `#2A3A5C` | Dividers, borders |

Body background: `--color-bg`.
Card background: `--color-surface` (white card, shadow).
Accent: `#4361EE` — blue-violet, applied to links, section headings, tag chips.

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| Name (h1) | Playfair Display | 700 | `2.5rem` |
| Section headings (h2) | Playfair Display | 600 | `1.5rem` |
| Job title / degree | Inter | 600 | `1.125rem` |
| Body text | Inter | 400 | `1rem` |
| Meta / date | Inter | 400 | `0.875rem` |
| Contact info | Inter | 400 | `0.9rem` |
| Skill tags | Inter | 500 | `0.8rem` |
| Back link | Inter | 600 | inherit |

**Import** (Google Fonts CDN):
```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap");
```

### 4.3 Contact Icons (Lucide CDN)

| Icon | Usage |
|---|---|
| `MapPin` | Location |
| `Mail` | Email |
| `Phone` | Phone |
| `Globe` | Website |
| `Github` | GitHub profile |
| `Linkedin` | LinkedIn profile |

All icons: `width: 16px`, `height: 16px`, `stroke: var(--color-muted)`, `flex-shrink: 0`.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Body padding | `2rem 1rem` |
| Card max-width | `1000px` |
| Card padding | `3rem` (mobile `1.5rem`) |
| Card border-radius | `12px` |
| Card shadow | `0 4px 24px rgba(0,0,0,0.06)` |
| Section gap | `2rem` |
| Timeline dot size | `12px` |
| Tag chip padding | `0.35rem 0.85rem` |
| Tag chip border-radius | `50px` |
| Contact gap | `0.75rem` |

### 4.5 Focus-Visible

Custom `:focus-visible` outline: `2px solid var(--color-accent)` with `outline-offset: 2px` on interactive elements (links, buttons).

---

## 5. Page Structure

```
PAGE BACKGROUND (--color-bg)

CENTERED CARD (--color-surface, max-width 1000px, shadow, border-radius)

  HEADER
    Name (h1, Playfair Display, --color-primary)
    Title / role (p, --color-muted)
    Contact bar (flex row, wrap):
      MapPin + Location
      Mail + email link
      Phone + phone link
      Globe + website link
      Github + profile link
      Linkedin + profile link

  SECTION: Profile
    h2: "Perfil" (Playfair Display, accent underline)
    p: Professional summary text

  SECTION: Experience
    h2: "Experiência"
    Timeline (vertical):
      Timeline item:
        Dot + line (vertical)
        Date range (--color-muted, small)
        Role title (--color-primary, semibold)
        Company name
        Description list

  SECTION: Education
    h2: "Formação"
    Timeline (vertical, same as experience):
      Timeline item:
        Dot + line
        Date range
        Degree title
        Institution name

  SECTION: Skills
    h2: "Habilidades"
    Tag chips (flex wrap):
      span.skill__tag (accent bg, white text, pill shape)

  SECTION: Languages
    h2: "Idiomas"
    Language list (flex wrap or simple list):
      Language name + level description

  SECTION: Portfolio
    h2: "Portfólio"
    Links list:
      Github link
      Website / other links

FOOTER
  Back link: <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Resume Template |
| Title | Resume / Currículo Profissional |
| Meta description | Currículo profissional moderno com design responsivo e animações suaves |
| OG title | Resume Template |
| OG description | Currículo profissional moderno com design responsivo e animações suaves |

### 6.2 Section Titles

| Section | Label (PT) |
|---|---|
| Profile | `Perfil` |
| Experience | `Experiência` |
| Education | `Formação` |
| Skills | `Habilidades` |
| Languages | `Idiomas` |
| Portfolio | `Portfólio` |

### 6.3 CTAs

| Label | Usage | Action |
|---|---|---|
| `Imprimir` | Print button in header | `window.print()` |
| `🌙` / `☀️` | Dark mode toggle | Toggle `data-theme` attribute |

---

## 7. Components

### 7.1 Contact Bar

```css
.contact {
  display: flex;
  flex-wrap: wrap;
  gap: var(--contact-gap);
  margin-top: 1rem;
}
```

- Flex row wrapping list of contact items
- Each item: icon + text/link, separated by `gap: 0.5rem`
- Links open in new tab (`target="_blank"` + `rel="noopener"`)

### 7.2 Timeline

```css
.timeline {
  position: relative;
  padding-left: 2rem;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--color-border);
}
.timeline__item {
  position: relative;
  padding-bottom: 1.5rem;
}
.timeline__dot {
  position: absolute;
  left: -2rem;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-accent);
  border: 2px solid var(--color-surface);
}
```

- Vertical timeline with accent-colored dots and a thin border line
- Each item: date (muted, small), title (semibold, primary), company/institution, description
- Shared between Experience and Education sections

### 7.3 Skill Tags

```css
.skills__tag {
  display: inline-block;
  padding: var(--tag-chip-padding);
  background: var(--color-accent);
  color: #ffffff;
  border-radius: var(--tag-chip-border-radius);
  font-size: var(--tag-chip-font-size);
  font-weight: 500;
  transition: opacity 0.2s;
}
```

- Pill-shaped chips with accent background and white text
- Flex wrap container, `gap: 0.5rem`

### 7.4 Section Headings

- h2 with Playfair Display, `font-size: 1.5rem`, bottom border accent underline
- Decorative line: `2px solid var(--color-accent)`, `width: 50px`, `margin-top: 0.5rem`

### 7.5 Header

- Name: Playfair Display 700, `2.5rem`, primary color
- Title: Inter, muted color, `margin-top: 0.25rem`
- Contact bar below title
- Print button + dark mode toggle in top-right corner (absolute positioned)

### 7.6 Footer

```html
<footer class="resume__footer">
  <a href="../../index.html">← Voltar ao Showcase</a>
</footer>
```

- Centered, `margin-top: 3rem`, `padding-top: 1.5rem`, border-top

---

## 8. Animations

- **Scroll reveals**: IntersectionObserver triggers `.reveal` class on sections — fade-in + translateY(20px) over 0.6s ease
- **Tag hover**: `opacity: 0.85` transition on skill chips
- **Link hover**: color transition to `var(--color-accent)` on contact links
- **Dark mode toggle**: instant switch (no transition on CSS vars)
- **Print button**: no animation, calls native `window.print()`
- **Reduced motion**: respects `prefers-reduced-motion` — disables all scroll reveal animations

---

## 9. Responsive

### 9.1 Breakpoint 768px (Mobile)

| Element | Desktop | Mobile |
|---|---|---|
| Card padding | `3rem` | `1.5rem` |
| Name font-size | `2.5rem` | `1.75rem` |
| Contact bar | Flex row, wrap | Flex column, align-start |
| Timeline padding-left | `2rem` | `1.5rem` |
| Sections | Full width | Full width |
| Layout | Single column | Single column |

### 9.2 Print Styles (`@media print`)

- Removes page background, card shadow, border-radius
- Removes header toggle/print buttons
- Removes footer back link
- Forces black text on white background
- `.timeline__dot` becomes black
- `a[href]` shows URL after text: `::after { content: " (" attr(href) ")"; font-size: 0.8em; }`
- Page margins set to `0.5in`

---

## 10. Assets

### 10.1 Images

| File | Dimensions | Usage |
|---|---|---|
| `preview.png` | — | Gallery card preview for the showcase |

### 10.2 Favicon

```svg
data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%234361EE' width='100' height='100' rx='12'/><text y='68' x='50' font-size='50' text-anchor='middle' fill='white' font-family='serif'>R</text></svg>
```

- Inline SVG data URI — blue rounded square with white serif "R"

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<header>`, `<section>`, `<h1>`, `<h2>`, `<footer>` elements
- **Viewport** — standard `width=device-width, initial-scale=1.0`
- **Alt text** — no images beyond favicon/preview
- **Meta tags** — description, OG, Twitter card
- **Focus states** — custom `:focus-visible` outline on interactive elements
- **Color contrast** — accent (#4361EE) on white passes WCAG AA for large text; body text (#2D3436 on #FFFFFF) passes AAA
- **Print styles** — optimized print output
- **Reduced motion** — `prefers-reduced-motion` media query disables animations

### Missing / Improvements Needed

- **Skip link** — not present
- **ARIA labels** — buttons (print, dark mode toggle) lack explicit `aria-label`
- **Dark mode toggle** — uses text/emoji rather than accessible icon + label
- **Heading hierarchy** — proper h1 → h2 structure throughout
- **Language attribute** — `lang="pt"` present (Portuguese)

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Single CSS file | One `style.css` with all styles + dark mode + print + responsive |
| Deferred scripts | Script loaded before `</body>` (no `defer` needed, no dependencies) |
| CDN loading | Google Fonts + Lucide Icons from CDN |
| Font-display swap | `display=swap` on Google Fonts URL |
| Inline favicon | Data URI — no extra HTTP request |

### Considerations

- **Google Fonts** — adds ~30KB (Inter + Playfair Display); font-display swap mitigates layout shift
- **Lucide Icons** — loaded from CDN; small payload (individual SVG icons)
- **No images** — zero image loading beyond favicon; lightweight page
- **No external dependencies** — pure vanilla JS, no frameworks or libraries
- **No lazy loading needed** — all content is above-the-fold within the card
- **No critical CSS inlining** — full stylesheet loaded synchronously in `<head>`

---

## 13. UX Principles

- **Content-first** — typography and whitespace drive hierarchy; card layout mimics paper resume
- **Print-native** — dedicated `@media print` styles ensure the page works as a printable CV
- **Dark mode** — respects user preference via toggle + `localStorage` persistence
- **Scroll reveals** — subtle fade-in animations guide the reader through sections without distraction
- **Single-column mobile** — stacks all content vertically on narrow screens for readability
- **Timeline visualization** — dot-and-line metaphor makes chronology scannable at a glance
- **Tag chips** — compact, scannable skill representation with accent-colored pills
- **External links** — all contact/portfolio links open in new tab with `rel="noopener"`
- **Clear CTAs** — print and dark mode toggle are the only actions; everything else is content
- **Consistent section pattern** — each section shares the same h2 styling, creating rhythm

---

## 14. Observations

- **Pure CSS, no Tailwind**: all styling uses CSS custom properties + BEM; no utility framework
- **Dark mode via `data-theme` attribute**: toggled by JS, persisted in `localStorage` — consistent with main showcase pattern
- **BEM naming**: `.resume__header`, `.resume__section`, `.timeline__item`, `.timeline__dot`, `.contact__item`, `.skills__tag`
- **IntersectionObserver**: reveals sections one by one as they enter the viewport — unobtrusive, hardware-accelerated
- **No GSAP**: zero animation libraries; all motion is CSS transitions + IntersectionObserver class toggling
- **No images in content**: purely typographic CV — no profile photo or decorative imagery
- **Portuguese content**: default text is in Brazilian Portuguese (labels, section titles, descriptions)
- **A4 card metaphor**: centered card with shadow and rounded corners simulates paper on screen
- **preview.png**: exists in the project directory

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "exemplo-09--resume",
     "title": "Resume Template",
     "category": "tools",
     "href": "projects/exemplo-09--resume/",
     "preview": "projects/exemplo-09--resume/preview.png",
     "description": "Currículo profissional moderno com design responsivo e animações suaves.",
     "tags": ["HTML5", "CSS3", "JAVASCRIPT"]
   }
   ```

2. Preview image at `projects/exemplo-09--resume/preview.png` (already present)

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```
   (already present)

---

> Este blueprint descreve o **Resume Template** conforme implementado,
> documentado de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
