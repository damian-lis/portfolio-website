import themes from '../data/themes.js'
import Particles from './Particles.js'
import Sound from './Sound.js'
import Post from './Post.js'
import posts from '../data/posts.js'
import {
  setVariables,
  initialSetActive,
  setActive,
  removeAllActive,
} from '../helpers/index.js'

let themeMode = localStorage.getItem('theme') || Object.keys(themes)[0]
const themeDots = [...document.getElementsByClassName('theme-dot')]
const postWrapper = document.querySelector('.post-wrapper')
const themeSettings = document.querySelector('#theme-settings')
const postSection = document.querySelector('#post-section')
const particles = new Particles()
if (document.title === 'Portfolio') {
  new Sound()
}

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

setTimeout(() => {
  themeSettings.classList.add('shakeAnimation')
}, 1700)

//Post
posts.map((post) => new Post(postWrapper, post))

let postSectionHeight = postSection.clientHeight

window.addEventListener('resize', () => {
  postSectionHeight = postSection.clientHeight
})

window.onscroll = function () {
  if (
    window.innerHeight + window.pageYOffset + postSectionHeight >=
    document.body.offsetHeight
  ) {
    postSection.style.animation = 'slideInFromTop 1s forwards'
    postSection.style.opacity = 1
    window.onscroll = null
  }
}
