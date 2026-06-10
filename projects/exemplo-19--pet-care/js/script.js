document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const headerNav = document.getElementById("headerNav");
  const menuBackdrop = document.getElementById("menuBackdrop");
  const header = document.getElementById("header");

  function openMenu() {
    headerNav.classList.add("active");
    menuBackdrop.classList.add("active");
    menuToggle.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    headerNav.classList.remove("active");
    menuBackdrop.classList.remove("active");
    menuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  menuBackdrop.addEventListener("click", closeMenu);

  document.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 50);
  });

  if (prefersReduced) return;

  gsap.registerPlugin(ScrollTrigger);

  const heroTl = gsap.timeline();
  heroTl
    .from(".hero__badge", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
    .from(
      ".hero__title",
      { y: 50, opacity: 0, duration: 1.2, ease: "power3.out" },
      "-=0.6",
    )
    .from(
      ".hero__subtitle",
      { y: 50, opacity: 0, duration: 1.2, ease: "power3.out" },
      "-=0.5",
    )
    .from(
      ".hero__actions",
      { y: 50, opacity: 0, duration: 1.2, ease: "power3.out" },
      "-=0.4",
    )
    .from(
      ".hero__stats",
      { y: 50, opacity: 0, duration: 1.2, ease: "power3.out" },
      "-=0.4",
    )
    .from(
      ".hero__image-wrapper",
      { scale: 0.8, opacity: 0, duration: 1.2, ease: "power3.out" },
      "-=0.6",
    );

  gsap.to(".hero__image-wrapper", {
    y: -20,
    duration: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(".hero__blob--1", {
    y: -20,
    duration: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(".hero__blob--2", {
    y: 15,
    duration: 5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  const counters = gsap.utils.toArray(".hero__stat-number");
  counters.forEach((el) => {
    const target = parseInt(el.dataset.target) || 0;
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
        });
      },
    });
  });

  gsap.to(".services__deco--paw", {
    y: -12,
    duration: 3.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(".services__deco--heart", {
    y: 10,
    duration: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.utils.toArray(".services__card").forEach((card, i) => {
    gsap.from(card, {
      y: 60,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });

  gsap.from(".why__image-wrapper", {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".why",
      start: "top 80%",
      once: true,
    },
  });

  gsap.utils.toArray(".why__item").forEach((item, i) => {
    gsap.from(item, {
      x: 40,
      opacity: 0,
      duration: 0.5,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        once: true,
      },
    });
  });

  gsap.utils.toArray(".adoption__card").forEach((card, i) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });

  gsap.utils.toArray(".trust__item").forEach((item, i) => {
    gsap.from(item, {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        once: true,
      },
    });
  });

  gsap.utils.toArray(".blog__card").forEach((card, i) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        once: true,
      },
    });
  });

  gsap.from(".newsletter__content", {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".newsletter",
      start: "top 80%",
      once: true,
    },
  });

  const track = document.getElementById("testimonialsTrack");
  const prevBtn = document.getElementById("testPrev");
  const nextBtn = document.getElementById("testNext");
  const dotsContainer = document.getElementById("testDots");
  const cards = track.querySelectorAll(".testimonials__card");
  let currentIndex = 0;
  let cardsPerView = 3;
  let cardGap = 24;

  function updateCardsPerView() {
    const w = window.innerWidth;
    if (w < 640) cardsPerView = 1;
    else if (w < 1024) cardsPerView = 2;
    else cardsPerView = 3;
  }

  function getCardWidth() {
    const wrapper = track.parentElement;
    const wrapperWidth = wrapper.offsetWidth;
    const totalGap = (cardsPerView - 1) * cardGap;
    return (wrapperWidth - totalGap) / cardsPerView;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - cardsPerView);
  }

  function goToSlide(index) {
    const max = getMaxIndex();
    currentIndex = Math.max(0, Math.min(index, max));
    const cardWidth = getCardWidth();
    const translateX = -(currentIndex * (cardWidth + cardGap));
    gsap.to(track, {
      x: translateX,
      duration: 0.5,
      ease: "power3.out",
    });
    updateDots();
  }

  function createDots() {
    dotsContainer.innerHTML = "";
    const max = getMaxIndex();
    for (let i = 0; i <= max; i++) {
      const dot = document.createElement("button");
      dot.className = `testimonials__dot${i === 0 ? " active" : ""}`;
      dot.setAttribute("aria-label", `Slide ${i + 1}`);
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    dotsContainer.querySelectorAll(".testimonials__dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function handleResize() {
    updateCardsPerView();
    createDots();
    goToSlide(currentIndex);
  }

  updateCardsPerView();
  createDots();

  window.addEventListener("resize", () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(handleResize, 200);
  });

  prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  gsap.from(".testimonials__card", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 80%",
      once: true,
    },
  });

  document.querySelectorAll(".adoption__card-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".adoption__card");
      const name =
        card?.querySelector(".adoption__card-name")?.textContent ||
        "your new friend";
      alert(
        `Thank you for your interest in adopting ${name}! We'll contact you soon.`,
      );
    });
  });

  const newsletterForm = document.getElementById("newsletterForm");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector(".newsletter__input");
    if (input.value.trim()) {
      alert(
        "Thank you for subscribing! We'll keep you updated with pet care tips.",
      );
      input.value = "";
    }
  });

  document.querySelectorAll('.header__link[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  document
    .querySelectorAll('.hero__btn[href^="#"], .adoption__cta-btn[href^="#"]')
    .forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
});
