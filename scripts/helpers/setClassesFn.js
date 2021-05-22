import { common } from '/data/global/names.js'

export default ({ toggle, objs = [], delay }) => {
  const helperLogic = () =>
    objs.length &&
    objs.map(
      (obj) =>
        obj.elements &&
        obj.elements.map((el) => {
          let element = el

          if (typeof el === common.string) {
            element = document.querySelector(el)
          }

          obj.classes &&
            obj.classes.map((classEl) => {
              obj.removeFromEls &&
                obj.removeFromEls.map((removeFromEl) => {
                  removeFromEl.classList.remove(classEl)
                  removeFromEl.disabled = false
                })

              toggle
                ? toggle === common.on
                  ? element.classList.add(classEl)
                  : element.classList.remove(classEl)
                : element.classList.add(classEl)
            })
        })
    )
  if (delay) return setTimeout(helperLogic, delay)
  helperLogic()
}
