import {
  createElementFn,
  setClassesFn,
  removeClassesFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { classNames } from '../../data/global/names.js'

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

    appendElementsToContainerFn([themeComponent], containerSent)
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
    this.themeOptionsDots = Object.keys(themesObject).map((theme) => {
      return createElementFn({
        element: 'div',
        classes: [
          classNames.theme.optionsDot,
          theme === themeName && classNames.theme.optionsDotActive,
        ],
        id: theme,
        listeners: [
          {
            event: 'click',
            cb: (e) => {
              removeClassesFn(this.themeOptionsDots, [
                classNames.theme.optionsDotActive,
              ])
              setClassesFn([
                {
                  element: e.target,
                  classes: [classNames.theme.optionsDotActive],
                },
              ])
              this.setGlobalVariables(themesObject[theme])
              this.background.setTheme(themesObject[theme])
              this.saveThemeNameInLocalStorage(theme)
            },
          },
        ],
        // event: 'click',
        // cb: (e) => {
        //   removeClassesFn(this.themeOptionsDots, [
        //     classNames.theme.optionsDotActive,
        //   ])
        //   setClassesFn([
        //     {
        //       element: e.target,
        //       classes: [classNames.theme.optionsDotActive],
        //     },
        //   ])
        //   this.setGlobalVariables(themesObject[theme])
        //   this.background.setTheme(themesObject[theme])
        //   this.saveThemeNameInLocalStorage(theme)
        // },
      })
    })
    this.themeNote = createElementFn({
      element: 'p',
      classes: [classNames.theme.note],
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
