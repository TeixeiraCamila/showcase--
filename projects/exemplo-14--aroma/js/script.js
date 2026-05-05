// Mobile menu toggle
const toggle = document.querySelector('.header__toggle');
const closeBtn = document.querySelector('.header__close');
const nav = document.querySelector('.header__nav');

toggle?.addEventListener('click', () => {
  nav.classList.toggle('active');
});

closeBtn?.addEventListener('click', () => {
  nav.classList.remove('active');
});