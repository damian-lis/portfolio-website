import themes from '../data/themes.js'
import Particles from './Particles.js'
import {
  setVariables,
  initialSetActive,
  setActive,
  removeAllActive,
} from '../helpers/index.js'

let themeMode = localStorage.getItem('theme') || Object.keys(themes)[0]
const themeDots = [...document.getElementsByClassName('theme-dot')]
const postSection = document.querySelector('#post-section')
const greetingRightColumn = document.querySelector('.greeting-right-column')
const particles = new Particles()

setVariables(themes[themeMode])
initialSetActive(themeDots, themeMode, setActive, removeAllActive)

particles.setColors(themes[themeMode])
particles.init()
particles.animate()

window.addEventListener('resize', function () {
  themeMode = localStorage.getItem('theme') || Object.keys(themes)[0]
  particles.resize()
  particles.setColors(themes[themeMode])
})

const updateParticles = () => {
  requestAnimationFrame(updateParticles)
  particles.animate()
}

updateParticles()

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function (e) {
    const mode = this.dataset.mode
    setVariables(themes[mode])
    setActive(this, themeDots, removeAllActive)
    particles.setColors(themes[mode])
    localStorage.setItem('theme', mode)
  })
}

if (postSection) {
  let postSectionHeight = postSection.clientHeight

  window.addEventListener('resize', () => {
    postSectionHeight = postSection.clientHeight
  })

  window.onscroll = function () {
    if (
      window.innerHeight + window.pageYOffset + postSectionHeight * 0.9 >=
      document.body.offsetHeight
    ) {
      postSection.style.transform = 'translateY(0)'
      postSection.style.opacity = 1
      window.onscroll = null
    }
  }
}

setTimeout(() => {
  greetingRightColumn.classList.add('shakeAnimation')
}, 1700)
