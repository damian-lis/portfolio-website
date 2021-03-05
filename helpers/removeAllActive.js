export default (objsToDisactive) => {
  objsToDisactive.forEach((obj) => obj.classList.remove('active'))
}
