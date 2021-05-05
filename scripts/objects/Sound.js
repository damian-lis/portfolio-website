import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
} from '../helpers/index.js'
import { classNames, src } from '../../data/global/names.js'

class Sound {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    const triggerElement = document.querySelector(trigger)
    this.play = false

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.btnComponent], containerSent)

    triggerActionOnWindowScrollFn({
      onWhatElement: triggerElement,
      cbOnEnterTriggerEl: () => this.toggleBtnComponent('on'),
      cbOnExitTriggerEl: () => this.toggleBtnComponent('off'),
      modifier: 0.8,
    })
  }

  createElements() {
    this.audio = createElementFn({
      element: 'audio',
      src: src.audioRecord,
    })

    this.btn = createElementFn({
      element: 'button',
      classes: [classNames.global.leftBtn],
      event: 'click',
      listeners: [{ event: 'click', cb: () => this.handleAudio() }],
    })

    this.soundImg = createElementFn({
      element: 'img',
      src: src.pauseImg,
    })
  }

  createComponents() {
    this.btnComponent = appendElementsToContainerFn([this.soundImg], this.btn)
  }

  handleAudio() {
    switch (this.play) {
      case true:
        this.soundImg.src = src.pauseImg
        this.audio.pause()
        this.play = false
        break

      case false:
        this.audio.play()
        this.soundImg.src = src.playImg
        this.play = true
        break

      default:
        break
    }
  }

  toggleBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.btnComponent],
        styleProps: [
          {
            name: 'transform',
            value: toggle === 'on' ? 'translateX(-100%)' : 'translateX(0)',
          },
        ],
      },
    ])
  }
}

export default Sound
