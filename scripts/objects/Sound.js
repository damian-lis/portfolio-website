import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { classNames, src } from '../../data/global/names.js'

class Sound {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    const triggerElement = document.querySelector(trigger)
    const soundElements = this.createSoundElements()
    const soundButtonComponent = this.joinSoundElements(soundElements)
    this.play = false

    appendElementsToContainerFn([soundButtonComponent], containerSent)
    this.handleSoundButtonDuringWindowScroll(triggerElement)
  }

  createSoundElements() {
    this.audio = createElementFn({
      element: 'audio',
      src: src.sound.audioRecord,
    })

    this.soundButton = createElementFn({
      element: 'button',
      classes: [classNames.global.leftBtn],
      event: 'click',
      listeners: [{ event: 'click', cb: () => this.handleAudio() }],
    })

    this.soundBtnImage = createElementFn({
      element: 'img',
      src: src.sound.pauseImg,
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
      this.soundBtnImage.src = src.sound.pauseImg
      this.audio.pause()
      this.play = false
    } else {
      this.audio.play()
      this.soundBtnImage.src = src.sound.playImg
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
    triggerActionOnWindowScrollFn({
      onWhatElement: triggerElement,
      cbWhenTrue: () => this.hideSoundButton(),
      cbWhenFalse: () => this.showSoundButton(),
      modifier: 0.95,
    })
  }
}

export default Sound
