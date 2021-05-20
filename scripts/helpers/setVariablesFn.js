export default (themeMode) => {
  console.log(themeMode)
  if (!themeMode || typeof themeMode !== 'string') return

  for (const element in themeMode)
    document.documentElement.style.setProperty(
      `--${element}`,
      themeMode[element]
    )
}
