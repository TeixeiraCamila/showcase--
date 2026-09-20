(function () {
  "use strict";

  // barra de progresso fixa no topo: expõe setter global pra script.js usar
  const bar = document.getElementById("progress_bar");
  if (!bar) return;

  window.progressBar = {
    set(ratio) {
      bar.style.width = (ratio * 100) + "%";
    },
  };
})();