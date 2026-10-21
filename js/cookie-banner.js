// Consentimento de cookies: mostra o banner enquanto não houver escolha salva
(function () {
  const banner = document.getElementById('cookie-banner')
  if (!banner) return

  function show() {
    banner.classList.add('is-visible')
  }

  function hide() {
    banner.classList.remove('is-visible')
  }

  banner.querySelectorAll('[data-cookie-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      try {
        localStorage.setItem('cookie-consent', btn.dataset.cookieAction)
      } catch (e) {} // storage indisponível: só fecha o banner
      hide()
    })
  })

  // Sem consentimento salvo: revela no primeiro frame (overlay fixo = sem CLS)
  try {
    if (!localStorage.getItem('cookie-consent')) {
      requestAnimationFrame(show)
    }
  } catch (e) {
    requestAnimationFrame(show)
  }

  // Padrão do showcase: reexibe ao chegar no fim da página
  let ticking = false
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const doc = document.documentElement
        const at_end =
          window.innerHeight + window.scrollY >= doc.scrollHeight - 120
        if (at_end) show()
        ticking = false
      })
    },
    { passive: true },
  )
})()
