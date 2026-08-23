# Pomodoro Timer — Requisitos e Blueprint

> Documento de requisitos e plano de implementação do **Pomodoro Timer**,
> um timer de foco com lista de tarefas persistida em `localStorage`.
> Serve de guia único para designer (Figma) e desenvolvedor (HTML/CSS/JS).

---

## 1. Visão Geral

### Nome do Projeto

```
Pomodoro Timer
```

### Categoria (Showcase)

```
Ferramentas (tools)
```

### Público-alvo

```
Estudantes, desenvolvedores e profissionais que querem gerenciar tarefas
com a técnica Pomodoro (foco + pausas).
```

### Objetivo Principal

```
Produtividade — cronômetro de foco acoplado a uma lista de tarefas com
persistência local e expiração automática (24h).
```

### Fluxo do App (implementado)

```
TAREFAS: adicionar (máx. 5 incompletas) → clicar em uma tarefa revela o timer
  WORK TIMER (15s teste / 25min comentado) → ao zerar:
    1. marca a tarefa ativa como concluída
    2. pomodoroCount++ (persistente em "pomodoro:count")
    3. se ainda não completou 5 pomodoros → work reseta p/ 15s e continua
    4. ao completar o 5º pomodoro → tela de PAUSA 30min:
       - mensagem "Faça uma pausa de 30 minutos."
       - só o botão Iniciar (sem Pause/Reset)
       - task-form e tasks ficam ocultos
    5. clica Iniciar → pausa conta regressiva (30min)
    6. pausa zerou → volta à tela normal com as tasks; work resetado p/ 15s
```

---

## 2. Stack

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 semântico (`<main>`, `<section>`, `<button>`, `<ul>/<li>`) |
| Estilo | CSS3 + CSS custom properties + BEM |
| Comportamento | JavaScript ES6+ puro (sem frameworks, sem build) |
| Persistência | `localStorage` API |
| Fontes | Google Fonts — Gorditas (400, 700) |

> Sem `package.json`, sem npm, sem GSAP. Apenas `index.html`, `css/style.css` e `js/script.js`.

---

## 3. Arquivos Críticos

| Arquivo | Papel |
|---|---|
| `index.html` | App shell: form de tarefas, timer, lista de tarefas, footer com voltar |
| `css/style.css` | Estilos mobile-first + BEM: form, timer, lista, pausa, responsivo |
| `js/script.js` | Lógica: CRUD de tarefas, timer drift-free, pausa de 30min, persistência |
| `README.md` | Este blueprint |
| `ROADMAP.md` | Roadmap com requisitos e status de implementação |

---

## 4. Requisitos Funcionais

### 4.1 Timer Pomodoro

- `RF-01` — Exibir cronômetro regressivo em `MM:SS`. ✅
- `RF-02` — Modos:
  - **Foco**: 25 minutos (padrão, atualmente 15s para teste). ✅
  - **Pausa**: 30 minutos (única, sem opção de 5 minutos). ✅
- `RF-03` — Botões de controle no modo foco: **Iniciar**, **Pausar** e **Resetar**. ✅
  - Na pausa: apenas **Iniciar** (Pause/Reset ocultos via CSS + guard no JS). ✅
- `RF-04` — A pausa de 30 minutos só aparece a cada **5 pomodoros completados** (`pomodoroCount % 5 === 0`); entre eles o work apenas reseta e continua. ✅
- `RF-05` — Contador de pomodoros completados (persistente em `pomodoro:count`). ✅
- `RF-06` — (substituído) A pausa é única, de 30 minutos, e só dispara a cada 5 pomodoros. ✅
- `RF-07` — Título da aba atualizado com o tempo restante (ex.: `24:59 • Foco`). ⏳ pendente
- `RF-08` — Timer continua correto em aba em segundo plano (tick por `Date.now()`, não `setInterval` puro). ✅
- `RF-09` — Beep/notificação sonora ao final do foco/pausa. ⏳ pendente

### 4.2 Lista de Tarefas

- `RF-10` — Adicionar tarefa via input + botão (Enter também confirma). ✅
- `RF-11` — Listar tarefas em ordem de criação. ✅
- `RF-12` — Marcar/desmarcar tarefa como **concluída** (check). ✅
- `RF-13` — Remover tarefa individualmente (botão excluir). ✅
- `RF-14` — Limitar a **5 tarefas incompletas**; bloqueia adição com aviso. ✅
- `RF-15` — Clicar em uma tarefa **revela o timer** e a marca como selecionada. ✅
- `RF-16` — Contador de tarefas pendentes (ex.: `3 pendentes`). ⏳ pendente
- `RF-17` — Limpar todas as tarefas concluídas. ⏳ pendente
- `RF-18` — Estado vazio ("Nenhuma tarefa..."). ⏳ pendente

### 4.3 Persistência e Expiração (localStorage)

- `RF-19` — Salvar tarefas em `localStorage` sob a chave `pomodoro:tasks`. ✅
- `RF-20` — Salvar contador de pomodoros sob `pomodoro:count`. ✅
- `RF-21` — **Expiração de 24h**: cada tarefa guarda `createdAt` (ms); no load, `createdAt > 24h` → tarefa removida. ⏳ pendente
- `RF-22` — "Resetar" a tarefa renova o `createdAt`, reiniciando a janela de 24h. ⏳ pendente
- `RF-23` — Expiração **per-tarefa** (só as velhas somem). ⏳ pendente (junto com RF-21)
- `RF-24` — Guardar `status` (boolean concluída) por tarefa. ✅
- `RF-25` — `try/catch` + fallback seguro no `localStorage` (JSON inválido → `[]`). ✅

### 4.4 Esquema do localStorage

```jsonc
// chave: "pomodoro:tasks"
[
  {
    "id": "uuid",                // identificador único (crypto.randomUUID())
    "task": "Estudar JS",
    "status": false,             // true = concluída
    "createdAt": 1756800000000   // timestamp ms → expira em +24h
  }
]

// chave: "pomodoro:count"
"3"   // número de pomodoros completados (string JSON)
```

---

## 5. Requisitos Não Funcionais

- `RNF-01` — **Mobile-first**: layout funcional em ≥320px. ✅
- `RNF-02` — Sem dependências externas além de Google Fonts. ✅
- `RNF-03` — `localStorage` síncrono com dados mínimos. ✅
- `RNF-04` — Nomes de classe em **BEM** (`.timer__display`, `.tasks__item--done`). ✅
- `RNF-05` — Acessibilidade: `aria-live` no display, `aria-label` nos botões, `:focus-visible`. ✅ (parcial)
- `RNF-06` — `prefers-reduced-motion: reduce` desativa animações. ⏳ pendente
- `RNF-07` — Dark/light theme via `data-theme`. ⏳ pendente (tokens prontos no CSS)
- `RNF-08` — Textos em pt-BR. ⏳ pendente (UI ainda em inglês)

---

## 6. Estrutura da Página (atual)

```
BODY (flex column, centralizado)
  MAIN.app
    SECTION.task-form
      h2 "Task List"
      input #taskInput + button #addTask "Add Task"
      p #taskFormHint (aviso de limite)

    SECTION.timer#timer (oculto até clicar numa tarefa)
      h1 #timerTitle "Pomodoro Timer"
      p #timerMessage (vazio; "Faça uma pausa de 30 minutos." na pausa)
      div #timerDisplay  MM:SS
      controls: #start #pause #reset
        - na pausa (.timer--break): Pause/Reset ocultos, só Iniciar

    SECTION.tasks
      h2 "List of Tasks"
      ul #taskList (.tasks__item / .tasks__item--done / .tasks__item--selected)
        - button .tasks__check (concluir)
        - span .tasks__text
        - button .tasks__delet (excluir)

  FOOTER
    a "← Voltar ao Showcase" → ../../index.html
```

---

## 7. Sistema de Design

### 7.1 Paleta (tokens)

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--color-bg` | `#F6F1E7` | `#1E1B18` | Fundo |
| `--color-surface` | `#FFFFFF` | `#2A2622` | Cards |
| `--color-primary` | `#D9534F` | `#E4635F` | Ações/destaques |
| `--color-success` | `#2E9E63` | `#3DBB77` | Concluída |
| `--color-text` | `#2B2622` | `#F3EDE7` | Texto principal |
| `--color-text-muted` | `#8A8178` | `#9C928A` | Texto secundário |
| `--color-border` | `rgba(0,0,0,.08)` | `rgba(255,255,255,.10)` | Bordas |

### 7.2 Tipografia

- Fonte: **Gorditas** (400, 700) via Google Fonts.
- Display do timer: `tabular-nums`, `3.5rem` (mobile) → `5rem` (≥480px).

### 7.3 Layout

- `.app`: max-width 400px (mobile) → 480px (≥480px), coluna única.
- Cards com `border-radius: 12px`, `padding: 1rem`.
- Botões: `border-radius: 8px`, toque ≥44px.

---

## 8. Estados do Timer (atual)

```
work idle → work running ⇄ work paused → finish → BREAK 30min → endBreak → work idle
```

| Estado | Comportamento |
|---|---|
| `work idle` | Display 00:15 (teste); botões Iniciar/Pausar/Resetar |
| `work running` | `setInterval(200ms)` recomputando `endTime - Date.now()` |
| `work paused` | para o interval; `remaining` mantido |
| `work finish` | marca tarefa ativa concluída, `count++`; se `count % 5 === 0` abre pausa, senão reseta p/ 15s |
| `break` | `.timer--break` + `.app--break`; mensagem 30min; só Iniciar |
| `break running` | contagem regressiva da pausa |
| `endBreak` | remove classes, título volta, work reseta p/ DURATION |

---

## 9. Testes (smoke test, 34 asserts)

- CRUD de tarefas + persistência + limite 5 incompletas.
- Delete remove apenas a tarefa clicada (bug corrigido).
- Work → break 30min: mensagem, display 00:30, `.app--break`, só Iniciar.
- Pausa **só a cada 5 pomodoros** (1º–4º resetam sem break; 5º abre a pausa; 6º reinicia o ciclo).
- endBreak: volta ao work com display 00:15.

---

## 10. Próximos Passos Sugeridos

1. Expiração de 24h (`purgeExpired` no load).
2. Título da aba com tempo restante.
3. Contador de pendentes + limpar concluídas + estado vazio.
4. Toggle de tema (dark/light).
5. Traduzir UI para pt-BR.
6. `favicon.svg` + `preview.png` + registro em `data/projects.json` (id 23).

---

> Status detalhado dos requisitos: ver `ROADMAP.md` na mesma pasta.
