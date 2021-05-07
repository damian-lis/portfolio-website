import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
} from '/scripts/helpers/index.js'
import {
  classNames,
  paths,
  common,
  elements,
  styleProps,
  events,
} from '/data/global/names.js'

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
      cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.on),
      cbOnExitTriggerEl: () => this.toggleBtnComponent(common.off),
      modifier: 0.8,
    })
  }

  createElements() {
    this.audio = createElementFn({
      element: elements.audio,
      src: paths.audioRecord,
    })

    this.btn = createElementFn({
      element: elements.button,
      classes: [classNames.global.leftBtn],
      listeners: [{ event: events.click, cb: () => this.handleAudio() }],
    })

    this.soundImg = createElementFn({
      element: elements.img,
      src: paths.pauseImg,
    })
  }

  createComponents() {
    this.btnComponent = appendElementsToContainerFn([this.soundImg], this.btn)
  }

  handleAudio() {
    switch (this.play) {
      case true:
        this.soundImg.src = paths.pauseImg
        this.audio.pause()
        this.play = false
        break

      case false:
        this.audio.play()
        this.soundImg.src = paths.playImg
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
            name: styleProps.names.transform,
            value:
              toggle === common.on
                ? styleProps.values.translateX(-100)
                : styleProps.values.translateX(0),
          },
        ],
      },
    ])
  }
}

export default Sound
