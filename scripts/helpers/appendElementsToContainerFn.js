import { common } from '/data/global/names.js'

export default (elements = [], container) => {
  elements.map((el) => {
    let element = el

    if (typeof el === common.string) {
      element = document.querySelector(innerEl)
    }

    if (Array.isArray(el)) {
      const innerEls = el
      innerEls.map((innerEl) => {
        let innerElement = innerEl

        if (typeof el === common.string) {
          innerElement = document.querySelector(innerEl)
        }
        container.appendChild(innerElement)
      })
    } else container.appendChild(element)
  })

  return container
}
