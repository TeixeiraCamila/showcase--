const STAGGER_MS = 1000;
const imgs = document.querySelectorAll(".block-details img");
imgs.forEach((img, i) => {
  setTimeout(() => {
    img.classList.add(`active-${i + 1}`);
  }, STAGGER_MS * (i + 1));
});
