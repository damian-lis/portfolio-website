import {
  createElementFn,
  setClasses,
  removeClasses,
  appendElementsToContainer,
} from '../helpers/index.js'

class Theme {
  constructor(container, themesObject, BackgroundObj) {
    const containerSent = document.querySelector(container)
    const initialThemeName = this.getThemeNameFromLocalStorage(themesObject)
    const initialThemeObject = this.setThemeObject(
      themesObject,
      initialThemeName
    )
    const themeElements = this.createThemeElements(
      themesObject,
      initialThemeName
    )
    const themeComponent = this.joinThemeElements(themeElements)

    appendElementsToContainer(themeComponent, containerSent)
    this.setGlobalVariables(initialThemeObject)
    this.createBackgroundAnimation(BackgroundObj, initialThemeObject)
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

  createThemeElements(themesObject, themeName) {
    this.themeContainer = createElementFn({
      element: 'div',
      classes: ['theme-container'],
    })
    this.themeTitle = createElementFn({
      element: 'h5',
      textContent: 'Personalize Theme',
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
      textContent: '*Theme settings will be saved for your next visit',
    })

    return [
      this.themeContainer,
      this.themeTitle,
      this.themeOptionsContainer,
      this.themeOptionsDots,
      this.themeNote,
    ]
  }

  joinThemeElements(elements) {
    const [
      themeContainer,
      themeTitle,
      themeOptionsContainer,
      themeOptionsDots,
      themeNote,
    ] = elements

    themeOptionsDots.map((dot) => themeOptionsContainer.appendChild(dot))
    const elementsToAppend = [themeTitle, themeOptionsContainer, themeNote]
    elementsToAppend.map((element) => themeContainer.appendChild(element))

    return this.themeContainer
  }
}

export default Theme
