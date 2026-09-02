(function () {
  "use strict";

  /* --------------------------------------------------------------
   * 1. HERO ENTRANCE — anima títulos, textos e imagens no load
   * -------------------------------------------------------------- */
  if (typeof gsap !== "undefined") {
    gsap.from(".burger__info-title", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".burger__info-text", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(".burger__info-price", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.from(".burger__images-item", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.15,
      delay: 0.3,
      ease: "back.out(1.4)",
    });
  }

  /* --------------------------------------------------------------
   * 2. MENU MOBILE — abre/fecha o painel lateral com ARIA +
   *    lock de scroll. Animações via CSS transitions em style.css
   * -------------------------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("menuOverlay");
  const closeBtn = menu.querySelector(".menu__close");
  const menuLinks = menu.querySelectorAll("a");

  /* Abre o menu: ativa classes is-open, sincroniza ARIA e trava scroll */
  function openMenu() {
    menu.classList.add("is-open");
    overlay.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Fechar menu");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  /* Fecha o menu: reverte is-open, restaura ARIA e libera scroll */
  function closeMenu() {
    menu.classList.remove("is-open");
    overlay.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Abrir menu");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* Alterna entre abrir e fechar conforme estado atual */
  function toggleMenu() {
    if (menu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  /* Clicar num link do menu também fecha o painel */
  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* Tecla Escape fecha o menu se estiver aberto (acessibilidade) */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  /* --------------------------------------------------------------
   * 3. OVERLAY EXPANSÃO — clique nos CTAs expande o painel vermelho
   *    para tela cheia e revela as camadas do hambúrguer
   * -------------------------------------------------------------- */
  const overlayBg = document.querySelector(".burger__overlay");
  const ctaTriggers = document.querySelectorAll(
    ".header__cta, .burger__images, .burger__info_cta",
  );
  const menuItems = document.querySelectorAll(".header__menu-item a");
  const logo = document.querySelector(".header__logo img");
  const burgerImages = document.querySelector(".burger__images");
  const dots = document.querySelectorAll(".burger__dot");

  /* Estado global: true = overlay expandido, false = recolhido */
  let overlayExpanded = false;

  /* Conjunto de items do header já "atravessados" pelo overlay */
  const crossedItems = new Set();
  let logoCrossed = false;

  /* Acompanha a posição do overlay durante o tween e marca os itens
   * do menu header que ele atravessa (texto vira branco). Também
   * alterna o logo entre a variante escura e a clara. */
  function detectMenuCrossings() {
    const overlayLeft = overlayBg.getBoundingClientRect().left;

    menuItems.forEach(function (link) {
      const itemRect = link.getBoundingClientRect();
      const within =
        overlayLeft <= itemRect.right && overlayLeft >= itemRect.left;

      if (overlayExpanded) {
        /* Expandindo: marca ao cruzar e mantém até voltar */
        if (within && !crossedItems.has(link)) {
          crossedItems.add(link);
          link.classList.add("is-crossed");
        }
      } else {
        /* Contraindo: ao cruzar de novo, remove e libera para re-marcar */
        if (within && crossedItems.has(link)) {
          crossedItems.delete(link);
          link.classList.remove("is-crossed");
        }
      }
    });

    /* Logo: troca para o secundário ao cruzar, volta ao primário ao reverter */
    const logoRect = logo.getBoundingClientRect();
    const withinLogo =
      overlayLeft <= logoRect.right && overlayLeft >= logoRect.left;

    if (overlayExpanded) {
      if (withinLogo && !logoCrossed) {
        logoCrossed = true;
        logo.setAttribute("src", "./assets/logo__secundary.svg");
      }
    } else {
      if (withinLogo && logoCrossed) {
        logoCrossed = false;
        logo.setAttribute("src", "./assets/logo__primary.svg");
      }
    }
  }

  /* Controla a expansão/recolhimento do overlay. Ao expandir, anima
   * a largura para 100%; ao recolher, restaura o conteúdo antes de
   * voltar o painel à largura original (32%). */
  function toggleOverlay() {
    if (typeof gsap === "undefined") return;
    const expanding = !overlayExpanded;
    overlayExpanded = expanding;

    if (expanding) {
      crossedItems.clear();
      logoCrossed = false;
      if (!isMobile()) {
        overlayBg.style.zIndex = 20;
      }
      gsap.to(overlayBg, {
        width: "100%",
        duration: 1,
        ease: "power2.inOut",
        onUpdate: detectMenuCrossings,
        onComplete: function () {
          if (isMobile()) {
            spreadImages();
          } else {
            showBurgerImages();
          }
        },
      });
    } else {
      restoreBurgerInfo(function () {
        overlayBg.style.zIndex = "";
        gsap.to(overlayBg, {
          width: "32%",
          duration: 1.2,
          ease: "power2.inOut",
          onUpdate: detectMenuCrossings,
        });
      });
    }
  }

  /* Retorna true em telas menores que 900px (mobile) */
  function isMobile() {
    return window.matchMedia("(max-width: 900px)").matches;
  }

  /* --------------------------------------------------------------
   * 4. SEQUÊNCIA DE REVEAL — espalha camadas e mostra dots/cards
   * -------------------------------------------------------------- */
  /* Guarda a posição original de .burger__images para restaurar depois */
  let burgerImagesOrigin = null;

  /* Desktop: fixa a imagem do hambúrguer e centraliza no viewport */
  function showBurgerImages() {
    const rect = burgerImages.getBoundingClientRect();
    const w = burgerImages.offsetWidth;
    const h = burgerImages.offsetHeight;
    burgerImagesOrigin = { left: rect.left, top: rect.top };

    gsap.fromTo(
      burgerImages,
      {
        position: "fixed",
        left: rect.left,
        top: rect.top,
        width: w,
        height: h,
        margin: 0,
      },
      {
        left: (window.innerWidth - w) / 2,
        top: (window.innerHeight - h) / 2,
        duration: 1.4,
        ease: "power2.inOut",
        onComplete: spreadImages,
      },
    );
  }

  /* Espalha verticalmente cada camada do hambúrguer animando `top` (não
   * `y`). O CSS centraliza cada imagem com transform: translate(-50%,-50%);
   * mexer em `y` sobrescrevia esse transform e a 4ª camada "pulava" na
   * volta. Animando `top` o transform permanece intacto e a restauração
   * fica precisa. */
  function spreadImages() {
    const items = gsap.utils.toArray(".burger__images-item");
    /* Guarda o topo original de cada camada para restaurar na volta */
    items.forEach(function (item) {
      item._originalTop = gsap.getProperty(item, "top");
    });

    const offsets = [-30, -15, 15, 30]; // px de separação por camada

    const tl = gsap.timeline();
    tl.to(items, {
      top: function (i) {
        return parseFloat(gsap.getProperty(items[i], "top")) + offsets[i];
      },
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      onComplete: showDotsAndCard,
    });
  }

  /* Revela os dots e os cards informativos com stagger (delay escalonado) */
  function showDotsAndCard() {
    const cards = gsap.utils.toArray(".burger__card");
    dots.forEach(function (dot, index) {
      gsap.to(dot, {
        opacity: 1,
        duration: 0.3,
        delay: index * 0.1,
      });
    });
    cards.forEach(function (card, index) {
      gsap.to(card, {
        opacity: 1,
        duration: 0.4,
        delay: index * 0.1 + 0.15,
      });
    });
  }

  /* Esconde cards e dots em sequência antes de recolher o overlay.
   * Executa o callback `after` quando tudo termina. */
  function hideDotsAndCard(after) {
    const cards = gsap.utils.toArray(".burger__card");
    gsap.to(cards, {
      opacity: 0,
      duration: 0.25,
      onComplete: function () {
        gsap.to(dots, {
          opacity: 0,
          duration: 0.2,
          onComplete: after,
        });
      },
    });
  }

  /* Reverte a sequência de reveal: esconde dots/cards, volta as camadas
   * ao lugar e (desktop) restaura a posição original do conjunto.
   * Executa o callback `after` ao concluir. */
  function restoreBurgerInfo(after) {
    hideDotsAndCard(function () {
      const items = gsap.utils.toArray(".burger__images-item");
      /* Espelho da separação: restaura cada `top` original gravado,
       * mantendo o transform de centralização intacto — a 4ª camada
       * volta sem "pulos" nem dessincronia */
      const tl = gsap.timeline();
      tl.to(items, {
        top: function (i) {
          return items[i]._originalTop;
        },
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        onComplete: function () {
          gsap.set(items, { clearProps: "top" });
          if (isMobile()) {
            if (after) after();
          } else {
            gsap.to(burgerImages, {
              left: burgerImagesOrigin.left,
              top: burgerImagesOrigin.top,
              duration: 1.4,
              ease: "power2.inOut",
              onComplete: function () {
                gsap.set(burgerImages, { clearProps: "all" });
                if (after) after();
              },
            });
          }
        },
      });
    });
  }

  /* Liga o toggleOverlay a todos os gatilhos (CTA do header, hero e imagens) */
  ctaTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", toggleOverlay);
  });
})();
