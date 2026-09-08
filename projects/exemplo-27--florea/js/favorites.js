(function () {
  "use strict";

  let favorites = loadFavorites();

  function loadFavorites() {
    try {
      const stored = JSON.parse(localStorage.getItem("florea-favorites") || "[]");
      return Array.isArray(stored) ? stored : [];
    } catch (e) {
      return [];
    }
  }

  function save() {
    localStorage.setItem("florea-favorites", JSON.stringify(favorites));
  }

  function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index === -1) {
      favorites.push(id);
    } else {
      favorites.splice(index, 1);
    }
    save();
    return favorites;
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  function notifyFavoritesChanged() {
    const grid = document.querySelector(".catalog__grid");
    if (grid) {
      const card = grid.querySelector(`[data-id="${document.activeElement.dataset.favorite || ""}"]`);
      if (card) {
        card.classList.toggle("is-favorited");
      }
    }
  }

  window.FloreaFavorites = {
    get: () => favorites.slice(),
    toggleFavorite,
    isFavorite
  };
})();
