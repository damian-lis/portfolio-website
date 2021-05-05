export default ({
  onWhatElement: trigerElement,
  cbOnEntertriggerEl = () => {},
  cbOnExittriggerEl = () => {},
  modifier = 1,
}) => {
  if (!trigerElement) return

  let element = trigerElement

  if (typeof trigerElement === 'string') {
    element = document.querySelector(trigerElement)
  }

  window.addEventListener('scroll', () => {
    if (
      window.innerHeight + window.pageYOffset * modifier >
      element.offsetTop
    ) {
      cbOnEntertriggerEl(element)
    } else {
      cbOnExittriggerEl(element)
    }
  })
}
