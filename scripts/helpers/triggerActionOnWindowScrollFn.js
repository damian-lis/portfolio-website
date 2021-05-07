import { common, events } from '/data/global/names.js'

export default ({
  onWhatElement: trigerElement,
  cbOnEnterTriggerEl = () => {},
  cbOnExitTriggerEl = () => {},
  modifier = 1,
}) => {
  if (!trigerElement) return

  let element = trigerElement

  if (typeof trigerElement === common.string) {
    element = document.querySelector(trigerElement)
  }

  window.addEventListener(events.scroll, () => {
    if (
      window.innerHeight + window.pageYOffset * modifier >
      element.offsetTop
    ) {
      cbOnEnterTriggerEl(element)
    } else {
      cbOnExitTriggerEl(element)
    }
  })
}
