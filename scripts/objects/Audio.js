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

class Audio {
  constructor(container, path, trigger) {
    const containerSent = document.querySelector(container)
    this.play = false
    this.path = path

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.mainComponent], containerSent)

    if (trigger) {
      const triggerElement = document.querySelector(trigger)
      triggerActionOnWindowScrollFn({
        onWhatElement: triggerElement,
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.on),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.off),
        modifier: 80,
      })
    }
  }

  createElements() {
    this.audio = createElementFn({
      element: elements.audio,
      src: this.path,
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
    this.play = !this.play
    this.play ? this.audio.play() : this.audio.pause()
    this.audioImg.src = this.play ? paths.playImg : paths.pauseImg
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

export default Audio
