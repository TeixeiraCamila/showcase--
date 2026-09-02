# Crunchy Meat — Burgers

Landing page conceitual de hamburgueria artesanal, com interação criativa: ao clicar em um CTA, um painel vermelho expande para tela cheia e "deconstrói" o hambúrguer, revelando cada camada com cards informativos.

**Stack:** HTML5 · CSS3 · JavaScript ES6+ · GSAP 3 (CDN) — sem build tools.

## Estrutura

```
exemplo-26--burger/
├── index.html          # Shell da página (hero, menu, overlay, dot/cards)
├── css/
│   └── style.css       # Estilos + animações via CSS transitions
├── js/
│   └── script.js       # Lógica: menu mobile, overlay e reveal das camadas
└── assets/
    ├── burger__1..4.png     # Camadas do hambúrguer (bun, cheese, meat, base)
    ├── ico.svg              # Favicon
    ├── logo__primary.svg    # Logo escura (fundo claro)
    └── logo__secundary.svg  # Logo clara (usada quando overlay cruza)
```

## Como rodar

Sivra a raiz do showcase:

```bash
npx http-server -p 8000
# Abra http://localhost:8000/projects/exemplo-26--burger/
```

## Funcionalidades

### Animações (GSAP)
- **Hero entrance:** título, descrição e preço entram com fade + slide no load; as 4 camadas do hambúrguer escalam com stagger.
- **Overlay expansion:** painel vermelho expande de 32% (mobile: 45%) para 100% da viewport.
- **Reveal das camadas:** as 4 imagens espalham-se verticalmente (offsets em rem) e então dots + cards aparecem com stagger.
- **Reversão completa:** cards/dots somem, camadas se reempilham e o painel volta ao tamanho original.

### Interações
- **Menu mobile:** painel lateral slide-in com overlay, fechável por botão X, clique no overlay, clique no link ou tecla `Escape`. Acessível (ARIA + lock de scroll).
- **Inversão de cor no header:** conforme o overlay cruza cada item de navegação, o texto fica branco (`.is-crossed`); o logo alterna entre a variante escura e clara.
- **Hambúrguer → X:** as 3 barras do botão transformam-se em X quando o menu abre (CSS transitions).
- **Hover links:** sublinhado animado expande sob o item de navegação.

## Responsividade

- `max-width: 900px`: esconde nav desktop + CTA, mostra hambúrguer, empilha info/imagens e ajusta posições dos dots/cards.
- `prefers-reduced-motion: reduce`: desativa animações/transições.

## Acessibilidade

- Semantic HTML (`header`, `nav`, `main`, `footer`).
- `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden` no menu.
- Suporte à tecla `Escape` e `prefers-reduced-motion`.
- Texto de contraste garantido por cores definidas em `--clr-*` no CSS.

## Notas de manutenção

- Toda a animação depende do GSAP carregado via CDN ao final do `<body>` (com `defer`).
- Os offsets de espalhamento das camadas estão em `js/script.js` (`spreadImages`) baseados em `rem` — ajuste junto com `--font` para escalar.
- A cor/já animação do overlay usa `--clr-red-bg`, `--ease` e `--ease-smooth` definidos em `:root` no CSS.
