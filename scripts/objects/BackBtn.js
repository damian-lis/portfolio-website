import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { classNames, paths, elements } from '/data/global/names.js'

class BackBtn {
  constructor(container) {
    const containerSent = document.querySelector(container)
    this.createElements()
    this.createComponents()

    appendElementsToContainerFn([this.mainComponent], containerSent)
  }

  createElements() {
    this.mainContainer = createElementFn({
      element: elements.a,
      href: '/',
      classes: [classNames.global.leftBtn],
    })
    this.arrowImg = createElementFn({
      element: elements.img,
      src: paths.arrowImg,
    })
  }

  createComponents() {
    this.mainComponent = appendElementsToContainerFn(
      [this.arrowImg],
      this.mainContainer
    )
  }
}

export default BackBtn
