export default ({ onWhatElement, cbWhenTrue, cbWhenFalse, modifier }) => {
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
