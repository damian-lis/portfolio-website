import {
  createElementFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { classNames, src } from '../../data/global/names.js'

class BackBtn {
  constructor(container) {
    const containerSent = document.querySelector(container)
    const backBtnElements = this.createBackBtnElements()
    const backBtnComponent = this.joinBackBtnElements(backBtnElements)
    appendElementsToContainerFn([backBtnComponent], containerSent)
  }

  joinBackBtnElements({ backBtnContainer, backBtnImage }) {
    backBtnContainer.appendChild(backBtnImage)
    return backBtnContainer
  }

  createBackBtnElements() {
    const backBtnContainer = createElementFn({
      element: 'a',
      href: '/',
      classes: [classNames.global.leftBtn],
    })
    const backBtnImage = createElementFn({
      element: 'img',
      src: src.arrowImg,
    })

    return {
      backBtnContainer,
      backBtnImage,
    }
  }
}

export default BackBtn
