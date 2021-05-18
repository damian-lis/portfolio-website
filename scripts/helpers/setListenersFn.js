import { common } from '/data/global/names.js'

export default ({ elements, events, cb, delay }) => {
  delay
    ? setTimeout(() => {
        elements.map((el) => {
          let element = el

          if (typeof el === common.string) {
            element = document.querySelector(el)
          }

          events.map((event) => element.addEventListener(event, cb))
        })
      }, delay)
    : elements.map((el) => {
        let element = el

        if (typeof el === common.string) {
          element = document.querySelector(el)
        }

        events.map((event) => element.addEventListener(event, cb))
      })
}
