export default (objToActive, objsToDisactive, removeAllActive) => {
  removeAllActive(objsToDisactive)
  objToActive.classList.add('active')
}
