export default (elements, classesToRemove) => {
  elements.map((element) => element.classList.remove(classesToRemove))
}
