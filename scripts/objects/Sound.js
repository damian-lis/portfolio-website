import { addPropsAfterDelay } from '../helpers/index.js'

export default class Sound {
  constructor() {
    this.audio = this.createAudio()
    this.btnContainer = this.createContainer()
    this.button = this.createButton()
    this.attachToContainer(this.button, this.btnContainer)
    this.attachToContainer(this.btnContainer, document.body)
    this.play = false
  }

  attachToContainer(element, container) {
    container.appendChild(element)
  }

  createContainer() {
    const soundContainer = document.createElement('div')
    soundContainer.classList.add('btn-container')
    return soundContainer
  }

  createButton() {
    const button = document.createElement('button')
    button.id = 'sound-play'
    button.textContent = 'Play sound'
    button.addEventListener('click', () => {
      if (this.play) {
        button.textContent = 'Play sound!'
        this.audio.pause()
        this.play = false
      } else {
        this.audio.play()
        button.textContent = 'Stop sound!'
        this.play = true
      }
    })
    return button
  }

  createAudio() {
    const audio = document.createElement('audio')
    audio.src = '../data/musics/ambient.mp3'
    return audio
  }
}
