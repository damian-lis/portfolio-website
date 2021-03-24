export default ({ element, cb, ...rest }) => {
  const createdElement = document.createElement(element)

  if (Object.keys(rest).length) {
    for (const propEl in rest) {
      if (propEl === 'text') {
        createdElement.textContent = rest[propEl]
      }
      if (propEl === 'event') {
        createdElement.addEventListener(rest[propEl], (e) => {
          cb ? cb(e) : () => {}
        })
      }
      if (propEl === 'classes') {
        createdElement.classList.add(...rest[propEl])
      }
      createdElement[propEl] = rest[propEl]
    }
  }

  return createdElement
}
