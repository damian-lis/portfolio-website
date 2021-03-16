export default (themeDots, themeMode, setActive, removeAllActive) => {
  themeDots.map((themeDot) => {
    if (themeMode === themeDot.dataset.mode) {
      setActive(themeDot, themeDots, removeAllActive)
    }
  })
}
