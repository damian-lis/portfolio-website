import {
  createElementFn,
  appendElementsToContainerFn,
  setActiveFn,
} from '../helpers/index.js'
import { classNames } from '../../data/global/names.js'

class Theme {
  constructor(container, themesObject, BackgroundObj) {
    const containerSent = document.querySelector(container)
    this.themesObject = themesObject
    this.BackgroundObj = BackgroundObj
    this.initialThemeName = this.setInitialThemeName()
    this.initialThemeObject = this.setInitialThemeObject()

    this.createElements()
    this.createComponents()
    this.setGlobalVariables()
    this.createBackgroundAnimation()

    appendElementsToContainerFn([this.themeComponent], containerSent)
  }

  createElements() {
    this.background = new this.BackgroundObj()

    this.themeContainer = createElementFn({
      element: 'div',
      classes: [classNames.theme.container],
    })

    this.themeTitle = createElementFn({
      element: 'h5',
      textContent: 'Personalize Theme',
    })

    this.themeOptionsContainer = createElementFn({
      element: 'div',
      classes: [classNames.theme.optionsContainer],
    })

    this.themeOptionsDots = Object.keys(this.themesObject).map((themeName) => {
      return createElementFn({
        element: 'div',
        classes: [
          classNames.theme.optionsDot,
          themeName === this.initialThemeName &&
            classNames.theme.optionsDotActive,
        ],
        id: themeName,
        listeners: [
          {
            event: 'click',
            cb: (e) => this.handleDotClick({ element: e.target, themeName }),
          },
        ],
      })
    })

    this.themeNote = createElementFn({
      element: 'p',
      classes: [classNames.theme.note],
      textContent: '*Theme settings will be saved for your next visit',
    })
  }

  createComponents() {
    this.themeOptionsComponent = appendElementsToContainerFn(
      this.themeOptionsDots,
      this.themeOptionsContainer
    )

    this.themeComponent = appendElementsToContainerFn(
      [this.themeTitle, this.themeOptionsComponent, this.themeNote],
      this.themeContainer
    )
  }

  handleDotClick({ element, themeName }) {
    const themeObject = this.themesObject[themeName]

    setActiveFn({
      setOn: element,
      removeFrom: this.themeOptionsDots,
      classes: [classNames.theme.optionsDotActive],
    })
    this.setGlobalVariables(themeObject)
    this.background.setTheme(themeObject)
    this.saveThemeNameInLocalStorage(themeName)
  }

  setGlobalVariables(themeObject) {
    for (const property in themeObject
      ? themeObject
      : this.initialThemeObject) {
      document.documentElement.style.setProperty(
        `--${property}`,
        themeObject ? themeObject[property] : this.initialThemeObject[property]
      )
    }
  }

  setInitialThemeName() {
    return localStorage.getItem('theme') || Object.keys(this.themesObject)[0]
  }

  setInitialThemeObject() {
    return this.themesObject[this.initialThemeName]
  }

  saveThemeNameInLocalStorage(theme) {
    localStorage.setItem('theme', theme)
  }

  createBackgroundAnimation() {
    this.background.start(this.initialThemeObject)
  }
}

export default Theme
