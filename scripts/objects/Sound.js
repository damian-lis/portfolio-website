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
    this.play = false

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.mainComponent], containerSent)

    if (trigger) {
      const triggerElement = document.querySelector(trigger)
      triggerActionOnWindowScrollFn({
        onWhatElement: triggerElement,
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.on),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.off),
        modifier: 0.8,
      })
    }
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

    this.audioImg = createElementFn({
      element: elements.img,
      src: paths.pauseImg,
    })
  }

  createComponents() {
    this.mainComponent = appendElementsToContainerFn([this.audioImg], this.btn)
  }

  handleAudio() {
    switch (this.play) {
      case true:
        this.img.src = paths.pauseImg
        this.audio.pause()
        this.play = false
        break

      case false:
        this.audio.play()
        this.img.src = paths.playImg
        this.play = true
        break

      default:
        break
    }
  }

  toggleBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.mainComponent],
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
