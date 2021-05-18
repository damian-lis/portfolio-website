import { common } from '/data/global/names.js'

export default ({ setOn, removeFrom = [], classes = [] }) => {
  removeFrom.map((el) => {
    let element = el

    if (typeof el === common.string) {
      element = document.querySelector(el)
    }

    classes.map((classEl) => {
      element.classList.remove(classEl)
      element.disabled = false
    })
  })

  setOn &&
    setOn.map((el) => {
      let element = el

      if (typeof el === common.string) {
        element = document.querySelector(el)
      }

      classes.map((classEl) => {
        el.classList.add(classEl)
        el.disabled = true
      })
    })
}
