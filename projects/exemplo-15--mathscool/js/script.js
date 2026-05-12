(function () {
  "use strict";

  gsap.registerPlugin(ScrollToPlugin, SplitText, ScrollTrigger);

  const CONFIG = {
    animDuration: 0.8,
    animStagger: 0.1,
    easeOut: "power3.out",
    easeBack: "back.out(1.7)",
    scrollDuration: 1,
    scrollEase: "power3.inOut",
  };

  function initHeroAnimation() {
    const elements = {
      title: document.querySelector(".hero__title"),
      subtitle: document.querySelector(".hero__subtitle"),
      buttons: document.querySelector(".hero__buttons"),
      images: document.querySelectorAll(".hero__image"),
      texts: document.querySelectorAll(".hero__text"),
    };

    const tl = gsap.timeline();

    if (elements.title) {
      const splitTitle = new SplitText(elements.title, { type: "lines" });
      tl.from(
        splitTitle.lines,
        {
          rotationX: -100,
          transformOrigin: "50% 50% -160px",
          opacity: 0,
          duration: 0.8,
          ease: "power3",
          stagger: 0.25,
        },
        0,
      );
    }

    if (elements.subtitle) {
      const splitSubtitle = new SplitText(elements.subtitle, { type: "lines" });
      tl.from(
        splitSubtitle.lines,
        {
          rotationX: -100,
          transformOrigin: "50% 50% -160px",
          opacity: 0,
          duration: 0.8,
          ease: "power3",
          stagger: 0.25,
        },
        "-=0.2",
      );
    }

    if (elements.buttons) {
      tl.from(
        elements.buttons.children,
        {
          y: -50,
          opacity: 0,
          scale: 0.8,
          stagger: 0.15,
          duration: 0.5,
          ease: CONFIG.easeBack,
        },
        "-=0.3",
      );
    }

    if (elements.images.length) {
      tl.from(
        elements.images,
        {
          y: -30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
        },
        "-=0.2",
      );
    }

    if (elements.texts.length) {
      tl.from(
        elements.texts,
        {
          y: -30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.5,
        },
        "-=0.3",
      );
    }

    return tl;
  }

  function initMobileMenu() {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("active");
        menu.classList.remove("active");
        document.body.classList.remove("menu-open");
      });
    });
  }

  function initForm() {
    const form = document.querySelector(".form__inputs form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Este é apenas um showcase. Nenhum dado será enviado.");
    });

    const emailInput = form.querySelector("#email");
    const phoneInput = form.querySelector("#phone");

    if (emailInput) {
      emailInput.addEventListener("blur", validateEmail);
    }
    if (phoneInput) {
      phoneInput.addEventListener("blur", validatePhone);
    }
  }

  function validateEmail() {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
    const errorEl = document.getElementById("email-error");

    if (this.value && !isValid) {
      this.classList.add("error");
      if (errorEl) errorEl.textContent = "Enter a valid email address";
    } else {
      this.classList.remove("error");
      if (errorEl) errorEl.textContent = "";
    }
  }

  function validatePhone() {
    const isValid = /^[\d\s\-()]+$/.test(this.value);
    const errorEl = document.getElementById("phone-error");

    if (this.value && !isValid) {
      this.classList.add("error");
      if (errorEl) errorEl.textContent = "Enter a valid phone number";
    } else {
      this.classList.remove("error");
      if (errorEl) errorEl.textContent = "";
    }
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          gsap.to(window, {
            duration: CONFIG.scrollDuration,
            scrollTo: {
              y: target,
              offsetY: 0,
              ease: CONFIG.scrollEase,
            },
          });
        }
      });
    });
  }

  function initCardsHover() {
    const cards = document.querySelectorAll(
      ".grid-cards__item, .courses__card",
    );
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -8,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }

  function initParallax() {
    const heroImages = document.querySelectorAll(".hero__image");
    if (heroImages.length) {
      gsap.to(heroImages, {
        y: () => window.innerHeight * 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeroAnimation();
    initMobileMenu();
    initForm();
    initSmoothScroll();
    initCardsHover();
    initParallax();
  });
})();
