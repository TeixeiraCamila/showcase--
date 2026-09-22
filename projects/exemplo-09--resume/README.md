# Resume — Camila Cristina Teixeira

Personal front-end developer resume as a responsive landing page with smooth, scroll-driven animations.

## Stack

- Semantic HTML5
- CSS3 custom properties
- Vanilla JavaScript (IntersectionObserver, `prefers-reduced-motion` aware)
- SVG leaves loaded client-side (decorative, skipped when reduced motion is set)

## Structure

```
css/reset.css
css/style.css
js/script.js
assets/leaves/
index.html
preview.png
```

## Notes

- **No-JS safe**: content is visible by default; an inline `html.js` marker enables the reveal animations only when JavaScript is active.
- **Reduced motion**: media query disables animations and hides the decorative leaves; the script also skips fetching them.
- **SEO**: canonical, Open Graph/Twitter cards (with `preview.png`), and JSON-LD `Person` schema point to the production URL.
- The resume content sources live alongside: `V1__Camila_Cristina_Teixeira_Curriculo.md` (PT) and `V1__Camila_Cristina_Teixeira_Resume_EN.md` (EN).

[Back to Showcase](../../index.html)