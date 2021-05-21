import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { classNames, paths, elements } from '/data/global/names.js'

class Back {
  constructor(container) {
    this.createElements()
    this.createComponents()

    appendElementsToContainerFn([this.linkComponent], container)
  }

  createElements() {
    this.link = createElementFn({
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
    this.linkComponent = appendElementsToContainerFn([this.arrowImg], this.link)
  }
}

export default Back
