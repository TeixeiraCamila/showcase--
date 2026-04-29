const inputImage = document.getElementById('input-image')
const inputTitle = document.getElementById('input-title')
const inputYear = document.getElementById('input-year')
const inputNames = document.getElementById('input-names')
const inputGenre = document.getElementById('input-genre')
const inputDirector = document.getElementById('input-director')

const posterImage = document.getElementById('poster-image')
const posterTitle = document.getElementById('poster-title')
const posterYear = document.getElementById('poster-year')
const posterNames = document.getElementById('poster-names')
const posterGenre = document.getElementById('poster-genre')
const posterDirector = document.getElementById('poster-director')

const btnPreview = document.getElementById('btn-preview')
const btnDownload = document.getElementById('btn-download')

let currentImage = null

inputImage.addEventListener('change', function (e) {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = function (e) {
      currentImage = e.target.result
      const img = posterImage.querySelector('img')
      if (img) {
        img.src = currentImage
        img.className = 'poster__image-img'
      } else {
        posterImage.innerHTML = `<img src="${currentImage}" class="poster__image-img" alt="Poster">`
      }
    }
    reader.readAsDataURL(file)
  }
})

function updatePoster() {
  posterTitle.textContent = inputTitle.value || 'Title'
  posterYear.textContent = inputYear.value || 'Year'
  posterNames.textContent = inputNames.value || 'Names'
  posterGenre.textContent = inputGenre.value || 'Genre'
  posterDirector.textContent = inputDirector.value || 'Director'
}

inputTitle.addEventListener('input', updatePoster)
inputYear.addEventListener('input', updatePoster)
inputNames.addEventListener('input', updatePoster)
inputGenre.addEventListener('input', updatePoster)
inputDirector.addEventListener('input', updatePoster)

btnPreview.addEventListener('click', function () {
  updatePoster()
  alert('Preview updated!')
})

btnDownload.addEventListener('click', function () {
  const posterElement = document.getElementById('poster-preview')

  html2canvas(posterElement, {
    backgroundColor: '#D9D9D9',
    scale: 2,
  })
    .then((canvas) => {
      const link = document.createElement('a')
      link.download = 'poster.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    })
    .catch((err) => {
      console.error('Error generating poster:', err)
      alert('Error generating poster. Please try again.')
    })
})
