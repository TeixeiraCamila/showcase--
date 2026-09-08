(function () {
  "use strict";

  function formatPrice(value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  }

  function createCard(product, favorites) {
    const card = document.createElement("article");
    card.className = "product-card swiper-slide";
    card.dataset.category = product.category;
    card.dataset.id = product.id;

    const favorited = favorites.includes(product.id);

    card.innerHTML = `
      <div class="product-card__media">
        <img
          class="product-card__image"
          src="${product.image}"
          alt="${product.alt}"
          loading="lazy"
          width="600"
          height="800"
        >
        <button
          class="product-card__favorite${favorited ? " is-favorited" : ""}"
          aria-label="${favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}"
          data-favorite="${product.id}"
        >
          <i data-lucide="heart" class="header__icon" aria-hidden="true"></i>
        </button>
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${categoryLabel(product.category)}</p>
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__description">${product.description}</p>
      </div>
      <div class="product-card__footer">
        <span class="product-card__price">${formatPrice(product.price)}</span>
        <button class="product-card__add" data-add="${product.id}">
          Adicionar
          <i data-lucide="arrow-right" class="header__icon" aria-hidden="true"></i>
        </button>
      </div>
    `;

    return card;
  }

  function categoryLabel(id) {
    const found = categories.find((c) => c.id === id);
    return found ? found.label : id;
  }

  function renderCatalog(container, list, favorites) {
    container.innerHTML = "";

    if (!list.length) {
      const empty = document.createElement("p");
      empty.className = "catalog__empty";
      empty.textContent = "Nenhum produto nesta categoria ainda.";
      container.appendChild(empty);
      return;
    }

    list.forEach((product) => {
      container.appendChild(createCard(product, favorites));
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  window.FloreaCatalog = {
    formatPrice,
    renderCatalog
  };
})();
