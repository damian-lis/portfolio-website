import {
  createElementFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import {
  classNames,
  common,
  info,
  elements,
  events,
} from '/data/global/names.js'

class Theme {
  constructor(container, themesObject, BackgroundObj) {
    this.themesObject = themesObject
    this.BackgroundObj = BackgroundObj
    this.initialThemeName = this.setInitialThemeName()
    this.initialThemeObject = this.setInitialThemeObject()

    this.createElements()
    this.createComponents()
    this.setGlobalVariables()
    this.createBackgroundAnimation()

    appendElementsToContainerFn([this.mainComponent], container)
  }

  createElements() {
    this.background = new this.BackgroundObj()

    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.theme.container],
    })

    this.title = createElementFn({
      element: elements.h(5),
      textContent: info.personalizeTheme,
    })

    this.optionsContainer = createElementFn({
      element: elements.div,
      classes: [classNames.theme.optionsContainer],
    })

    this.optionsDots = Object.keys(this.themesObject).map((themeName) =>
      createElementFn({
        element: elements.div,
        classes: [
          classNames.theme.optionsDot,
          themeName === this.initialThemeName &&
            classNames.theme.optionsDotActive,
        ],
        id: themeName,
        listeners: [
          {
            event: events.click,
            cb: (e) => this.handleDotClick({ element: e.target, themeName }),
          },
        ],
      })
    )

    this.note = createElementFn({
      element: elements.p,
      classes: [classNames.theme.note],
      textContent: info.themeNote,
    })
  }

  createComponents() {
    this.optionsComponent = appendElementsToContainerFn(
      this.optionsDots,
      this.optionsContainer
    )

    this.mainComponent = appendElementsToContainerFn(
      [this.title, this.optionsComponent, this.note],
      this.mainContainer
    )
  }

  handleDotClick({ element, themeName }) {
    const themeObject = this.themesObject[themeName]

    this.setGlobalVariables(themeObject)
    this.background.setTheme(themeObject)
    this.saveThemeNameInLocalStorage(themeName)

    setClassesFn({
      objs: [
        {
          elements: [element],
          removeFromEls: this.optionsDots,
          classes: [classNames.theme.optionsDotActive],
        },
      ],
    })
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
    return (
      localStorage.getItem(common.theme) || Object.keys(this.themesObject)[0]
    )
  }

  setInitialThemeObject() {
    return this.themesObject[this.initialThemeName]
  }

  saveThemeNameInLocalStorage(theme) {
    localStorage.setItem(common.theme, theme)
  }

  createBackgroundAnimation() {
    this.background.start(this.initialThemeObject)
  }
}

export default Theme
