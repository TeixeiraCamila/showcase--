# Style Guide — Estética "Daisy" 

--=

## 1. Conceito visual

A estética mistura dois mundos:
- **Analógico/scrapbook**: fotos polaroid-like giradas, post-its, rabiscos à mão, recortes de revista, texturas de papel.
- **Digital/produto**: screenshots de UI limpa, cards com sombra dura, botões estilo "sticker".

O resultado parece um **mural de referências (moodboard) que virou site**. Tudo parece "colado" com leve rotação, sobreposição e sombra, nunca perfeitamente alinhado em grid rígido.

---

## 2. Paleta de cores

Paleta pastel/candy, alto contraste em blocos de seção, fundo neutro entre eles.

| Uso | Cor | Hex aprox. |
|---|---|---|
| Fundo base | Off-white / creme | `#F5F1E8` |
| Texto principal | Preto quase puro | `#1A1A1A` |
| Destaque 1 (highlight/marca-texto) | Rosa chiclete | `#F5A9D0` |
| Destaque 2 (highlight/marca-texto) | Amarelo mostarda | `#F2C744` |
| Seção verde | Verde lima pastel | `#C9E86C` |
| Seção lilás | Lilás pastel | `#D9C4F0` |
| Seção azul | Azul bebê | `#B8DDF0` |
| CTA final / rodapé claro | Amarelo neon suave | `#F0F27A` |
| Rodapé/contraste escuro | Preto | `#0D0D0D` |

**Regras de uso:**
- Um bloco de conteúdo = **uma cor sólida chapada**, sem gradiente.
- Alternar seções em blocos de cor cheia (full-bleed), intercalando com fundo neutro creme.
- Texto sempre em preto sobre as cores pastel (nunca branco) — mantém o clima "zine impresso".
- "Marca-texto" (highlight de texto) simulando caneta grifo por trás de palavras-chave, cores rosa/amarelo/verde.

---

## 3. Tipografia

Duas famílias contrastantes: uma **serifada editorial** para títulos, uma **monoespaçada** para detalhes/UI.

- **Títulos (H1/H2):** serifa clássica, levemente old-style (ex: Times, Georgia, PP Editorial, Tiempos). Peso regular/light, nunca bold pesado. Tamanho grande, line-height apertado.
- **Corpo de texto:** a mesma serifa ou uma sans neutra simples, tamanho pequeno-médio, bastante leve.
- **Elementos de "sticker"/UI (badges, botões pequenos, tags nos cards, "coming soon"):** fonte **monoespaçada** (tipo Courier/Space Mono/IBM Plex Mono), caixa alta, tracking levemente aberto. Passa a sensação de "etiqueta" ou "terminal retrô".
- Sublinhados e riscados à mão (estilo caneta) usados como ênfase em vez de itálico/negrito.

**Hierarquia sugerida:**
```
H1: Serif, 48–64px, regular
H2: Serif, 32–40px, regular
Body: Serif ou Sans, 16–18px, regular, cor preta suave
Tag/Badge/UI: Mono, 11–13px, uppercase, tracking +2%
```

---

## 4. Iconografia e ilustração

- **Logo/símbolo âncora:** um ícone simples tipo flor/rabisco (asterisco floral), usado como favicon/mascote recorrente.
- **Ícones desenhados à mão**, não geométricos perfeitos: contorno fino, estilo rabisco de caderno (flor, novelo de linha, balão de cachorro, fantasma, cérebro, caracol). Sem preenchimento sólido — line art solta, imperfeita, "doodle".
- Emojis/expressões simples (carinha sorrindo) também cabem no universo.
- Ícones nunca em kit padronizado (tipo Feather/Material) — sempre com personalidade de ilustração única, como se fossem desenhados à mão ou recortados de um sticker book.
- Uso de **washi tape / post-it visual** como elemento decorativo (retângulo colorido "colado" no canto de um card).

---

## 5. Cards, imagens e composição

- **Cards com sombra dura offset** (box-shadow sólido, sem blur, deslocado 4–8px), borda preta fina — visual "sticker" ou "polaroid".
- Elementos **rotacionados aleatoriamente** (entre -8° e +8°) e sobrepostos, nunca alinhados em grade perfeita.
- Fotos misturadas com UI real do produto (screenshots) dentro do mesmo colshare, como se fosse um mood board.
- Uso de **badges circulares "coming soon"** com texto em curva (estilo carimbo/selo).
- Espaço generoso ao redor dos blocos; dentro do bloco, elementos comprimidos e colados uns nos outros.

---

## 6. Botões e CTAs

- Formato **retangular com cantos levemente arredondados** (~6–8px), borda preta fina, sombra dura offset (efeito "sticker 3D").
- Fundo sólido (preto ou cor da seção), texto em fonte mono, caixa alta.
- Hover simples: leve deslocamento (o botão "afunda", sombra reduz).
- Inputs de formulário com o mesmo tratamento: borda fina preta, cantos levemente arredondados, sem sombra pesada de UI genérica.

---

## 7. Texturas e detalhes de fundo

- Fundo neutro com **textura sutil de grid pontilhado ou papel** (não liso 100%).
- Bordas de seção retas (sem curvas/wave dividers) — a transição entre blocos de cor é uma linha reta com borda preta fina.
- Uso ocasional de rabiscos soltos (linhas, espirais, setas à mão) como preenchimento de espaço vazio.

---

## 8. Tom geral (para decisões de design, não copy)

- Otimista, lúdico, "fofo mas profissional" — nunca corporativo/frio.
- Prioriza **imperfeição controlada**: nada é geometricamente perfeito, mas tudo é legível e organizado.
- Contraste alto entre blocos de cor cria ritmo de rolagem (scroll) — cada seção é visualmente distinta da anterior.

---

## 9. Checklist rápido para aplicar em um novo site

- [ ] Fundo geral off-white/creme com textura leve
- [ ] Seções em blocos de cor pastel sólida, alternadas
- [ ] Título em serifa leve, corpo pequeno
- [ ] Badges/tags em fonte mono caixa alta
- [ ] Ícones line-art desenhados à mão, sem kit padrão
- [ ] Cards/fotos com sombra dura offset e leve rotação
- [ ] Marca-texto colorido em palavras-chave
- [ ] Botões com borda preta + sombra sticker
- [ ] Sem gradientes, sem sombras suaves/blur, sem cantos muito arredondados