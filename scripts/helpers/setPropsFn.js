import { common } from '/data/global/names.js'

export default (objs = []) => {
  return setTimeout(() =>
    objs.map((obj) =>
      obj.delay
        ? obj.elements.map((el) => {
            let element = el

            if (typeof el === common.string) {
              element = document.querySelector(el)
            }

            obj.styleProps &&
              obj.styleProps.map((prop) =>
                setTimeout(
                  () => (element.style[prop.name] = prop.value),
                  obj.delay
                )
              )

            obj.props &&
              obj.props.map((prop) =>
                setTimeout(() => (element[prop.name] = prop.value), obj.delay)
              )
          })
        : obj.elements.map((el) => {
            let element = el

            if (typeof el === common.string) {
              element = document.querySelector(el)
            }

            obj.styleProps &&
              obj.styleProps.map((prop) =>
                prop.delay
                  ? setTimeout(
                      () => (element.style[prop.name] = prop.value),
                      prop.delay
                    )
                  : (element.style[prop.name] = prop.value)
              )

            obj.props &&
              obj.props.map((prop) =>
                prop.delay
                  ? setTimeout(
                      () => (element[prop.name] = prop.value),
                      prop.delay
                    )
                  : (element[prop.name] = prop.value)
              )
          })
    )
  )
}
