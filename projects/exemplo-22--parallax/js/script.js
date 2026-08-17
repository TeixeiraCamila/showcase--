
    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.2,
        smoothTouch: 0.1
      });

      // Cada camada sobe numa velocidade própria (parallax puro, sem fade)
      const layers = [
        { el: ".parallax__img--front", speed: 2 },
        { el: ".parallax__img--two", speed: 1.6 },
        { el: ".parallax__img--three", speed: 1.3 },
        { el: ".parallax__img--back", speed: 1.0 }
      ];

      const heroEl = document.querySelector(".hero");
      // Folga das imagens = 15% da altura do .hero (ver CSS: height:124%, top:0 — sobra embaixo)
      let buffer = heroEl.offsetHeight * 0.15;
      window.addEventListener("resize", () => {
        buffer = heroEl.offsetHeight * 0.15;
      });

      ScrollTrigger.create({
        trigger: ".hero",
        start: "top top",
        // end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;

          layers.forEach(({ el, speed }) => {
            // (1 - speed): front -1, two -0.6, three -0.3, back 0 — todas sobem ou ficam paradas
            const y = (1 - speed) * buffer * p;
            gsap.set(el, { y, scale: 1 + p * 0.08 });
          });
        }
      });

      // Garante medidas corretas após o carregamento das imagens
      window.addEventListener("load", () => ScrollTrigger.refresh());
    });
