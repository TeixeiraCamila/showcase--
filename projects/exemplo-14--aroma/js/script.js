"use strict";

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const toggle = document.querySelector(".header__toggle");
  const closeBtn = document.querySelector(".header__close");
  const nav = document.querySelector(".header__nav");
  const backdrop = document.querySelector(".header__backdrop");

  function openMenu() {
    nav.classList.add("active");
    backdrop.classList.add("active");
  }

  function closeMenu() {
    nav.classList.remove("active");
    backdrop.classList.remove("active");
  }

  toggle?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  backdrop?.addEventListener("click", closeMenu);

  const overlays = document.querySelectorAll(".split__overlay");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hidden");
        }
      });
    },
    { threshold: 0.2 }
  );
  overlays.forEach((el) => observer.observe(el));
});