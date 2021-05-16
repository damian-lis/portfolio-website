import { common } from '/data/global/names.js'

export default (objs = [], delay) => {
  if (delay) {
    return setTimeout(
      () =>
        objs.map((obj) =>
          obj.elements.map((el) => {
            let element = el
            if (typeof el === common.string) {
              element = document.querySelector(el)
            }
            obj.styleProps &&
              obj.styleProps.map(
                (prop) => (element.style[prop.name] = prop.value)
              )
            obj.props &&
              obj.props.map((prop) => (element[prop.name] = prop.value))
          })
        ),
      delay
    )
  } else {
    objs.map((obj) =>
      obj.elements.map((el) => {
        let element = el
        if (typeof el === common.string) {
          element = document.querySelector(el)
        }
        obj.styleProps &&
          obj.styleProps.map((prop) => (element.style[prop.name] = prop.value))
        obj.props && obj.props.map((prop) => (element[prop.name] = prop.value))
      })
    )
  }
}
