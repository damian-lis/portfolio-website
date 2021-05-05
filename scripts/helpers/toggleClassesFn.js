export default (toggle, { elements, classes }) => {
  classes.map((classEl) => {
    elements.map((el) => {
      switch (toggle) {
        case 'on':
          el.classList.add(classEl)
          break

        case 'off':
          el.classList.remove(classEl)
          break

        default:
          break
      }
    })
  })
}
