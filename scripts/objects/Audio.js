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
    this.play = false
    this.path = path

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.btnComponent], container)

    trigger &&
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.off),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.on),
        modifier: 80,
      })
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
    this.btnComponent = appendElementsToContainerFn([this.audioImg], this.btn)
  }

  toggleBtnComponent(toggle) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [this.btnComponent],
          styleProps: [
            {
              name: styleProps.names.transform,
              values: {
                on: styleProps.values.translateX(0),
                off: styleProps.values.translateX(-100),
              },
            },
          ],
        },
      ],
    })
  }

  handleAudio() {
    this.play = !this.play
    this.play ? this.audio.play() : this.audio.pause()
    this.audioImg.src = this.play ? paths.playImg : paths.pauseImg
  }
}

export default Audio
