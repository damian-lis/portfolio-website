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

    const button = createElementFn({
      element: 'button',
      classes: ['global-left-btn'],
      event: 'click',
      cb: (e) => this.handleAudio(e.target),
    })

    button.appendChild(this.image)

    document.querySelector(container).appendChild(button)
    this.play = false
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
}
