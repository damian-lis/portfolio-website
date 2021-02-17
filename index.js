let theme = localStorage.getItem('theme')
const themeDots = [...document.getElementsByClassName('theme-dot')]

if (theme === null) {
  setTheme('light')
} else {
  setTheme(theme)
}

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function (e) {
    const mode = this.dataset.mode

    setActive(this, themeDots)
    setTheme(mode)
  })
}

function setTheme(mode) {
  setActive(document.querySelector(`[data-mode=${mode}]`), themeDots)
  if (mode === 'light') {
    document.getElementById('theme-style').href = 'default.css'
  }

  if (mode === 'blue') {
    document.getElementById('theme-style').href = 'blue.css'
  }

  if (mode === 'green') {
    document.getElementById('theme-style').href = 'green.css'
  }

  if (mode === 'purple') {
    document.getElementById('theme-style').href = 'purple.css'
  }

  localStorage.setItem('theme', mode)
}

function setActive(objToActive, objsToDisactive) {
  removeAllActive(objsToDisactive)
  objToActive.classList.add('active')
}

function removeAllActive(objsToDisactive) {
  objsToDisactive.forEach((obj) => obj.classList.remove('active'))
}

const sections = document.querySelectorAll('section')
const lastSection = sections[sections.length - 1]
let lastSectionHeight = lastSection.clientHeight

window.addEventListener('resize', () => {
  lastSectionHeight = lastSection.clientHeight
})

window.onscroll = function () {
  if (
    window.innerHeight + window.pageYOffset + lastSectionHeight * 0.75 >=
    document.body.offsetHeight
  ) {
    lastSection.style.transform = 'translateY(0)'
    lastSection.style.opacity = 1
    window.onscroll = null
  }
}

const greetingRightColumn = document.querySelector('.greeteing-right-column')

setTimeout(() => {
  greetingRightColumn.classList.add('shakeAnimation')
}, 1700)
