import {
  createElementFn,
  triggerActionOnWindowScroll,
  appendElementsToContainer,
} from '../helpers/index.js'

class Sound {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    const triggerElement = document.querySelector(trigger)
    const soundElements = this.createSoundElements()
    const soundButtonComponent = this.joinSoundElements(soundElements)
    this.play = false

    appendElementsToContainer(soundButtonComponent, containerSent)
    this.handleSoundButtonDuringWindowScroll(triggerElement)
  }

  createSoundElements() {
    this.audio = createElementFn({
      element: 'audio',
      src: '../data/musics/ambient.mp3',
    })

    this.soundButton = createElementFn({
      element: 'button',
      classes: ['global-left-btn'],
      event: 'click',
      cb: (e) => this.handleAudio(e.target),
    })

    this.soundBtnImage = createElementFn({
      element: 'img',
      src: '../../data/images/icons/playMusic.svg',
    })

    return [this.soundButton, this.soundBtnImage]
  }

  joinSoundElements(elements) {
    const [soundButton, soundBtnImage] = elements
    soundButton.appendChild(soundBtnImage)
    return soundButton
  }

  handleAudio() {
    if (this.play) {
      ;(this.soundBtnImage.src = '../../data/images/icons/playMusic.svg'),
        this.audio.pause()
      this.play = false
    } else {
      this.audio.play()
      this.soundBtnImage.src = '../../data/images/icons/stopMusic.svg'
      this.play = true
    }
  }

  showSoundButton() {
    this.soundButton.style.transform = 'translateX(0)'
  }

  hideSoundButton() {
    this.soundButton.style.transform = 'translateX(-100%)'
  }

  handleSoundButtonDuringWindowScroll(triggerElement) {
    triggerActionOnWindowScroll({
      onWhatElement: triggerElement,
      cbWhenTrue: () => this.hideSoundButton(),
      cbWhenFalse: () => this.showSoundButton(),
      modifier: 0.95,
    })
  }
}

export default Sound
