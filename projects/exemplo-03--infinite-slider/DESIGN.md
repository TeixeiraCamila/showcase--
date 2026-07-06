# Infinite Slider — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da **Infinite Slider**, uma galeria infinita de filmes vencedores do Oscar
> com animações GSAP, scroll e swipe.

---

## 1. Project Overview

### Project Name

```
Infinite Slider
```

### Industry

```
Entertainment — Film & Cinema
```

### Tagline

```
Galeria infinita de filmes vencedores do Oscar com animações GSAP, scroll e swipe.
```

### Target Audience

```
Cinéfilos e entusiastas de cinema (18–50 anos) que apreciam curadoria de
filmes clássicos e vencedores do Oscar. Usuários que consomem conteúdo
visual interativo em navegadores desktop e mobile.
```

### Main Goal

```
Browse & Discovery — Apresentar uma galeria de filmes de forma imersiva,
infinita e fluida, incentivando exploração via scroll, swipe e teclado.
```

### Brand Voice

- **Cinematográfica** — fotografia de alta qualidade, texto descritivo, curadoria respeitosa
- **Imersiva** — fundo preto, transições suaves, foco total no slide ativo
- **Minimalista** — sem decoração excessiva, tipografia utilitária, conteúdo como prioridade
- **Acessível** — sistema de navegação multi-modal (scroll, touch, teclado), hint na tela

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, semantic landmarks (`<header>`, `<main>`, `<footer>`) |
| Styling | CSS3 puro + BEM naming (parcial) |
| Behavior | Vanilla JavaScript ES6+ (deferred, async IIFE) |
| Animations | GSAP 3.12.2 (CDN, deferred) |
| Data | JSON estático carregado via `fetch` (`./data/apes.json`) |
| Icons | Nenhum (emoticons unicode para estrelas: `✩`) |
| Fonts | System UI stack (`system-ui, 'Segoe UI', Roboto, Arial, sans-serif`) |

**No build tools** — serve via `python -m http.server 8000` ou `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Semantic HTML: header (title + description), main slider container, vignette, hint, resume panel, sr-only status |
| `css/style.css` | All styles: reset, header layout, slider slides (absolute), text overlay, vignette gradient, resume panel, hint, responsive |
| `js/script.js` | Data fetch, slide render, GSAP animation engine, wheel/touch/keyboard handlers, resume/status updates |
| `data/apes.json` | Slide data: title, description, slides array (image path, alt, tomatometer, observation, text) |
| `data/slides.json` | Data alternativa: Oscar winners (Parasite, Moonlight, Schindler's List, Casablanca, On the Waterfront) |
| `assets/images/apes/` | Slide background images for Planet of the Apes data set |
| `assets/images/` | Favicon + fallback images for slides.json data set |

---

## 4. Visual Identity

### 4.1 Color Palette

No CSS custom properties — colors are hardcoded throughout `style.css`.

| Token | Hex | Usage |
|---|---|---|
| Pure black | `#000000` | Page background, resume pseudo-elements |
| White | `#ffffff` | Body text, slide text overlay background |
| Near-white | `#ddd` | Resume panel background, hint text |
| Text overlay bg | `#ffffff` | `.slider__text` background (with 0.8 opacity) |
| Text overlay | `#000000` | `.slider__text` content color |
| Hint text | `#ddd` | `.slider__hint` with `opacity: 0.6` |
| Vignette | `rgba(0,0,0,0) → rgba(0,0,0,0.6)` | Radial gradient, `mix-blend-mode: multiply` |
| Shadow soft | `rgba(50,50,93,0.25)` | Vignette inset shadow |
| Shadow dark | `rgba(0,0,0,0.3)` | Vignette secondary inset shadow |

**Note**: No light/dark mode — fixed dark theme (black background).

### 4.2 Typography

| Element | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| Header title (h1) | System UI | 700 (bold) | `1.5rem` (body default) | — |
| Header description (p) | System UI | 400 | Body default | — |
| Slide title (h3) | System UI | 700 (bold) | `1rem` | — |
| Slide text (p) | System UI | 400 | `0.75rem` | `1.4` |
| Resume panel | System UI | 400 | `0.8rem` | — |
| Hint text | System UI | 400 | `0.8rem` | — |
| Resume stars | System UI | 400 | `0.8rem` | — |

**No custom fonts** — system-ui stack apenas.

### 4.3 Buttons

Nenhum. O slider não possui botões — navegação exclusivamente via scroll, swipe e teclado.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Header padding | `1rem 3rem` |
| Header gap | `2rem` |
| Title flex | `30% 0 0` |
| Slider height | `calc(100vh - 150px)` |
| Slide margin | `5%` (inset: 0) |
| Slide border-radius | `25px` |
| Text overlay padding | `1rem` |
| Text overlay max-width | `300px` |
| Text overlay top/left | `5%` |
| Text overlay border-radius | `0 20px 0 20px` |
| Text overlay opacity | `0.8` |
| Resume padding | `0.8rem` |
| Resume border-radius | `15px` |
| Resume gap | `1rem` |
| Resume max-width | `300px` |
| Resume height | `96px` |
| Resume icon size | `40×40px` (circle) |
| Resume pseudo-elements | `20×20px` circles, `#000`, offset `-5px` |
| Hint bottom | `1rem` |
| Vignette | Fixed inset 0 |

### 4.5 Borders & Dividers

| Element | Rule |
|---|---|
| Slide border-radius | `25px` |
| Text overlay border-radius | `0 20px 0 20px` (responsive: `20px 0 20px 0`) |
| Resume border-radius | `15px` |
| Resume icon border-radius | `50%` (circle) |

### 4.6 Focus-Visible

Not explicitly styled — relies on browser defaults. Body receives `tabindex="0"` via JS for keyboard focus.

---

## 5. Page Structure

```
HEADER (role="banner")
  h1#page-heading: "Planeta dos Macacos — Guia Essencial" (data-driven)
  div.header__description
    p#page-description: description text (data-driven)

MAIN (role="main")
  div.slider
    div.slider__container#slides-container
      div.slider__slide (×N, position absolute, opacity 0)
        div.slider__text
          h3: movie title
          p[0..N]: movie description paragraphs
        img.slider__img: full-bleed cover image

    div.slider__vignette (fixed, radial-gradient, pointer-events none)

    div.slider__hint
      "Use o scroll / swipe para navegar (infinito)"

    div.slider__resume (fixed bottom-left)
      div.slider__resume-icon
        img#resume-image: miniature of current slide image
        p#resume-stars: star rating (unicode ✩)
      div.slider__resume-content
        span#resume-obs: observation text

span.sr-only#status (role="status", aria-live="polite")
  "Imagem X de Y"
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Infinite Slider |
| Title | Planeta dos Macacos — Guia Essencial (carregado de apes.json) |
| Description | Ordem recomendada para assistir a saga completa, da trilogia moderna às origens do clássico de 1968. |

**Data sets disponíveis**: `slides.json` (Oscar winners clássicos), `apes.json` (Planeta dos Macacos), `classicos.json` (duplicate de slides.json com paths diferentes).

### 6.2 Slide Data (excerpt from apes.json)

| # | Title | Tomatometer | Observation |
|---|---|---|---|
| 0 | Planeta dos Macacos: A Origem (2011) | 82 | O começo de tudo — performance de Andy Serkis como César é um marco da atuação por captura de movimento. |
| 1 | Planeta dos Macacos: O Confronto (2014) | 91 | Obra de grande profundidade emocional — eleva a franquia ao nível de drama político e bélico. |
| 2 | Planeta dos Macacos: A Guerra (2017) | 94 | Conclusão épica e sombria — uma reflexão sobre vingança, sacrifício e o custo da liderança. |
| 3 | Planeta dos Macacos: O Reinado (2024) | 81 | Um novo começo para a franquia — apresenta uma geração pós-César num mundo radicalmente transformado. |
| 4 | O Planeta dos Macacos (1968) | 86 | Um dos finais mais icônicos da história do cinema — obra fundadora da ficção científica política. |

### 6.3 Navigation

| Method | Action |
|---|---|
| Scroll down / ArrowDown / PageDown | Próximo slide |
| Scroll up / ArrowUp / PageUp | Slide anterior |
| Touch swipe down | Próximo slide |
| Touch swipe up | Slide anterior |

### 6.4 Icons

Nenhum icon library. Estrelas usam unicode `✩` (U+2729).

---

## 7. Components

### 7.1 Header

```html
<header class="header" role="banner">
  <h1 class="header__title" id="page-heading"></h1>
  <div class="header__description">
    <p id="page-description"></p>
  </div>
</header>
```

- Flex layout: title (30% flex-basis) + description (text-align right)
- Data preenchida via JS com `data.title` e `data.description`
- Responsivo: `flex-direction: column` + `text-align: center` em <992px

### 7.2 Slider Container

```css
.slider {
  position: relative;
  height: calc(100vh - 150px);
}
.slider__container {
  position: relative;
  width: 100%;
  height: 100%;
}
```

- Altura calculada para preencher viewport menos header
- Container relativo para posicionamento absoluto dos slides

### 7.3 Slide

```css
.slider__slide {
  position: absolute;
  inset: 0;
  margin: 5%;
  border-radius: 25px;
  overflow: hidden;
  opacity: 0;
  will-change: opacity, transform;
  pointer-events: none;
}
```

- Posicionamento absoluto com `inset: 0` + `margin: 5%` para bordas visíveis
- Opacidade 0 por padrão (GSAP controla visibilidade via `autoAlpha`)
- `will-change` para GPU acceleration durante animações
- Imagem interna usa `object-fit: cover` para preenchimento total

### 7.4 Text Overlay

```css
.slider__text {
  position: absolute;
  top: 5%;
  left: 5%;
  color: #000;
  background: #fff;
  max-width: 300px;
  padding: 1rem;
  font-size: 0.75rem;
  border-radius: 0 20px 0 20px;
  opacity: 0.8;
}
```

- Sobreposição no canto superior esquerdo (5% offset)
- Fundo branco com texto preto, 80% opacity
- Movido horizontalmente via GSAP: posição = `slide.offsetWidth - TEXT_OFFSET(400)`
- Responsivo: `left: 20%` + border-radius invertido em <992px

### 7.5 Vignette Overlay

```css
.slider__vignette {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%);
  mix-blend-mode: multiply;
}
```

- Efeito de vinheta fixo sobre toda a tela
- `mix-blend-mode: multiply` para escurecimento cinematográfico
- `pointer-events: none` para não bloquear interação

### 7.6 Resume Panel

```css
.slider__resume {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background: #ddd;
  color: #000;
  padding: 0.8rem;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 300px;
  height: 96px;
}
```

- Painel fixo no canto inferior esquerdo
- Exibe miniatura (círculo 40×40), avaliação (`✩`) e observação do slide atual
- Pseudo-elementos `::before` e `::after`: círculos pretos decorativos (20×20) nos cantos superior/inferior esquerdo
- Responsivo: `bottom: 3.5rem` em <992px

### 7.7 Hint Text

```css
.slider__hint {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: #ddd;
  opacity: 0.6;
  user-select: none;
}
```

- Texto fixo centralizado no rodapé
- "Use o scroll / swipe para navegar (infinito)"
- Opacidade baixa (0.6), sem interação

### 7.8 Status (Live Region)

```html
<span class="sr-only" id="status" role="status" aria-live="polite" aria-atomic="true"></span>
```

- Screen-reader-only span atualizado via JS: "Imagem X de Y"
- `aria-live="polite"` para anunciar sem interromper

---

## 8. Animations

### 8.1 GSAP Setup

```js
// GSAP 3.12.2 from CDN (cdnjs)
// No plugins registered — animation core only
```

### 8.2 Config Constants

| Constant | Value | Purpose |
|---|---|---|
| `COOLDOWN` | 450ms | Minimum interval between navigations |
| `WHEEL_THRESHOLD` | 30px | Minimum scroll delta to trigger navigation |
| `TOUCH_THRESHOLD` | 40px | Minimum touch swipe distance |
| `ANIMATION_DURATION` | 0.9s | Base duration for slide crossfade |
| `TEXT_OFFSET` | 400px | Target horizontal position for text overlay |

### 8.3 Initial State

| Element | GSAP Set |
|---|---|
| All slides | `autoAlpha: 0` |
| First slide (index 0) | `autoAlpha: 1`, `data-active: true` |
| All text overlays | `autoAlpha: 0`, `x: -100`, `y: 0` |
| First text overlay | `autoAlpha: 0.8`, `x: slideWidth - 400`, duration: 1s, `power3.out` |

### 8.4 Slide Transition (`animateSlides`)

Timeline sequence:

| Time | Target | Properties | Duration | Easing |
|---|---|---|---|---|
| 0s | Incoming slide | `autoAlpha: 0 → 1` | 0.9s | `power2.out` |
| 0s | Outgoing slide | `autoAlpha: 1 → 0` | 0.9s | `power2.in` |
| 0s | Outgoing text | `x: slideWidth`, `y: 20`, `autoAlpha: 1 → 0`, `scale: 1 → 0.9` | 0.54s | `power2.in` |
| 0.3s | Incoming text | `x: -100 → slideWidth-400`, `y: -20 → 0`, `autoAlpha: 0 → 0.8`, `scale: 0.9 → 1` | 0.72s | `back.out(1.4)` |

- `onComplete`: reseta `y: 0` em ambos os slides, libera `isAnimating`
- `goTo()`: verifica cooldown (450ms), previne animação concorrente, calcula índice com wrap-around modular

### 8.5 User Input Handlers

| Handler | Condition | Action |
|---|---|---|
| `wheel` | `deltaY` ≥ 30px | `goTo(current ± 1)` |
| `touchstart` | — | Store `touchStartY` |
| `touchmove` | `dy` ≥ 40px | `goTo(current ± 1)` |
| `touchend` | — | Reset `touchStartY` |
| `keydown` | ArrowDown/Up, PageDown/Up | `goTo(current ± 1)` |

### 8.6 Resume Update

```js
function updateResume(slide) {
  // Copia src/alt da imagem do slide para o ícone do resume
  // Lê data-tomatometer, converte para estrelas ✩ (max 5)
  // Lê data-obs, insere no span
}
```

### 8.7 Reduced Motion

Not explicitly implemented — no `@media (prefers-reduced-motion: reduce)` block.

---

## 9. Responsive

### 9.1 Breakpoint 992px

| Element | Desktop (>992px) | Mobile (<992px) |
|---|---|---|
| Header | `flex-direction: row` | `flex-direction: column`, `padding: 1rem 0` |
| Title flex | `30% 0 0` | `flex: none` |
| Description alignment | `text-align: right` | `text-align: center` |
| Text overlay left | `5%` | `20%` |
| Text overlay radius | `0 20px 0 20px` | `20px 0 20px 0` |
| Resume bottom | `1rem` | `3.5rem` |

### 9.2 Viewport

- `viewport-fit=cover` for notched devices
- Slide height: `calc(100vh - 150px)` — adapta à altura da viewport
- Slide margin: `5%` — adapta proporcionalmente

---

## 10. Assets

### 10.1 Images

| Directory | Usage |
|---|---|
| `assets/images/apes/` | Planet of the Apes slide backgrounds (`AOrigem.jpg`, `OConfronto.jpg`, `AGuerrra.jpg`, `OReinado.jpg`, `OClassico1968.jpg`) |
| `assets/images/classicos/` | Oscar winners slide backgrounds (`Parasite.jpg`, `moonlight.jpg`, `SchindlersList.jpg`, `casablanca.jpg`, `OnTheWaterfront.jpg`) |

### 10.2 Favicon

`assets/images/favicon.ico` — formato .ico, 16×16 ou 32×32.

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<header role="banner">`, `<main role="main">`, `<span role="status">`
- **ARIA Live Region** — `aria-live="polite"` + `aria-atomic="true"` no status span
- **Keyboard Navigation** — ArrowUp/Down, PageUp/Down; body receives `tabindex="0"`
- **Responsive** — funciona em mobile e desktop
- **Alt Text** — todas as imagens têm `alt` descritivo
- **Touch Support** — swipe up/down para navegação mobile

### Missing / Improvements Needed

- **Skip link** — not present
- **Focus states** — no custom `:focus-visible` styling
- **Reduced motion** — no `prefers-reduced-motion` media query
- **`aria-label`** — slider container, hint text sem labels
- **Dark mode** — N/A (tema fixo escuro)
- **Pause animation** — sem toggle para pausar transições automáticas
- **Contrast** — texto overlay branco sobre fundo preto é OK, mas texto no resume (#ddd bg, #000 text) pode ter contraste baixo

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| Deferred scripts | GSAP + `script.js` both use `defer` |
| CDN loading | GSAP from `cdnjs` |
| Single CSS file | One `style.css` (no reset file, no imports) |
| `will-change` | Set on `.slider__slide` for GPU-accelerated opacity/transform |
| `object-fit: cover` | Efficient full-bleed image rendering |
| Data-driven | JSON via `fetch` — static, cacheable; no SSR or hydration |

### Considerations

- GSAP 3.12.2 adds ~30KB from CDN
- Images are JPEG — consider WebP for smaller payloads
- No lazy loading on images (`loading="lazy"` not set)
- All slides loaded simultaneously in DOM — could be heavy with 50+ slides
- No critical CSS inlining
- No image dimension attributes (no aspect ratio placeholder)

---

## 13. UX Principles

- **Infinite Scroll Loop** — navegação sem fim via wrap-around modular (`(index % N + N) % N`)
- **Multi-modal Input** — scroll, touch swipe e teclado; o usuário escolhe o método preferido
- **Cooldown Safety** — 450ms entre ações previne navegação acidental
- **Visual Feedback** — crossfade + text animation; resume panel atualiza instantaneamente
- **Minimalist UI** — sem botões, sem UI chrome; hint sutil para onboard
- **Status for Assistive Tech** — live region atualiza a cada navegação
- **Full-bleed Immersion** — slide ocupa viewport com margens mínimas, vinheta cinematográfica

---

## 14. Observations

- **Data-swappable architecture**: script carrega `apes.json` mas `slides.json` contém dados de Oscar winners — trocando o path no `fetch`, muda todo o conteúdo
- **README desatualizado**: menciona `data/slides.json` como fonte, mas `script.js` carrega `data/apes.json`
- **Sem build tools**: HTML+CSS+JS puro, GSAP via CDN
- **Sem Tailwind, Swiper ou Lucide**: dependências mínimas — apenas GSAP
- **Sem custom fonts**: system-ui stack apenas (diferente de outros projetos que usam Google Fonts)
- **Dark mode N/A**: tema fixo escuro (#000 bg) — diferente do showcase principal que tem toggle
- **BEM parcial**: classes como `.slider__slide`, `.slider__text`, `.slider__vignette` seguem BEM; `.header`, `.main` não
- **GSAP plugins**: NÃO registra ScrollTrigger ou SplitText — apenas animação core (diferente de outros projetos showcase)
- **Múltiplos data sets**: `apes.json` (Planeta dos Macacos), `slides.json` (Oscar winners), `classicos.json` (duplicata) — confusão de dados
- **HTML entities**: `escapeHtml()` sanitiza conteúdo contra XSS
- **Touch config**: eventos `passive: true` em touch — boa prática de performance
- **Resume pseudo-elementos**: círculos pretos nos cantos — design decorativo semântico
- **Preview image**: `preview.png` existe na raiz do projeto

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present):
   ```json
   {
     "id": "03",
     "title": "INFINITE SLIDER",
     "category": "animation",
     "href": "projects/exemplo-03--infinite-slider/index.html",
     "preview": "projects/exemplo-03--infinite-slider/preview.png",
     "description": "Galeria infinita de filmes vencedores do Oscar com animações GSAP, scroll e swipe.",
     "tags": ["HTML5", "CSS3", "GSAP"]
   }
   ```

2. Preview image at `projects/exemplo-03--infinite-slider/preview.png` (already present)

3. Footer link back:
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve a landing page **Infinite Slider** conforme implementada,
> documentada de forma que um designer consiga replicar o layout no Figma e um
> desenvolvedor consiga implementar ou modificar a interface — sem necessidade
> de briefing adicional.
