# JavaScript Quiz — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> do **JavaScript Quiz**, um quiz interativo de JavaScript com perguntas de
> múltipla escolha, temporizador e score.

---

## 1. Project Overview

### Project Name

```
JavaScript Quiz
```

### Industry

```
Education — Interactive Quiz / Coding Assessment
```

### Target Audience

```
Developers, students, and coding enthusiasts (16–45 years old) looking to
test and improve their JavaScript knowledge through an interactive quiz
experience.
```

### Main Goal

```
Engagement & Knowledge Assessment — Provide a fun, timed quiz experience
with multiple-choice questions, progress tracking, score feedback, and
the ability to retry and improve scores over time.
```

### Brand Voice

- **Educational** — clear question display, immediate answer feedback with explanations
- **Playful** — shake animation on wrong, pulse on correct, confetti on high scores
- **Competitive** — score tracking, high scores via localStorage, percentage-based results
- **Clean** — centered card layout, dark theme, focused typography
- **Responsive** — works on all screen sizes, mobile-first

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<main>`, `<footer>`) |
| Styling | CSS3 + custom properties + BEM methodology |
| Behavior | TypeScript (compiled to ES2016) |
| Type System | TypeScript 5.3+ via `tsconfig.json` |
| Build | Node.js/npm (dev-only) — `npm run build` / `npm run watch` |
| Fonts | Google Fonts — Inter (400, 600, 700) + JetBrains Mono (400, 700) |

**Dev-only build**: `npm install` then `npx tsc` to compile `quiz.ts` → `quiz.js`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | App shell: header with title/progress, main quiz content area, results screen |
| `css/style.css` | All styles: layout, card, options, progress bar, result screen, animations, responsive |
| `quiz.ts` | TypeScript source — quiz logic: load questions, render, handle answer, show result, save/restore progress |
| `quiz.js` | Compiled ES2016 output from `quiz.ts` (loaded by HTML) |
| `quiz.json` | Question bank: questions with id, text, 4 options, correctAnswer index, explanation |
| `tsconfig.json` | TypeScript config: ES2016 target, ES2015 modules, strict mode |
| `package.json` | npm config with `build` and `watch` scripts, devDep on TypeScript |
| `favicon.svg` | SVG question mark icon on gold background |
| `preview.png` | Gallery card preview for the showcase |

---

## 4. Visual Identity

### 4.1 Color Palette (Dark Theme)

All colors defined as CSS custom properties on `:root`.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#0F172A` | Page background — deep navy |
| `--color-surface` | `#1E293B` | Card background — slate |
| `--color-primary` | `#3B82F6` | Primary accent — buttons, progress bar, correct highlights |
| `--color-success` | `#10B981` | Correct answer indicator — green |
| `--color-error` | `#EF4444` | Wrong answer indicator — red |
| `--color-text` | `#F8FAFC` | Body text, headings — off-white |

### 4.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| App title (h1) | Inter | 700 | 1.5rem, uppercase, letter-spacing 2px |
| Question text | Inter | 600 | 1.2rem |
| Option buttons | Inter | 500 | 1rem |
| Progress text | Inter | 700 | 0.9rem |
| Score (results) | Inter | 700 | 2.5rem |
| Message (results) | Inter | 700 | 1.1rem |
| Reset/action buttons | Inter | 700 | 0.9rem |
| Code snippets | JetBrains Mono | 400 | inherit |

**Import** (Google Fonts CDN):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### 4.3 Buttons

| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Option (default) | `--color-surface` | `--color-text` | 2px solid transparent | `border-color: --color-primary` |
| Option (correct) | `--color-success` | `#FFFFFF` | `--color-success` | — (disabled) |
| Option (wrong) | `--color-error` | `#FFFFFF` | `--color-error` | — (disabled) |
| Reset | `--color-surface` | `--color-text` | 1px solid `--color-primary` | `background: --color-primary` |
| Restart | `--color-primary` | `#FFFFFF` | none | `opacity: 0.9` |

All buttons use `transition: all 0.2s ease`, `cursor: pointer`, and `border-radius: 0.5rem`.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Card max-width | 700px |
| Card border-radius | 0.75rem |
| Card padding | 2rem |
| Option padding | 1rem 1.25rem |
| Option border-radius | 0.5rem |
| Gap between options | 0.75rem |
| Progress bar height | 0.5rem |
| Progress bar border-radius | 0.25rem |
| Section gap | 1.5rem |

### 4.5 Focus-Visible

All interactive elements use `:focus-visible` with `outline: 2px solid var(--color-primary)` and `outline-offset: 2px`.

---

## 5. Page Structure

```
BODY (dark background, centered flex)
  QUIZ CONTAINER (card, max-width 700px)
    HEADER (quiz-header)
      h1: "JavaScript Quiz" (uppercase, primary color)
      Reset button (top-right, hidden until progress exists)
      Progress bar (progress-bar → progress-fill)
      Progress text: "1 / 10" (progress-text)

    MAIN QUIZ CONTENT (quiz-content)
      Question (question): text of current question
      Options (options): 4 buttons (option), stacked vertically
        - Correct: green highlight (option.correct), pulse animation
        - Wrong: red highlight (option.wrong), shake animation
        - Disabled after answer

    RESULT SCREEN (result, hidden until quiz ends)
      h2: "Resultado Final"
      Score (score): "7 / 10 (70%)"
      Message (message): contextual motivational message
      Button: "Refazer Quiz" (primary style)

FOOTER
  Back link: <a href="../../index.html">← Voltar ao Showcase</a>
```

---

## 6. Components

### 6.1 Quiz Header

```
┌──────────────────────────────────────┐
│  JavaScript Quiz            [Reset]  │
│  ████████████░░░░░░  3 / 10          │
└──────────────────────────────────────┘
```

- Fixed header at top of card with dark background and bottom accent border
- Title: `h1` with uppercase, letter-spacing, `--color-primary`
- Reset button: absolute positioned top-right, hidden by default, appears when any answer is given
- Progress bar: full-width thin bar with `--color-primary` fill, smooth width transition
- Progress text: centered below bar, updates on each question

### 6.2 Question & Options

```
┌──────────────────────────────────────┐
│                                      │
│  O que é o 'event bubbling'?         │
│                                      │
│  ┌────────────────────────────────┐  │
│  │  Evento que ocorre apenas...   │  │
│  ├────────────────────────────────┤  │
│  │  Propagação do evento do...    │  │
│  ├────────────────────────────────┤  │
│  │  Evento que não se propaga     │  │
│  ├────────────────────────────────┤  │
│  │  Evento exclusivo de...        │  │
│  └────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

- Question text: bold `1.2rem`, `--color-text`, with `line-height: 1.5`
- Options: vertical stack of full-width `button.option` elements
- Default: `--color-surface` background, transparent border, hover adds primary color border
- Answered: all options disabled; correct option gets green background + pulse animation; selected wrong option gets red background + shake animation

### 6.3 Result Screen

```
┌──────────────────────────────────────┐
│           Resultado Final             │
│                                      │
│             7 / 10 (70%)              │
│                                      │
│    Muito bom! Você manja muito JS!   │
│                                      │
│         ┌──────────────────┐         │
│         │   Refazer Quiz   │         │
│         └──────────────────┘         │
└──────────────────────────────────────┘
```

- Hidden until all questions answered
- Score: large `2.5rem` primary-colored percentage display
- Message: contextual tiers — ≥90% expert, ≥70% great, ≥50% good, <50% study more
- Restart button: primary blue pill, clears localStorage and resets quiz
- Confetti animation on scores ≥90%

### 6.4 State Machine

```
idle → playing → answered → results
```

- **idle**: Initial state, waiting for user to start
- **playing**: Question displayed, timer counting down, options clickable
- **answered**: Option selected, feedback shown (color + animation), 1s delay before next
- **results**: All questions completed, final score and message displayed

---

## 7. Animations

| Animation | Element | Trigger | Effect | Duration | Easing |
|---|---|---|---|---|---|
| Fade between questions | `#quizContent` | New question render | Opacity 0→1 | 0.3s | ease |
| Pulse | `.option.correct` | Correct answer | Scale 1→1.02→1 | 0.5s | step-end |
| Shake | `.option.wrong` / `.quiz-content.shake` | Wrong answer | TranslateX ±8px | 0.5s | step-end |
| Pulse (container) | `.quiz-content.pulse` | Correct answer | Scale 1→1.02→1 | 0.5s | step-end |
| Confetti | `.result` | Score ≥90% | CSS burst particles | 2s | — |

No GSAP — all animations are pure CSS `@keyframes` or `transition`.

---

## 8. Responsive

### 8.1 Breakpoint 480px

| Element | Desktop | Mobile (<480px) |
|---|---|---|
| Body padding | 20px | 20px (same) |
| Header padding | 30px | 20px |
| Card padding | 30px | 20px |
| Question font | 1.2rem | 1.1rem |
| Option padding | 16px 20px | 14px 16px |
| Option font | 1rem | 0.95rem |

### 8.2 Layout Behavior

- Card always centered via `flex` on body
- Options always stack vertically (no row layout at any size)
- Reset button absolute-positioned in header — may overlap title on narrow screens
- No horizontal scroll at any breakpoint

---

## 9. Assets

### 9.1 Images

| File | Usage |
|---|---|
| `preview.png` | Gallery card preview for the showcase |

### 9.2 Favicon

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#BBA14A"/>
  <text x="16" y="22" font-family="Arial" font-size="18" font-weight="bold" fill="#26302F" text-anchor="middle">?</text>
</svg>
```

Gold rounded-square background with dark question mark character.

---

## 10. Accessibility

### Implemented

- **Semantic HTML** — `<header>`, `<main>`, `<h1>`, `<h2>`, `<button>`
- **Heading hierarchy** — single h1 (app title), h2 (result screen title)
- **Viewport** — standard `width=device-width, initial-scale=1.0`
- **Color contrast** — light text on dark backgrounds, high contrast pass WCAG AA
- **Keyboard navigation** — options are `<button>` elements, natively keyboard-focusable

### Missing / Improvements Needed

- **Skip link** — not present
- **ARIA labels** — buttons lack `aria-label`; progress bar lacks `role="progressbar"` with `aria-valuenow` / `aria-valuemax`
- **Focus states** — no custom `:focus-visible` styling (relies on browser defaults)
- **Reduced motion** — no `@media (prefers-reduced-motion: reduce)` block
- **Screen reader announcements** — question changes and feedback not announced via `aria-live` region
- **Timer** — no `aria-live` announcement for countdown when timer is active
- **Dark mode toggle** — single dark theme only (no toggle to light)

---

## 11. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Single CSS file | One `style.css` with all styles and keyframes |
| Deferred script | `quiz.js` loaded before `</body>` (no `defer` attribute) |
| Static data | `quiz.json` served as static file — no API dependency |
| SVG favicon | Vector format, minimal file size |
| Minimal dependencies | No external libraries, no CDN fonts currently loaded |

### Considerations

- **TypeScript compile step** — `npm install && npm run build` required; `quiz.js` output must be committed to repo
- **No Google Fonts in current implementation** — currently uses system `Courier New` stack; Inter + JetBrains Mono would add ~30KB
- **localStorage reads/writes** — synchronous but negligible for small progress data
- **No lazy loading** — all content is inline, total page weight under 10KB

---

## 12. UX Principles

- **Single focus per screen** — one question at a time, clear action path
- **Immediate feedback** — answer highlighted green/red instantly on click with animation
- **Progress transparency** — bar + text show position at all times
- **Forgiveness** — reset button allows restart any time
- **Motivational messaging** — contextual result messages encourage retry
- **Low friction** — no login, no signup, just start answering
- **Recovery** — localStorage saves progress; page refresh doesn't lose answers
- **Competitive loop** — high scores stored locally, percentage display, easy restart

---

## 13. Observations

- **Portuguese quiz content**: Questions and options are in Brazilian Portuguese — targets PT-BR developer audience
- **No timer implemented**: Current code lacks per-question countdown — planned enhancement per design spec
- **No confetti**: High-score confetti animation not yet implemented — planned as CSS-only or canvas-based
- **No explanation field in JSON**: `quiz.json` doesn't include explanation per question — current feedback shows only correct/wrong
- **State machine simpler in code**: Actual flow is `loading → playing → answered → results` without explicit `idle` state
- **No high score tracking**: Current localStorage saves progress (currentIndex + answers), not high scores
- **Color scheme differs**: Current CSS uses gold/dark/cream/rust palette (`#BBA14A`, `#26302F`, `#EBE5CF`, `#CF3D01`) — design spec calls for blue-themed dark palette (`#0F172A`, `#1E293B`, `#3B82F6`)
- **No BEM in current CSS**: Classes are flat (`.quiz-container`, `.option`, `.result`) — design spec requires BEM naming
- **System font in use**: Current CSS uses `'Courier New', Courier, monospace` — design spec calls for Inter + JetBrains Mono
- **Reset button positioning**: Absolute `top: 20px; right: 20px` — may overlap long titles on small screens
- **No animation between questions**: Current code does instant swap — planned 0.3s fade
- **Progress bar transition**: Uses `transition: width 0.4s step-end` — design specifies smooth animation

---

## 14. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "11",
     "title": "JavaScript Quiz",
     "category": "quiz",
     "href": "projects/exemplo-11--quiz/index.html",
     "preview": "projects/exemplo-11--quiz/preview.png",
     "description": "Quiz interativo de JavaScript com perguntas de múltipla escolha, temporizador e score.",
     "tags": ["HTML5", "CSS3", "TYPESCRIPT"]
   }
   ```

2. Preview image at `projects/exemplo-11--quiz/preview.png` (already present)

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve o **JavaScript Quiz** conforme projetado,
> documentado de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
