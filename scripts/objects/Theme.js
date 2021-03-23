import { createElementFn, setClasses, removeClasses } from '../helpers/index.js'

export default class Theme {
  constructor(container, themesObject, BackgroundObj) {
    const initialThemeName = this.getThemeNameFromLocalStorage(themesObject)
    const initialThemeObject = this.setThemeObject(
      themesObject,
      initialThemeName
    )
    this.setGlobalVariables(initialThemeObject)
    this.createBackgroundAnimation(BackgroundObj, initialThemeObject)

    this.createThemePanelElements(themesObject, initialThemeName)
    const themeComponent = this.joinThemePanelElements()
    this.attachToContainer(document.querySelector(container), themeComponent)
  }

  setGlobalVariables(themeObject) {
    for (const property in themeObject) {
      document.documentElement.style.setProperty(
        `--${property}`,
        themeObject[property]
      )
    }
  }

  setThemeObject(themesObject, themeName) {
    return themesObject[themeName]
  }

  getThemeNameFromLocalStorage(themesObject) {
    return localStorage.getItem('theme') || Object.keys(themesObject)[0]
  }

  saveThemeNameInLocalStorage(theme) {
    localStorage.setItem('theme', theme)
  }

  createBackgroundAnimation(BackgroundObj, themeObject) {
    this.background = new BackgroundObj()
    this.background.start(themeObject)
  }

  createThemePanelElements(themesObject, themeName) {
    this.themeContainer = createElementFn({
      element: 'div',
      classes: ['theme-container'],
    })
    this.title = createElementFn({
      element: 'h5',
      text: 'Personalize Theme',
    })
    this.themeOptionsContainer = createElementFn({
      element: 'div',
      classes: ['theme-options-container'],
    })
    this.themeOptionsDots = Object.keys(themesObject).map((theme) => {
      return createElementFn({
        element: 'div',
        classes: [
          'theme-options-dot',
          `${theme === themeName && 'theme-options-dot-active'}`,
        ],
        id: theme,
        event: 'click',
        cb: (e) => {
          removeClasses(this.themeOptionsDots, ['theme-options-dot-active'])
          setClasses(e.target, ['theme-options-dot-active'])
          this.setGlobalVariables(themesObject[theme])
          this.background.setTheme(themesObject[theme])
          this.saveThemeNameInLocalStorage(theme)
        },
      })
    })
    this.themeNote = createElementFn({
      element: 'p',
      classes: ['theme-note'],
      text: '*Theme settings will be saved for your next visit',
    })
  }

  joinThemePanelElements() {
    this.themeOptionsDots.map((dot) =>
      this.themeOptionsContainer.appendChild(dot)
    )

    const elementsToAppend = [
      this.title,
      this.themeOptionsContainer,
      this.themeNote,
    ]
    elementsToAppend.map((element) => this.themeContainer.appendChild(element))

    return this.themeContainer
  }

  attachToContainer(container, element) {
    container.appendChild(element)
  }
}
