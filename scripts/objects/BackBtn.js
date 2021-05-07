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

    appendElementsToContainerFn([this.backBtnComponent], containerSent)
  }

  createElements() {
    this.backBtnContainer = createElementFn({
      element: elements.a,
      href: '/',
      classes: [classNames.global.leftBtn],
    })
    this.backBtnImage = createElementFn({
      element: elements.img,
      src: paths.arrowImg,
    })
  }

  createComponents() {
    this.backBtnComponent = appendElementsToContainerFn(
      [this.backBtnImage],
      this.backBtnContainer
    )
  }
}

export default BackBtn
