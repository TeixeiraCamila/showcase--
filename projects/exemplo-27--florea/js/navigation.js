(function () {
  "use strict";

  function toggleMenu(menu, open) {
    menu.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function initNavigation() {
    const header = document.querySelector(".header");
    const menuBtn = document.querySelector("[data-menu-open]");
    const closeBtn = document.querySelector("[data-menu-close]");
    const menu = document.querySelector(".mobile-menu");
    const backdrop = document.querySelector("[data-menu-backdrop]");
    const menuLinks = menu ? menu.querySelectorAll("a[data-menu-link]") : [];

    const onScroll = () => {
      if (header) {
        header.classList.toggle("is-scrolled", window.scrollY > 40);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (menuBtn) {
      menuBtn.addEventListener("click", () => toggleMenu(menu, true));
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", () => toggleMenu(menu, false));
    }
    if (backdrop) {
      backdrop.addEventListener("click", () => toggleMenu(menu, false));
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu && menu.classList.contains("is-open")) {
        toggleMenu(menu, false);
      }
    });
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(menu, false));
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          event.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        if (window.lenis) {
          window.lenis.scrollTo(top);
        } else {
          window.scrollTo({ top, behavior: "smooth" });
        }
        }
      });
    });
  }

  window.FloreaNavigation = {
    initNavigation
  };
})();
