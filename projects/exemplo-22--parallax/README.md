# Para Lazúra — Layers in Motion

Experimento de parallax com quatro camadas de imagem sobrepostas, animadas pelo
GSAP ScrollSmoother. Cada imagem viaja em uma velocidade própria ao rolar a página,
criando profundidade entre os planos.

## Stack

- HTML5 semântico
- CSS3 com custom properties (padrão BEM)
- JavaScript puro (ES6+)
- GSAP 3.15 via CDN: ScrollTrigger + ScrollSmoother
- Fontes Google: Space Grotesk (títulos) + Inter (corpo)

## Estrutura

```
exemplo-22--parallax/
├── css/
│   └── style.css        — estilos do projeto (BEM)
├── imgs/
│   ├── img_01.png       — camada 1 (primeiro plano, fica por cima)
│   ├── img_02.png       — camada 2
│   ├── img_03.png       — camada 3
│   └── img_04.png       — camada 4 (plano de fundo, fica por último)
├── js/
│   └── script.js        — configuração do ScrollSmoother e reveals
├── index.html           — entry point
└── README.md
```

## Como funciona

- `#smooth-wrapper` e `#smooth-content` são os contêineres exigidos pelo
  ScrollSmoother para suavizar o scroll da página inteira.
- O parallax começa no `.hero`, que possui `300vh` de altura e guarda o
  `.parallax`, uma **div absoluta** (`position: absolute; inset: 0`) com as
  quatro imagens.
- Cada `.parallax__img` é absoluta, com **mesma altura e largura**
  (`inset: 0; width: 100%; height: 100%`) e `object-fit: cover`.
- O efeito parallax vem de tweens `gsap.fromTo` com `scrub` — cada camada
  começa em `y: 0` (imagens paradas) e só se movimenta durante o scroll,
  percorrendo vamos: `(1 - speed) × 100vh`:

  | Camada            | classe                 | z-index | speed |
  |-------------------|------------------------|---------|-------|
  | img_01 (frente)   | `.parallax__img--front`| 4       | 1.6   |
  | img_02            | `.parallax__img--two`  | 3       | 1.3   |
  | img_03            | `.parallax__img--three`| 2       | 1.0   |
  | img_04 (fundo)    | `.parallax__img--back` | 1       | 0.7   |

  Quanto maior o `speed`, mais rápido a camada se move em relação ao scroll —
  assim a frente lidera o movimento e o fundo flutua.

- O `.hero__content` fica `position: sticky` em `100vh` por cima das camadas,
  mantendo o título visível enquanto o parallax acontece ao fundo.
- `data-reveal` nos blocos da seção `.outro` dispara um reveal animado
  (opacity + y) via `gsap.from` com ScrollTrigger.

## Como rodar

Sem build step — basta servir a raiz do showcase:

```bash
npx http-server
# Abra http://localhost:8000/projects/exemplo-22--parallax/
```

O projeto precisa ser servido via HTTP, não via `file://`, para o GSAP
carregar via CDN sem problemas.

## Notas de implementação

- `effects: true` é obrigatório no `ScrollSmoother.create()` para que o atributo
  `data-speed` seja aplicado.
- `smoothTouch: 0.1` garante suavidade residual em dispositivos touch.
- `ScrollTrigger.refresh()` no evento `load` recalcula as medidas após as
  imagens carregarem, evitando deslocamentos.
- Stacking: `img_01 → img_04` empilhadas nessa ordem, com `img_01` por cima.
- Empilhamento de z-index: `.parallax__img--front` (4) > `--two` (3) > `--three`
  (2) > `--back` (1).

## Convensões

- **BEM** para CSS: `.bloco__elemento--modificador`
- CSS: comentários de linha única
- JS: máximo 2 linhas por seção de comentário
- Mobile-first, semântica HTML e ARIA labels
- Conventional Commits: `feat`, `fix`, `refactor`, `redesign`, `style`, `docs`, `chore`