(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       AOS — Scroll Animations
       ======================================== */
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    /* ========================================
       Swiper — Logo Marquee
       ======================================== */
    new Swiper(".trusted__swiper", {
      slidesPerView: 3,
      spaceBetween: 48,
      loop: true,
      speed: 6000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: { slidesPerView: 4, spaceBetween: 48 },
        768: { slidesPerView: 5, spaceBetween: 64 },
        1024: { slidesPerView: 6, spaceBetween: 80 },
      },
    });

    /* ========================================
       Swiper — Testimonials
       ======================================== */
    new Swiper(".testimonials__swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    /* ========================================
       Header — Scroll Behavior
       ======================================== */
    const header = document.getElementById("header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 40) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
      lastScroll = currentScroll;
    }, { passive: true });

    /* ========================================
       Mobile Menu
       ======================================== */
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileNavLinks = mobileMenu.querySelectorAll("a");

    hamburger.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("mobile-menu--open");
      hamburger.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isOpen);
      mobileMenu.setAttribute("aria-hidden", !isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("mobile-menu--open");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    });

    /* ========================================
       GSAP — Hero Entrance
       ======================================== */
    gsap.from(".hero__badge", {
      opacity: 0,
      y: 24,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".hero__title", {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.from(".hero__desc", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.6,
      ease: "power3.out",
    });

    gsap.from(".hero__actions .btn", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".hero__dashboard", {
      opacity: 0,
      x: 60,
      duration: 1.2,
      delay: 0.6,
      ease: "power3.out",
    });

    /* ========================================
       GSAP — ScrollTrigger Animations
       ======================================== */
    gsap.registerPlugin(ScrollTrigger);

    /* --- Numbers Count Up --- */
    const countValues = document.querySelectorAll("[data-count]");

    countValues.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-count"));
      const isDecimal = target % 1 !== 0;
      const suffix = el.nextElementSibling.textContent;

      gsap.fromTo(
        el,
        { textContent: 0 },
        {
          textContent: target,
          duration: 2.5,
          ease: "power2.out",
          snap: isDecimal ? { textContent: 0.1 } : { textContent: 1 },
          scrollTrigger: {
            trigger: el.closest(".numbers__grid"),
            start: "top 85%",
          },
        }
      );
    });

    /* --- Timeline Steps Stagger --- */
    gsap.from(".process__step", {
      opacity: 0,
      x: -40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process__timeline",
        start: "top 85%",
      },
    });

    /* --- Platform Features Stagger --- */
    gsap.from(".platform__feature", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".platform__grid",
        start: "top 85%",
      },
    });

    /* --- Tech Cards Stagger --- */
    gsap.from(".tech__card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".tech__grid",
        start: "top 85%",
      },
    });

    /* --- Chart Bar Growth --- */
    gsap.from(".chart-bar", {
      height: "0%",
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".casestudy__chart",
        start: "top 85%",
      },
    });

    /* ========================================
       Smooth Anchor Scrolling
       ======================================== */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offsetTop =
            target.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      });
    });

    /* ========================================
       Form Submission
       ======================================== */
    const form = document.querySelector(".contact__form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = "Thank You!";
        btn.style.background = "#42d392";
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = "Request a Quote";
          btn.style.background = "";
          btn.disabled = false;
          form.reset();
        }, 2500);
      });
    }
  });
})();
