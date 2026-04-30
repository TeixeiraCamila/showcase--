// Function to scroll to CTA section
function scrollToCTA() {
	document.getElementById('cta').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll para nav links
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

// IntersectionObserver para seções
const sections = document.querySelectorAll('.section')

sections.forEach((section) => {
  section.style.opacity = '0'
  section.style.transform = 'translateY(40px)'
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
})

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        sectionObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
)

sections.forEach((section) => sectionObserver.observe(section))
