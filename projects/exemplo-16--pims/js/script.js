"use strict";

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const toggle = document.querySelector(".nav__toggle");
  const close = document.querySelector(".nav__close");
  const menu = document.querySelector(".nav__menu");
  const backdrop = document.querySelector(".nav__backdrop");
  const links = document.querySelectorAll(".nav__link");

  function openMenu() {
    menu.classList.add("nav__menu--open");
  }

  function closeMenu() {
    menu.classList.remove("nav__menu--open");
  }

  toggle.addEventListener("click", openMenu);
  close.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
  links.forEach((link) => link.addEventListener("click", closeMenu));
});
