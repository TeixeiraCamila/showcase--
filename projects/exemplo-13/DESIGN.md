# Projeto 13 — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> da landing page **Projeto 13**, template mínimo com HTML + CSS puro.

---

## 1. Project Overview

### Project Name

```
Projeto 13
```

### Industry

```
Template / Landing Page — Showcase starter project
```

### Tagline

```
Landing page mínima com HTML e CSS puros.
```

### Target Audience

```
Desenvolvedores que desejam uma base limpa e sem JavaScript para
landing pages institucionais.
```

### Main Goal

```
Apresentar uma estrutura funcional de landing page com navegação,
hero, cards de features e footer — tudo sem JavaScript, sem CDN,
sem dependências externas.
```

### Brand Voice

- **Mínima** — apenas HTML e CSS; sem frameworks, sem build tools
- **Limpa** — código organizado com BEM e variáveis CSS
- **Profissional** — paleta azul corporativa, tipografia sistema, layout responsivo
- **Acessível** — sem JavaScript, sem animações, sem dependências

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, landmarks semânticas (`<nav>`, `<section>`, `<footer>`) |
| Styling | CSS3 com custom properties + BEM |
| Behavior | Nenhum — sem JavaScript |

**No build tools, no CDN, no external dependencies, no JavaScript, no GSAP, no Tailwind, no Google Fonts** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Shell HTML: nav, hero, features, footer com back-link e copyright |
| `css/style.css` | Custom properties, reset, layout, BEM components, responsivo |

---

## 4. Visual Identity

### 4.1 Color Palette

Todas as cores definidas como CSS custom properties no `:root` em `style.css`.

| Token | CSS Variable | Hex | Usage |
|---|---|---|---|
| Background | `--color-bg` | `#FFFFFF` | Page background |
| Primary | `--color-primary` | `#2563EB` | CTAs, links, acentos |
| Secondary | `--color-secondary` | `#1E40AF` | Hover states |
| Text | `--color-text` | `#1F2937` | Body text, headings |
| Muted | `--color-muted` | `#6B7280` | Subtitles, secondary text |
| Border | `--color-border` | `#E5E7EB` | Separators, dividers |

**Nota**: Sem light/dark mode — tema fixo claro.

### 4.2 Typography

| Element | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| Body | `system-ui, -apple-system, sans-serif` | 400 | 16px (browser default) | `1.6` |
| H1 (hero) | `system-ui, -apple-system, sans-serif` | 700 | `2.5rem` | `1.2` |
| H2 (section) | `system-ui, -apple-system, sans-serif` | 600 | `2rem` | `1.3` |
| H3 (card) | `system-ui, -apple-system, sans-serif` | 600 | `1.25rem` | `1.4` |

Sem Google Fonts, sem import externo — apenas system font stack.

### 4.3 Buttons / CTAs

| Element | Background | Text | Padding | Radius | Hover |
|---|---|---|---|---|---|
| CTA `.button` | `--color-primary` | `#FFFFFF` | `0.75rem 1.5rem` | `0.5rem` | `--color-secondary` |

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Container max-width | `1200px` |
| Container padding | `0 2rem` |
| Section padding | `4rem 0` |
| Card padding | `1.5rem` |
| Nav gap | `2rem` |
| Features grid gap | `2rem` |

### 4.5 Borders & Dividers

| Element | Style |
|---|---|
| Nav hover | `2px solid var(--color-primary)` (underline) |
| Card | `1px solid var(--color-border)` + `border-radius: 0.5rem` |

### 4.6 Focus-Visible

| Element | Style |
|---|---|
| Links & buttons | `outline: 2px solid var(--color-primary); outline-offset: 2px` |

---

## 5. Page Structure

```
NAV
  Logo / Home
  <ul class="nav__list">
    <li class="nav__item"><a href="#">Home</a></li>
    <li class="nav__item"><a href="#">Sobre</a></li>
    <li class="nav__item"><a href="#">Serviços</a></li>
    <li class="nav__item"><a href="#">Contato</a></li>
  </ul>

HERO (class="hero")
  <div class="hero__content">
    <h1>Bem-vindo ao Projeto 13</h1>
    <p>Subtítulo descritivo</p>
    <a href="#" class="button">Saiba Mais</a>
  </div>

FEATURES (class="features")
  <div class="features__grid">
    <article class="feature__card">
      [SVG icon] <h3>Design Moderno</h3> <p>...</p>
    </article>
    <article class="feature__card">
      [SVG icon] <h3>Código Limpo</h3> <p>...</p>
    </article>
    <article class="feature__card">
      [SVG icon] <h3>Responsivo</h3> <p>...</p>
    </article>
  </div>

FOOTER
  <a href="../../index.html">← Voltar ao Showcase</a>
  <p>© 2024 Projeto 13. Todos os direitos reservados.</p>
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Projeto 13 |
| Title | Projeto 13 |
| Year | 2024 |
| Language | pt-BR |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Hero heading | `Bem-vindo ao Projeto 13` |
| Hero subtitle | `Uma landing page minimalista, rápida e sem JavaScript.` |
| Footer (link) | `← Voltar ao Showcase` |
| Footer (copyright) | `© 2024 Projeto 13. Todos os direitos reservados.` |

### 6.3 CTAs

| Label | Usage |
|---|---|
| `Saiba Mais` | Hero — link de ação principal |

### 6.4 Navigation

| Label | Href | Behavior |
|---|---|---|
| Home | `#` | Scroll suave (âncora) |
| Sobre | `#` | Scroll suave (âncora) |
| Serviços | `#` | Scroll suave (âncora) |
| Contato | `#` | Scroll suave (âncora) |

Hover: `text-decoration: underline` com cor `--color-primary`.

### 6.5 Icons

Ícones SVG inline (sem CDN, sem Lucide):

| Card | Icon |
|---|---|
| Design Moderno | SVG de pincel / paleta |
| Código Limpo | SVG de tag / código |
| Responsivo | SVG de dispositivo / tela |

---

## 7. Components

### 7.1 Navigation

```html
<nav class="nav" aria-label="Navegação principal">
  <div class="container nav__container">
    <a href="#" class="nav__logo">Projeto 13</a>
    <ul class="nav__list">
      <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Sobre</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Serviços</a></li>
      <li class="nav__item"><a href="#" class="nav__link">Contato</a></li>
    </ul>
  </div>
</nav>
```

- BEM: `.nav`, `.nav__container`, `.nav__logo`, `.nav__list`, `.nav__item`, `.nav__link`
- Horizontal list com `display: flex` e `gap: 2rem`
- Hover: `underline` animado via `text-decoration` + transição

### 7.2 Hero

```html
<section class="hero">
  <div class="container hero__content">
    <h1 class="hero__title">Bem-vindo ao Projeto 13</h1>
    <p class="hero__subtitle">Uma landing page minimalista, rápida e sem JavaScript.</p>
    <a href="#" class="button hero__cta">Saiba Mais</a>
  </div>
</section>
```

- BEM: `.hero`, `.hero__content`, `.hero__title`, `.hero__subtitle`, `.hero__cta`
- Centralizado: `text-align: center`
- Padding vertical generoso

### 7.3 Feature Cards

```html
<section class="features" id="servicos">
  <div class="container">
    <h2 class="section__title">Nossos Diferenciais</h2>
    <div class="features__grid">
      <article class="feature__card">
        <div class="feature__icon"><!-- SVG inline --></div>
        <h3 class="feature__title">Design Moderno</h3>
        <p class="feature__description">Interface limpa e contemporânea para causar a melhor impressão.</p>
      </article>
      <article class="feature__card">
        <div class="feature__icon"><!-- SVG inline --></div>
        <h3 class="feature__title">Código Limpo</h3>
        <p class="feature__description">HTML semântico e CSS organizado seguindo boas práticas.</p>
      </article>
      <article class="feature__card">
        <div class="feature__icon"><!-- SVG inline --></div>
        <h3 class="feature__title">Responsivo</h3>
        <p class="feature__description">Layout adaptável para qualquer dispositivo.</p>
      </article>
    </div>
  </div>
</section>
```

- BEM: `.features`, `.features__grid`, `.feature__card`, `.feature__icon`, `.feature__title`, `.feature__description`
- Grid 3 colunas no desktop
- SVG inline (sem dependência externa)

### 7.4 Footer

```html
<footer class="footer" role="contentinfo">
  <div class="container footer__container">
    <a href="../../index.html" class="footer__back">← Voltar ao Showcase</a>
    <p class="footer__copyright">&copy; 2024 Projeto 13. Todos os direitos reservados.</p>
  </div>
</footer>
```

- `role="contentinfo"` para acessibilidade
- Link de volta com classe `.footer__back`
- Copyright com ano e nome do projeto

---

## 8. Animations

Nenhuma — sem GSAP, sem CSS transitions (além de hover underline), sem scroll-triggered effects.

### 8.1 Reduced Motion

Não se aplica — não há animações.

---

## 9. Responsive

### 9.1 Breakpoint 768px

| Element | Desktop (≥768px) | Mobile (<768px) |
|---|---|---|
| Nav list | Horizontal (`flex`) | Horizontal (`flex`) — sem hamburger |
| Features grid | `grid-template-columns: repeat(3, 1fr)` | Single column (stacked) |
| Hero title | `font-size: 2.5rem` | `font-size: 2rem` |
| Hero subtitle | `font-size: 1.125rem` | `font-size: 1rem` |
| Cards | Grid 3 colunas | Empilhados verticalmente |

### 9.2 Implicit Smaller Breakpoints

- Layout funciona via mobile-first: grid colapsa para coluna única abaixo de 768px
- Container padding `0 2rem` mantém respiro em telas pequenas

---

## 10. Assets

### 10.1 Images

Nenhuma — sem `preview.png`, sem pasta `assets/`, sem imagens.

### 10.2 Favicon

Nenhum.

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<nav>`, `<section>`, `<footer>` com `role="contentinfo"`
- **ARIA Labels** — `aria-label="Navegação principal"` no `<nav>`
- **Heading hierarchy** — h1 (hero) → h2 (features section) → h3 (card titles)
- **Focus states** — estilizados com `outline` nos links e botões
- **Viewport** — `viewport-fit=cover` para dispositivos com notch
- **Back link** — presente no footer para navegação de volta ao showcase
- **Language** — `lang="pt-BR"` no HTML

### Missing / Improvements Needed

- **Skip link** — não presente
- **Reduced motion** — não se aplica (sem animações)
- **Alt text** — não aplicável (sem imagens)
- **Dark mode** — não implementado (showcase tem toggle)
- **Mobile menu** — não há hamburger; navegação permanece visível em mobile

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| No external deps | Zero CDN, zero fonts, zero icons, zero JS carregados |
| Minimal CSS | Apenas `style.css` com custom properties e BEM |
| No JavaScript | Zero bytes de JS — sem parse, sem execução |
| Single CSS file | Apenas `style.css` |
| System font stack | Zero fontes externas carregadas |
| SVG inline | Ícones inline — sem requisições HTTP extras |

### Considerations

- Máximo desempenho possível — sem requests bloqueantes
- Perfeito para hospedagem estática e CDN
- Lighthouse score máximo esperado (100 em todas as categorias)

---

## 13. UX Principles

- **Zero JavaScript** — experiência funcional sem JS; navegação e interações via CSS puro
- **Clareza** — hierarquia visual clara com heading → subtitle → CTA
- **Simplicidade** — três cards de features diretos ao ponto
- **Consistência** — paleta azul monocromática, bordas suaves, padding uniforme
- **Responsivo** — layout adaptável sem perder informação ou funcionalidade
- **Navegação explícita** — links visíveis no nav sem dependência de hamburger

---

## 14. Observations

- **Sem JavaScript**: projeto intencionalmente sem JS — toda interação via CSS puro
- **Apenas dois arquivos**: `index.html` e `css/style.css` — mínimo absoluto
- **Sem `preview.png`**: precisa ser criado se o projeto for exibido na galeria
- **Sem favicon**: não há ícone de aba — o navegador mostra o padrão
- **Sem external resources**: zero dependências — diferencial em relação aos outros projetos do showcase que usam CDN (GSAP, Tailwind, Swiper, Lucide, Google Fonts)
- **BEM aplicado**: navegação, hero, features e footer seguem nomenclatura BEM
- **SVG inline**: ícones incorporados diretamente no HTML (sem Lucide, sem font icons)
- **Breakpoint único**: 768px — sem breakpoints adicionais
- **Footer back link presente**: `<a href="../../index.html">← Voltar ao Showcase</a>` já incluso (conforme convenção do AGENTS.md)
- **Não listado no showcase**: `data/projects.json` ainda não contém entry para `exemplo-13`

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (not yet present — needs to be added):
   ```json
   {
     "id": "13",
     "title": "PROJETO 13",
     "category": "template",
     "href": "projects/exemplo-13/index.html",
     "preview": "projects/exemplo-13/preview.png",
     "description": "Landing page minimalista em HTML + CSS puro, sem JavaScript e sem dependências externas.",
     "tags": ["HTML5", "CSS3"]
   }
   ```

2. Preview image at `projects/exemplo-13/preview.png` — **não existe ainda**, precisa ser criada se o projeto for exibido na galeria.

3. Footer link back (already present):
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve o projeto **Projeto 13** conforme implementado,
> documentado de forma que um desenvolvedor entenda a estrutura mínima
> e saiba como usá-lo como landing page base sem JavaScript.
