(function () {
  "use strict";

  function buildFilters(container) {
    container.innerHTML = "";

    categories.forEach((category) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn";
      btn.dataset.category = category.id;
      btn.innerHTML = `${category.label} <span>${category.count}</span>`;
      btn.setAttribute("aria-pressed", "false");
      container.appendChild(btn);
    });

    const first = container.querySelector(".filter-btn");
    if (first) {
      first.classList.add("is-active");
      first.setAttribute("aria-pressed", "true");
    }
  }

  function getFiltered(list, categoryId, grid, favorites, onAnimated) {
    let filtered = list;
    if (categoryId !== "todos") {
      filtered = list.filter((product) => product.category === categoryId);
    }

    const render = () => {
      window.FloreaCatalog.renderCatalog(grid, filtered, favorites);
      refreshLucide();
      if (window.FloreaAnimations) {
        window.FloreaAnimations.animateCardsIn(grid);
      }
      if (onAnimated) onAnimated();
    };

    if (window.FloreaAnimations) {
      window.FloreaAnimations.animateCardsOut(grid, render);
    } else {
      render();
    }

    return filtered;
  }

  function refreshLucide() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  window.FloreaFilters = {
    buildFilters,
    getFiltered
  };
})();
