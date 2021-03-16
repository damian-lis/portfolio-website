import themes from '../data/global/themes.js'
import Particles from './objects/Particles.js'
import {
  setVariables,
  initialSetActive,
  setActive,
  removeAllActive,
  addAnimationToEl,
} from './helpers/index.js'

let themeMode = localStorage.getItem('theme') || Object.keys(themes)[0]
const themeDots = [...document.getElementsByClassName('theme-dot')]
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

addAnimationToEl({
  element: '#theme-settings',
  animationClass: 'shakeAnimation',
  after: 1700,
})
