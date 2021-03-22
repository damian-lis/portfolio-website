import { createElementFn } from '../helpers/index.js'

export default class Sound {
  constructor(container) {
    this.audio = createElementFn({
      element: 'audio',
      src: '../data/musics/ambient.mp3',
    })
    const audioElements = this.createAudioElements()
    this.attachToContainer(container, audioElements)
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

  createAudioElements() {
    const btnContainer = createElementFn({
      element: 'div',
      classes: ['sound-btn-container'],
    })
    const button = createElementFn({
      element: 'button',
      id: 'sound-play',
      text: 'Play sound',
      event: 'click',
      cb: (e) => this.handleAudio(e.target),
    })
    return {
      btnContainer,
      button,
    }
  }

  attachToContainer(container, elements) {
    const { btnContainer, button } = elements

    btnContainer.appendChild(button)
    document.querySelector(container).appendChild(btnContainer)
  }
}
