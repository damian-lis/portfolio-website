export default ({ setOn, removeFrom = [], classes = [] }) => {
  removeFrom.map((el) =>
    classes.map((classEl) => {
      el.classList.remove(classEl)
      el.disabled = false
    })
  )

  setOn &&
    classes.map((classEl) => {
      setOn.classList.add(classEl)
      setOn.disabled = true
    })
}
