/* Orbit — galeria monocromática */

/* Dados das imagens: título, seed do picsum e dimensões originais */
const IMAGES = [
  {
    title: "La Gioconda - Leonardo da Vinci",
    src: "https://i.pinimg.com/736x/5b/16/3d/5b163d31d079ce154dfe3f97393007a7.jpg",
    seed: "noir",
    w: 300,
    h: 420,
  },
  {
    title: "The Starry Night - Vincent van Gogh",
    src: "https://i.pinimg.com/736x/e2/7e/8a/e27e8a37b04033d52f3eb3f99632aae8.jpg",
    seed: "echo",
    w: 340,
    h: 460,
  },
  {
    title: "The Scream - Edvard Munch",
    src: "https://i.pinimg.com/736x/20/7d/87/207d871165698f72068b3c7177fec1d3.jpg",
    seed: "mono",
    w: 260,
    h: 440,
  },
  {
    title: "The Last Supper - Leonardo da Vinci",
    src: "https://i.pinimg.com/1200x/37/26/1c/37261c9a045650a6cd7fcaa76d1fe6fc.jpg",
    seed: "flux",
    w: 480,
    h: 360,
  },
  {
    title: "Guernica - Pablo Picasso",
    src: "https://i.pinimg.com/1200x/54/ca/cd/54cacd78e9a963c464dde752ac58c3f0.jpg",
    seed: "shade",
    w: 280,
    h: 430,
  },
  {
    title: "The Creation of Adam - Michelangelo",
    src: "https://i.pinimg.com/736x/83/8c/74/838c74f99fe23ff5cc8f7c4e38f839bb.jpg",
    seed: "tone",
    w: 360,
    h: 470,
  },
  {
    title: "The Persistence of Memory - Salvador Dalí",
    src: "https://i.pinimg.com/1200x/11/d7/c7/11d7c75d26b7a45987b9dced276e4b1e.jpg",
    seed: "frame",
    w: 300,
    h: 450,
  },
  {
    title: "Girl with a Pearl Earring - Johannes Vermeer",
    src: "https://i.pinimg.com/736x/57/03/fa/5703fa465d61db3ce75bd76ce093c575.jpg",
    seed: "void",
    w: 250,
    h: 420,
  },
  {
    title: "The Birth of Venus - Sandro Botticelli",
    src: "https://i.pinimg.com/1200x/a6/f0/22/a6f0222e632a0ae9b74ce64ea16a3db2.jpg",
    seed: "static",
    w: 330,
    h: 460,
  },
  {
    title: "Las Meninas - Diego Velázquez",
    src: "https://i.pinimg.com/1200x/e6/3c/3b/e63c3b7d0b5bfddd19c2fabe6b2dc84a.jpg",
    seed: "pulse",
    w: 290,
    h: 480,
  },
];

const loader = document.getElementById("loader");
const percentEl = document.getElementById("loaderPercent");
const labelEl = document.getElementById("loaderLabel");
const fillEl = document.getElementById("loaderFill");
const gallery = document.getElementById("gallery");
const hint = document.getElementById("hint");
const titleBar = document.getElementById("titleBar");
const titleIndexEl = document.getElementById("titleIndex");
const titleTextEl = document.getElementById("titleText");

/* Respeita usuários que preferem movimento reduzido */
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

/* Monta a galeria dinamicamente */
function buildGallery() {
  IMAGES.forEach((data, i) => {
    const figure = document.createElement("figure");
    figure.className = "gallery__item";
    figure.dataset.index = String(i + 1).padStart(2, "0");

    const img = document.createElement("img");
    img.className = "gallery__img";
    img.src =
      data.src || `https://picsum.photos/seed/${data.seed}/${data.w}/${data.h}`;
    img.alt = data.title;
    img.width = data.w;
    img.height = data.h;
    img.decoding = "async";

    figure.appendChild(img);
    gallery.appendChild(figure);
  });
}

/*
 * Raio do anel, derivado assim:
 * - minDim / 2  -> metade da menor dimensão da janela; um círculo completo só
 *                  cabe se o diâmetro (2R) couber na largura e na altura
 * - - 110       -> margem de segurança igual à meia-altura máxima das imagens
 *                  (~190px) mais folga, para nada vazar nas bordas ao orbitar
 * - Math.max(.., 44) -> piso para o anel não colapsar em telas muito pequenas
 */
function computeRingRadius() {
  const minDim = Math.min(window.innerWidth, window.innerHeight);
  return Math.max(minDim * 0.5 - 110, 44);
}

/*
 * Limita a largura da imagem via variável CSS para vizinhos do anel nunca
 * se sobreporem:
 * - 0.618 * R  -> corda entre dois vizinhos com espaçamento de 36 graus
 *                 2R * sin(18 graus) = 0.618R; o par mais apertado fica
 *                 alinhado na horizontal (simétrico ao eixo vertical), então
 *                 manter a largura <= corda garante zero sobreposição
 * - - 8 / piso 24 -> pequeno gap entre as imagens e um tamanho mínimo útil
 */
function setImageMaxWidth() {
  const R = computeRingRadius();
  const maxW = Math.max(0.618 * R - 8, 24);
  gallery.style.setProperty("--img-max-w", `${maxW.toFixed(0)}px`);
}

/* Loader fake: percentual, barra de progresso e rótulo rotativo */
function updateLoader(v) {
  percentEl.textContent = String(v).padStart(3, "0");
  fillEl.style.width = `${v}%`;

  if (v < 35) labelEl.textContent = "orbit · mono gallery";
  else if (v < 70) labelEl.textContent = "carregando imagens";
  else if (v < 100) labelEl.textContent = "preparando a órbita";
  else labelEl.textContent = "pronto";
}

/* Esmaece e remove o overlay do loader */
function fadeOutLoader() {
  gsap.to(loader, {
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    onComplete: () => loader.remove(),
  });
}

/* Posiciona cada imagem no seu slot igualmente espaçado no anel (motion reduzido) */
function positionOnRing(items, angleOffset) {
  const R = computeRingRadius();
  const step = (Math.PI * 2) / items.length;

  items.forEach((el, i) => {
    const a = angleOffset + i * step;
    gsap.set(el, { x: Math.cos(a) * R, y: Math.sin(a) * R });
  });
}

/* Esconde o loader, centraliza as imagens e inicia o reveal; depois, vai ao anel */
function hideLoader() {
  fadeOutLoader();

  const items = gsap.utils.toArray(".gallery__item");
  const zs = gsap.utils.shuffle(
    Array.from({ length: items.length }, (_, i) => i + 1),
  );

  gsap.set(items, {
    opacity: 0,
    scale: 0.55,
    xPercent: -50,
    yPercent: -50,
    transformOrigin: "50% 50%",
    zIndex: (i) => zs[i],
  });

  gsap
    .timeline({ delay: 0.15 })
    .to(items, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      stagger: 0.07,
      ease: "expo.out",
    })
    .call(() => driftToRing(items));
}

/* Desliza devagar cada imagem do centro até o seu slot no anel */
function driftToRing(items) {
  const angleOffset = gsap.utils.random(0, Math.PI * 2);
  const step = (Math.PI * 2) / items.length;
  const R = computeRingRadius();

  const tl = gsap.timeline({
    onComplete: () => startOrbit(items, angleOffset),
  });

  tl.to(items, {
    x: (i) => Math.cos(angleOffset + i * step) * R,
    y: (i) => Math.sin(angleOffset + i * step) * R,
    duration: 3,
    ease: "power1.inOut",
    stagger: 0.06,
  });
}

/* Gira o anel inteiro (ângulo compartilhado mantém o espaçamento), depois assenta */
function startOrbit(items, angleOffset) {
  const step = (Math.PI * 2) / items.length;
  const rotary = { v: 0 };
  let stops;

  gsap
    .timeline({ onComplete: () => enableHover(items) })
    .to(rotary, {
      v: Math.PI * 2 * 2,
      duration: 5,
      ease: "none",
      onUpdate: () => {
        const R = computeRingRadius();
        items.forEach((el, i) => {
          const a = angleOffset + i * step + rotary.v;
          gsap.set(el, { x: Math.cos(a) * R, y: Math.sin(a) * R });
        });
      },
    })
    .call(() => {
      stops = randomStopPositions(items);
    })
    .to(items, {
      x: (i) => stops[i].x,
      y: (i) => stops[i].y,
      rotation: () => gsap.utils.random(-4, 4),
      duration: 2.2,
      ease: "power2.inOut",
      stagger: 0.05,
    });
}

/* Verdadeiro se o retângulo sobrepuser algum retângulo já posicionado */
function intersects(rect, placed, gap) {
  for (const r of placed) {
    if (
      !(
        rect.l >= r.r + gap ||
        rect.r <= r.l - gap ||
        rect.t >= r.b + gap ||
        rect.b <= r.t - gap
      )
    ) {
      return true;
    }
  }
  return false;
}

/* Sorteia posições aleatórias dentro da janela, sem sobreposição, acima da barra */
function randomStopPositions(items) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const pad = 24;
  const bar = 150;
  const gap = 12;
  const placed = [];
  const stops = new Array(items.length);
  const order = gsap.utils.shuffle(items.map((_, i) => i));

  order.forEach((idx) => {
    const el = items[idx];
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const minX = -(window.innerWidth / 2 - w / 2 - pad);
    const maxX = window.innerWidth / 2 - w / 2 - pad;
    const minY = -((window.innerHeight - h) / 2 - pad - bar);
    const maxY = (window.innerHeight - h) / 2 - pad - bar;

    let rect;
    for (let t = 0; t < 500; t += 1) {
      const x = gsap.utils.random(minX, maxX);
      const y = gsap.utils.random(minY, maxY);
      rect = {
        x,
        y,
        l: cx + x - w / 2,
        t: cy + y - h / 2,
        r: cx + x + w / 2,
        b: cy + y + h / 2,
      };
      if (!intersects(rect, placed, gap)) break;
    }

    placed.push(rect);
    stops[idx] = rect;
  });

  return stops;
}

/* Troca o conteúdo da barra inferior com uma animação rápida de deslize */
function setTitle(el) {
  const index = el.dataset.index;
  const title = el.querySelector("img").alt;

  const tl = gsap.timeline();
  tl.to([titleIndexEl, titleTextEl], {
    yPercent: -120,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
  })
    .call(() => {
      titleIndexEl.textContent = index;
      titleTextEl.textContent = title;
    })
    .to(
      [titleIndexEl, titleTextEl],
      { yPercent: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
      "+=0.05",
    );
}

/* Estado do clique: imagem expandida ao centro e dados para restaurar */
let selectedEl = null;
let selectedRestore = null;

/* Expande a imagem clicada ao centro, escala +20%, e esconde as demais */
function selectImage(el, items) {
  if (selectedEl === el) {
    restoreImage(items);
    return;
  }

  if (selectedEl) restoreImage(items);

  selectedEl = el;
  selectedRestore = {
    x: gsap.getProperty(el, "x"),
    y: gsap.getProperty(el, "y"),
    rotation: gsap.getProperty(el, "rotation"),
    zIndex: gsap.getProperty(el, "zIndex"),
  };

  gsap.set(el, { zIndex: 100 });

  items.forEach((other) => {
    if (other !== el) {
      gsap.to(other, { opacity: 0, scale: 0.7, duration: 0.5, ease: "power2.inOut", overwrite: true });
      other.style.pointerEvents = "none";
    }
  });

  gsap.to(el, { x: 0, y: 0, rotation: 0, scale: 1.2, duration: 0.8, ease: "power3.inOut", overwrite: "auto" });
}

/* Devolve a imagem ao lugar original e traz as demais de volta */
function restoreImage(items) {
  if (!selectedEl) return;

  gsap.to(selectedEl, {
    x: selectedRestore.x,
    y: selectedRestore.y,
    rotation: selectedRestore.rotation,
    scale: 1,
    duration: 0.8,
    ease: "power3.inOut",
    overwrite: "auto",
  });

  selectedEl.style.zIndex = selectedRestore.zIndex;

  items.forEach((other) => {
    if (other !== selectedEl) {
      gsap.to(other, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.inOut", overwrite: true });
      other.style.pointerEvents = "auto";
    }
  });

  selectedEl = null;
  selectedRestore = null;
}

/* Deixa as imagens interativas: hover/foco mostra o título e escala suavemente */
function enableHover(items) {
  gsap.set(titleBar, { yPercent: 100 });
  gsap.to(titleBar, { yPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
  gsap.to(hint, { opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.15 });

  items.forEach((el) => {
    el.style.pointerEvents = "auto";

    const enter = () => {
      setTitle(el);
      gsap.to(el, { scale: 1.06, duration: 0.5, ease: "power2.out" });
    };
    const leave = () => {
      gsap.to(el, { scale: 1, duration: 0.6, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    el.addEventListener("focusin", enter);
    el.addEventListener("focusout", leave);
    el.addEventListener("click", () => selectImage(el, items));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectImage(el, items);
      }
    });

    el.style.cursor = "pointer";
    if (!reduceMotion) el.setAttribute("tabindex", "0");
  });
}

/* Inicialização */
buildGallery();
setImageMaxWidth();
window.addEventListener("resize", setImageMaxWidth);

/* Motion reduzido: pula o contador do loader e a órbita, posiciona direto no anel */
if (reduceMotion) {
  updateLoader(100);
  fillEl.style.width = "100%";
  fadeOutLoader();
  const items = gsap.utils.toArray(".gallery__item");
  gsap.set(items, {
    opacity: 1,
    xPercent: -50,
    yPercent: -50,
    zIndex: (i) => i + 1,
  });
  positionOnRing(items, gsap.utils.random(0, Math.PI * 2));
  enableHover(items);
} else {
  /* Loader animado e, depois, a sequência completa: reveal -> anel -> órbita -> assentar */
  const count = { v: 0 };
  gsap
    .timeline()
    .to(count, {
      v: 100,
      duration: 2.4,
      ease: "power2.inOut",
      onUpdate: () => updateLoader(Math.floor(count.v)),
    })
    .call(hideLoader, undefined, "+=0.15");
}
