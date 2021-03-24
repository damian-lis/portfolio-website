export default (data, delay) => {
  data.map((dataEl) => {
    const { node, classes, styleElements, properties } = dataEl
    let el = node
    if (typeof node === 'string') {
      el = document.querySelector(node)
    }
    if (delay) {
      setTimeout(() => {
        for (let styleElement in styleElements) {
          el.style[styleElement] = styleElements[styleElement]
        }
        for (let property in properties) {
          el[property] = properties[property]
        }

        classes && el.classList.add(...classes)
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
