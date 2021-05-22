import {
  createElementFn,
  appendElementsToContainerFn,
  setPropsFn,
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
      appendElementsToContainerFn({ elements: [this.curtain], container })
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
          cb: () => this.toggleShow({ toggle: common.off }),
        },
      ],
    })
  }

  toggleShow({ toggle, appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case common.on:
        this.addCbsToCallOnHidden({ cbs: cbsToCallOnHidden })
        this.appendElements({ elements: appendElements })
        break

      case common.off:
        if (this.preventHidden) return
        this.callCbsOnHidden()
        this.clear({ after: 200 })

        break

      default:
        break
    }

    this.toggleBodyOverflow({ toggle })
    this.toggleActive({ toggle })
  }

  toggleBodyOverflow({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [document.body],
          styleProps: [
            {
              name: styleProps.names.overflow,
              values: {
                on: styleProps.values.hidden,
                off: styleProps.values.auto,
              },
            },
          ],
        },
      ],
    })
  }

  toggleActive({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [this.curtain],
          styleProps: [
            {
              name: styleProps.names.visibility,
              values: {
                on: styleProps.values.visible,
                off: styleProps.values.hidden,
              },
            },
            {
              name: styleProps.names.opacity,
              values: {
                on: 1,
                off: 0,
              },
            },
          ],
        },
      ],
    })
  }

  togglePreventHidden({ toggle }) {
    this.preventHidden = toggle === common.on ? true : false
  }

  addElToChildren({ element }) {
    this.children.push(element)
  }

  appendElements({ elements }) {
    elements.map((element) => {
      this.curtain.appendChild(element)
      this.addElToChildren({ element })
    })
  }

  addCbsToCallOnHidden({ cbs }) {
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
