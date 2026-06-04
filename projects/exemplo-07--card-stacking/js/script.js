document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

  // ============================================
  // HEADER ANIMATIONS 
  // ============================================
  const blob = document.querySelector('header svg');
  const headerTitLeLeft = document.querySelector('.text-left');
  const headerTitRight = document.querySelector('.text-right');

  const headerBooks = document.querySelectorAll('.imgs-container  div');


  const headerTimeline = gsap.timeline({
    defaults: { ease: 'power3.out' }
  });


  headerTimeline
    .from(blob, {
      scale: 3,
      opacity: 0,
      duration: 2,
    })
    .from([headerTitLeLeft, headerTitRight], {
      x: (index) => index === 0 ? -60 : 60,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: 'back.out(1.7)',
      stagger: 0.1
    }, '-=1.2');

  headerBooks.forEach((item, index) => {
    headerTimeline.from(item, {
      scale: 3,
      opacity: 0,
      duration: .4,
      zIndex: 10
    })
    Draggable.create(item, {
      bounds: ".header",
      inertia: true
    });

  });


  // ============================================
  // CARD STACKING 
  // ============================================

  const cardItems = gsap.utils.toArray('.card-item');

  // global
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
  });

  cardItems.forEach((item, index) => {
    const card = item.querySelector('.card-inner');

    // Pin each card at the top
    ScrollTrigger.create({
      trigger: item,
      start: 'top top',
      end: () => `+=${(cardItems.length - index) * window.innerHeight} `,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
    });

    if (index > 0) {
      gsap.to(card, {
        y: 30 * index,
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
        ease: 'none'
      });
    }
  });

  // ============================================
  // RESIZE OPTIMIZATION - Debounced
  // ============================================
  let resizeTimer;
  let lastWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    if (window.innerWidth !== lastWidth) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
        lastWidth = window.innerWidth;
      }, 250);
    }
  });

  // ============================================
  // VISIBILITY OPTIMIZATION - Pause when hidden
  // ============================================
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      gsap.globalTimeline.pause();
    } else {
      gsap.globalTimeline.resume();
    }
  });

  // ============================================
  // CLEANUP - Remove will-change after animation
  // ============================================
  setTimeout(() => {
    document.querySelectorAll('.card-inner').forEach(card => {
      if (!card.closest('.card-item').classList.contains('animating')) {
        card.style.willChange = 'auto';
      }
    });
  }, 3000);
});