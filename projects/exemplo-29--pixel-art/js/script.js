document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("pixel_canvas");
  const grid_size_input = document.getElementById("grid_size");
  const grid_size_value = document.getElementById("grid_size_value");
  const color_picker = document.getElementById("color_picker");
  const color_value = document.getElementById("color_value");
  const btn_paint = document.getElementById("btn_paint");
  const btn_erase = document.getElementById("btn_erase");
  const btn_reset = document.getElementById("btn_reset");
  const btn_download = document.getElementById("btn_download");
  const app_status = document.getElementById("app_status");
  const discard_modal = document.getElementById("discard_modal");
  const discard_message = document.getElementById("discard_message");
  const discard_download = document.getElementById("discard_download");
  const discard_discard = document.getElementById("discard_discard");
  const discard_cancel = document.getElementById("discard_cancel");

  // Estado do app
  const state = {
    size: 35, // grid N×N (padrão)
    color: "#000000", // cor de pintura (padrão)
    mode: "draw", // draw | erase
    pixels: new Map(), // modelo esparso: "x,y" -> cor
    is_drawing: false, // arrasto em andamento?
    prev: null, // célula anterior (interpolação)
  };

  const CELL_SIZE = 15; // px por célula

  // Em tela estreita (mobile), limita o grid a 24
  const is_mobile = window.matchMedia("(max-width: 559px)").matches;
  if (is_mobile) {
    grid_size_input.max = 24;
    if (state.size > 24) {
      state.size = 24;
      grid_size_input.value = 24;
    }
    grid_size_value.textContent = `${state.size} × ${state.size}`;
  }

  // Configura o canvas 1:1 (buffer = CSS px, sem DPR)
  const side = state.size * CELL_SIZE; // lado do canvas

  canvas.width = side;
  canvas.height = side;
  canvas.style.width = `${side}px`;
  canvas.style.height = `${side}px`;

  const ctx = canvas.getContext("2d");

  function get_cell(event) {
    // converte px do ponteiro em célula (clamp inferior e superior)
    const x = Math.min(state.size - 1, Math.max(0, Math.floor(event.offsetX / CELL_SIZE)));
    const y = Math.min(state.size - 1, Math.max(0, Math.floor(event.offsetY / CELL_SIZE)));
    return { x, y };
  }

  function sync_clear_visibility() {
    // mostra reset e download no painel só enquanto houver pintura
    const has_paint = state.pixels.size > 0;
    btn_reset.hidden = !has_paint;
    btn_download.hidden = !has_paint;
  }

  function paint_cell(x, y, erase_forced = false) {
    // pinta ou apaga a célula no canvas e no modelo esparso
    const key = `${x},${y}`;
    const do_erase = state.mode === "erase" || erase_forced;

    if (do_erase) {
      state.pixels.delete(key); // célula volta a ser transparente
      ctx.clearRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    } else {
      state.pixels.set(key, state.color); // "x,y" -> cor
      ctx.fillStyle = state.color;
      ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
    sync_clear_visibility();
  }

  function interpolate_line(from_cell, to_cell, erase_forced) {
    // interpola células entre dois pontos (evita traço picotado)
    // pega o maior dos deslocamentos (horizontal ou vertical) e divide o traço em N passos
    const distance = Math.max(
      Math.abs(to_cell.x - from_cell.x),
      Math.abs(to_cell.y - from_cell.y),
    );
    if (distance === 0) return; // mesma célula, nada a preencher

    for (let step = 0; step <= distance; step++) {
      const t = step / distance; // proporção 0..1
      const x = Math.round(from_cell.x + (to_cell.x - from_cell.x) * t);
      const y = Math.round(from_cell.y + (to_cell.y - from_cell.y) * t);
      paint_cell(x, y, erase_forced);
    }
  }

  let active_erase = false; // botão direito do arrasto atual

  canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // botão direito não abre o menu no canvas
  });

  canvas.addEventListener("pointerdown", (event) => {
    active_erase = event.button === 2; // 0 esquerdo, 2 direito (apagar sempre)
    state.is_drawing = true;
    state.prev = null;
    canvas.setPointerCapture(event.pointerId); // todos os eventos seguintes vão para o canvas, mesmo fora da área
    const cell = get_cell(event);
    paint_cell(cell.x, cell.y, active_erase); // pinta/apaga a 1ª célula do clique
    state.prev = cell; // ponto de partida para o proximo ponto (interpolação)
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!state.is_drawing) return;
    const cell = get_cell(event);
    if (state.prev) {
      interpolate_line(state.prev, cell, active_erase); // preenche o traço
    } else {
      paint_cell(cell.x, cell.y, active_erase); // clique simples
    }
    state.prev = cell;
  });

  const stop_drawing = () => {
    state.is_drawing = false;
    state.prev = null;
  };

  canvas.addEventListener("pointerup", stop_drawing);
  canvas.addEventListener("pointerleave", stop_drawing);

  // só atualiza o label do range 
  grid_size_input.addEventListener("input", () => {
    const size = Number(grid_size_input.value);
    grid_size_value.textContent = `${size} × ${size}`;
  });
  function set_mode(mode) {
    // alterna entre draw e erase e destaca o botão ativo
    state.mode = mode;
    btn_paint.classList.toggle("is-active", mode === "draw");
    btn_erase.classList.toggle("is-active", mode === "erase");
  }

  // Botões de modo: paint pinta, erase apaga
  btn_paint.addEventListener("click", () => set_mode("draw"));
  btn_erase.addEventListener("click", () => set_mode("erase"));

  // Atualizar a cor 
  color_picker.addEventListener("input", () => {
    const color = color_picker.value;
    color_value.textContent = color;
    state.color = color;
  });
  // Modal de descarte (3 botões) — resolve pelo botão apertado
  let dialog_resolve = null;

  function finish_dialog(value) {
    if (dialog_resolve) {
      const resolve = dialog_resolve;
      dialog_resolve = null;
      resolve(value);
    }
    discard_modal.close();
  }

  discard_download.addEventListener("click", () => finish_dialog("download"));
  discard_discard.addEventListener("click", () => finish_dialog("discard"));
  discard_cancel.addEventListener("click", () => finish_dialog("cancel"));
  discard_modal.addEventListener("cancel", () => finish_dialog("cancel"));
  discard_modal.addEventListener("close", () => finish_dialog("cancel"));

  function ask_discard(message) {
    // abre o mini-modal e devolve "download" | "discard" | "cancel"
    return new Promise((resolve) => {
      dialog_resolve = resolve;
      discard_message.textContent = message;
      discard_modal.showModal();
    });
  }

  function download_canvas() {
    // gera o PNG do buffer (sem a grade do CSS) e dispara o download
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "pixel-art.png";
    link.click();
  }

  function resize_canvas() {
    // redimensiona o buffer e o estilo conforme state.size
    const side = state.size * CELL_SIZE;
    canvas.width = side;
    canvas.height = side;
    canvas.style.width = `${side}px`;
    canvas.style.height = `${side}px`;
  }

  function apply_grid(new_size) {
    // aplica o novo grid e limpa o desenho
    state.size = new_size;
    state.pixels.clear();
    resize_canvas();
    grid_size_value.textContent = `${new_size} × ${new_size}`;
    sync_clear_visibility();
  }

  btn_reset.addEventListener("click", () => {
    // limpa só os pixels; o tamanho atual do grid é mantido
    state.pixels.clear();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sync_clear_visibility();
  });

  btn_download.addEventListener("click", download_canvas);

  grid_size_input.addEventListener("change", async () => {
    // aplica o grid ao soltar o slider; com desenho, diálogo de descarte
    const new_size = Number(grid_size_input.value);
    if (new_size === state.size) return;

    if (state.pixels.size > 0) {
      const action = await ask_discard("Trocar o grid apaga seu desenho.");
      if (action === "cancel") {
        grid_size_input.value = state.size;
        grid_size_value.textContent = `${state.size} × ${state.size}`;
        return;
      }
      if (action === "download") download_canvas();
    }
    apply_grid(new_size);
  });
});