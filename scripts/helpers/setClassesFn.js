import { common } from '/data/global/names.js'

export default (objects = []) => {
  objects.length &&
    objects.map((object) => {
      let element = object.element

      if (typeof object.element === common.string) {
        element = document.querySelector(object.element)
      }
      element.classList.add(...object.classes)
    })
}
