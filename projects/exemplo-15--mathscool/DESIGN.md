# DESIGN.md — Mathscool

## Project Overview

**Mathscool** is an online math school landing page designed to promote live classes, subscription plans, and individual course modules. It targets students preparing for national exams (9th and 12th year). Visual language is bold, youthful, and high-contrast — dark background with vibrant accent colors.

## Core Stack

- **HTML5** — semantic markup, Open Graph / Twitter Card meta, JSON-LD structured data (EducationalOrganization)
- **CSS3** — custom properties, BEM methodology, responsive breakpoints (1024px, 768px, 600px)
- **Vanilla JS ES6+** — IIFE, strict mode
- **GSAP 3.12.5** — ScrollTrigger, ScrollToPlugin, SplitText (CDN)
- **ClashDisplay** — self-hosted variable font (OTF/TTF/WOFF2/WOFF/EOT), loaded via `clash-display.css`
- **No Tailwind, no build tools**

## Critical Files

| File | Purpose |
|------|---------|
| `index.html` | Single-page layout: nav, hero, features, contact form, pricing tabs, courses, footer |
| `css/style.css` | All styles (955 lines), responsive breakpoints, BEM classes |
| `css/fonts/ClashDisplay_Complete/` | Self-hosted ClashDisplay font family (Light to Bold, Variable) |
| `js/script.js` | GSAP animations, mobile menu, form validation, smooth scroll, card hover, parallax |
| `imgs/` | Decorative SVGs + PNGs (sparks, detail, arrow, check marks, clip, scattered background) |
| `README.md` | Brief project summary |

## Visual Identity

- **Primary color**: `#090708` (near-black) → background
- **Light**: `#fdfefe` (off-white) → content cards, text on dark
- **Accent yellow**: `#f8fd43` → primary CTA, hover effects, tab active state
- **Accent pink**: `#fd619d` → secondary highlights, hero text badges, certain feature cards
- **Accent purple**: `#aeacff` → form background, certain feature cards, 12th year tabs
- **Font**: ClashDisplay — geometric sans-serif with variable weight, loaded as self-hosted web font
- **Typography scale**: fluid `clamp()` values for `--font-h1` through `--font-small`
- **Decorative elements**: SVG illustrations (sparks, arrows, paper clips, scattered dots background), colored detail shapes, dotted borders, check-mark icons per list item

## Page Structure

1. **Nav** — fixed header, logo "Mathscool", nav links (Courses / Plans / About / Contact), "Buy Course" CTA button, hamburger toggle on mobile
2. **Hero** — centered layout, floating decorative images (sparks, detail, arrow), headline with GSAP SplitText rotation animation, subtitle, dual CTA buttons ("View Courses", "Start Now"), social proof text ("Join 500+ students")
3. **Features (Details)** — white section, dot grid decoration, 7 cards in a 4×2 grid with colored backgrounds per card (pink, yellow, purple), floating detail images
4. **Contact Form** — purple section with dotted left border, clip art decoration, name/phone/email inputs, "Sign Up Free" button, real-time validation (email regex, phone regex)
5. **Plans (Tabs)** — CSS-only tab system using `:has()` selector, two tabs (9th Year / 12th Year), each with monthly and annual pricing options, check-mark lists, dotted borders between panels
6. **Special Price** — split banner with scattered dots background, "Save €99 with Annual Plan" headline, price comparison (strikethrough), CTA
7. **Courses** — two individual module cards (Algebra €19, Geometry €24) with "Buy Module" CTA
8. **Footer** — centered copyright

## Components

- **`.btn`** — base button, `--primary` (yellow bg, dark text, shadow), `--secondary` (grey bg, light text), `--outline` (white bg, dark text, dark border)
- **`.grid-cards`** — 4-column responsive grid of feature cards with per-child color theming
- **`.tabs`** — pure CSS tabs via `input[type="radio"]` + `:has()` selector, animated panel fade-in
- **`.form__inputs`** — stacked form with validation error states, `.error` class on input + visible `.form__error`
- **`.nav__menu`** — slide-in mobile panel from right (70% width, max 300px)

## Animations (GSAP)

- **Hero title/subtitle** — `SplitText` lines with `rotationX: -100`, 3D transform origin, stagger
- **Hero CTAs** — scale + fade from above, `back.out(1.7)` ease
- **Hero images** — fade + slide up
- **Parallax** — hero images scroll with `ScrollTrigger scrub`
- **Card hover** — `y: -8` + `boxShadow` on mouseenter (grid cards + course cards)
- **Smooth scroll** — `ScrollToPlugin` for anchor links

## Responsive

- **1024px** — features grid collapses to 2 columns
- **768px** — hamburger nav, form stacks vertically, body horizontal padding
- **600px** — features grid to 1 column, tabs stack vertically (only active panel visible), pricing section stacks, form compacts

## Assets

- **Self-hosted fonts**: ClashDisplay (6 weights + variable) in OTF/TTF/WOFF2/WOFF/EOT
- **Images**: `imgs/sparks.png`, `imgs/detail.png`, `imgs/detail-blue.png`, `imgs/detail-pink.png`, `imgs/detail-yellow.png`, `imgs/arrow.png`, `imgs/clip.png`, `imgs/scattered_background.svg`, `imgs/favicon.svg`, `imgs/check-right.svg`, `imgs/check-left.svg`
- **Preview**: `preview.png`

## Accessibility

- Semantic landmarks: `<header>`, `<main>`, `<footer role="contentinfo">`, `<section>` with IDs
- `aria-label` on nav toggle, `role="tablist"` / `role="tab"` / `role="tabpanel"` on tabs
- `sr-only` class for screen-reader-only labels
- `:focus` outline styles on buttons
- `prefers-reduced-motion` not implemented

## Performance

- ClashDisplay font loaded with `media="print"` + `onload="this.media='all'"` pattern (non-blocking)
- GSAP loaded from CDN (3 scripts + SplitText)
- Images use `loading="lazy"`
- No image-heavy hero background (pure CSS dark bg + small decorative SVGs)
- CSS-only tabs (no JS dependency for tab switching)

## UX Principles

- Clear pricing hierarchy: monthly vs annual with savings callout
- Dual CTAs per pricing option
- Social proof ("500+ students")
- Limited-time framing ("Save €99", "Limited time offer")
- Free trial lead capture form
- Individual module upsell after subscription plans
- Hover effects on buttons (scale + rotate) and cards (lift + shadow)

## Observations

- No back link to Showcase (`<a href=".../index.html">← Voltar ao Showcase</a>`) — should be added to footer per convention
- BEM used throughout CSS
- JS validates email and phone on blur, not on submit (submit just shows an alert)
- Font loading uses `display: swap` equivalent via the `media="print"` trick; no Flash of Invisible Text (FOIT) mitigation beyond that
- `ScrollTrigger` parallax only targets hero images
