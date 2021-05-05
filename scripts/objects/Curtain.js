import {
  createElementFn,
  appendElementsToContainerFn,
  setPropsFn,
  toggleClassesFn,
} from '../helpers/index.js'

import { classNames, idReferences } from '../../data/global/names.js'

class Curtain {
  constructor(container) {
    if (Curtain.instance == null) {
      Curtain.instance = this
      const sentContainer = document.querySelector(container)
      this.cbsToCallOnHidden = []
      this.children = []

      this.createElements()
      appendElementsToContainerFn([this.curtain], sentContainer)
    }
    return (Curtain.instance = this)
  }

  createElements() {
    this.curtain = createElementFn({
      element: 'div',
      classes: [classNames.curtain.container],
      event: 'click',
      listeners: [
        {
          event: 'click',
          cb: () => {
            this.toggleShow('off')
          },
        },
      ],
    })
  }

  toggleShow(toggle, { appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case 'on':
        this.appendElements(appendElements)
        this.addCbsToCallOnHidden(cbsToCallOnHidden)
        break

      case 'off':
        this.callCbsOnHidden()
        this.clearCbsToCallOnHidden()
        this.clearChildren(200)
        break

      default:
        break
    }

    this.toggleBodyOverflow(toggle)
    this.toggleActive(toggle)
  }

  addElToChildrenState(el) {
    this.children.push(el)
  }

  appendElements(elements) {
    elements.map((el) => {
      this.curtain.appendChild(el)
      this.addElToChildrenState(el)
    })
  }

  addCbsToCallOnHidden(cbs) {
    cbs.map((cb) => {
      this.cbsToCallOnHidden.push(cb)
    })
  }

  toggleBodyOverflow(toggle) {
    setPropsFn([
      {
        elements: [document.body],
        styleProps: [
          {
            name: 'overflow',
            value: toggle === 'on' ? 'hidden' : 'auto',
          },
        ],
      },
    ])
  }

  toggleActive(toggle) {
    toggleClassesFn(toggle, {
      elements: [this.curtain],
      classes: [classNames.curtain.active],
    })
  }

  callCbsOnHidden() {
    this.cbsToCallOnHidden.map((cb) => {
      cb()
    })
  }

  clearCbsToCallOnHidden() {
    this.cbsToCallOnHidden = []
  }

  clearChildren() {
    this.children = []
  }

  clearChildren(time) {
    setTimeout(() => {
      this.children.map((child) => {
        child.remove()
      })
      this.clearChildren()
    }, time)
  }
}

const curtain = new Curtain(idReferences.global.mainContainer)

export default curtain
