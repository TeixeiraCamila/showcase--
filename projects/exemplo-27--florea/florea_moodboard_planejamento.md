# FLOREA --- Moodboard e Planejamento do Projeto

> **Tipo de projeto:** Landing Page / Catálogo Floral\
> **Tecnologias:** HTML5, CSS3 e JavaScript\
> **Estilo:** Editorial, minimalista, floral e contemporâneo\
> **Bibliotecas:** GSAP, ScrollTrigger, Lenis, SplitType, Swiper e
> Lucide Icons

------------------------------------------------------------------------

# 1. Visão geral

## Nome

# FLOREA

### Tagline

**Sentimentos em forma de flores.**

## Conceito

**Florea** é um site de catálogo floral com uma estética editorial,
minimalista e delicada.

A proposta visual combina:

-   Fotografias florais expressivas
-   Layout limpo
-   Tipografia moderna e espaçada
-   Cores neutras
-   Flores como principal fonte de cor
-   Bastante espaço em branco
-   Animações suaves
-   Microinterações discretas

A referência principal é uma interface que parece uma mistura entre:

-   Floricultura moderna
-   Revista editorial
-   Catálogo de arte
-   Loja premium minimalista

------------------------------------------------------------------------

# 2. Palavras-chave

-   Floral
-   Editorial
-   Minimalismo
-   Soft UI
-   Natureza
-   Elegância
-   Catálogo
-   Orgânico
-   Delicado
-   Artesanal
-   Contemporâneo
-   Pastel
-   Fotografia
-   Sensível

------------------------------------------------------------------------

# 3. Direção visual

## Estilo geral

A interface deve ser predominantemente clara e minimalista.

### Características

-   Fundo off-white
-   Textos em preto suave
-   Fotografias grandes
-   Bordas arredondadas
-   Poucos elementos decorativos
-   Linhas finas
-   Grid organizado
-   Espaçamento generoso
-   Tipografia elegante
-   Cores suaves
-   Movimento orgânico

## Regra principal

**As flores devem ser o principal elemento visual do projeto.**

A interface não deve competir com as imagens.

------------------------------------------------------------------------

# 4. Moodboard de imagens

## 4.1 Hero

### Pesquisar

``` text
close up pastel flowers blue sky
```

### Características

-   Flores grandes
-   Close-up
-   Céu azul
-   Tons pêssego
-   Rosa claro
-   Luz natural
-   Perspectiva de baixo para cima

------------------------------------------------------------------------

## 4.2 Buquês

### Pesquisar

``` text
flower bouquet studio photography
```

Outras pesquisas:

``` text
pastel flower bouquet aesthetic
minimal flower bouquet photography
editorial flower bouquet
```

### Características

-   Fundo neutro
-   Iluminação suave
-   Flores coloridas
-   Buquês artesanais
-   Composição orgânica

------------------------------------------------------------------------

## 4.3 Mãos segurando flores

### Pesquisar

``` text
hands holding flower bouquet photography
```

Alternativas:

``` text
editorial flower photography hands bouquet
flower bouquet hands aesthetic photography
```

### Objetivo

Criar uma sensação mais humana e artesanal.

------------------------------------------------------------------------

## 4.4 Flores individuais

### Pesquisar

``` text
minimal flower photography neutral background
```

Alternativas:

``` text
single flower editorial photography
pastel flower close up
```

------------------------------------------------------------------------

## 4.5 Galeria editorial

### Pesquisar

``` text
editorial flower photography
```

Alternativas:

``` text
modern floral photography
artistic flower photography
minimal botanical photography
```

------------------------------------------------------------------------

## 4.6 Fundo decorativo

### Pesquisar

``` text
blurred flowers macro photography
```

Alternativas:

``` text
pastel flower blur background
flower bokeh background
```

### Uso

Essas imagens podem ser usadas:

-   No fundo do site
-   Como background do Hero
-   Em banners
-   Com `filter: blur()`
-   Com baixa opacidade

------------------------------------------------------------------------

# 5. Paleta de cores

A paleta deve ser neutra na interface e colorida nas imagens.

## Cores base

``` css
:root {
    --background_color: #F3F2EE;
    --surface_color: #E9E8E4;

    --text_primary_color: #252525;
    --text_secondary_color: #656565;

    --border_color: #C9C8C3;
}
```

## Cores florais

``` css
:root {
    --rose_color: #D99A9A;
    --peach_color: #E9AD8F;
    --cream_color: #F4E4D2;

    --soft_green_color: #9AA88D;
    --leaf_color: #66755E;

    --sky_color: #A9C5CF;
    --yellow_color: #D8B65D;
}
```

## Cor de destaque

``` css
:root {
    --accent_color: #B76E6E;
}
```

------------------------------------------------------------------------

# 6. Paleta resumida

  Nome          Cor
  ------------- -----------
  Off White     `#F3F2EE`
  Surface       `#E9E8E4`
  Preto suave   `#252525`
  Cinza         `#656565`
  Rosa          `#D99A9A`
  Pêssego       `#E9AD8F`
  Creme         `#F4E4D2`
  Verde suave   `#9AA88D`
  Verde folha   `#66755E`
  Azul céu      `#A9C5CF`
  Amarelo       `#D8B65D`

------------------------------------------------------------------------

# 7. Tipografia

## Combinação principal

### Títulos

# DM Sans

Características:

-   Moderna
-   Minimalista
-   Elegante
-   Boa para títulos grandes
-   Funciona bem em caixa alta

### Textos

# Inter

Usar para:

-   Descrições
-   Navegação
-   Preços
-   Botões
-   Informações dos produtos

------------------------------------------------------------------------

# 8. Hierarquia tipográfica

``` css
:root {
    --font_heading: "DM Sans", sans-serif;
    --font_body: "Inter", sans-serif;
}
```

## Hero

``` css
.hero_title {
    font-size: clamp(42px, 6vw, 96px);
    font-weight: 300;
    letter-spacing: 0.04em;
    line-height: 0.95;
}
```

## Títulos de sections

``` css
.section_title {
    font-size: clamp(28px, 4vw, 52px);
    font-weight: 400;
}
```

## Texto padrão

``` css
body {
    font-size: 16px;
    line-height: 1.6;
}
```

------------------------------------------------------------------------

# 9. Estrutura do projeto

``` text
florea/
│
├── index.html
│
├── assets/
│   │
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── gallery/
│   │   └── background/
│   │
│   └── icons/
│
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── header.css
│   ├── hero.css
│   ├── categories.css
│   ├── catalog.css
│   ├── services.css
│   ├── gallery.css
│   ├── testimonials.css
│   ├── newsletter.css
│   ├── footer.css
│   └── responsive.css
│
└── js/
    ├── main.js
    ├── navigation.js
    ├── catalog.js
    ├── filters.js
    ├── animations.js
    └── data.js
```

------------------------------------------------------------------------

# 10. Estrutura das sections

``` text
Home
│
├── Header
│
├── Hero
│
├── Categories
│
├── Catalog
│   ├── Filters
│   └── Product Cards
│
├── Editorial Banner
│
├── Services
│
├── Gallery
│
├── Testimonials
│
├── Newsletter
│
└── Footer
```

------------------------------------------------------------------------

# 11. Header

## Elementos

-   Logo
-   Catálogo
-   Sobre
-   Instagram
-   WhatsApp
-   Carrinho
-   Menu mobile

## Estrutura

``` text
LOGO                         MENU

                    Catálogo
                    Sobre
                    Instagram
                    WhatsApp
```

## Comportamento

Ao carregar:

-   Transparente ou integrado ao Hero

Ao realizar scroll:

-   Fundo claro
-   Leve sombra ou borda inferior
-   Menu permanece visível

------------------------------------------------------------------------

# 12. Hero

## Objetivo

Criar impacto visual imediato.

## Conteúdo

``` text
FLORES PARA
CADA MOMENTO

Buquês criados para transformar
sentimentos em memórias.

[ EXPLORAR CATÁLOGO ]
```

## Layout

``` text
┌─────────────────────────────────┐
│ LOGO                      MENU  │
│                                 │
│ FLORES PARA                     │
│ CADA MOMENTO                    │
│                                 │
│ descrição                       │
│                                 │
│ [ Explorar catálogo ]           │
│                                 │
│                    FLORES       │
│                    IMAGEM       │
└─────────────────────────────────┘
```

## Elementos visuais

-   Título grande
-   Imagem floral
-   CTA
-   Navegação minimalista

------------------------------------------------------------------------

# 13. Categorias

## Categorias

-   Todos
-   Buquês
-   Presentes
-   Casamentos
-   Flores secas
-   Plantas
-   Assinaturas

## Layout

``` text
┌──────────────┐  ┌──────────────┐
│              │  │              │
│    IMAGEM    │  │    IMAGEM    │
│              │  │              │
│    BUQUÊS    │  │   PRESENTES  │
└──────────────┘  └──────────────┘
```

## Interação

Ao clicar em uma categoria:

1.  Atualizar categoria ativa
2.  Filtrar produtos
3.  Animar saída dos cards antigos
4.  Animar entrada dos novos cards

------------------------------------------------------------------------

# 14. Catálogo

## Objetivo

Exibir os principais produtos.

## Filtros

``` text
TODOS

BUQUÊS

PRESENTES

CASAMENTOS

FLORES SECAS

PLANTAS
```

## Layout desktop

``` text
[ Card ] [ Card ] [ Card ] [ Card ]

[ Card ] [ Card ] [ Card ] [ Card ]
```

## Layout tablet

``` text
[ Card ] [ Card ]

[ Card ] [ Card ]
```

## Layout mobile

``` text
[ Card ]

[ Card ]

[ Card ]
```

------------------------------------------------------------------------

# 15. Product Card

## Estrutura

``` text
┌───────────────────────┐
│                       │
│                       │
│        IMAGEM         │
│                       │
│                       │
├───────────────────────┤
│ Primavera             │
│ Buquê de flores       │
│                       │
│ R$ 120,00             │
│                       │
│ [ ADICIONAR ]     ♡   │
└───────────────────────┘
```

## Informações

Cada card deve ter:

-   Imagem
-   Nome
-   Descrição curta
-   Categoria
-   Preço
-   Botão
-   Favorito

------------------------------------------------------------------------

# 16. Dados dos produtos

Usar JavaScript para armazenar os produtos.

Exemplo:

``` javascript
const products = [
    {
        id: 1,
        name: "Primavera",
        description: "Buquê com flores da estação.",
        category: "buques",
        price: 120,
        image: "./assets/images/products/product_01.jpg"
    }
];
```

## Vantagem

Permite:

-   Criar cards dinamicamente
-   Filtrar produtos
-   Facilitar manutenção
-   Evitar repetição de HTML

------------------------------------------------------------------------

# 17. Banner editorial

## Objetivo

Criar uma pausa visual entre o catálogo e as próximas sections.

## Texto

``` text
AS FLORES DIZEM
O QUE ÀS VEZES
NÃO CONSEGUIMOS.

[ CONHEÇA NOSSA HISTÓRIA ]
```

## Visual

-   Foto grande
-   Texto sobreposto ou ao lado
-   Muito espaço
-   Tipografia grande
-   Estética de revista

------------------------------------------------------------------------

# 18. Serviços adicionais

## Título

# UM PRESENTE AINDA MAIS ESPECIAL

## Serviços

### Cartão personalizado

Mensagem personalizada para acompanhar o buquê.

### Presente especial

Adicionar chocolates ou doces.

### Aromatização

Aroma floral aplicado ao presente.

### Entrega surpresa

A pessoa recebe o presente sem saber quem enviou.

### Assinatura floral

Flores entregues semanalmente ou mensalmente.

### Entrega expressa

Entrega no mesmo dia.

------------------------------------------------------------------------

# 19. Layout dos serviços

``` text
SERVIÇO                    DESCRIÇÃO               PREÇO

CARTÃO PERSONALIZADO       Mensagem especial       R$ 15

PRESENTE ESPECIAL          Chocolates e doces      R$ 25

AROMATIZAÇÃO               Aroma floral            R$ 15

ENTREGA SURPRESA           Remetente anônimo       R$ 20

ASSINATURA                 Entregas recorrentes    R$ ...

ENTREGA EXPRESSA           Mesmo dia               R$ ...
```

## Estilo

-   Linhas horizontais
-   Design editorial
-   Layout minimalista
-   Sem cards pesados

------------------------------------------------------------------------

# 20. Galeria

## Objetivo

Mostrar a identidade visual da marca.

## Layout

Utilizar um grid irregular.

``` text
┌─────────────┐ ┌──────┐
│             │ │      │
│   IMAGEM    │ │ IMG  │
│             │ └──────┘
└─────────────┘

┌──────┐ ┌─────────────┐
│ IMG  │ │             │
└──────┘ │   IMAGEM    │
         │             │
         └─────────────┘
```

## Conteúdo

-   Buquês
-   Flores individuais
-   Pessoas segurando flores
-   Bastidores
-   Montagem de arranjos
-   Detalhes das flores

------------------------------------------------------------------------

# 21. Depoimentos

## Estrutura

``` text
“Foi o presente mais bonito
que já recebi.”

— Mariana S.
```

## Sugestão

Criar um slider horizontal.

Cada depoimento deve conter:

-   Texto
-   Nome
-   Cidade opcional

------------------------------------------------------------------------

# 22. Newsletter

## Título

``` text
FLORES PARA
A SUA CAIXA DE ENTRADA
```

## Conteúdo

``` text
Novidades, coleções e histórias.

[ seu@email.com ]

[ ASSINAR ]
```

## Objetivo

Encerrar o conteúdo principal com uma section simples.

------------------------------------------------------------------------

# 23. Footer

## Conteúdo

### Marca

``` text
FLOREA

Sentimentos em forma de flores.
```

### Navegação

-   Início
-   Catálogo
-   Sobre
-   Serviços

### Redes

-   Instagram
-   WhatsApp
-   Pinterest

### Informações

-   Política de privacidade
-   Termos
-   Copyright

------------------------------------------------------------------------

# 24. Animações

## Princípio

As animações devem ser:

-   Lentas
-   Suaves
-   Discretas
-   Orgânicas

## Evitar

-   Movimentos muito rápidos
-   Bounce exagerado
-   Rotação excessiva
-   Muitos elementos animando ao mesmo tempo

------------------------------------------------------------------------

# 25. GSAP

## Biblioteca principal

GSAP será usada para:

-   Entrada do Hero
-   Scroll animations
-   Parallax
-   Stagger
-   Transições
-   Animações de texto

Site:

https://gsap.com/

------------------------------------------------------------------------

# 26. Animação do Hero

## Sequência

``` text
TÍTULO
   ↓
fade + translateY

DESCRIÇÃO
   ↓
fade + translateY

BOTÃO
   ↓
fade

IMAGEM
   ↓
scale suave
```

## Exemplo

``` javascript
const timeline = gsap.timeline();

timeline
    .from(".hero_title", {
        y: 40,
        opacity: 0,
        duration: 1
    })
    .from(".hero_description", {
        y: 20,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")
    .from(".hero_button", {
        y: 10,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")
    .from(".hero_image", {
        scale: 1.08,
        opacity: 0,
        duration: 1.5
    }, "-=0.8");
```

------------------------------------------------------------------------

# 27. ScrollTrigger

## Uso

Animar sections quando entram na tela.

Exemplo:

``` javascript
gsap.from(".section", {
    scrollTrigger: {
        trigger: ".section",
        start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8
});
```

## Aplicações

-   Categorias
-   Catálogo
-   Serviços
-   Galeria
-   Newsletter

------------------------------------------------------------------------

# 28. Animação dos cards

## Efeito

``` text
CARD 01
    ↓

CARD 02
    ↓

CARD 03
    ↓

CARD 04
```

## Exemplo

``` javascript
gsap.from(".product_card", {
    scrollTrigger: {
        trigger: ".catalog"
    },
    y: 50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7
});
```

------------------------------------------------------------------------

# 29. Hover dos cards

Não é necessário usar GSAP.

CSS é suficiente.

## Efeito

``` text
NORMAL

      ↓

HOVER

imagem aumenta levemente
```

## Exemplo

``` css
.product_image {
    transition: transform 0.6s ease;
}

.product_card:hover .product_image {
    transform: scale(1.05);
}
```

------------------------------------------------------------------------

# 30. Parallax

Usar principalmente no Hero.

## Ideia

``` text
SCROLL

FLORES
  ↕
movimento lento

TEXTO
  ↕
movimento menor
```

## Aplicação

-   Imagens do Hero
-   Backgrounds
-   Flores decorativas

------------------------------------------------------------------------

# 31. Animação de texto

## Texto

``` text
AS FLORES DIZEM
O QUE NÃO CONSEGUIMOS
```

## Ideia

As palavras aparecem gradualmente.

``` text
AS FLORES

DIZEM

O QUE

NÃO CONSEGUIMOS
```

Para isso, utilizar:

-   GSAP
-   SplitType

------------------------------------------------------------------------

# 32. Filtro de categorias

## Fluxo

``` text
USUÁRIO CLICA

        ↓

categoria muda

        ↓

cards atuais saem

        ↓

produtos são filtrados

        ↓

novos cards aparecem
```

## JavaScript

A lógica pode ser feita com:

``` javascript
Array.prototype.filter()
```

Exemplo:

``` javascript
const filteredProducts = products.filter((product) => {
    return product.category === selectedCategory;
});
```

------------------------------------------------------------------------

# 33. Animação de filtros

## Sugestão

Ao trocar de categoria:

1.  Fade out dos cards
2.  Atualizar conteúdo
3.  Fade in dos novos cards

Pode ser feita com:

-   GSAP
-   CSS transitions

------------------------------------------------------------------------

# 34. Microinterações

## Botões

### Normal

``` text
EXPLORAR →
```

### Hover

``` text
EXPLORAR → →
```

Alternativa:

Uma linha horizontal cresce.

------------------------------------------------------------------------

# 35. Favoritos

## Normal

``` text
♡
```

## Ativo

``` text
♥
```

## Animação

-   Scale
-   Pequeno fade
-   Transição rápida

------------------------------------------------------------------------

# 36. Links do menu

## Efeito

``` text
CATÁLOGO
─────────
```

A linha aparece ou cresce da esquerda para a direita.

Exemplo:

``` css
.navigation_link::after {
    content: "";
    width: 0;
    height: 1px;
    transition: width 0.3s ease;
}

.navigation_link:hover::after {
    width: 100%;
}
```

------------------------------------------------------------------------

# 37. Smooth Scroll

## Biblioteca

Lenis.

Site:

https://lenis.darkroom.engineering/

## Uso

Criar uma experiência de scroll mais suave.

### Importante

Lenis deve ser integrado corretamente com GSAP ScrollTrigger.

------------------------------------------------------------------------

# 38. SplitType

## Biblioteca

SplitType.

Repositório:

https://github.com/lukePeavey/SplitType

## Uso

Dividir textos em:

-   Caracteres
-   Palavras
-   Linhas

Ideal para:

-   Hero
-   Banner editorial
-   Títulos grandes

------------------------------------------------------------------------

# 39. Swiper

## Biblioteca

Swiper.

Site:

https://swiperjs.com/

## Uso

-   Depoimentos
-   Galeria
-   Produtos no mobile

------------------------------------------------------------------------

# 40. Lucide Icons

## Biblioteca

Lucide Icons.

Site:

https://lucide.dev/

## Ícones recomendados

-   Menu
-   X
-   Heart
-   Shopping Bag
-   Arrow Right
-   Arrow Left
-   Instagram
-   Message Circle

------------------------------------------------------------------------

# 41. Bibliotecas finais

## Essenciais

### GSAP

Animações.

``` text
GSAP
├── ScrollTrigger
```

### Lenis

Smooth scroll.

### SplitType

Animações de texto.

### Lucide

Ícones.

## Opcional

### Swiper

Slider para:

-   Depoimentos
-   Galeria mobile

------------------------------------------------------------------------

# 42. Stack final

``` text
HTML5
│
├── Estrutura
├── Semântica
└── Acessibilidade

CSS3
│
├── Layout
├── Grid
├── Flexbox
├── Responsividade
├── Variáveis
└── Microinterações

JavaScript
│
├── Renderização dos produtos
├── Filtros
├── Navegação
├── Eventos
└── Manipulação do DOM

Bibliotecas
│
├── GSAP
│   └── ScrollTrigger
│
├── Lenis
│
├── SplitType
│
├── Lucide
│
└── Swiper (opcional)
```

------------------------------------------------------------------------

# 43. Funcionalidades em JavaScript

## Catálogo

-   Renderizar produtos
-   Filtrar categorias
-   Atualizar produtos

## Favoritos

-   Adicionar aos favoritos
-   Remover dos favoritos
-   Salvar no `localStorage`

## Carrinho

Opcional.

-   Adicionar produto
-   Remover produto
-   Alterar quantidade
-   Atualizar total

## Newsletter

-   Validar e-mail
-   Exibir feedback

## Navegação

-   Menu mobile
-   Scroll suave
-   Links internos

------------------------------------------------------------------------

# 44. LocalStorage

## Usos recomendados

### Favoritos

``` javascript
localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
);
```

### Carrinho

``` javascript
localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
```

------------------------------------------------------------------------

# 45. Responsividade

## Mobile

Prioridade para:

-   Uma coluna
-   Menu hamburger
-   Botões maiores
-   Grid simples
-   Textos menores

## Tablet

``` text
[ Card ] [ Card ]
```

## Desktop

``` text
[ Card ] [ Card ] [ Card ] [ Card ]
```

------------------------------------------------------------------------

# 46. Breakpoints sugeridos

``` css
/* Mobile first */

/* Tablet */
@media (min-width: 768px) {
}

/* Desktop */
@media (min-width: 1024px) {
}

/* Desktop grande */
@media (min-width: 1440px) {
}
```

------------------------------------------------------------------------

# 47. Acessibilidade

## Imagens

Sempre utilizar `alt`.

``` html
<img
    src="./assets/images/product.jpg"
    alt="Buquê de flores rosas e brancas"
>
```

## Botões

Utilizar textos claros.

Evitar:

``` text
Clique aqui
```

Preferir:

``` text
Explorar catálogo
```

## Ícones

Utilizar:

``` html
aria-label
```

Exemplo:

``` html
<button aria-label="Adicionar aos favoritos">
</button>
```

------------------------------------------------------------------------

# 48. HTML semântico

Utilizar:

``` html
<header>
<nav>
<main>
<section>
<article>
<button>
<footer>
```

Estrutura:

``` html
<body>

    <header>
    </header>

    <main>

        <section class="hero">
        </section>

        <section class="categories">
        </section>

        <section class="catalog">
        </section>

        <section class="services">
        </section>

    </main>

    <footer>
    </footer>

</body>
```

------------------------------------------------------------------------

# 49. Estrutura HTML recomendada

``` html
<header class="header">
</header>

<main>

    <section class="hero">
    </section>

    <section class="categories">
    </section>

    <section class="catalog">
    </section>

    <section class="editorial_banner">
    </section>

    <section class="services">
    </section>

    <section class="gallery">
    </section>

    <section class="testimonials">
    </section>

    <section class="newsletter">
    </section>

</main>

<footer class="footer">
</footer>
```

------------------------------------------------------------------------

# 50. CSS --- Organização

## Arquivos

``` text
css/
│
├── reset.css
├── variables.css
├── global.css
├── header.css
├── hero.css
├── categories.css
├── catalog.css
├── services.css
├── gallery.css
├── testimonials.css
├── newsletter.css
├── footer.css
└── responsive.css
```

------------------------------------------------------------------------

# 51. JavaScript --- Organização

``` text
js/
│
├── data.js
├── catalog.js
├── filters.js
├── navigation.js
├── animations.js
└── main.js
```

## Responsabilidade

### `data.js`

Dados dos produtos.

### `catalog.js`

Renderização dos cards.

### `filters.js`

Filtros das categorias.

### `navigation.js`

Menu e navegação.

### `animations.js`

GSAP e ScrollTrigger.

### `main.js`

Inicialização geral.

------------------------------------------------------------------------

# 52. Fluxo do JavaScript

``` text
Página carrega

      ↓

Inicializar bibliotecas

      ↓

Renderizar produtos

      ↓

Inicializar filtros

      ↓

Inicializar navegação

      ↓

Inicializar animações
```

------------------------------------------------------------------------

# 53. Layout final

``` text
╔══════════════════════════════════╗
║             HEADER               ║
╠══════════════════════════════════╣
║                                  ║
║              HERO                ║
║       TEXTO + FLORES             ║
║                                  ║
╠══════════════════════════════════╣
║                                  ║
║           CATEGORIAS             ║
║                                  ║
╠══════════════════════════════════╣
║                                  ║
║            CATÁLOGO              ║
║                                  ║
║       [ CARDS DE FLORES ]        ║
║                                  ║
╠══════════════════════════════════╣
║                                  ║
║        BANNER EDITORIAL          ║
║                                  ║
╠══════════════════════════════════╣
║                                  ║
║            SERVIÇOS              ║
║                                  ║
╠══════════════════════════════════╣
║                                  ║
║             GALERIA              ║
║                                  ║
╠══════════════════════════════════╣
║                                  ║
║          DEPOIMENTOS             ║
║                                  ║
╠══════════════════════════════════╣
║                                  ║
║           NEWSLETTER             ║
║                                  ║
╠══════════════════════════════════╣
║             FOOTER               ║
╚══════════════════════════════════╝
```

------------------------------------------------------------------------

# 54. Prioridade de desenvolvimento

## Etapa 1 --- Estrutura

-   Criar HTML
-   Criar sections
-   Criar estrutura semântica

## Etapa 2 --- Design

-   Variáveis CSS
-   Tipografia
-   Cores
-   Layout
-   Responsividade

## Etapa 3 --- Catálogo

-   Criar dados dos produtos
-   Renderizar cards
-   Criar filtros

## Etapa 4 --- Interações

-   Menu mobile
-   Favoritos
-   Newsletter
-   Scroll

## Etapa 5 --- Animações

-   GSAP
-   ScrollTrigger
-   Parallax
-   Text animations

## Etapa 6 --- Refinamento

-   Responsividade
-   Acessibilidade
-   Performance
-   Ajustes visuais

------------------------------------------------------------------------

# 55. Checklist final

## Design

-   [ ] Paleta definida
-   [ ] Tipografia definida
-   [ ] Imagens selecionadas
-   [ ] Espaçamentos consistentes
-   [ ] Responsividade

## HTML

-   [ ] HTML semântico
-   [ ] `alt` nas imagens
-   [ ] `aria-label` nos botões com ícones
-   [ ] Hierarquia correta de headings

## CSS

-   [ ] Variáveis CSS
-   [ ] Mobile first
-   [ ] Grid
-   [ ] Flexbox
-   [ ] Transições
-   [ ] Responsividade

## JavaScript

-   [ ] Renderização dos produtos
-   [ ] Filtros
-   [ ] Menu
-   [ ] Favoritos
-   [ ] LocalStorage
-   [ ] Validações

## Animações

-   [ ] Hero
-   [ ] ScrollTrigger
-   [ ] Cards
-   [ ] Banner editorial
-   [ ] Microinterações

------------------------------------------------------------------------

# 56. Resumo final

## FLOREA

**Um catálogo floral digital com estética editorial e minimalista.**

### Base visual

``` text
FOTOGRAFIA FLORAL
        +
DESIGN EDITORIAL
        +
MINIMALISMO
        +
ANIMAÇÕES ORGÂNICAS
```

### Tecnologias

``` text
HTML5 + CSS3 + JavaScript
```

### Bibliotecas

``` text
GSAP
ScrollTrigger
Lenis
SplitType
Lucide Icons
Swiper (opcional)
```

### Diferencial do projeto

O principal diferencial será a combinação entre:

-   Design visual forte
-   Fotografias florais
-   Layout editorial
-   Catálogo dinâmico com JavaScript
-   Filtros de produtos
-   Animações GSAP
-   Experiência suave de navegação

> **Objetivo final:** criar um projeto de portfólio visualmente
> marcante, com foco em HTML, CSS e JavaScript puro, demonstrando
> domínio de layout, responsividade, manipulação do DOM, organização de
> dados, interações e animações.
