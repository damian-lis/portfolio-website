export default (themeMode) => {
  for (const element in themeMode)
    document.documentElement.style.setProperty(
      `--${element}`,
      themeMode[element]
    )
}
