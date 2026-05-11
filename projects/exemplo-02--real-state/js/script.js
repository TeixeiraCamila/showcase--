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

// SLIDER
const slider = document.querySelector(".project__slider");
const track = slider.querySelector(".project__slider-track");
const slides = slider.querySelectorAll(".project__slider-item");
const prevBtn = slider.querySelector(".project__slider-arrow--prev");
const nextBtn = slider.querySelector(".project__slider-arrow--next");

let index = 0;
let autoplay;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle("project__slider-item--active", i === index);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

function startAutoplay() {
  autoplay = setInterval(nextSlide, 8000);
}

function stopAutoplay() {
  clearInterval(autoplay);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoplay();
  startAutoplay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoplay();
  startAutoplay();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  } else if (e.key === "ArrowRight") {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  }
});

slider.addEventListener("mouseenter", stopAutoplay);
slider.addEventListener("mouseleave", startAutoplay);

updateSlider();
startAutoplay();

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
