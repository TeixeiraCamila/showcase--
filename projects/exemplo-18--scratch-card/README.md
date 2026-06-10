# 🎰 Scratch Fortune Card

Projeto em JavaScript Vanilla inspirado em raspadinhas digitais.

O usuário passa o mouse sobre um card e o cursor vira uma moeda.
Ao clicar e arrastar, a superfície do card é “raspada”, revelando uma frase aleatória de sorte escondida abaixo.

---

# 📌 Objetivo

Treinar conceitos avançados de JavaScript Vanilla criando uma experiência visual interativa usando Canvas API.

---

# 🧠 Conceitos Trabalhados

## JavaScript

* Manipulação de DOM
* Eventos do mouse
* Controle de estado
* Coordenadas
* Fetch API
* Async/Await
* Modularização
* Canvas API

## CSS

* Camadas
* Posicionamento absoluto
* Responsividade
* Cursor customizado
* Efeitos visuais

## Canvas

* Desenho
* Máscaras
* Transparência
* Brush circular
* Leitura de pixels

---

# 🎮 Funcionalidades

* Cursor vira moeda ao entrar no card
* Sistema de raspar usando canvas
* Revelação gradual do conteúdo
* Frases aleatórias vindas de API
* Reinício do jogo
* Responsividade
* Suporte futuro para mobile

---

# 🌐 API Recomendada

## Advice Slip API

API gratuita de frases aleatórias.

https://api.adviceslip.com/

---

# 📁 Estrutura do Projeto

```txt
scratch-card/
│
├── index.html
├── README.md
├── steps.md
│
├── assets/
│   ├── images/
│   │   └── coin.png
│   └── sounds/
│
├── styles/
│   ├── reset.css
│   └── main.css
│
├── js/
│   ├── main.js
│   ├── canvas.js
│   ├── cursor.js
│   ├── api.js
│   ├── state.js
│   └── utils.js
│
└── public/
```

---

# 🛠️ Tecnologias

## Principal

* HTML5
* CSS3
* JavaScript Vanilla

## Opcionais

### Sons

* Howler.js

### Animações

* GSAP
* Anime.js

### Confete

* canvas-confetti

---

# 🚀 Objetivos Técnicos

Esse projeto foi pensado para treinar:

* lógica visual
* renderização dinâmica
* manipulação de eventos
* arquitetura front-end
* organização de código
* interatividade sem frameworks

---

# 📚 O Que Esse Projeto Simula do Mercado

Mesmo sendo pequeno, esse projeto trabalha conceitos usados em:

* mini games web
* interfaces gamificadas
* landing pages interativas
* experiências promocionais
* renderização em canvas

---

# 🔥 Desafio Extra

Criar primeiro sem bibliotecas externas.

Depois:

* adicionar animações
* melhorar performance
* adicionar suporte touch
* adicionar sons
* criar temas diferentes

---

# 🏁 Resultado Esperado

O usuário:

1. entra na página
2. vê um card misterioso
3. passa o mouse
4. o cursor vira moeda
5. raspa o card
6. revela uma frase
7. pode jogar novamente
