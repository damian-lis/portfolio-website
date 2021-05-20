import { common } from '/data/global/names.js'

export default ({
  elements = [],
  events = [],
  cb = () => console.log('set cb'),
  delay = 0,
}) => {
  elements.length && events.length && typeof delay === 'number' && delay > 0
    ? setTimeout(
        () =>
          elements.map((el) => {
            let element = el

            if (typeof el === common.string) {
              element = document.querySelector(el)
            }

            events.map((event) => element.addEventListener(event, cb))
          }),
        delay
      )
    : elements.map((el) => {
        let element = el

        if (typeof el === common.string) {
          element = document.querySelector(el)
        }

        events.map((event) => element.addEventListener(event, cb))
      })
}
