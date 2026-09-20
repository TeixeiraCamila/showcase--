(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const stage = document.getElementById("stage");
    const tracks = document.getElementById("tracks");

    if (!stage || !tracks) return;

    // ponta fina (mouse/trackpad) em desktop => aceita roteiro transformado
    const fine_pointer = window.matchMedia("(min-width: 1025px) and (pointer: fine)");
    // usuário pediu menos animação no sistema => respeita e vai pro scroll nativo
    const reduced_motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // roteiro nativo (swipe) — fallback pra sem GSAP, reduzido ou touch
    const enable_native = () => {
      stage.classList.add("is-native");
      const on_scroll = () => {
        const max = stage.scrollWidth - stage.clientWidth;
        window.progressBar.set(max > 0 ? stage.scrollLeft / max : 0);
      };
      stage.addEventListener("scroll", on_scroll, { passive: true });
      on_scroll();
    };

    // roteiro transform — pin do stage e translateX das faixas (desktop)
    const enable_transform = () => {
      const distance = () => tracks.scrollWidth - window.innerWidth;

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(tracks, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            window.progressBar.set(self.progress);
          },
        },
      });
    };

    if (reduced_motion || typeof window.gsap === "undefined" || !fine_pointer.matches) {
      enable_native();
    } else {
      enable_transform();
    }

    body.classList.remove("is-loading");
  });
})();