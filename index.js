let theme = localStorage.getItem('theme')

if (theme === null) {
  setTheme('light')
} else {
  setTheme(theme)
}

const themeDots = document.getElementsByClassName('theme-dot')

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function (e) {
    const mode = this.dataset.mode

    setActive(this)
    setTheme(mode)
  })
}

function setActive(obj) {
  removeAllActive('.theme-dot')
  obj.classList.add('active')
  console.log(obj.classList)
}

function removeAllActive(selector) {
  const themeDots = document.querySelectorAll(selector)
  themeDots.forEach((dot) => dot.classList.remove('active'))
}

function setTheme(mode) {
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
