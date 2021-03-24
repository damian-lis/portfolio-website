import { createElementFn } from '../helpers/index.js'

export default class Sound {
  constructor(container) {
    this.audio = createElementFn({
      element: 'audio',
      src: '../data/musics/ambient.mp3',
    })

    this.image = createElementFn({
      element: 'img',
      src: '../../data/images/icons/playMusic.svg',
    })

    this.button = createElementFn({
      element: 'button',
      classes: ['global-left-btn'],
      event: 'click',
      cb: (e) => this.handleAudio(e.target),
    })

    this.button.appendChild(this.image)

    document.querySelector(container).appendChild(this.button)
    this.play = false

    this.addWindowScrollListener()
  }

  handleAudio() {
    if (this.play) {
      ;(this.image.src = '../../data/images/icons/playMusic.svg'),
        this.audio.pause()
      this.play = false
    } else {
      this.audio.play()
      this.image.src = '../../data/images/icons/stopMusic.svg'
      this.play = true
    }
  }

  showButton() {
    this.button.style.transform = 'translateX(0)'
  }

  hideButton() {
    this.button.style.transform = 'translateX(-100%)'
  }

  handleButtonDuringScroll(sectionWhereHide) {
    if (
      (window.innerHeight +
        window.pageYOffset +
        sectionWhereHide.clientHeight) *
        0.95 >=
      document.body.offsetHeight
    ) {
      this.hideButton()
    } else {
      this.showButton()
    }
  }

  addWindowScrollListener() {
    const sectionWhereHide = document.querySelector('#post-section')
    window.addEventListener('scroll', () =>
      this.handleButtonDuringScroll(sectionWhereHide)
    )
  }
}
