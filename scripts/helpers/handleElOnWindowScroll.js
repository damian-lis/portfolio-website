export default ({ onWhatElement, cbWhenTrue, cbWhenFalse, modifier = 1 }) => {
  const element = document.querySelector(onWhatElement)

  window.addEventListener('scroll', () => {
    if (
      (window.innerHeight + window.pageYOffset + element.clientHeight) *
        modifier >=
      document.body.offsetHeight
    ) {
      cbWhenTrue()
    } else {
      cbWhenFalse()
    }
  })
}
