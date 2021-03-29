import { createElementFn, appendElementsToContainer } from '../helpers/index.js'

class Curtain {
  constructor(container) {
    if (Curtain.instance == null) {
      const sentContainer = document.querySelector(container)
      this.curtain = createElementFn({
        element: 'div',
        classes: ['curtain'],
        event: 'click',
        cb: () => {
          this.hidden()
        },
      })

      this.cbsToCallOnHidden = []
      this.childrenState = []

      appendElementsToContainer(this.curtain, sentContainer)
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
    this.curtain.classList.add('active-curtain')
    document.body.style.overflow = 'hidden'
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
    this.runCbs()
    this.clearCbsState()
    this.clearChildren()
    document.body.style.overflow = 'auto'
    this.curtain.classList.remove('active-curtain')
  }
}

const curtain = new Curtain('#global-main-container')
export default curtain
