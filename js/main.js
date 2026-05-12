let currentCategory = 'landing'
let allProjects = []

document.addEventListener('DOMContentLoaded', () => {
  initCursor()
  initTheme()
  loadProjects()
})

function initCursor() {
  const cursor = document.querySelector('.cursor')
  const cursorTrail = document.querySelector('.cursor__trail')
  if (!cursor || !cursorTrail) return
  if (isTouchDevice()) return

  let mouseX = 0, mouseY = 0
  let trailX = 0, trailY = 0
  let animationId = null

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    cursor.style.left = (mouseX - 10) + 'px'
    cursor.style.top = (mouseY - 10) + 'px'
  })

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.15
    trailY += (mouseY - trailY) * 0.15
    cursorTrail.style.left = (trailX - 6) + 'px'
    cursorTrail.style.top = (trailY - 6) + 'px'
    animationId = requestAnimationFrame(animateTrail)
  }

  animateTrail()

  document.addEventListener('mousedown', () => cursor.classList.add('cursor_clicking'))
  document.addEventListener('mouseup', () => cursor.classList.remove('cursor_clicking'))

  document.querySelectorAll('a, button, .project-card').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor_hovering')
      cursorTrail.classList.add('cursor__trail_hovering')
    })
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor_hovering')
      cursorTrail.classList.remove('cursor__trail_hovering')
    })
  })

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && animationId) {
      cancelAnimationFrame(animationId)
    } else if (!document.hidden) {
      animateTrail()
    }
  })
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches
}

function initTheme() {
  const toggleBtn = document.querySelector('.theme-toggle')
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
  updateBulb(currentTheme)

  toggleBtn?.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme')
    setTheme(theme === 'dark' ? 'light' : 'dark')
  })
}

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

async function loadProjects() {
  try {
    const response = await fetch('./data/projects.json')
    const data = await response.json()
    allProjects = data.projects
    renderCategories(data.categories, data.defaultCategory)
    filterProjects(currentCategory)
    initScrollAnimations()
  } catch (error) {
    console.error('Erro ao carregar projetos:', error)
  }
}

function renderCategories(categories, defaultCategory) {
  const container = document.getElementById('filterBar')
  if (!container) return

  container.innerHTML = categories.map((cat) => `
    <button
      class="filter-badge${cat.id === defaultCategory ? ' is-active' : ''}"
      data-category="${cat.id}"
      aria-pressed="${cat.id === defaultCategory}"
    >
      ${escapeHtml(cat.name)}
    </button>
  `).join('')

  container.querySelectorAll('.filter-badge').forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category
      setActiveCategory(category)
      filterProjects(category)
    })
  })
}

function setActiveCategory(category) {
  currentCategory = category
  document.querySelectorAll('.filter-badge').forEach((btn) => {
    const isActive = btn.dataset.category === category
    btn.classList.toggle('is-active', isActive)
    btn.setAttribute('aria-pressed', isActive)
  })
}

function filterProjects(category) {
  const container = document.getElementById('projectsGrid')
  if (!container) return

  const filtered = category === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === category)

  container.style.opacity = '0'

  setTimeout(() => {
    container.innerHTML = filtered.map((project) => `
      <a href="${escapeHtml(project.href)}" class="project-card"
        aria-label="Projeto ${escapeHtml(project.id)}: ${escapeHtml(project.title)}">
        <div class="project-card__preview" aria-hidden="true">${escapeHtml(project.id)}</div>
        <div class="project-card__info">
          <h3 class="project-card__title">${escapeHtml(project.title)}</h3>
          <p class="project-card__description">${escapeHtml(project.description)}</p>
          <div class="project-card__tags" aria-label="Tecnologias usadas">
            ${project.tags.map((tag) => `<span class="project-card__tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      </a>
    `).join('')

    container.style.opacity = '1'
    initScrollAnimations()
  }, 200)
}

function escapeHtml(str) {
  const div = document.createElement('div')
  div.textContent = str
  return div.innerHTML
}

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