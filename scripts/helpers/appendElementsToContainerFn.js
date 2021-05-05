export default (elements = [], container) => {
  elements.map((el) => {
    if (Array.isArray(el)) {
      const innerEls = el
      innerEls.map((innerEl) => {
        container.appendChild(innerEl)
      })
    } else {
      container.appendChild(el)
    }
  })

  return container
}
