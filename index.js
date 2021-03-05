import themes from './data/themes.js'
import setVariables from './helpers/setVariables.js'
import initialSetActive from './helpers/initialSetActive.js'
import setActive from './helpers/setActive.js'
import removeAllActive from './helpers/removeAllActive.js'

let themeMode = localStorage.getItem('themeMode')
const themeDots = [...document.getElementsByClassName('theme-dot')]

setVariables(themes[themeMode || 'blue'])
initialSetActive(themeDots, themeMode, setActive, removeAllActive)

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function (e) {
    const mode = this.dataset.mode
    setVariables(themes[mode])
    setActive(this, themeDots, removeAllActive)
    localStorage.setItem('themeMode', mode)
  })
}

const postSection = document.querySelector('#post-section')

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

const greetingRightColumn = document.querySelector('.greeting-right-column')

setTimeout(() => {
  greetingRightColumn.classList.add('shakeAnimation')
}, 1700)
