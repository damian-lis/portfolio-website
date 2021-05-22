import { common } from '/data/global/names.js'

export default ({ toggle, objs = [], delay }) => {
  const logic = () =>
    objs.length &&
    objs.map((obj) =>
      obj.delay
        ? obj.elements.map((el) => {
            let element = el

            if (typeof el === common.string) {
              element = document.querySelector(el)
            }

            obj.styleProps &&
              obj.styleProps.map((prop) =>
                setTimeout(() => {
                  if (toggle) {
                    element.style[prop.name] =
                      toggle === common.on ? prop.values.on : prop.values.off
                  } else element.style[prop.name] = prop.value
                }, obj.delay)
              )

            obj.props &&
              obj.props.map((prop) =>
                setTimeout(() => {
                  if (toggle) {
                    element.style[prop.name] =
                      toggle === common.on ? prop.values.on : prop.values.off
                  } else element.style[prop.name] = prop.value
                }, obj.delay)
              )
          })
        : obj.elements.map((el) => {
            let element = el

            if (typeof el === common.string) {
              element = document.querySelector(el)
            }

            obj.styleProps &&
              obj.styleProps.map((prop) => {
                if (prop.delay) {
                  setTimeout(() => {
                    if (toggle) {
                      element.style[prop.name] =
                        toggle === common.on ? prop.values.on : prop.values.off
                    } else element.style[prop.name] = prop.value
                  }, prop.delay)
                } else {
                  if (toggle) {
                    element.style[prop.name] =
                      toggle === common.on ? prop.values.on : prop.values.off
                  } else element.style[prop.name] = prop.value
                }
              })

            obj.props &&
              obj.props.map((prop) => {
                if (prop.delay) {
                  setTimeout(() => {
                    if (toggle) {
                      element.style[prop.name] =
                        toggle === common.on ? prop.values.on : prop.values.off
                    } else element.style[prop.name] = prop.value
                  }, prop.delay)
                } else {
                  if (toggle) {
                    element.style[prop.name] =
                      toggle === common.on ? prop.values.on : prop.values.off
                  } else element.style[prop.name] = prop.value
                }
              })
          })
    )
  if (delay) return setTimeout(logic, delay)
  logic()
}

// import { common } from '/data/global/names.js'

// export default (objs = [], { delay } = {}) =>
//   objs.length &&
//   setTimeout(() => {
//     objs.map((obj) =>
//       obj.delay
//         ? obj.elements.map((el) => {
//             let element = el

//             if (typeof el === common.string) {
//               element = document.querySelector(el)
//             }

//             obj.styleProps &&
//               obj.styleProps.map((prop) =>
//                 setTimeout(
//                   () => (element.style[prop.name] = prop.value),
//                   obj.delay
//                 )
//               )

//             obj.props &&
//               obj.props.map((prop) =>
//                 setTimeout(() => (element[prop.name] = prop.value), obj.delay)
//               )
//           })
//         : obj.elements.map((el) => {
//             let element = el

//             if (typeof el === common.string) {
//               element = document.querySelector(el)
//             }

//             obj.styleProps &&
//               obj.styleProps.map((prop) =>
//                 prop.delay
//                   ? setTimeout(
//                       () => (element.style[prop.name] = prop.value),
//                       prop.delay
//                     )
//                   : (element.style[prop.name] = prop.value)
//               )

//             obj.props &&
//               obj.props.map((prop) =>
//                 prop.delay
//                   ? setTimeout(
//                       () => (element[prop.name] = prop.value),
//                       prop.delay
//                     )
//                   : (element[prop.name] = prop.value)
//               )
//           })
//     )
//   }, delay)
