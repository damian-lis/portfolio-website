export default ({ node, properties, delay }) => {
  let el = node
  if (typeof node === 'string') {
    el = document.querySelector(node)
  }
  if (delay) {
    setTimeout(() => {
      for (let property in properties) {
        el.style[property] = properties[property]
      }
    }, delay)
  } else {
    for (let property in properties) {
      el.style[property] = properties[property]
    }
  }
}
