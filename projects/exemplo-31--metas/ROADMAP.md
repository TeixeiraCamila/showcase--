# `exemplo-31--metas` — Roadmap de Implementação

> App de metas financeiras: o usuário define **quanto quer guardar (R$)** e **quanto consegue aportar por mês (R$)**. O sistema projeta uma **timeline de meses** e o usuário **marca os meses em que realmente depositou** — a barra de progresso reflete o real, não o planejado.
>
> Projeto standalone do showcase (`projects/exemplo-31--metas/`), 100% estático, sem build.

---

## 1. Regras de produto (consolidadas)

| Regra | Decisão |
| --- | --- |
| Cálculo | **Linear**, sem juros. `progresso = depositado ÷ valor` |
| Timeline | Sempre começa no **mês atual**; labels `set/26`. Depósitos passados não existem — o tracking é "daqui pra frente" |
| Check | **Simples**: marcar/desmarcar o mês; cada check vale exatamente `aporte` (sem valores diferentes por mês) |
| Duração | `qtde_meses = max(ceil(valor ÷ aporte), 1)` |
| Mês parcial | **Opção (c)**: meses inteiros + valor parcial no último mês = `valor mod aporte` |
| Metas longas | **> 12 meses → colapsa por ano** (blocos agregados) |
| Limite | **Máximo 5 metas** ativas; botão desabilita + aviso |
| Conclusão | `depositado × aporte >= valor` → barra 100%, **congela** (checks locked), badge, meta ainda **excluível** |
| Persistência | `localStorage`, chave `metas_app_v1`, formato JSON |
| Moeda/idioma | pt-BR; valores com `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })` |
| Empty state | Tela de convite quando não há metas |

---

## 2. Modelo de dados

```js
{
  "id": "m_1727...",            // gerado: Date.now() + aleatório
  "nome": "iPhone",             // string, obrigatório
  "valor": 1000,                // meta em R$ (número, >= 1)
  "aporte": 300,                // R$/mês (número, >= 1)
  "depositado": ["2026-09", "2026-10"],  // meses marcados, formato "yyyy-MM"
  "criada_em": "2026-09-24"     // não usado na UI — útil para debug/ordenação
}
```

- `id` e `criada_em` são meta-dados; a UI ordena por `criada_em` (mais antiga primeiro).
- **`concluida` é derivada**, nunca persistida: `depositado.length * aporte >= valor`.
- Ordem de `depositado` não importa; a render usa **set** (`meta.depositado.includes(mes)`).

### Schema de storage

```js
// localStorage["metas_app_v1"]
[
  { /* meta 1 */ },
  { /* meta 2 */ },
  // max 5 itens
]
```

`carregar_metas()` faz `JSON.parse` com try/catch (storage corrompido → retorna `[]`); `salvar_metas()` só grava se `length < 5`? **Não** — excluir pode reduzir, mas não há criação acima do limite via UI; o guard é no formulário.

---

## 3. Portugol (funções-fantasma)

```pascal
// ── utilitários de tempo ─────────────────────────────────────────

funcao mes_atual(): texto
    ; retorna formato(agora, "aaaa-MM")                // "2026-09"

funcao soma_mes(mes, n): texto
    // "2026-09" + 1 -> "2026-10"; dezembro vira ano seguinte
    data = parse(mes + "-01")
    ; retorna formato(date_adiciona_meses(data, n), "aaaa-MM")

funcao lista_meses(qtde): lista de texto
    m = mes_atual()
    para i variando de 1 ate qtde:
        lista.adiciona(m)
        m = soma_mes(m, 1)

funcao rotulo_mes(mes): texto
    // "2026-09" -> "set/26"  (Intl.DateTimeFormat pt-BR, mês abreviado)
    ; retorna abrevia_mes(mes) + "/" + ultimos_2_digitos(ano(mes))

// ── matemática da meta ──────────────────────────────────────────

funcao meses_para_meta(valor, aporte): inteiro
    // opcao (c): meses inteiros + ultimo parcial; minimo 1 mês
    ; retorna maximo(teto(valor / aporte), 1)

funcao valor_ultimo_mes(valor, aporte): numero
    resto = valor mod aporte
    ; retorna se(resto = 0, aporte, resto)             // último balão/mês parcial

funcao total_depositado(meta): numero
    ; retorna meta.depositado.tamanho * meta.aporte

funcao progresso(meta): numero                         // 0..100
    ; retorna minimo(total_depositado(meta) / meta.valor * 100, 100)

funcao concluida(meta): booleano
    ; retorna total_depositado(meta) >= meta.valor

funcao faltam_meses(meta): inteiro
    // meses ainda não marcados (visual: quantos balões "vazios")
    ; retorna meses_para_meta(meta.valor, meta.aporte) - meta.depositado.tamanho

// ── interação ───────────────────────────────────────────────────

funcao alternar_check(meta, mes)
    se meta.concluida:
        ; retorna            // defensivo: 100% congela, botões disabled
    se mes em meta.depositado:
        meta.depositado.remover(mes)
    senao:
        meta.depositado.adicionar(mes)
    salvar_metas()
    desenhar_tudo()

funcao excluir_meta(meta)
    se confirmar("Excluir meta 'X'? Depósitos serão perdidos."):
        metas.remove(meta)
        salvar_metas()
        desenhar_tudo()

// ── render ──────────────────────────────────────────────────────

funcao desenhar_timeline(meta)
    qtde = meses_para_meta(meta.valor, meta.aporte)
    se qtde <= 12:
        para cada m em lista_meses(qtde):
            ultimo = (m == soma_mes(mes_atual(), qtde - 1))
            desenha_balão_mes(
                mes:     m,
                rotulo:  rotulo_mes(m),
                marcado: m em meta.depositado,
                parcial: se(ultimo, valor_ultimo_mes(meta.valor, meta.aporte), meta.aporte),
                locked:  meta.concluida
            )
    senao:
        para cada ano em agrupa_por_ano(lista_meses(qtde)):
            desenha_bloco_ano(ano, marcados_no_ano, total_do_ano, valor_do_ano)

funcao desenhar_tudo()
    se metas.vazio:
        mostra("#vazio")        // empty state de convite
    senao:
        para cada meta em metas:
            desenha_card(meta)  // nome, aporte, barra, timeline, ações
    atualiza_botao_limite()     // metas >= 5 -> disabled + aviso

// ── formatação ──────────────────────────────────────────────────

funcao formata_brl(valor): texto
    ; retorna new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
```

### Casos que as funções já cobrem
- `valor < aporte` (meta R$ 100, aporte R$ 1.000) → `meses_para_meta = 1`, último mês parcial = R$ 100, barra estoura 100% no 1º check.
- `valor % aporte == 0` (1.000 / 200) → todos os meses cheios, último = `aporte`.
- Meta de 40 anos (R$ 240.000 ÷ R$ 500) → `agrupa_por_ano` colapsa em 40 blocos, não 480 balões.

---

## 4. HTML básico

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Metas — Showcase</title>
  <link rel="canonical" href="https://showcase-theta-opal.vercel.app/projects/exemplo-31--metas/">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="header">
    <a class="header__voltar" href="../../index.html">← Voltar ao Showcase</a>
  </header>

  <main class="metas">
    <h1 class="metas__titulo">Minhas metas</h1>
    <p class="metas__subtitulo">Guardar dinheiro é marcar cada mês.</p>

    <button id="btn_adicionar" class="metas__acao" type="button">+ Nova meta</button>
    <p id="aviso_limite" class="metas__limite" hidden>Máximo de 5 metas ativas.</p>

    <section id="lista_metas" class="metas__grade" aria-live="polite"></section>

    <section id="vazio" class="metas_vazio" hidden>
      <p class="metas_vazio__emoji">🎯</p>
      <p class="metas_vazio__texto">Nenhuma meta ainda.<br>Comece definindo o que quer conquistar.</p>
    </section>
  </main>

  <dialog id="modal_meta" class="meta-modal">
    <form id="form_meta" class="meta-modal__form" method="dialog">
      <h2 id="titulo_modal">Nova meta</h2>
      <label for="campo_nome">Nome da meta</label>
      <input id="campo_nome" name="nome" type="text" required autocomplete="off">
      <label for="campo_valor">Quanto você quer?</label>
      <input id="campo_valor" name="valor" type="number" min="1" step="0.01" required>
      <label for="campo_aporte">Quanto consegue guardar por mês?</label>
      <input id="campo_aporte" name="aporte" type="number" min="1" step="0.01" required>
      <p id="preview_meta" class="meta-modal__preview"></p>  <!-- "≈ 4 meses · último mês R$ 100" -->
      <div class="meta-modal__acoes">
        <button type="button" id="btn_fechar">Fechar</button>
        <button type="submit">Salvar meta</button>
      </div>
    </form>
  </dialog>

  <script src="js/script.js" defer></script>
</body>
</html>
```

**Notas de comportamento:**
- Modal nativo `<dialog>` + `showModal()`; fecha com `Esc` grátis (ARIA automático).
- `#preview_meta` atualiza ao digitar valor/aporte (live): `≈ X meses · último mês R$ Y`. É o "fun" do app — o usuário sente o impacto de aumentar o aporte.
- Botão salvar também aplica regra `form_meta.reportValidity()` + guard `metas.length < 5`.

---

## 5. CSS / design

- **Mobile-first**, grid de cards: 1 coluna mobile → 2 colunas ≥ 720px.
- **Barra de progresso**: `.meta_card__barra` com `--progresso: <pct>%` setada via JS; transição suave no fill.
- **Balões/checks da timeline**: circulares (`.timeline__balão`), estados:
  - `.timeline__balao--plano` (cinza, futuro, não marcado)
  - `.timeline__balao--check` (verde/preenchido, marcado)
  - `.timeline__balao--hoje` (contorno destacado no mês corrente)
  - `.timeline__balao--parcial` (último mês: número do valor parcial)
  - `disabled` quando `meta.concluida`
- **Concluída**: card com badge `100% ✓` verde + fade opcional.
- **Atraso implícito**: como a timeline começa no mês atual, não há "vermelho de atrasado" — ok, é o produto.
- **Tokens**: reusar custom properties do tema (`.cursor `/`.cursor__trail` do padrão do showcase, desabilitados em touch).
- **`prefers-color-scheme`** + `data-theme` no `<html>` (padrão do showcase); sem toggle manual a menos que deseje reusar o do root.

---

## 6. Acessibilidade

- Botões de mês com `aria-label` explícito: `"Marcar setembro de 2026 como depositado"` / `"Desmarcar..."` (mudança de estado via JS).
- `aria-live="polite"` na grade para anunciar card adicionado.
- Foco preservado: ao excluir, foco vai para o próximo card ou `#btn_adicionar`.
- Contrast ≥ 4.5:1 no texto; estados de check não dependem **só** de cor (usar ✓ e peso).
- Inputs com `<label for>` ligados.

---

## 7. Casos de borda (checklist)

- [ ] `valor` ou `aporte` vazio/`<= 0` → `required` + `min="1"` + `step="0.01"` (bloqueia no browser, sem JS extra)
- [ ] `valor == 0.01` trocado por vírgula pt-BR → `input type="number"` aceita `,` e `Intl` formata; validar `isFinite`
- [ ] `localStorage` indisponível (private mode) → try/catch e fallback em memória + aviso discreto
- [ ] Storage corrompido (JSON inválido) → `carregar_metas()` devolve `[]`
- [ ] Meta com 1 só mês → timeline de 1 balão; check → 100% imediato
- [ ] 5 metas → `#aviso_limite` visível, botão `disabled` com `aria-disabled="true"`
- [ ] Dois checks rápidos no mesmo mês → toggle idempotente (set, nunca duplicar)
- [ ] Fechar modal com `Esc` sem salvar → nenhum dado gravado
- [ ] Editar valor/aporte de meta **não** concluída → recalcula meses, mantém `depositado` (meses passados continuam marcados)
- [ ] Meta concluída → `disabled` em todos os balões; excluir continua disponível; **sem edição** (ou reabrir edit recalcula e destrava — decidir na implementação; regra base: congela)

---

## 8. Passo a passo de implementação

1. **Scaffold local**: pasta já existe (`css/style.css`, `js/script.js`, `assets/`, `index.html`). Zerar o boilerplate e escrever o HTML desta seção 4.
2. **Storage layer**: `carregar_metas()` / `salvar_metas()` + `enviar` dados com try/catch.
3. **Card + barra**: nome, aporte, `R$ depositado de R$ valor`, barra %, ações (excluir). Render estático de dados mock para validar visual.
4. **Timeline mensal** (≤ 12 meses): `lista_meses` + balões clicáveis + `alternar_check`. Garantir `#preview_meta` depois.
5. **Colapso anual** (> 12 meses): `agrupa_por_ano` → blocos com checks agregados.
6. **Modal** (`<dialog>`): validação, preview live (`≈ X meses · último mês R$ Y`), limite 5.
7. **Conclusão**: badge + lock de checks + estilo.
8. **Empty state + exclusão** (com `confirm()`).
9. **Tema/responsivo**: mobile-first, dark/light, cursor padrão.
10. **Validação técnica** (seção 9).
11. **Catálogo** (seção 10).

---

## 9. Validação técnica (pós-implementação)

```bash
# JS sem erro de sintaxe
node --check projects/exemplo-31--metas/js/script.js

# HTML bem-formado (sem tags soltas / atributos duplicados)
python3 -c "import sys; from html.parser import HTMLParser
class P(HTMLParser):
    def handle_starttag(self,t,a): pass
P().feed(open('projects/exemplo-31--metas/index.html').read())"

# Refs de assets quebradas: cruzar src/href/url() com arquivos existentes
# CORE WEB VITALS: LCP (prévia/hreo) com preload + fetchpriority; imagens com width/height
```

- **Tracking**: o boilerplate atual tem Meta Pixel + GA4 **sem** banner — regra do showcase: ou adiciona `cookie-banner` (padrão `exemplo-02--real-state`) ou **remove por completo** (padrão `exemplo-23--pomodoro`). Nunca deixar tracker sem banner. Recomendado: remover (app simples) ou banner LGPD.
- SEO: `title`, `description`, `canonical` do projeto (domínio produção + barra final), OG + Twitter card com URLs absolutas apontando `preview.png`.

---

## 10. Integração ao catálogo

1. **`data/projects.json`** — entry:
   ```json
   {
     "id": 31,
     "title": "Metas",
     "category": "financeiro",
     "href": "/projects/exemplo-31--metas/",
     "preview": "/projects/exemplo-31--metas/preview.png",
     "description": "Guarde dinheiro marcando mês a mês o que você realmente depositou.",
     "tags": ["financeiro", "timeline", "localStorage"]
   }
   ```
2. **`projects/exemplo-31--metas/preview.png`** — screenshot 1200×630 (padrão do showcase).
3. **`sitemap.xml`** — `<url><loc>https://showcase-theta-opal.vercel.app/projects/exemplo-31--metas/</loc></url>` (barra final).
4. **Commits** (separados por convenção):
   - `feat(metas): app de metas financeiras com timeline de checks`
   - `chore(seo): sitemap/robots/canonical para exemplo-31`

---

## 11. Critérios de aceite

- [ ] Crio meta R$ 1.000/aporte R$ 300 → timeline com 4 balões (set/26 a dez/26), último "R$ 100", preview "≈ 4 meses"
- [ ] Marcar set + out → barra `R$ 600 de R$ 1.000` (60%)
- [ ] Marcar todos → 100% + badge + balões disabled
- [ ] 6ª meta → bloqueada com aviso
- [ ] Meta 100% ainda excluível
- [ ] Recarregar página → dados persistem
- [ ] Meta R$ 240.000/aporte R$ 500 → blocos por ano (não 480 balões)
- [ ] Mobile 360px sem overflow horizontal; contraste ok