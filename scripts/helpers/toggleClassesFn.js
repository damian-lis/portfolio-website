import { common } from '/data/global/names.js'

export default (toggle, { elements = [], classes = [] }) =>
  toggle &&
  elements.length &&
  classes.length &&
  classes.map((classEl) =>
    elements.map((el) => {
      let element = el

      if (typeof el === common.string) {
        element = document.querySelector(el)
      }

      switch (toggle) {
        case common.on:
          element.classList.add(classEl)
          break

        case common.off:
          element.classList.remove(classEl)
          break

        default:
          break
      }
    })
  )
