// Tooltip preview for main2.css list layout
document.addEventListener('mousemove', (e) => {
  const preview = document.querySelector('.project-card__preview')
  if (!preview) return

  const card = e.target.closest('.project-card')
  
  if (card) {
    const num = card.querySelector('.project-card__preview, .project-preview')
    preview.textContent = num?.textContent?.trim() || ''
    preview.style.left = (e.clientX + 15) + 'px'
    preview.style.top = (e.clientY + 15) + 'px'
    preview.classList.add('is-visible')
  } else {
    preview.classList.remove('is-visible')
  }
})