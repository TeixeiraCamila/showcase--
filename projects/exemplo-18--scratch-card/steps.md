# 🪜 Desenvolvimento Passo a Passo

# Etapa 1 — Estrutura Inicial

## Objetivo

Montar a base visual do projeto.

---

## O que fazer

Criar:

* container principal
* card da raspadinha
* área da frase escondida
* canvas acima da frase

---

## Conceitos estudados

* HTML semântico
* posicionamento com CSS
* z-index
* flexbox

---

## Resultado esperado

Você deve ter:

* um card centralizado
* uma frase escondida
* um bloco cinza cobrindo a frase

Visualmente:

```txt
┌──────────────┐
│   camada     │
│   raspável   │
├──────────────┤
│ frase oculta │
└──────────────┘
```

---

# Etapa 2 — Cursor de Moeda

## Objetivo

Substituir o cursor padrão por uma moeda.

---

## O que fazer

* esconder cursor padrão
* criar elemento da moeda
* fazer moeda seguir o mouse

---

## Conceitos estudados

* mousemove
* clientX/clientY
* translate
* position absolute
* pointer-events

---

## Resultado esperado

Ao mover o mouse:

* o cursor padrão desaparece
* a moeda acompanha o ponteiro suavemente

---

# Etapa 3 — Criar o Canvas

## Objetivo

Adicionar a camada raspável.

---

## O que fazer

* criar elemento canvas
* definir width/height
* desenhar camada cinza

---

## Conceitos estudados

* Canvas API
* getContext("2d")
* fillRect()

---

## Resultado esperado

A frase deve ficar completamente escondida por uma camada sólida.

---

# Etapa 4 — Sistema de Clique

## Objetivo

Detectar quando o usuário está raspando.

---

## O que fazer

Criar controle para:

* mouse pressionado
* mouse solto
* mouse saindo do card

---

## Conceitos estudados

* mousedown
* mouseup
* mouseleave

---

## Resultado esperado

O sistema deve saber exatamente quando o usuário está raspando.

---

# Etapa 5 — Sistema de Raspar

## Objetivo

Apagar partes do canvas.

---

## O que fazer

* criar brush circular
* apagar ao arrastar mouse
* revelar conteúdo abaixo

---

## Conceitos estudados

* globalCompositeOperation
* destination-out
* arc()
* fill()

---

## Resultado esperado

Ao clicar e arrastar:

* o overlay deve ser apagado
* a frase deve aparecer gradualmente

---

# Etapa 6 — Melhorar Precisão

## Objetivo

Resolver problemas de coordenadas.

---

## O que fazer

Calcular posição correta do mouse no canvas.

---

## Conceitos estudados

* getBoundingClientRect()
* offset
* escala de canvas

---

## Resultado esperado

O brush deve apagar exatamente onde o mouse estiver.

---

# Etapa 7 — Buscar Frase da API

## Objetivo

Adicionar conteúdo dinâmico.

---

## O que fazer

* criar arquivo api.js
* usar fetch
* buscar frase aleatória
* inserir no DOM

---

## Conceitos estudados

* fetch
* async/await
* tratamento de erro
* JSON

---

## Resultado esperado

Cada vez que carregar:

* uma frase nova aparece escondida

---

# Etapa 8 — Detectar Progresso

## Objetivo

Descobrir quanto foi raspado.

---

## O que fazer

* ler pixels do canvas
* calcular transparência
* definir porcentagem mínima

---

## Conceitos estudados

* getImageData()
* arrays de pixels
* RGBA

---

## Resultado esperado

Quando boa parte do card for raspada:

* considerar como concluído

---

# Etapa 9 — Estado Global

## Objetivo

Organizar comportamento do projeto.

---

## O que fazer

Criar objeto de estado:

```js
const state = {
  isDrawing: false,
  scratchedPercent: 0,
  isFinished: false,
};
```

---

## Conceitos estudados

* organização de estado
* separação de responsabilidades

---

## Resultado esperado

O projeto deve ficar mais previsível e fácil de manter.

---

# Etapa 10 — Reiniciar Jogo

## Objetivo

Permitir jogar novamente.

---

## O que fazer

* resetar canvas
* limpar estado
* buscar nova frase

---

## Conceitos estudados

* reutilização
* reset de estado
* re-render manual

---

## Resultado esperado

Botão de reiniciar funcionando completamente.

---

# Etapa 11 — Responsividade

## Objetivo

Adaptar para diferentes telas.

---

## O que fazer

* ajustar tamanhos
* adaptar canvas
* revisar cursor

---

## Conceitos estudados

* media queries
* resize
* canvas responsivo

---

## Resultado esperado

Projeto funcional em:

* desktop
* tablet
* mobile

---

# Etapa 12 — Extras

## Ideias futuras

### Sons

Adicionar som de raspagem.

---

### Mobile Touch

Adicionar:

* touchstart
* touchmove
* touchend

---

### Efeitos

Adicionar:

* brilho
* partículas
* confete
* animações

---

### Temas

Criar versões:

* cassino
* medieval
* cyberpunk
* retrô

---

# 🏁 Resultado Final

No final do projeto você terá aprendido:

* Canvas API
* renderização dinâmica
* eventos complexos
* arquitetura front-end
* manipulação avançada de DOM
* interatividade real usando JavaScript Vanilla
