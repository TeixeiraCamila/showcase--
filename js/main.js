// Scroll animations com IntersectionObserver
function initScrollAnimations() {
  const cards = document.querySelectorAll('.project-card')
  if (!cards.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  cards.forEach((card, index) => {
    card.classList.add('is-hidden')
    card.style.transitionDelay = (index * 100) + 'ms'
    observer.observe(card)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations()
})

// Custom cursor
const cursor = document.querySelector('.cursor')
const cursorTrail = document.querySelector('.cursor__trail')
let mouseX = 0
let mouseY = 0
let trailX = 0
let trailY = 0

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  if (cursor) {
    cursor.style.left = (mouseX - 10) + 'px'
    cursor.style.top = (mouseY - 10) + 'px'
  }
})

function animateTrail() {
  trailX += (mouseX - trailX) * 0.15
  trailY += (mouseY - trailY) * 0.15
  if (cursorTrail) {
    cursorTrail.style.left = (trailX - 6) + 'px'
    cursorTrail.style.top = (trailY - 6) + 'px'
  }
  requestAnimationFrame(animateTrail)
}
animateTrail()

document.addEventListener('mousedown', () => {
  if (cursor) cursor.classList.add('cursor_clicking')
})

document.addEventListener('mouseup', () => {
  if (cursor) cursor.classList.remove('cursor_clicking')
})

const interactiveElements = document.querySelectorAll('a, button, .project-card')
interactiveElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    if (cursor) cursor.classList.add('cursor_hovering')
    if (cursorTrail) cursorTrail.classList.add('cursor__trail_hovering')
  })
  el.addEventListener('mouseleave', () => {
    if (cursor) cursor.classList.remove('cursor_hovering')
    if (cursorTrail) cursorTrail.classList.remove('cursor__trail_hovering')
  })
})

// Theme toggle
const toggleBtn = document.querySelector('.theme-toggle')

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  updateBulb(theme)
}

function updateBulb(theme) {
  const bulb = document.getElementById('bulb')
  if (!bulb) return
  const color = theme === 'dark' ? '#666666' : '#FFD54D'
  bulb.style.transition = 'fill 0.3s ease, stroke 0.3s ease'
  bulb.style.fill = color
  bulb.style.stroke = color
}

const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
updateBulb(currentTheme)

toggleBtn?.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme')
  setTheme(theme === 'dark' ? 'light' : 'dark')
})