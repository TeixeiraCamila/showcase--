# ROSIE — Landing page com scroll horizontal

Landing page de uma agência de conteúdo (do poster ao branding) que **scrolla
lateralmente** em vez de verticalmente.

## Stack

- HTML5 semântico
- CSS3 com custom properties (estética "Daisy" / zine-scrapbook)
- JavaScript puro + GSAP (ScrollTrigger) via CDN

## Interação

- **Desktop**: scroll vertical do mouse pinado (`ScrollTrigger.pin`) movendo as
  6 faixas com `translateX`; barra de progresso no topo.
- **Mobile**: swipe nativo (`overflow-x` + `scroll-snap`) sem GSAP.
- Fallback automático para scroll nativo quando o usuário prefere
  `prefers-reduced-motion` ou GSAP não carregou.
- Mensagem flutuante "scrolla pro lado" no canto inferior, sempre visível.

## Estrutura

```
css/style.css
css/cookie-banner.css
js/script.js
js/cookie-banner.js
assets/
index.html
```

## Faixas

1. Introdução (collage de cards sobrepostos)
2. Apresentação
3. Fit cultural
4. Exemplos
5. Depoimentos + contexto
6. Footer

[Voltar ao Showcase](../../index.html)