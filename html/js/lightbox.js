const lightbox = document.createElement('div')
const gallery = document.querySelector('.c-gallery')
lightbox.classList.add('c-lightbox')
document.body.insertBefore(lightbox, gallery);

const images = document.querySelectorAll('.c-gallery__img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})