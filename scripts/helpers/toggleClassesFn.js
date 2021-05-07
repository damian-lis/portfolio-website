import { common } from '/data/global/names.js'

export default (toggle, { elements = [], classes = [] }) => {
  classes.map((classEl) => {
    elements.map((el) => {
      switch (toggle) {
        case common.on:
          el.classList.add(classEl)
          break

        case common.off:
          el.classList.remove(classEl)
          break

        default:
          break
      }
    })
  })
}
