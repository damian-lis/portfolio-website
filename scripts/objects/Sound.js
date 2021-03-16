export default class Sound {
  constructor() {
    this.audio = this.createAudio()
    this.soundContainer = this.createContainer()
    this.soundButton = this.createSoundButton()
    this.attachToContainer(this.soundButton, this.soundContainer)
    this.attachToContainer(this.soundContainer, document.body)
    this.play = false
  }

  attachToContainer(element, container) {
    container.appendChild(element)
  }

  createContainer() {
    const soundContainer = document.createElement('div')
    soundContainer.classList.add('sound-container')
    return soundContainer
  }

  createSoundButton() {
    const soundButton = document.createElement('button')
    soundButton.classList.add('pointer')
    soundButton.id = 'sound'
    soundButton.textContent = 'Play sound'
    soundButton.addEventListener('click', () => {
      if (this.play) {
        soundButton.textContent = 'Play sound!'
        this.audio.pause()
        this.play = false
      } else {
        this.audio.play()
        soundButton.textContent = 'Stop sound!'
        this.play = true
      }
    })
    return soundButton
  }

  createAudio() {
    const audio = document.createElement('audio')
    audio.src = '../data/musics/ambient.mp3'
    return audio
  }
}
