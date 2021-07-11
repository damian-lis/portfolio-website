import {
  createElementFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js';
import {
  classNames,
  common,
  info,
  elements,
  events,
} from '/data/global/names.js';

class Theme {
  constructor({ container, themesObj, background }) {
    this.themesObj = themesObj;
    this.background = background;
    this.initialThemeName = this.setInitialThemeName();
    this.initialThemeObject = this.setInitialThemeObject();

    this.createElements();
    this.createComponents();
    this.setGlobalVariables();
    this.createBackgroundAnimation();

    appendElementsToContainerFn({ elements: [this.mainComponent], container });
  }

  createElements() {
    this.background = new this.background.Object({
      container: this.background.objContainer,
    });

    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.theme.container],
    });

    this.title = createElementFn({
      element: elements.h(5),
      textContent: info.personalizeTheme,
    });

    this.optionsContainer = createElementFn({
      element: elements.div,
      classes: [classNames.theme.optionsContainer],
    });

    this.optionsDots = Object.keys(this.themesObj).map((themeName) =>
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
    );

    this.note = createElementFn({
      element: elements.p,
      classes: [classNames.theme.note],
      textContent: info.themeNote,
    });
  }

  createComponents() {
    this.optionsComponent = appendElementsToContainerFn({
      elements: this.optionsDots,
      container: this.optionsContainer,
    });

    this.mainComponent = appendElementsToContainerFn({
      elements: [this.title, this.optionsComponent, this.note],
      container: this.mainContainer,
    });
  }

  handleDotClick({ element, themeName }) {
    const themeObj = this.themesObj[themeName];

    this.setGlobalVariables({ themeObj });
    this.background.setTheme({ themeObj });
    this.saveThemeNameInLocalStorage({ themeName });

    setClassesFn({
      objs: [
        {
          elements: [element],
          removeFromEls: this.optionsDots,
          classes: [classNames.theme.optionsDotActive],
        },
      ],
    });
  }

  setGlobalVariables({ themeObj } = {}) {
    for (const property in themeObj ? themeObj : this.initialThemeObject) {
      document.documentElement.style.setProperty(
        `--${property}`,
        themeObj ? themeObj[property] : this.initialThemeObject[property]
      );
    }
  }

  setInitialThemeName() {
    return localStorage.getItem(common.theme) || Object.keys(this.themesObj)[1];
  }

  setInitialThemeObject() {
    return this.themesObj[this.initialThemeName];
  }

  saveThemeNameInLocalStorage({ themeName }) {
    localStorage.setItem(common.theme, themeName);
  }

  createBackgroundAnimation() {
    this.background.start({ themeObj: this.initialThemeObject });
  }
}

export default Theme;
