export default (data, delay) => {
  data.map((dataEl) => {
    const { element, styleElements, properties } = dataEl
    let el = element
    if (typeof element === 'string') {
      el = document.querySelector(element)
    }
    if (delay) {
      setTimeout(() => {
        for (let styleElement in styleElements) {
          el.style[styleElement] = styleElements[styleElement]
        }
        for (let property in properties) {
          el[property] = properties[property]
        }
      }, delay)
    } else {
      for (let styleElement in styleElements) {
        el.style[styleElement] = styleElements[styleElement]
      }
      for (let property in properties) {
        el[property] = properties[property]
      }
    }
  })
}
