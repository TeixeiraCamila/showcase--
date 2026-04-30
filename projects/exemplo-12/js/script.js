// Inject bubbles SVG into all containers
const bubblesSVG = `<svg class="bubbles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 701 1024" style="overflow: visible;">
  <g class="bubbles-large" stroke-width="7">
    <g><g transform="translate(10 940)"><circle cx="35" cy="35" r="35" /></g></g>
    <g><g transform="translate(373 940)"><circle cx="35" cy="35" r="35" /></g></g>
    <g><g transform="translate(408 940)"><circle cx="35" cy="35" r="35" /></g></g>
    <g><g transform="translate(621 940)"><circle cx="35" cy="35" r="35" /></g></g>
    <g><g transform="translate(179 940)"><circle cx="35" cy="35" r="35" /></g></g>
  </g>
  <g class="bubbles-small" stroke-width="4">
    <g><g transform="translate(147 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(255 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(573 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(429 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(91 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(640 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(321 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(376 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(376 984)"><circle cx="15" cy="15" r="15" /></g></g>
    <g><g transform="translate(497 984)"><circle cx="15" cy="15" r="15" /></g></g>
  </g>
</svg>`;

document.querySelectorAll('.bubbles-container').forEach(container => {
  container.innerHTML = bubblesSVG;
});

// Smooth scroll for nav links
document.querySelectorAll('.nav__list a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('href')
    document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
    navIcon.classList.remove('active')
    navOverlay.classList.remove('active')
    navList.classList.remove('active')
  })
})

// Menu toggle
const navIcon = document.querySelector('.nav__icon')
const navOverlay = document.querySelector('.nav__overlay')
const navList = document.querySelector('.nav__list')

navIcon?.addEventListener('click', () => {
  navIcon.classList.toggle('active')
  navOverlay.classList.toggle('active')
  navList.classList.toggle('active')
})

// Section scroll animations
const sections = document.querySelectorAll('.section')

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        sectionObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
)

sections.forEach((section) => {
  sectionObserver.observe(section)
})