(function () {
  "use strict";

  let selectedCategory = "todos";
  let lenis = null;

  function initResizeHandler() {
    let wasMobile = isMobile();
    window.addEventListener("resize", () => {
      const nowMobile = isMobile();
      if (wasMobile && !nowMobile) {
        destroyCatalogSwiper();
      } else if (!wasMobile && nowMobile) {
        initCatalogSwiper();
      }
      wasMobile = nowMobile;
    });
  }

  function initSmoothScroll() {
    if (!window.Lenis || !window.gsap || !window.ScrollTrigger) return;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on("scroll", ScrollTrigger.update);

    document.documentElement.classList.add("lenis");

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;
  }

  function initSwiper() {
    const slider = document.querySelector(".testimonials__slider");
    if (!slider || !window.Swiper) return;

    new Swiper(slider, {
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: slider.querySelector(".swiper-pagination"),
        clickable: true
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      }
    });
  }

  let catalogSwiper = null;

  function isMobile() {
    return window.matchMedia("(max-width: 640px)").matches;
  }

  function destroyCatalogSwiper() {
    if (catalogSwiper) {
      catalogSwiper.destroy(true, true);
      catalogSwiper = null;
    }
  }

  function initCatalogSwiper() {
    destroyCatalogSwiper();
    if (!isMobile() || !window.Swiper) return;

    const swiperEl = document.querySelector(".catalog__swiper");
    if (!swiperEl) return;

    catalogSwiper = new Swiper(swiperEl, {
      slidesPerView: 1.15,
      spaceBetween: 16,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: swiperEl.querySelector(".swiper-pagination"),
        clickable: true
      }
    });
  }

  function initCatalog() {
    const grid = document.querySelector(".catalog__grid");
    const filtersContainer = document.querySelector(".catalog__filters");

    window.FloreaCatalog.renderCatalog(grid, products, window.FloreaFavorites.get());
    if (window.FloreaAnimations) {
      window.FloreaAnimations.animateCardsIn(grid);
    }

    initCatalogSwiper();

    if (!filtersContainer) return;

    window.FloreaFilters.buildFilters(filtersContainer);

    filtersContainer.addEventListener("click", (event) => {
      const btn = event.target.closest(".filter-btn");
      if (!btn) return;

      const category = btn.dataset.category;
      if (category === selectedCategory) return;

      selectedCategory = category;

      filtersContainer
        .querySelectorAll(".filter-btn")
        .forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });

      window.FloreaFilters.getFiltered(
        products,
        category,
        grid,
        window.FloreaFavorites.get(),
        () => {
          if (isMobile()) initCatalogSwiper();
        }
      );
    });
  }

  function initFavorites() {
    const grid = document.querySelector(".catalog__grid");

    grid.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-favorite]");
      if (!btn) return;

      const id = Number(btn.dataset.favorite);
      window.FloreaFavorites.toggleFavorite(id);
      btn.classList.toggle("is-favorited");
      btn.setAttribute(
        "aria-label",
        window.FloreaFavorites.isFavorite(id)
          ? "Remover dos favoritos"
          : "Adicionar aos favoritos"
      );
    });
  }

  function initNewsletter() {
    const form = document.querySelector("[data-newsletter-form]");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const input = form.querySelector('input[type="email"]');
      const feedback = form.querySelector("[data-newsletter-feedback]");
      const value = (input.value || "").trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(value)) {
        feedback.textContent = "Digite um e-mail válido.";
        feedback.className = "newsletter__feedback is-error";
        return;
      }

      feedback.textContent = "Obrigado! Você receberá nossas novidades.";
      feedback.className = "newsletter__feedback is-success";
      form.reset();
    });
  }

  function initWhatsappCard() {
    const btn = document.querySelector(".header__whatsapp");
    const card = document.querySelector("[data-whatsapp-card]");
    if (!btn || !card) return;

    const open = () => card.classList.add("is-open");
    const close = () => card.classList.remove("is-open");

    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (card.classList.contains("is-open")) {
        close();
      } else {
        open();
      }
    });

    const closeBtn = card.querySelector("[data-whatsapp-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        close();
      });
    }

    document.addEventListener("click", (event) => {
      if (!card.contains(event.target)) {
        close();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        close();
      }
    });
  }

  function initLucide() {
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function init() {
    initLucide();
    initCatalog();
    initFavorites();
    initNewsletter();
    initSwiper();
    initWhatsappCard();
    initSmoothScroll();
    initResizeHandler();

    if (window.FloreaNavigation) {
      window.FloreaNavigation.initNavigation();
    }
    if (window.FloreaAnimations) {
      window.FloreaAnimations.initHeroAnimation();
      window.FloreaAnimations.initScrollAnimations();
      window.FloreaAnimations.initEditorialAnimation();
      window.FloreaAnimations.initParallax();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
