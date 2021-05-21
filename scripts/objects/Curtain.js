import {
  createElementFn,
  appendElementsToContainerFn,
  setPropsFn,
  toggleClassesFn,
} from '/scripts/helpers/index.js'

import {
  classNames,
  idReferences,
  common,
  elements,
  events,
  styleProps,
} from '/data/global/names.js'

class Curtain {
  constructor(container) {
    if (Curtain.instance == null) {
      Curtain.instance = this
      this.preventHidden = false
      this.cbsToCallOnHidden = []
      this.children = []

      this.createElements()
      appendElementsToContainerFn([this.curtain], container)
    }
    return (Curtain.instance = this)
  }

  createElements() {
    this.curtain = createElementFn({
      element: elements.div,
      classes: [classNames.curtain.main],
      listeners: [
        {
          event: events.click,
          cb: () => this.toggleShow(common.off),
        },
      ],
    })
  }

  toggleShow(toggle, { appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case common.on:
        this.addCbsToCallOnHidden(cbsToCallOnHidden)
        this.appendElements(appendElements)
        break

      case common.off:
        if (this.preventHidden) return
        this.callCbsOnHidden()
        this.clear({ after: 200 })

        break

      default:
        break
    }

    this.toggleBodyOverflow(toggle)
    this.toggleActive(toggle)
  }

  toggleBodyOverflow(toggle) {
    setPropsFn([
      {
        elements: [document.body],
        styleProps: [
          {
            name: styleProps.names.overflow,
            value:
              toggle === common.on
                ? styleProps.values.hidden
                : styleProps.values.auto,
          },
        ],
      },
    ])
  }

  toggleActive(toggle) {
    toggleClassesFn(toggle, {
      elements: [this.mainContainer],
      classes: [classNames.curtain.active],
    })
  }

  togglePreventHidden(toggle) {
    this.preventHidden = toggle === common.on ? true : false
  }

  addElToChildren(el) {
    this.children.push(el)
  }

  appendElements(elements) {
    elements.map((el) => {
      this.curtain.appendChild(el)
      this.addElToChildren(el)
    })
  }

  addCbsToCallOnHidden(cbs) {
    cbs.map((cb) => this.cbsToCallOnHidden.push(cb))
  }

  callCbsOnHidden() {
    this.cbsToCallOnHidden.map((cb) => cb())
  }

  clearCbsToCallOnHidden() {
    this.cbsToCallOnHidden = []
  }

  clearChildren() {
    this.children = []
  }

  clear({ after }) {
    this.clearCbsToCallOnHidden()
    setTimeout(() => {
      this.children.map((child) => child.remove())
      this.clearChildren()
    }, after)
  }
}

const curtain = new Curtain(idReferences.global.mainContainer)

export default curtain
