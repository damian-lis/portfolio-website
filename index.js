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
