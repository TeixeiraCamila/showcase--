(function () {
  "use strict";

  function initHeroAnimation() {
    if (!window.gsap) return;

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .from(".hero__tagline", { y: 20, opacity: 0, duration: 0.8 })
      .from(
        ".hero__title .line",
        {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out"
        },
        "-=0.4"
      )
      .from(".hero__description", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(".hero__cta", { y: 10, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero__media", { scale: 1.06, opacity: 0, duration: 1.4 }, "-=0.8");
  }

  function initScrollAnimations() {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%"
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out"
      });
    });

    gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
      gsap.from(group.querySelectorAll("[data-reveal-item]"), {
        scrollTrigger: {
          trigger: group,
          start: "top 85%"
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }

  function initEditorialAnimation() {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.utils.toArray(".editorial-banner__title .line").forEach((line) => {
      const text = line.querySelector("span");
      if (text) {
        gsap.from(text, {
          scrollTrigger: {
            trigger: line,
            start: "top 85%"
          },
          yPercent: 110,
          duration: 1,
          ease: "power4.out"
        });
      }
    });

    gsap.from(".editorial-banner__cta", {
      scrollTrigger: {
        trigger: ".editorial-banner",
        start: "top 70%"
      },
      opacity: 0,
      y: 20,
      duration: 0.8
    });
  }

  function initParallax() {
    if (!window.gsap || !window.ScrollTrigger) return;

    gsap.to(".hero__background img", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      yPercent: 25,
      ease: "none"
    });
  }

  function getCards(grid) {
    return Array.prototype.filter.call(grid.children, (child) =>
      child.classList.contains("product-card")
    );
  }

  function animateCardsOut(grid, onComplete) {
    if (!window.gsap) {
      if (onComplete) onComplete();
      return;
    }

    const cards = getCards(grid);

    if (!cards.length) {
      if (onComplete) onComplete();
      return;
    }

    gsap.to(cards, {
      y: -32,
      opacity: 0,
      scale: 0.94,
      duration: 0.4,
      stagger: 0.06,
      ease: "power2.in",
      clearProps: "transform",
      onComplete
    });
  }

  function animateCardsIn(grid) {
    if (!window.gsap) return;

    const cards = getCards(grid);
    if (!cards.length) return;

    gsap.from(cards, {
      y: 40,
      opacity: 0,
      scale: 0.96,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out"
    });
  }

  function revealCards(grid) {
    animateCardsIn(grid || document.querySelector(".catalog__grid"));
  }

  window.FloreaAnimations = {
    initHeroAnimation,
    initScrollAnimations,
    initEditorialAnimation,
    initParallax,
    revealCards,
    animateCardsOut,
    animateCardsIn
  };
})();
