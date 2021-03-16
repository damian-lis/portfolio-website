export default ({ element, animationClass, after }) => {
  const el = document.querySelector(element)
  setTimeout(() => {
    el.classList.add(animationClass)
  }, after)
}
