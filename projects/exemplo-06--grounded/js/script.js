(function () {
  "use strict";
  
  // Tailwind Config
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          "cool-river": "#669788",
          sky: "#A9CFDF",
          twilight: "#26466D",
          moss: "#BAA45C",
          "amber-sunset": "#E0A866",
          fawn: "#CFB8A0",
          moonlight: "#E7EBD7",
        },
        fontFamily: {
          sans: ["Atkinson Hyperlegible", "sans-serif"],
          serif: ["Cormorant Garamond", "serif"],
        },
      },
    },
  };

  const CONFIG = {
    SCROLL_THRESHOLD: 50,
    ANIMATION_DURATION: { fast: 0.3, normal: 0.5, slow: 1 },
    STAGGER_DELAY: 0.1,
    MESSAGE_DISPLAY_TIME: 5000,
    MENU_LINK_ANIMATION_DELAY: 0.2,
    GSAP_EASE: {
      default: "power3.out",
      elastic: "elastic.out(1, 0.5)",
      sine: "sine.inOut",
    },
  };

  const selectors = {
    navbar: "#navbar",
    mobileMenuBtn: "#mobile-menu-btn",
    mobileMenuClose: "#mobile-menu-close",
    mobileMenuOverlay: "#mobile-menu-overlay",
    mobileMenuLinks: ".mobile-menu-link",
    contactForm: "#contact-form",
    formMessage: "#form-message",
    heroSection: "#hero",
    heroIcon: "#hero-icon",
    heroTitle: "#hero-title",
    heroSubtitle: "#hero-subtitle",
    heroTagline: "#hero-tagline",
    heroCta: "#hero-cta",
    gsapSlideElements: ".gsap-slide",
    benefitCards: ".benefit-card",
    hoverLiftElements: ".hover-lift",
    anchorLinks: 'a[href^="#"]',
  };

  const state = {
    isMenuOpen: false,
  };

  function querySelector(selector) {
    return document.querySelector(selector);
  }

  function querySelectorAll(selector) {
    return document.querySelectorAll(selector);
  }

  function safeCall(fn, context = {}) {
    try {
      return fn.call(context);
    } catch (error) {
      console.error("Execution error:", error);
      return null;
    }
  }

  function initLucide() {
    if (typeof lucide !== "undefined" && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  function initGSAP() {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  const Navbar = {
    init() {
      const navbar = querySelector(selectors.navbar);
      if (!navbar) return;

      const onScroll = () => {
        const scrolled = window.scrollY > CONFIG.SCROLL_THRESHOLD;
        navbar.classList.toggle("scrolled", scrolled);
      };

      window.addEventListener("scroll", onScroll, { passive: true });
    },
  };

  const MobileMenu = {
    init() {
      const btn = querySelector(selectors.mobileMenuBtn);
      const closeBtn = querySelector(selectors.mobileMenuClose);
      const overlay = querySelector(selectors.mobileMenuOverlay);
      const links = querySelectorAll(selectors.mobileMenuLinks);

      if (!btn || !overlay) return;

      const open = () => {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
        state.isMenuOpen = true;
        btn.setAttribute("aria-expanded", "true");

        gsap.fromTo(
          links,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: CONFIG.ANIMATION_DURATION.normal,
            stagger: CONFIG.STAGGER_DELAY,
            ease: CONFIG.GSAP_EASE.default,
            delay: CONFIG.MENU_LINK_ANIMATION_DELAY,
          },
        );
      };

      const close = () => {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
        state.isMenuOpen = false;
        btn.setAttribute("aria-expanded", "false");
      };

      btn.addEventListener("click", open);
      closeBtn?.addEventListener("click", close);

      links.forEach((link) => link.addEventListener("click", close));
    },
  };

  const HeroAnimations = {
    init() {
      const icon = querySelector(selectors.heroIcon);
      const title = querySelector(selectors.heroTitle);
      const subtitle = querySelector(selectors.heroSubtitle);
      const tagline = querySelector(selectors.heroTagline);
      const cta = querySelector(selectors.heroCta);

      if (!icon || !gsap) return;

      gsap.fromTo(
        icon,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: CONFIG.GSAP_EASE.elastic,
          scrollTrigger: {
            trigger: selectors.heroSection,
            start: "top center",
          },
        },
      );

      gsap.to(icon, {
        scale: 1.1,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: CONFIG.GSAP_EASE.sine,
      });

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: CONFIG.GSAP_EASE.default,
          },
        );
      }

      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: CONFIG.GSAP_EASE.default,
          },
        );
      }

      if (tagline) {
        gsap.fromTo(
          tagline,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.7,
            ease: CONFIG.GSAP_EASE.default,
          },
        );
      }

      if (cta) {
        gsap.fromTo(
          cta,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.9,
            ease: CONFIG.GSAP_EASE.default,
          },
        );
      }
    },
  };

  const ScrollAnimations = {
    init() {
      const slideElements = querySelectorAll(selectors.gsapSlideElements);
      const benefitCards = querySelectorAll(selectors.benefitCards);

      if (!gsap || !ScrollTrigger) return;

      slideElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: CONFIG.ANIMATION_DURATION.slow,
            ease: CONFIG.GSAP_EASE.default,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      benefitCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: index * CONFIG.STAGGER_DELAY,
            ease: CONFIG.GSAP_EASE.default,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
  };

  const HoverEffects = {
    init() {
      const elements = querySelectorAll(selectors.hoverLiftElements);

      elements.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: CONFIG.ANIMATION_DURATION.fast,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: CONFIG.ANIMATION_DURATION.fast,
            ease: "power2.out",
          });
        });
      });
    },
  };

  const ContactForm = {
    init() {
      const form = querySelector(selectors.contactForm);
      const message = querySelector(selectors.formMessage);

      if (!form || !message) return;

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        message.textContent = "Thank you! We'll be in touch within 24 hours.";
        message.classList.remove("hidden", "text-red-400");
        message.classList.add("text-green-400");

        gsap.fromTo(
          message,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: CONFIG.ANIMATION_DURATION.normal },
        );

        form.reset();

        setTimeout(() => {
          gsap.to(message, {
            opacity: 0,
            duration: CONFIG.ANIMATION_DURATION.normal,
            onComplete: () => message.classList.add("hidden"),
          });
        }, CONFIG.MESSAGE_DISPLAY_TIME);

        console.log("Form submitted:", data);
      });
    },
  };

  const SmoothScroll = {
    init() {
      const anchors = querySelectorAll(selectors.anchorLinks);

      anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target && gsap) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: target, offsetY: 80 },
              ease: "power3.inOut",
            });
          }
        });
      });
    },
  };

  function init() {
    safeCall(initLucide);
    safeCall(initGSAP);
    safeCall(Navbar.init);
    safeCall(MobileMenu.init);
    safeCall(HeroAnimations.init);
    safeCall(ScrollAnimations.init);
    safeCall(HoverEffects.init);
    safeCall(ContactForm.init);
    safeCall(SmoothScroll.init);

    setTimeout(() => safeCall(initLucide), 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
