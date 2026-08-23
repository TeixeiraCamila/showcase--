# Pomodoro Timer — Roadmap

> Roadmap de requisitos do **Pomodoro Timer** com status de implementação.
> Legendas: ✅ implementado · ⏳ pendente · 🔜 planejado · ❌ descartado.

---

## Fase 1 — Fundação ✅

| # | Requisito | Status |
|---|---|---|
| 1.1 | Estrutura de pastas (`css/`, `js/`, `index.html`) | ✅ |
| 1.2 | HTML shell BEM + mobile-first | ✅ |
| 1.3 | CSS tokens light/dark | ✅ |
| 1.4 | Adicionar tarefa (input + Enter/botão) | ✅ |
| 1.5 | Listar tarefas em ordem de criação | ✅ |
| 1.6 | Persistência `pomodoro:tasks` com `try/catch` | ✅ |
| 1.7 | Limite de **5 tarefas incompletas** com aviso | ✅ |
| 1.8 | Marcar/desmarcar concluída (`.tasks__item--done`) | ✅ |
| 1.9 | Excluir tarefa individual (bug do delete corrigido) | ✅ |
| 1.10 | Clicar numa tarefa revela o timer + destaca selecionada | ✅ |

## Fase 2 — Timer ✅

| # | Requisito | Status |
|---|---|---|
| 2.1 | Display `MM:SS` com `tabular-nums` | ✅ |
| 2.2 | Iniciar / Pausar / Resetar no modo foco | ✅ |
| 2.3 | Tick drift-free via `Date.now()` (aba em segundo plano) | ✅ |
| 2.4 | Fim do foco marca a tarefa ativa como concluída | ✅ |
| 2.5 | Contador de pomodoros persistente (`pomodoro:count`) | ✅ |

## Fase 3 — Pausa de 30 min ✅

| # | Requisito | Status |
|---|---|---|
| 3.1 | Pausa única de **30 minutos** (sem opção de 5 min) | ✅ |
| 3.2 | Mensagem "Faça uma pausa de 30 minutos." | ✅ |
| 3.3 | Pausa só aparece a **cada 5 pomodoros** (`count % 5 === 0`); entre eles o work reseta | ✅ |
| 3.4 | Na pausa, **só o botão Iniciar** (Pause/Reset ocultos) | ✅ |
| 3.5 | `task-form` e `tasks` ocultos durante a pausa (`.app--break`) | ✅ |
| 3.6 | Fim da pausa volta à tela normal com o work resetado | ✅ |

## Fase 4 — Persistência & Expiração ⏳

| # | Requisito | Status |
|---|---|---|
| 4.1 | Expiração de **24h**: tarefa com `createdAt > 24h` é removida no load | ⏳ pendente |
| 4.2 | Expiração per-tarefa (só as velhas somem) | ⏳ pendente |
| 4.3 | "Resetar" tarefa renova o `createdAt` (reinicia 24h) | 🔜 planejado |
| 4.4 | Aviso na UI: "Tarefas expiram após 24h" | 🔜 planejado |

## Fase 5 — Polish UI ⏳

| # | Requisito | Status |
|---|---|---|
| 5.1 | Título da aba com tempo restante (`MM:SS • Foco`) | ⏳ pendente |
| 5.2 | Contador de pendentes ("3 pendentes") | ⏳ pendente |
| 5.3 | Limpar todas as concluídas | ⏳ pendente |
| 5.4 | Estado vazio ("Nenhuma tarefa...") | ⏳ pendente |
| 5.5 | Beep/notificação (Web Audio API) | 🔜 planejado |
| 5.6 | Estilo de `.tasks__item--selected` e `.tasks__delet` (ícone) | ⏳ pendente |
| 5.7 | Toggle de tema (`data-theme` + localStorage) | 🔜 planejado |



## Decisões de Produto

- **Pausa fixa de 30 min** — sem opção de 5 min (decisão do cliente, Fase 3).
- **25 min no foco** é o valor real (comentado); ativo: **15s** para facilitar teste.
- **Contador de concluídas** conta **pomodoros finalizados** (timer que marca a tarefa), não check manual.
- **Contador persistente** entre sessões (`localStorage`).



Fluxo de teste: adicionar tarefa → clicar nela → Start → aguardar 15s → tela de pausa (30min, só Iniciar) → Iniciar → aguardar 30s → volta ao normal.
