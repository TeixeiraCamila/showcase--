(function () {
  "use strict";
  
  // Tailwind Config
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          twilight: "#26466D",
          moss: "#BAA45C",
          "amber-sunset": "#E0A866",
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
    ANIMATION_DURATION: { fast: 0.3, normal: 0.5, slow: 1, slide: 1.2 },
    STAGGER_DELAY: 0.1,
    MENU_LINK_ANIMATION_DELAY: 0.2,
    GSAP_EASE: {
      default: "power2.out",
      elastic: "elastic.out(1, 0.5)",
      sine: "sine.inOut",
      scroll: "power3.inOut",
    },
  };

  const selectors = {
    navbar: "#navbar",
    mobileMenuBtn: "#mobile-menu-btn",
    mobileMenuClose: "#mobile-menu-close",
    mobileMenuOverlay: "#mobile-menu-overlay",
    mobileMenuLinks: ".mobile-menu-link",
    contactForm: "#contact-form",
    noticeDialog: "#notice-dialog",
    heroSection: "#hero",
    heroIcon: "#hero-icon",
    heroTitle: "#hero-title",
    heroSubtitle: "#hero-subtitle",
    heroTagline: "#hero-tagline",
    heroCta: "#hero-cta",
    gsapSlideElements: ".gsap-slide:not(.benefit-card)",
    benefitsGrid: "#benefits-grid",
    benefitCards: ".benefit-card",
    hoverLiftElements: ".hover-lift",
    anchorLinks: 'a[href^="#"]',
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

      const staggeredElements = [
        { selector: selectors.heroTitle, delay: 0.3 },
        { selector: selectors.heroSubtitle, delay: 0.5 },
        { selector: selectors.heroTagline, delay: 0.7 },
        { selector: selectors.heroCta, delay: 0.9 },
      ];

      staggeredElements.forEach(({ selector, delay }) => {
        const element = querySelector(selector);
        if (!element) return;

        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            ease: CONFIG.GSAP_EASE.default,
          },
        );
      });
    },
  };

  const ScrollAnimations = {
    init() {
      if (!gsap || !ScrollTrigger) return;

      const slideElements = querySelectorAll(selectors.gsapSlideElements);
      const benefitsGrid = querySelector(selectors.benefitsGrid);
      const benefitCards = querySelectorAll(selectors.benefitCards);

      slideElements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: CONFIG.ANIMATION_DURATION.slide,
            ease: CONFIG.GSAP_EASE.default,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      if (benefitsGrid && benefitCards.length) {
        gsap.fromTo(
          benefitCards,
          { opacity: 0, y: 50, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: CONFIG.ANIMATION_DURATION.slide,
            stagger: CONFIG.STAGGER_DELAY,
            ease: CONFIG.GSAP_EASE.default,
            scrollTrigger: {
              trigger: benefitsGrid,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
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
            ease: CONFIG.GSAP_EASE.default,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: CONFIG.ANIMATION_DURATION.fast,
            ease: CONFIG.GSAP_EASE.default,
          });
        });
      });
    },
  };

  const ContactForm = {
    init() {
      const form = querySelector(selectors.contactForm);

      if (!form) return;

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.reset();
        NoticeDialog.open();
      });
    },
  };

  const NoticeDialog = {
    open() {
      const dialog = querySelector(selectors.noticeDialog);
      if (!dialog) return;

      dialog.classList.remove("hidden");
      document.body.style.overflow = "hidden";

      if (gsap) {
        gsap.fromTo(
          dialog,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: CONFIG.ANIMATION_DURATION.normal,
            ease: CONFIG.GSAP_EASE.default,
          },
        );
      }

      const confirmBtn = dialog.querySelector("[data-notice-close]");
      if (confirmBtn) confirmBtn.focus();
    },

    close() {
      const dialog = querySelector(selectors.noticeDialog);
      if (!dialog || dialog.classList.contains("hidden")) return;

      dialog.classList.add("hidden");
      document.body.style.overflow = "";
    },

    init() {
      const dialog = querySelector(selectors.noticeDialog);
      if (!dialog) return;

      dialog
        .querySelectorAll("[data-notice-close], [data-notice-backdrop]")
        .forEach((el) => el.addEventListener("click", NoticeDialog.close));

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") NoticeDialog.close();
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
              ease: CONFIG.GSAP_EASE.scroll,
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
    safeCall(NoticeDialog.init);
    safeCall(SmoothScroll.init);

    setTimeout(() => safeCall(initLucide), 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
