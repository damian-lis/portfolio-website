import { createElementFn } from '../helpers/index.js'

export default class Sound {
  constructor(container) {
    this.audio = createElementFn({
      element: 'audio',
      src: '../data/musics/ambient.mp3',
    })

    const buttonSoundPlay = createElementFn({
      element: 'button',
      id: 'sound-play',
      text: 'Play sound',
      event: 'click',
      cb: (e) => this.handleAudio(e.target),
    })

    this.attachToContainer(container, buttonSoundPlay)
    this.play = false
  }

  handleAudio(element) {
    if (this.play) {
      element.textContent = 'Play sound!'
      this.audio.pause()
      this.play = false
    } else {
      this.audio.play()
      element.textContent = 'Stop sound!'
      this.play = true
    }
  }

  attachToContainer(container, element) {
    document.querySelector(container).appendChild(element)
  }
}
