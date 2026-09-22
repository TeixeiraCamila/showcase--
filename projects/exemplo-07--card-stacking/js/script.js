// Em caso de falha da API, as citações curadas já presentes no HTML permanecem.
async function load_quotes() {
  const cards = gsap.utils.toArray('.card-quote');
  if (cards.length === 0) return;

  try {
    const response = await fetch(
      `/api/quotes?categories=wisdom,philosophy&count=${cards.length}`
    );
    if (!response.ok) throw new Error(`quotes api ${response.status}`);
    const data = await response.json();
    const quotes = (data && data.quotes) || [];
    if (quotes.length === 0) return;

    cards.forEach((card, index) => {
      const quote = quotes[index];
      if (!quote) return;
      const statement = card.querySelector('p');
      const citation = card.querySelector('cite');
      if (statement) statement.textContent = quote.quote;
      if (citation) {
        citation.textContent = quote.work
          ? `${quote.author} — ${quote.work}`
          : quote.author;
      }
    });
  } catch {
    // mantém o conteúdo curado do HTML
  }
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

  load_quotes();

  const prefers_reduced_motion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // ============ ANIMAÇÕES DO HEADER ============
  const blob = document.querySelector('.header__blob');
  const header_title_left = document.querySelector('.header__word--left');
  const header_title_right = document.querySelector('.header__word--right');
  const header_books = document.querySelectorAll('.imgs-container div');

  if (!prefers_reduced_motion) {
    const header_timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Cena de abertura: blob aparece, livros surgem com stagger e o título entra
    header_timeline
      .from(blob, {
        scale: 3,
        opacity: 0,
        duration: 1.6
      })
      .from(
        header_books,
        {
          scale: 3,
          opacity: 0,
          duration: 0.45,
          ease: 'back.out(1.7)',
          stagger: 0.08
        },
        '-=0.8'
      )
      .from(
        [header_title_left, header_title_right],
        {
          x: (index) => (index === 0 ? -60 : 60),
          opacity: 0,
          duration: 0.9,
          ease: 'back.out(1.7)',
          stagger: 0.1
        },
        '-=0.6'
      );
  }

  // Livros arrastáveis com inércia
  header_books.forEach((item) => {
    Draggable.create(item, {
      bounds: '.header',
      inertia: true
    });
  });

  // ============ CARD STACKING ============
  const card_items = gsap.utils.toArray('.card-item');

  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true
  });

  card_items.forEach((item, index) => {
    const card = item.querySelector('.card-inner');

    // Prende cada card no topo da viewport durante o scroll
    ScrollTrigger.create({
      trigger: item,
      start: 'top top',
      end: () => `+=${(card_items.length - index) * window.innerHeight}`,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      fastScrollEnd: true
    });

    // Cards seguintes sobem ligeiramente para criar o efeito de pilha
    if (index > 0) {
      gsap.to(card, {
        y: 30 * index,
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'top top',
          scrub: 1,
          invalidateOnRefresh: true
        },
        ease: 'none'
      });
    }
  });

  // ============ RESIZE - Debounce ============
  let resize_timer;
  let last_width = window.innerWidth;

  window.addEventListener('resize', () => {
    if (window.innerWidth !== last_width) {
      clearTimeout(resize_timer);
      resize_timer = setTimeout(() => {
        ScrollTrigger.refresh();
        last_width = window.innerWidth;
      }, 250);
    }
  });

  // ============ PAUSA quando a aba fica oculta ============
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      gsap.globalTimeline.pause();
    } else {
      gsap.globalTimeline.resume();
    }
  });
});