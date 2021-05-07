import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
} from '/scripts/helpers/index.js'
import { classNames, src, common } from '/data/global/names.js'

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
      cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.toggle.on),
      cbOnExitTriggerEl: () => this.toggleBtnComponent(common.toggle.off),
      modifier: 0.8,
    })
  }

  createElements() {
    this.audio = createElementFn({
      element: common.elements.audio,
      src: src.audioRecord,
    })

    this.btn = createElementFn({
      element: common.elements.button,
      classes: [classNames.global.leftBtn],
      listeners: [{ event: common.events.click, cb: () => this.handleAudio() }],
    })

    this.soundImg = createElementFn({
      element: common.elements.img,
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
            name: common.styleProps.names.transform,
            value:
              toggle === common.toggle.on
                ? common.styleProps.values.translateX(-100)
                : common.styleProps.values.translateX(0),
          },
        ],
      },
    ])
  }
}

export default Sound
