import { common } from '/data/global/names.js'

export default ({ toggle, objs = [] }) =>
  objs.length &&
  objs.map((obj) =>
    obj.elements.map((el) => {
      let element = el

      if (typeof el === common.string) {
        element = document.querySelector(el)
      }

      obj.classes &&
        obj.classes.map((classEl) => {
          if (toggle) {
            toggle === common.on
              ? element.classList.add(classEl)
              : element.classList.remove(classEl)
          } else element.classList.add(classEl)
        })
    })
  )
