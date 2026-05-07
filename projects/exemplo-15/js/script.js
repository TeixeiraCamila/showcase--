const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const body = document.body;

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  });

  document.querySelectorAll('.nav__list a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      body.classList.remove('menu-open');
    });
  });
}

const formInputs = document.querySelector('.form__inputs');
if (formInputs) {
  const formButton = formInputs.querySelector('button');
  formButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Este é apenas um showcase. Nenhum dado será enviado.');
  });
}