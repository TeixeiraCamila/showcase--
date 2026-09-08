// SCROLL ANIMATIONS
// Single IntersectionObserver for all scroll animations
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target;

      // Add visible class to elements with animation classes
      if (
        el.classList.contains("scroll-fade-up") ||
        el.classList.contains("scroll-fade-in") ||
        el.classList.contains("scroll-slide-right") ||
        el.classList.contains("scroll-slide-left") ||
        el.classList.contains("scroll-scale")
      ) {
        el.classList.add("is-visible");
      }

      // Counter animation for achievement numbers
      if (el.classList.contains("about__achievement-number")) {
        if (el.dataset.counted) return;
        el.dataset.counted = "true";

        const targetNumber = +el.dataset.number;
        let current = 0;
        const increment = Math.ceil(targetNumber / 60);

        const counter = setInterval(() => {
          current += increment;
          if (current >= targetNumber) {
            el.innerHTML = `${targetNumber} <span>+</span>`;
            clearInterval(counter);
          } else {
            el.innerHTML = `${current} <span>+</span>`;
          }
        }, 100);
      }

      // Typing effect for titles
      if (el.classList.contains("title--entry")) {
        if (el.dataset.typed) return;
        el.dataset.typed = "true";

        const textNode = Array.from(el.childNodes).find(
          (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== "",
        );
        if (textNode) {
          const fullText = textNode.textContent.trim();
          textNode.textContent = "";
          let i = 0;
          const type = setInterval(() => {
            textNode.textContent += fullText[i];
            i++;
            if (i >= fullText.length) clearInterval(type);
          }, 100);
        }
      }

      scrollObserver.unobserve(el);
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

// Observe all animated elements
document
  .querySelectorAll(
    ".scroll-fade-up, .scroll-fade-in, .scroll-slide-right, .scroll-slide-left, .scroll-scale, .about__achievement-number, .title--entry",
  )
  .forEach((el) => scrollObserver.observe(el));

// PRELOADER
const loader = document.getElementById("loader");

function hideLoader() {
  loader.classList.add("is-hidden");
}

window.addEventListener("load", () => {
  hideLoader();
});

setTimeout(hideLoader, 4000);

// SLIDER (Swiper)
const swiper = new Swiper(".project__swiper", {
  loop: true,
  speed: 700,
  effect: "slide",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".project__slider-arrow--next",
    prevEl: ".project__slider-arrow--prev",
  },
  keyboard: {
    enabled: true,
  },
  grabCursor: true,
});

// MOBILE MENU
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menuClose = document.querySelector('.mobile-menu__close');
const menuLinks = document.querySelectorAll('.mobile-menu__list a');

function openMenu() {
	menuToggle.setAttribute('aria-expanded', 'true');
	mobileMenu.classList.add('is-open');
	menuOverlay.classList.add('is-open');
	document.body.style.overflow = 'hidden';
}

function closeMenu() {
	menuToggle.setAttribute('aria-expanded', 'false');
	mobileMenu.classList.remove('is-open');
	menuOverlay.classList.remove('is-open');
	document.body.style.overflow = '';
}

menuToggle?.addEventListener('click', () => {
	const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
	isOpen ? closeMenu() : openMenu();
});

menuClose?.addEventListener('click', closeMenu);
menuOverlay?.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
	link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
		closeMenu();
	}
});

// NOTICE CARD
const noticeToggle = document.querySelector('[data-notice-toggle]');
const noticeCard = document.querySelector('[data-notice-card]');

function openNotice() {
	if (!noticeCard) return;
	noticeCard.classList.add('is-open');
}

function closeNotice() {
	if (!noticeCard) return;
	noticeCard.classList.remove('is-open');
}

noticeToggle?.addEventListener('click', (event) => {
	event.stopPropagation();
	if (noticeCard?.classList.contains('is-open')) {
		closeNotice();
	} else {
		openNotice();
	}
});

noticeCard?.querySelector('[data-notice-close]')?.addEventListener('click', (event) => {
	event.stopPropagation();
	closeNotice();
});

document.addEventListener('click', (event) => {
	if (noticeCard && !noticeCard.contains(event.target)) {
		closeNotice();
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') closeNotice();
});
