(function () {
  "use strict";

  const menu = document.querySelector("[data-menu]");
  const overlay = document.querySelector("[data-menu-overlay]");
  const hamburger = document.querySelector(".header__hamburger");
  const closeBtn = document.querySelector(".nav-side__close");

  function openMenu() {
    document.body.classList.add("menu-open");
    menu.classList.add("nav-side--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu-open");
    menu.classList.remove("nav-side--open");
  }

  hamburger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  if (window.lucide) {
    lucide.createIcons();
  }

  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,

    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  })

})();
