# Modelo — Blueprint & Design System

> Documento único que consolida o blueprint de produto e o sistema de design
> do projeto **Modelo**, template base para novos projetos do showcase.

---

## 1. Project Overview

### Project Name

```
Modelo
```

### Industry

```
Boilerplate / Template — Showcase starter project
```

### Tagline

```
Template base para novos projetos do showcase.
```

### Target Audience

```
Desenvolvedores que desejam criar um novo projeto no showcase a partir
de uma estrutura limpa e mínima.
```

### Main Goal

```
Serve como ponto de partida — estrutura HTML+CSS+JS vazia, pronta para
ser copiada e preenchida com o conteúdo de um novo projeto.
```

### Brand Voice

- **Neutra** — sem identidade visual definida; cores e fontes são genéricas
- **Mínima** — apenas o essencial para o navegador renderizar uma página válida
- **Funcional** — sem estilo, sem animação, sem personalidade (intencional)

---

## 2. Core Stack

| Layer | Technology |
|---|---|
| Markup | HTML5, landmarks semânticas (`<header>`, `<main>`, `<footer>`) |
| Styling | CSS3 reset mínimo + fonte do sistema |
| Behavior | Vanilla JavaScript ES6+ (IIFE, `"use strict"`) |

**No build tools, no CDN, no external dependencies** — serve via `python -m http.server 8000` or `npx http-server`.

---

## 3. Critical Files

| File | Role |
|---|---|
| `index.html` | Shell HTML: header vazio, main vazio, footer com back-link e copyright |
| `css/style.css` | Reset universal (margin/padding/box-sizing) + body defaults |
| `js/script.js` | IIFE com `DOMContentLoaded` listener vazio |
| `README.md` | Breve descrição do boilerplate e estrutura de pastas |

---

## 4. Visual Identity

### 4.1 Color Palette

Não há variáveis CSS — cores hardcoded no `style.css`.

| Token | Hex | Usage |
|---|---|---|
| Dark gray | `#1a1a1a` | Body text |
| Off-white | `#fafafa` | Page background |

**Nota**: Sem light/dark mode — tema fixo claro.

### 4.2 Typography

| Element | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| Body | `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif` | 400 (browser default) | 16px (browser default) | `1.6` |

Sem Google Fonts, sem import externo — apenas a pilha de fontes do sistema.

### 4.3 Buttons

Nenhum — não há botões no template.

### 4.4 Spacing & Layout Tokens

| Token | Value |
|---|---|
| Reset | `* { margin: 0; padding: 0; box-sizing: border-box }` |
| Body line-height | `1.6` |

Nenhum outro token de espaçamento definido.

### 4.5 Borders & Dividers

Nenhum.

### 4.6 Focus-Visible

Não estilizado — depende do padrão do navegador.

---

## 5. Page Structure

```
HEADER
  (vazio — sem conteúdo)

MAIN
  (vazio — sem conteúdo)

FOOTER
  Link: <a href="../../index.html">← Voltar ao Showcase</a>
  Copyright: "© 2024 Modelo. Todos os direitos reservados."
```

---

## 6. Real Content

### 6.1 Brand

| Field | Value |
|---|---|
| Name | Modelo |
| Title | Modelo |
| Year | 2024 |

### 6.2 Taglines (literal from HTML)

| Section | Text |
|---|---|
| Footer (link) | `← Voltar ao Showcase` |
| Footer (copyright) | `© 2024 Modelo. Todos os direitos reservados.` |

### 6.3 CTAs

| Label | Usage |
|---|---|
| `← Voltar ao Showcase` | Footer — link de volta à galeria |

### 6.4 Navigation

Nenhuma — não há `<nav>` no template.

### 6.5 Icons

Nenhum — sem Lucide, sem SVG, sem favicon.

---

## 7. Components

### 7.1 Header

```html
<header>

</header>
```

Completamente vazio — sem logo, sem nav, sem conteúdo. Serve apenas como landmark semântico.

### 7.2 Main

```html
<main>

</main>
```

Completamente vazio — sem seções, sem cards, sem conteúdo. Área destinada ao conteúdo do novo projeto.

### 7.3 Footer

```html
<footer role="contentinfo">
  <a href="../../index.html" class="back-button">← Voltar ao Showcase</a>
  <p>&copy; 2024 Modelo. Todos os direitos reservados.</p>
</footer>
```

- `role="contentinfo"` para acessibilidade
- Link de volta com classe `.back-button`
- Copyright com ano e nome do projeto

---

## 8. Animations

Nenhuma — sem GSAP, sem CSS transitions, sem scroll-triggered effects.

### 8.1 Reduced Motion

Não se aplica — não há animações.

---

## 9. Responsive

Nenhum breakpoint definido. O layout vazio não possui comportamento responsivo.

---

## 10. Assets

### 10.1 Images

Nenhuma — sem `preview.png`, sem pasta `assets/`, sem imagens.

### 10.2 Favicon

Nenhum.

---

## 11. Accessibility

### Implemented

- **Semantic HTML** — `<header>`, `<main>`, `<footer>` com `role="contentinfo"`
- **Viewport** — `viewport-fit=cover` para dispositivos com notch
- **Back link** — presente no footer para navegação de volta ao showcase

### Missing / Improvements Needed

- **Skip link** — não presente
- **Focus states** — não estilizados
- **Reduced motion** — não se aplica
- **Alt text** — não aplicável (sem imagens)
- **Heading hierarchy** — nenhum `<h1>`–`<h6>` presente
- **Dark mode** — não implementado (showcase tem toggle)
- **ARIA labels** — ausentes (exceto `role="contentinfo"` no footer)

---

## 12. Performance

### Optimizations

| Technique | Implementation |
|---|---|
| No external deps | Zero CDN, zero fonts, zero icons carregados |
| Minimal CSS | 12 linhas — reset + body defaults |
| Deferred JS | `<script defer>` |
| IIFE pattern | Sem poluição do escopo global |
| Single CSS file | Apenas `style.css` |

### Considerations

- Tão leve quanto possível — perfeito para copiar como ponto de partida
- Sem otimizações adicionais necessárias (não há assets para otimizar)

---

## 13. UX Principles

- **Blank Canvas** — estrutura propositalmente vazia para ser preenchida conforme necessidade
- **Mínimo Viável** — apenas o essencial para uma página HTML5 válida
- **Zero Opinionated** — sem cor, sem fonte, sem layout pré-definido
- **Pronto para Copiar** — basta duplicar a pasta e começar a desenvolver

---

## 14. Observations

- **Template intencionalmente vazio**: header e main não têm conteúdo — é um boilerplate, não um projeto finalizado
- **README.md existe**: contém descrição breve e estrutura de pastas
- **preview.png não existe**: projetos baseados neste template precisarão criar seu próprio preview
- **Sem favicon**: não há ícone de aba — o navegador mostra o padrão
- **Sem external resources**: zero dependências — diferencial em relação aos outros projetos do showcase que usam CDN (GSAP, Tailwind, Swiper, Lucide, Google Fonts)
- **BEM não aplicado**: sem classes de estilo (exceto `.back-button`)
- **Sem `.gitkeep`**: pasta `assets/` não existe — se criada vazia, precisaria de `.gitkeep`
- **Já listado no showcase**: `data/projects.json` contém entry `exemplo-01`
- **Footer back link presente**: `<a href="../../index.html">← Voltar ao Showcase</a>` já incluso (conforme convenção do AGENTS.md)

---

## 15. Adding This Project to the Showcase

Per `AGENTS.md` conventions:

1. Entry in `data/projects.json` (already present for `exemplo-01`):
   ```json
   {
     "id": "01",
     "title": "MODELO",
     "category": "template",
     "href": "projects/exemplo-01--modelo/index.html",
     "preview": "projects/exemplo-01--modelo/preview.png",
     "description": "Template base para novos projetos do showcase. Estrutura mínima com HTML5, CSS e JavaScript.",
     "tags": ["HTML5", "CSS3", "JAVASCRIPT"]
   }
   ```

2. Preview image at `projects/exemplo-01--modelo/preview.png` — **não existe ainda**, precisa ser criada se o projeto for exibido na galeria.

3. Footer link back (already present):
   ```html
   <a href="../../index.html">← Voltar ao Showcase</a>
   ```

---

> Este blueprint descreve o projeto **Modelo** conforme implementado,
> documentado de forma que um desenvolvedor entenda a estrutura mínima
> e saiba como usá-lo como ponto de partida para novos projetos.
