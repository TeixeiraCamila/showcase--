# Showcase Landing Pages

Galeria de landing pages modernas desenvolvidas com HTML5, CSS3 e JavaScript. Projetos com design responsivo, otimizações SEO e temas light/dark.

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![A11y](https://img.shields.io/badge/Accessibility-WCAG%20AA-blue)

## Projetos

| # | Nome | Descrição | Tech |
|---|------|-----------|------|
| 02 | Real State | Agência imobiliária | HTML5, CSS3, JS |
| 03 | Infinite Slider | Galeria infinita com GSAP | HTML5, CSS3, GSAP |
| 04 | Notely | E-commerce cadernos | Tailwind, GSAP |
| 05 | Catpuccino | Cafeteria retrô-moderna | HTML5, CSS3, JS |
| 06 | Grounded | Agência de viagens | Tailwind |
| 07 | Card Stacking | Animação de cartas | HTML5, CSS3, JS |
| 08 | Poster Maker | Gerador de pôsteres | HTML5, CSS3, JS |
| 09 | Resume Template | Currículo profissional | HTML5, CSS3, JS |
| 10 | Sign Up Bears | Página de cadastro | HTML5, CSS3, JS |
| 11 | JavaScript Quiz | Quiz interativo | HTML5, CSS3, JS |

## Estrutura

```
showcase/
├── index.html              # Página principal
├── favicon.svg            # Favicon
├── css/
│   ├── default.css       # Estilos comuns
│   ├── main.css          # Tema dark
│   ├── main2.css        # Tema cartoon
│   ├── main3.css        # Tema clean
│   └── variables-*.css  # Variáveis CSS por tema
├── js/
│   └── main.js          # Scripts globais
└── projects/           # Exemplos
    └── exemplo-*/
```

## Features

- **Dark/Light Mode** - Tema automático via `prefers-color-scheme` + manual
- **Custom Cursor** - Cursor personalizado em JS
- **Responsivo** - Mobile-first design
- **Acessível** - WCAG AA compliant
- **SEO** - Meta tags, Open Graph, JSON-LD

## Quick Start

```bash
# Servidor local
python -m http.server 8000

# Ou
npx http-server
```

Acesse: `http://localhost:8000`

## Customização

### Cores do Tema

Edite as variáveis em `css/default.css`:

```css
[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #f0f0f0;
}

[data-theme="light"] {
  --bg-primary: #f5f5f5;
  --text-primary: #1a1a1a;
}
```

### Alternar Tema

O tema é definido automaticamente. Para forçar um tema:

```javascript
localStorage.setItem('theme', 'dark');
document.documentElement.setAttribute('data-theme', 'dark');
```

## Tecnologias

- HTML5 Semântico
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript ES6+
- GSAP (alguns projetos)

## Autora

[Camila Teixeira](https://github.com/TeixeiraCamila)