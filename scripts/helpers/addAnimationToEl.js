export default ({ element, animationClass, after }) => {
  console.log(element)
  const el = document.querySelector(element)
  setTimeout(() => {
    el.classList.add(animationClass)
  }, after)
}
