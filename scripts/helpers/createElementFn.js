export default ({ element, cb, ...rest }) => {
  const createdElement = document.createElement(element)

  if (Object.keys(rest).length) {
    for (const propEl in rest) {
      if (propEl === 'event') {
        createdElement.addEventListener(rest[propEl], (e) => {
          cb ? cb(e) : () => {}
        })
      }
      if (propEl === 'classes') {
        createdElement.classList.add(...rest[propEl])
      }
      if (propEl === 'styles') {
        rest[propEl].map((styleObj) => {
          createdElement.style[styleObj.name] = styleObj.value
        })
      }
      createdElement[propEl] = rest[propEl]
    }
  }

  return createdElement
}
