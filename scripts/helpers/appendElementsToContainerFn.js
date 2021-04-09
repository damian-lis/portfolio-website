export default (elements, container) => {
  if (Array.isArray(elements)) {
    elements.map((el) => {
      container.appendChild(el)
    })
  } else {
    const element = elements
    container.appendChild(element)
  }

  return container
}
