# Poster Maker — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> do **Poster Maker**, um gerador de posters customizados para filmes e eventos
> via Canvas API.

---

## 1. Project Overview

### Project Name

```
Poster Maker
```

### Industry

```
Tools — Graphic Design / Poster Generation
```

### Target Audience

```
Movie enthusiasts, event organizers, content creators, and casual users
(16–50 years old) who need quick, custom posters without design software.
```

### Main Goal

```
Utility — Enable users to create, preview, download, and share custom movie/
event posters with image upload, OMDB data fetch, and Cloudinary sharing.
```

### Brand Voice

- **Functional** — clean form-based UI, no decorative fluff
- **Cinematic** — dark poster background, bold Bebas Neue title, film-style layout
- **Utility-first** — every element serves a direct purpose (input, preview, action)
- **Minimal** — light gray page bg, white form card, focus on the poster itself

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<h1>`, `<footer>`) |
| Styling | CSS3 + custom properties + BEM methodology |
| Behavior | Vanilla JavaScript ES6+ (event delegation, async/await) |
| Canvas capture | html2canvas 1.4.1 (CDN) |
| External API | OMDB API (movie/series/episode search + details) |
| Cloudinary | Upload API (unsigned preset, secure_url returned) |
| Fonts | Google Fonts CDN — Inter (400, 600, 700) + Bebas Neue (400) |

**No build tools** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | App shell: form inputs, poster preview container, action buttons, footer |
| `css/style.css` | All styles: layout, form, poster preview, responsive, utility classes |
| `js/config.js` | Gitignored — OMDB_API_KEY, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET (injected by Vercel build) |
| `js/script.js` | Core logic: image upload, OMDB search/fetch, real-time preview, html2canvas download |
| `js/cloudinary.js` | Cloudinary upload via unsigned preset, URL display + clipboard copy |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette

All colors are CSS custom properties on `:root`.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#d9d9d9` | Poster background — neutral gray canvas |
| `--color-text` | `#000000` | Poster title, body text |
| `--color-text-secondary` | `#4b5563` | Poster year, section labels |
| `--color-border` | `#d1d5db` | Form input borders |
| `--color-gray-100` | `#f3f4f6` | Page background |
| `--color-gray-500` | `#6b7280` | Muted utility text |

Body background: `#f3f4f6` (light gray).
Form background: `#ffffff` (white card, shadow).
Poster background: `#d9d9d9` (neutral gray).

### 4.2 Typography

| Element | Font | Weight | Size | Transform |
|---|---|---|---|---|
| App title (h1) | Inter | 700 | `1.875rem` | none |
| Form title (h2) | Inter | 600 | `1.25rem` | none |
| Poster title | Bebas Neue | 400 | `3rem` | uppercase |
| Poster year | Inter | 400 | `1.5rem` | none |
| Poster section label | Inter | 400 | `1.375rem` | uppercase |
| Poster section value | Inter | 600 | `1.375rem` | none |
| Form label | Inter | 500 | `0.875rem` | none |
| Form input | Inter (inherit) | 400 | inherit | none |
| Button text | Inter (inherit) | 600 | inherit | none |
| Back link | Inter | 600 | inherit | none |

**Import** (Google Fonts CDN):
```css
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap");
```

### 4.3 Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `#000000` (black) | `#ffffff` | none | `#1f2937` (gray-800) |
| Secondary | Transparent | `#000000` | `2px solid #000000` | `background: #000000`, `color: #ffffff` |
| Copy (Cloudinary) | `#0f9d58` (green) | `#ffffff` | none | `#0b7a44` |

All buttons: `transition: all 0.2s`, `cursor: pointer`, `padding: 0.5rem 1rem`, `border-radius: 0.25rem`.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Body padding | `2rem` (mobile `1rem`) |
| Form max-width | `400px` |
| Form padding | `1.5rem` |
| Form border-radius | `0.5rem` |
| Poster width | `min(800px, 100%)` |
| Poster border-radius | `0.5rem` |
| Info padding | `1.5rem` |
| Image width | `45%` |
| Title font size | `3rem` (mobile `2rem`) |
| Section gap | `0.75rem` |
| Form input border-radius | `0.25rem` |
| Flex gap (container) | `2rem` |

### 4.5 Focus-Visible

Not explicitly styled — relies on browser defaults.

---

## 5. Page Structure

```
APP TITLE
  h1: "Poster Maker" (centered)

MAIN LAYOUT (poster__container, flex row, wrap)
  FORM (left, white card, max-width 400px)
    h2: "Poster Data"

    Search Movie:
      Input: text search
      Select: type (Movie / Series / Episode / All)
      Button: "Search" (primary)
      Results dropdown (hidden until search returns)

    Image:
      Input: file (accept image/*)

    Title:
      Input: text

    Year:
      Input: text

    Names (comma separated):
      Input: text

    Genre:
      Input: text

    Created by:
      Input: text

    Actions:
      Button: "Preview" (primary)
      Button: "Download" (secondary)
      Button: "Upload" (primary)

    Cloudinary URL section (hidden after upload):
      Input: readonly URL
      Button: "Copy" (green)

  POSTER PREVIEW (right)
    800×400 poster (poster__preview, flex row):
      LEFT: poster image area (45% width)
        <img> with object-fit cover
      RIGHT: poster info (55% width)
        Header: Title (Bebas Neue, 3rem) + Year (Inter, right-aligned)
        Section: "Genre" label + value
        Section: "Cast" label + value
        Section: "created by" label + value

FOOTER
  Back link: <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Poster Maker |
| Title | Poster Maker |
| Meta description | Create custom posters for movies and events for free |
| Meta keywords | poster maker, create poster, graphic design, movies |
| OG title | Poster Maker |
| OG description | Create custom posters for movies and events for free |

### 6.2 Default Placeholder Text

| Element | Value |
|---|---|
| Poster title | `Title` |
| Poster year | `Year` |
| Poster genre | `Genre` |
| Poster names | `Names` |
| Poster creator | `creator` |
| Image source empty | `(local)` after image upload / `(API)` after OMDB fetch |

### 6.3 CTAs

| Label | Usage | Style |
|---|---|---|
| `Search` | OMDB search | Primary (black) |
| `Preview` | Refresh poster display | Primary (black) |
| `Download` | Save poster as PNG | Secondary (outline) |
| `Upload` | Upload to Cloudinary | Primary (black) |
| `Copy` | Copy Cloudinary URL | Green (`#0f9d58`) |

### 6.4 Search Types

| Value | Label |
|---|---|
| `movie` | Movie |
| `series` | Series |
| `episode` | Episode |
| `all` | All |

---

## 7. Components

### 7.1 Form

```css
.form {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}
```

- White card with subtle shadow
- Each field is a `.form__group` with `.form__label` + `.form__input`
- Inputs: full-width, `1px solid #d1d5db` border, `0.25rem` radius
- Action buttons flex row with `gap: 1rem`

### 7.2 Poster Preview

```css
.poster__preview {
  padding: var(--info-padding);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-width: 800px;
}
```

- Fixed aspect: 800×400 effective (via min-width + fluid width)
- Flex row: image (45%) + text info (55%, flex 1)
- Background: `#d9d9d9` (--color-bg)
- Title: Bebas Neue, 3rem, uppercase
- Sections hide themselves when their input is empty (via JS `style.display = "none"`)
- Captured by html2canvas at 2x scale for 1600×800 PNG download

### 7.3 OMDB Search

- Debounced at 300ms
- Supports movie, series, episode, or all types
- Results sorted alphabetically by title
- Type-prefixed with emoji: 🎬 movie, 📺 series, 📡 episode
- Selection fetches full details via `i=` parameter (IMDb ID)
- Populates title, year, genre, director/writer, actors, and poster image
- Cross-origin poster image loaded via canvas proxy (CORS workaround)

### 7.4 Cloudinary Upload

- Captures poster via html2canvas at 2x
- Uploads as PNG blob to unsigned preset
- Displays returned `secure_url` in readonly input
- Copy button writes to clipboard with 2s "Copied!" feedback

### 7.5 Footer

```html
<footer class="poster__footer">
  <a href="../../index.html">← Voltar ao Showcase</a>
</footer>
```

- Centered, underline link, `margin-top: 3rem`

---

## 8. Animations

- **Button hover**: `transition: all 0.2s` — color swap on primary/secondary
- **No GSAP**: no scroll-triggered, entrance, or loading animations
- **No scroll reveals**: static single-page tool layout
- **Reduced motion**: not explicitly implemented

---

## 9. Responsive

### 9.1 Breakpoint 1024px

| Element | Desktop | Mobile (<1024px) |
|---|---|---|
| Main layout | Flex row, `gap: 2rem` | `flex-direction: column` |

### 9.2 Breakpoint 768px

| Element | Desktop | Mobile (<768px) |
|---|---|---|
| Body padding | `2rem` | `1rem` |
| App title | `1.875rem` | `1.5rem` |
| Form max-width | `400px` | `100%` |
| Poster preview | Flex row | `flex-direction: column` |
| Poster image | `45%` width | `100%` width, `min-height: 180px` |
| Poster title | `3rem` | `2rem` |

---

## 10. Assets

### 10.1 Images

| File | Dimensions | Usage |
|---|---|---|
| `preview.png` | — | Gallery card preview for the showcase |

### 10.2 Favicon

```svg
data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23D9D9D9' width='100' height='70' rx='4'/><text y='55' x='50' font-size='40' text-anchor='middle' fill='black'>P</text></svg>
```

- Inline SVG data URI — gray rectangle with black "P"

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<h1>`, `<h2>`, `<footer>`, `<label>` elements
- **Form labels** — all inputs have associated `<label>` elements
- **Viewport** — standard `width=device-width, initial-scale=1.0`
- **Alt text** — poster image has `alt="Poster"`, updated when image changes
- **Meta tags** — description, keywords, OG, Twitter card

### Missing / Improvements Needed

- **Skip link** — not present
- **Focus states** — no custom `:focus-visible` styling
- **Reduced motion** — no `prefers-reduced-motion` media query
- **ARIA labels** — buttons lack `aria-label` (functional but could improve)
- **Keyboard nav** — OMDB search triggers on Enter, but results dropdown is a `<select>` — works natively
- **Heading hierarchy** — form uses `<h2>` "Poster Data" which is correct under `<h1>` app title
- **Dark mode** — not implemented (fixed light theme)

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Single CSS file | One `style.css` with all styles + utility classes |
| Deferred scripts | Scripts loaded after body (no `defer` attribute, but placed before `</body>`) |
| CDN loading | html2canvas from cdnjs |
| Font-display swap | `display=swap` on Google Fonts URL |
| Inline favicon | Data URI — no extra HTTP request |

### Considerations

- **html2canvas** adds ~40KB — needed for PNG generation
- **No lazy loading** — only one image in the poster, loaded inline
- **OMDB API** — external dependency; rate limits apply
- **Cloudinary upload** — additional network request after html2canvas capture
- **Images lack explicit width/height** in preview img tag (handled via CSS object-fit)
- **No critical CSS inlining**

---

## 13. UX Principles

- **Utility-first** — every UI element is directly functional; no decorative components
- **Real-time preview** — form inputs update poster immediately on input/change events
- **Clear action hierarchy** — three buttons with distinct visual weights: Preview (primary), Download (secondary outline), Upload (primary)
- **Progressive disclosure** — search results appear only after API returns; Cloudinary URL section hidden until upload completes
- **Single-page tool** — all functionality within one viewport, no navigation
- **Desktop-first** — requires ≥1024px for side-by-side layout; stacks on smaller screens
- **Feedback on actions** — download button shows "Generating..." while html2canvas runs; upload shows "Uploading..."; Copy button shows "Copied!" for 2s
- **Error handling** — alerts on OMDB search/movie fetch/upload failures

---

## 14. Observations

- **No Tailwind CSS**: although `README.md` mentions Tailwind and HTML uses utility class names (`.flex`, `.gap-2`, `.hidden`), these are custom classes defined in `style.css` — no Tailwind CDN is loaded
- **No light/dark mode**: fixed light theme (different from the main showcase's toggle)
- **No GSAP**: zero animations beyond CSS button hover transitions
- **BEM naming**: partial — `.form__group`, `.form__input`, `.form__button--primary`, `.poster__preview`, `.poster__title` follow BEM; some classes are flat (`.url-display`, `.space-y-4`)
- **html2canvas**: used for both download and Cloudinary upload — captures the poster DOM at 2x scale (1600×800 output)
- **OMDB API key**: hardcoded in `config.js` (gitignored) with a fallback key — production values injected by Vercel build script
- **Cloudinary upload**: unsigned preset, no authentication required from client — relies on preset-level restrictions
- **Poster sections hide when empty**: JS checks each field's value and sets `style.display = "none"` on the parent `.poster__section` — clean layout even with partial data
- **CORS workaround**: OMDB poster images loaded via canvas proxy (`new Image()` → canvas → `toDataURL()`) to avoid CORS errors in html2canvas
- **Search results max-height**: `200px` with `overflow-y: auto` — scrollable when many results
- **Preview image**: `preview.png` exists in the project directory

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "exemplo-08--poster",
     "title": "Poster Maker",
     "category": "tools",
     "href": "projects/exemplo-08--poster/",
     "preview": "projects/exemplo-08--poster/preview.png",
     "description": "Create custom posters for movies and events with Canvas API and download feature.",
     "tags": ["HTML5", "CSS3", "Canvas"]
   }
   ```

2. Preview image at `projects/exemplo-08--poster/preview.png` (already present)

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```
   (already present)

---

> Este blueprint descreve o **Poster Maker** conforme implementado,
> documentado de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
