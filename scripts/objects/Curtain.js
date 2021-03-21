import { createElementFn } from '../helpers/index.js'

class Curtain {
  constructor() {
    this.curtain = createElementFn({
      element: 'div',
      classes: ['curtain'],
      event: 'click',
      cb: () => {
        this.hidden()
      },
    })
    document.body.appendChild(this.curtain)

    this.cbsToCallOnHidden = []
    this.childrenState = []
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
        console.log(child)
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

const curtain = new Curtain()
export default curtain
