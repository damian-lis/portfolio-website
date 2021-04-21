import {
  createElementFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'

import { classNames, idReferences } from '../../data/global/names.js'

class Curtain {
  constructor(container) {
    if (Curtain.instance == null) {
      const sentContainer = document.querySelector(container)
      this.curtain = createElementFn({
        element: 'div',
        classes: [classNames.curtain.container],
        event: 'click',
        listeners: [
          {
            event: 'click',
            cb: () => {
              this.hidden()
            },
          },
        ],
      })

      this.cbsToCallOnHidden = []
      this.childrenState = []
      this.freeze = false

      appendElementsToContainerFn([this.curtain], sentContainer)
      Curtain.instance = this
    }
    return (Curtain.instance = this)
  }

  addChildToState(component) {
    this.childrenState.push(component)
  }

  attachComponents(components) {
    components.map((component) => {
      this.curtain.appendChild(component)
      this.addChildToState(component)
    })
  }

  addCbsToCallOnHidden(cbs) {
    cbs.map((cb) => {
      this.cbsToCallOnHidden.push(cb)
    })
  }

  show() {
    this.curtain.classList.add(classNames.curtain.active)
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
  }

  runCbs() {
    this.cbsToCallOnHidden.map((cb) => {
      cb()
    })
  }

  clearCbsState() {
    this.cbsToCallOnHidden = []
  }

  clearChildrenState() {
    this.childrenState = []
  }

  clearChildren() {
    setTimeout(() => {
      this.childrenState.map((child) => {
        child.remove()
      })
      this.clearChildrenState()
    }, 200)
  }

  hidden() {
    if (this.freeze) return
    this.runCbs()
    this.clearCbsState()
    this.clearChildren()
    document.body.style.overflow = 'auto'
    this.curtain.classList.remove(classNames.curtain.active)
  }

  toggleFreeze(toggle) {
    this.freeze = toggle === 'on' ? true : false
  }
}

const curtain = new Curtain(idReferences.global.mainContainer)
export default curtain
