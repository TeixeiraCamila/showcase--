# Pixel Art Maker — Requisitos

Caso de estudo do showcase (projeto `exemplo-29--pixel-art`). Documento de requisitos dividido em: visão geral, requisitos básicos, funcionais, design, acessibilidade, responsividade, portugol das funções complexas, etapas do caso de estudo e passo a passo.

## 1. Visão geral

Ferramenta de **pixel art** no browser. O usuário define o tamanho do grid, escolhe uma cor e pinta célula por célula com clique ou arrastando o mouse/dedo. É um **caso de estudo didático**: construído em 3 fases (HTML, CSS, JS) com código vanilla, sem frameworks e sem build.

## 2. Requisitos básicos (resumo)

O app deve permitir:

- Definir um grid **quadrado** N×N (slider de 4 a 160, padrão 32)
- Enxergar o **quadriculado** (linhas de grade) delimitando cada célula
- Escolher uma cor e **pintar** células com clique ou arrasto contínuo
- **Apagar** células (modo erase ou botão direito), voltando à transparência
- **Limpar** o desenho e resetar o grid
- **Baixar o desenho (PNG)** sempre que uma ação for apagar o canvas — antes de limpar/descartar, perguntar se quer salvar
- Renderizar o grid em `<canvas>` (não DOM por célula)
- Tema claro/escuro conforme `prefers-color-scheme`

## 3. Stack e restrições

- HTML5 + CSS3 + JavaScript ES6+ **vanilla**
- Renderização do grid com **`<canvas>`** (não DOM por célula)
- Sem frameworks, sem build tools, sem `npm`
- Sem trackers/analytics
- Sem Python no projeto
- Tema claro/escuro via `prefers-color-scheme`

### 3.1 Por que `<canvas>` e não DOM (célula por `<div>`)

| Critério | `<canvas>` | DOM por célula |
|----------|------------|----------------|
| Performance em 160×160 (25.600 células) | Alto — 1 elemento, desenho bitmap | Baixo — 25.600 `<div>`s no DOM, reflow a cada pintura |
| Pintura/borracha | Retângulo `fillRect`/`clearRect` na coordenada → muito rápido | Manipula N `div`s; em grid grande vira custoso |
| Grid lines (borda das células) | CSS `repeating-linear-gradient` 1px a cada 15px fora do buffer | `border`/`box-shadow` via CSS |
| Hit-testing (celula sob o cursor) | Manual: `x = floor(offsetX / CELL)` | Nativo: `target` já é a célula (mas 25.600 listeners/eventos) |
| Complexidade de código | Mais código (desenho manual) | Simples no começo, explode com grids grandes |
| Trade-off | Escolhido: escala bem até 160, é a base do caso de estudo | Rejeitado: não escala, readibução DOM, casos de estudo perde o "como desenhar" |

**Decisão:** usar `<canvas>` (especificado na fase 03). Cada célula fica delimitada por linhas de grade em fio de **1px** (`repeating-linear-gradient` no CSS `background`, a cada 15px) — fora do buffer, o PNG não leva a grade; a célula sob o cursor é calculada por conta (5.1).

## 4. Requisitos funcionais

### 4.1 Grid

- **Grid quadrado** (N×N) controlado por um único `<input type="range">`
- Faixa do slider: **4 a 160**, padrão **32**; `<output>` mostra "32 × 32"
- **Mobile (≤ 559px)**: máximo reduzido para **24** (24 × 15px = 360px, cabe no celular sem scroll horizontal); valor inicial limitado a 24
- O `output` atualiza **ao vivo** durante o arraste (evento `input`)
- O slider **aplica o novo grid ao soltar** (evento `change`): se houver desenho, **abrir diálogo de descarte** (5.7) — o arraste contínuo apenas atualiza o label
- **Cada célula tem 15 × 15 CSS px** (independente do grid)
- **Canvas 1:1 sem DPR**: buffer = CSS px (`canvas.width = size × 15`), sem `devicePixelRatio`/`ctx.scale` — mais simples; célula de 15px já é legível (no grid 160 o buffer fica ~23 MB, aceitável)
- **Borda visível por célula**: linhas de grade em fio de **1px** a cada **15px** (`repeating-linear-gradient` no `background` do canvas) — o buffer guarda **só os pixels pintados** e as linhas ficam fora dele
- Células apagadas ficam **transparentes** — as linhas de grade aparecem por baixo (células pintadas cobrem a linha)

### 4.2 Pintura

- **Clique** pinta a célula sob o cursor
- **Arraste pinta de forma contínua**, com interpolação linear entre o último ponto e o atual (evita traço picotado)
- Suporte a **mouse e touch** via Pointer Events
- **Botão esquerdo** segue o modo ativo: `draw` pinta com a cor selecionada, `erase` apaga
- **Botão direito = apagar sempre**, também em **drag contínuo** (mesma interpolação do draw), independente do modo ativo; menu de contexto suprimido no canvas
- **Erase não pinta de branco**: remove a célula (transparente)

### 4.3 Cor

- Seletor de cor nativo `<input type="color">`
- Cor padrão: **preto** (`#000000`); um `<output>` mostra o hex atual
- **A paleta de cores do projeto é o tema visual (CSS) — NÃO é paleta de pintura**

### 4.4 Modos

- Botões **Paint / Erase** (modo ativo destacado via `is-active`)
- Modo erase: clicar/arrastar REMOVE a célula (transparente), não pinta de branco

### 4.5 Limpar

- Botão **Clear** apaga todo o desenho e recalcula a tela (grid volta ao padrão 32)
- Se houver desenho, abrir **diálogo único de descarte** (5.7) com 3 ações:
  - **Baixar e descartar** → download do PNG, depois limpa
  - **Só descartar** → limpa direto
  - **Cancelar** → nada acontece
- Se o canvas estiver vazio, limpa sem perguntar

### 4.6 Exportar / download (sem persistência)

- **Não há `localStorage`**: o desenho vive só em memória durante a sessão
- Todo fluxo que descarta o canvas (Clear ou trocar o grid) usa o **diálogo único de descarte** com a opção de **baixar o PNG antes**
- Download: `canvas.toDataURL("image/png")` → elemento `<a download="pixel-art.png">` → clique programático (sem navegação)
- **O PNG leva só os pixels**: as linhas de grade vivem no CSS `background`, fora do buffer, e não contaminam o arquivo; células vazias saem transparentes
- Textos do app: mensagens que prometem persistência (ex.: rodapé "F5 recarrega, seu desenho fica salvo") devem ser trocadas por aviso de baixar o PNG para não perder o desenho

## 5. Portugol (funções mais complexas)

### 5.1 Mapear coordenada do ponteiro → célula (`get_celula`)

Converte pixels do ponteiro em coordenadas de célula. Trava nos **dois** lados (pointer capture pode gerar `offsetX`/`offsetY` negativos fora do canvas) e usa a **constante** `TAMANHO_CELULA` em vez de número mágico.

```portugol
funcao get_celula(o evento):
    // pixels do ponteiro / tamanho fixo da célula (constante)
    x <- piso(o evento.offsetX / TAMANHO_CELULA)
    y <- piso(o evento.offsetY / TAMANHO_CELULA)

    // pointer capture passa da borda: clamp inferior E superior
    x <- maximo(0, minimo(x, tamanho_grid - 1))
    y <- maximo(0, minimo(y, tamanho_grid - 1))

    retorne { x, y }
```

### 5.2 Interpolação do traço (`desenhar_entre`)

Preenche o caminho entre a célula anterior e a atual para o arrasto não ficar picotado quando o ponteiro pula células.

```portugol
funcao desenhar_entre(celula_anterior, celula_atual):
    // quantos pixels a mais precisam ser preenchidos
    distancia <- maximo(
        |celula_atual.x - celula_anterior.x|,
        |celula_atual.y - celula_anterior.y|
    )

    se distancia = 0 entao:
        retorne  // mesma célula, nada a preencher

    // percorre de 0 a 1 interpolando X e Y linearmente
    para passo de 0 ate distancia faca:
        t <- passo / distancia          // proporção 0..1
        x <- arredonda(celula_anterior.x + (celula_atual.x - celula_anterior.x) * t)
        y <- arredonda(celula_anterior.y + (celula_atual.y - celula_anterior.y) * t)
        pintar_celula(x, y, apagar_forcado)
```

### 5.3 Pintar ou apagar célula (`pintar_celula`)

Centraliza draw/erase: modifica o modelo esparso **e** o canvas. O parâmetro `apagar_forcado` cobre o **botão direito**, que apaga mesmo em modo draw.

```portugol
funcao pintar_celula(x, y, apagar_forcado):
    chave <- concatena(x, ",", y)

    se (modo = ERASE) OU apagar_forcado:
        // remove do modelo: célula volta a ser transparente no canvas
        pixels.remova(chave)
        limpe_pixels_no_canvas(x, y)
    senao:
        // modelo esparso: guarda só células pintadas, "x,y" -> cor
        pixels[chave] <- cor_selecionada
        desenhe_pixels_no_canvas(x, y, cor_selecionada)
```

### 5.4 Arrasto contínuo (Pointer Events)

Controla o estado de desenho e chama a interpolação durante o drag. O botão apertado decide a ação: esquerdo segue o modo ativo, direito força apagar.

```portugol
ao pointerdown(o evento):
    // 0 = esquerdo (modo ativo), 2 = direito (apagar sempre)
    apagar_forcado <- (o evento.button = 2)
    canvas.define_captura_do_ponteiro(o evento.pointerId) // arrasto segue fora do canvas
    desenhando <- verdadeiro
    celula_anterior <- nulo
    pintar_celula_de(o evento, apagar_forcado)  // pinta/apaga a 1a célula do clique

ao pointermove(o evento):
    se desenhando = verdadeiro entao:
        celula_atual <- get_celula(o evento)

        se celula_anterior <> nulo:
            desenhar_entre(celula_anterior, celula_atual, apagar_forcado)  // evita traço picotado
        senao:
            pintar_celula(celula_atual.x, celula_atual.y, apagar_forcado)  // clique simples

        celula_anterior <- celula_atual

ao pointerup / pointerleave(o evento):
    desenhando <- falso
    celula_anterior <- nulo
```

### 5.5 Aplicar novo grid (`aplicar_grid`)

Roda quando o usuário solta o slider; com desenho, abre o diálogo único de descarte (5.7) que permite baixar antes.

```portugol
ao Input do_slider:      // durante o arraste (continuo)
    grid_output.valor <- slider.valor + " x " + slider.valor   // so atualiza o label

ao change do_slider:     // ao soltar
    se pixels.nao_vazio() entao:
        acao <- dialogo_descartar("Trocar o grid apaga seu desenho.")
        // acao: "baixar" | "descartar" | "cancelar"

        se acao = "cancelar" entao:
            slider.valor <- tamanho_grid  // reverte para o tamanho atual
            retorne

        se acao = "baixar" entao:
            baixar_canvas()               // download do PNG antes de descartar

    tamanho_grid <- slider.valor
    pixels <- novo_mapa_vazio()
    recalcular_canvas()  // redimensiona e limpa pixels; grade vem do CSS
```

### 5.6 Baixar o desenho (`baixar_canvas`)

Gera o PNG do canvas e dispara o download — saída limpa, pois a grade vive no CSS e não está no buffer.

```portugol
funcao baixar_canvas():
    // 1. converte o canvas em imagem PNG (data URL) — só os pixels, sem grade
    url <- canvas.para_data_url("image/png")

    // 2. cria um <a> temporário com download e clica nele
    link <- novo_elemento("a")
    link.href <- url
    link.download <- "pixel-art.png"
    link.clique_programatico()   // dispara o download sem navegar
```

### 5.7 Diálogo único de descarte (`dialogo_descartar` + `limpar`)

O `confirm()` nativo só tem 2 opções — o diálogo precisa de **3 botões**, então é um mini-modal in-page (vanilla). Mesma função serve para Clear e troca de grid.

```portugol
funcao dialogo_descartar(mensagem):
    // abre modal com 3 botões: "Baixar e descartar" | "Só descartar" | "Cancelar"
    // retorna "baixar" | "descartar" | "cancelar" conforme o botão apertado

funcao limpar():
    se pixels.nao_vazio() entao:
        acao <- dialogo_descartar("Limpar apaga todo o desenho.")

        se acao = "cancelar" entao:
            retorne  // nao limpa nada

        se acao = "baixar" entao:
            baixar_canvas()              // download do PNG atual

    slider.valor <- 32                  // volta ao padrão
    tamanho_grid <- 32
    pixels <- novo_mapa_vazio()           // esvazia o modelo em memória
    recalcular_canvas()                  // redimensiona e limpa; grade vem do CSS
```

## 6. Design (tokens de tema — paleta do projeto)

Ver arquivo `css/style.css` (`:root`, `:root[data-theme="dark"]` e variáveis `--pixel-*`).

## 7. Acessibilidade

- **Semântica**: `main`, `header`, `section`, `footer`
- **Labels pareadas** a inputs (`<label for>` e `id` correspondente)
- `aria-label` em controles sem texto visível (canvas, botões)
- `aria-live="polite"` em mensagens de status
- `role="img"` no canvas (interação é via ponteiro; **sem `tabindex`** — pintura por teclado está fora do escopo)
- Foco visível (`:focus-visible`) em botões e inputs
- Suportar `prefers-reduced-motion`

## 8. Responsividade (mobile-first)

Estratégia **MOBILE-FIRST**: o CSS base já é o layout mobile; telas maiores recebem media queries `min-width` — **nunca** o contrário.

- Base (mobile): controls em coluna/wrap, alvos tocáveis (≥ 44px), fonte legível sem zoom
- Tamanho do grid via `<input type="range">` **nativo do navegador** → slider tocável no mobile, sem precisar abrir teclado
- Canvas 32×32 com célula de 15px = **480px → maior que a maioria dos celulares (~375px)**:
  - `.pixel__frame` com scroll interno: o artboard rola **dentro do quadro**; a página NÃO tem overflow horizontal
- `@media (min-width: 560px)` deve apenas refinar espaçamento e largura máxima do frame
- Proibido: scroll horizontal na página; **`touch-action: none`** no canvas (não deixar o gesto do navegador roubar o drag)

## 9. Etapas do caso de estudo

| Fase | Tema | Entrega |
|------|------|---------|
| 01 | **HTML** | Estrutura semântica do app no `index.html` |
| 02 | **CSS** | Estilo/layout da página + paleta de tema + grade de células (linhas 1px/15px) via `background` do canvas |
| 03 | **JS** | Interação: pintura, interpolação, modos, grid, diálogo de descarte, download PNG + trocar textos que prometem persistência |

Cada fase é explicada em detalhe antes de avançar; o aluno analisa, o professor corrige e libera a próxima.

## 10. Passo a passo — como construir o projeto

Sequência simples para implementar do zero. Cada passo termina com o app **ainda abrindo e rodando** — teste a cada etapa antes de seguir.

### Fase 01 — HTML

1. **Crie os arquivos** dentro da pasta do projeto: `index.html`, `css/style.css`, `js/script.js` e `assets/favicon.svg`. No `index.html`, ligue o `style.css` no `<head>` e o `script.js` no fim do `<body>`.
2. **Monte o esqueleto semântico**: `<header>` com título e descrição; `<main>` com a área de controles (`<section aria-label="Tools">`), o quadro do canvas e o `<p id="app_status" aria-live="polite">`; `<footer>` com o link de voltar ao showcase.
3. **Adicione os controles**, cada um com `<label for>` pareado:
   - `input type="color"` (`#color_picker`, valor padrão `#000000`) + `<output id="color_value">`;
   - `input type="range"` (`#grid_size`, `min="4"` `max="160"` `value="32"`) + `<output id="grid_size_value">`;
   - botões `#btn_paint`, `#btn_erase` e `#btn_clear`.
4. **Crie o canvas**: `#pixel_canvas`, `width="480"` `height="480"` (32 × 32 células × 15px), com `aria-label` e `role="img"` (sem `tabindex`).
5. **Teste**: abra a página — a estrutura aparece sem erro, o slider mostra "32 × 32" no output.

### Fase 02 — CSS

6. **Defina os tokens de tema** em `:root` (variáveis `--pixel-*`) e o bloco `:root[data-theme="dark"]` com a paleta escura; o `<html>` já recebe `data-theme` por um `<script>` inline no `<head>`.
7. **Estilize header, painel e controles** com mobile-first: coluna em telas pequenas, alvos tocáveis com altura ≥ 44px, botão ativo destacado com a classe `.is-active`.
8. **Monte o quadro do canvas**: `.pixel__frame` com padding/fundo/sombra e **scroll interno** (`overflow: auto`) para o artboard rolar dentro do quadro sem criar scroll na página.
9. **Grade de células via CSS**: no `.pixel__canvas`, use dois `repeating-linear-gradient` (vertical + horizontal) com **1px de linha a cada 15px** — cada célula ganha borda visível e o canvas fica transparente onde não há pintura (a linha aparece por trás); adicione `image-rendering: pixelated` e `touch-action: none`.
10. **Refine com `@media (min-width: 560px)`**: apenas espaçamento e largura máxima. **Proíba** scroll horizontal na página.
11. **Teste**: em janela estreita e desktop, sem scroll horizontal; mude o tema do sistema e veja a paleta alternar.

### Fase 03 — JS

12. **Estado inicial** (`DOMContentLoaded`): pegue todos os elementos pelos IDs e crie o objeto `state` com `size`, `color`, `mode`, `pixels` (Map esparso), `is_drawing` e `prev`.
13. **Configure o canvas**: calcule `side = size * TAMANHO_CELULA`; defina `canvas.width/height = side` e `canvas.style.width/height = side px` — **1:1, sem DPR**. Em tela estreita (`matchMedia` ≤ 559px), limite o slider a **24** e ajuste `state.size`/label antes de configurar o canvas.
14. **Implemente `get_celula`** (5.1): converte `offsetX/offsetY` em célula com clamp duplo e constante `TAMANHO_CELULA`. Teste clicando — ou ainda não pinta, mas retorne a célula no console.
15. **Pinte**: `pintar_celula` (5.3) desenha com `fillRect`/`clearRect` na coordenada da célula e atualiza o Map `"x,y" → cor`.
16. **Pointer events** (5.4): `pointerdown` define captura e pinta a 1ª célula; `pointermove` durante `is_drawing` pinta interpolação `desenhar_entre` (5.2); `pointerup`/`pointerleave` encerram. Apague o `contextmenu` do canvas.
17. **Teste o traço**: arraste devagar e rápido — o risco deve sair contínuo, sem picotado, e apagar com o botão direito (clique e arraste).
18. **Cor e modos**: `input` do `color_picker` atualiza `state.color` e o `<output>`; `btn_paint`/`btn_erase` alternam `mode` e o destaque `.is-active`.
19. **Slider**: no evento `input`, só atualize o label ("N × N"); no `change`, chame o fluxo de aplicar grid (5.5) respeitando o diálogo de descarte.
20. **Diálogo de descarte (5.7)**: crie um mini-modal in-page com 3 botões — "Baixar e descartar", "Só descartar", "Cancelar" (`dialogo_descartar`) — e use-o no `btn_clear` e na troca de grid.
21. **Download (5.6)**: `baixar_canvas` gera `toDataURL("image/png")` e dispara um `<a download="pixel-art.png">`. Confira que o PNG **não** tem a grade (só os pixels).
22. **Teste completo**: pinte, mude grid (com desenho → diálogo), limpe, baixe PNG, use erase/touch; valide `node --check js/script.js` e a ausência de erros no console.