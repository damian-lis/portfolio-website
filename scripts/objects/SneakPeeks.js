import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import { classNames, info, elements } from '/data/global/names.js'

class SneakPeeks {
  constructor({ container, trigger, wrapper, data }) {
    this.sneakPeeksInfo = data

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn({ elements: [this.mainComponent], container })

    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperElement = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
      })
    }
  }

  createElements() {
    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.sneakPeeks.container],
    })

    this.elements = this.sneakPeeksInfo.map((sneakPeek) => {
      const linkWrapper = createElementFn({
        element: elements.a,
        classes: [classNames.sneakPeek.linkWrapper],
        href: sneakPeek.href,
      })

      const container = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.container],
      })

      const thubnail = createElementFn({
        element: elements.img,
        classes: [classNames.sneakPeek.thubnail],
        src: sneakPeek.image,
        alt: sneakPeek.alt,
      })

      const prevContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.preview],
      })

      const title = createElementFn({
        element: elements.h(6),
        classes: [classNames.sneakPeek.title],
        textContent: sneakPeek.title,
      })

      const intro = createElementFn({
        element: elements.p,
        classes: [classNames.sneakPeek.intro],
        textContent: sneakPeek.intro,
      })

      const iconsContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.iconsContainer],
      })

      const icons = sneakPeek.icons.map((iconEl) =>
        createElementFn({
          element: elements.img,
          src: iconEl.image,
        })
      )

      const ribbonContainer = sneakPeek.duringDevelopment
        ? createElementFn({
            element: elements.div,
            classes: [classNames.sneakPeek.ribbon],
          })
        : null

      const ribbonText = sneakPeek.duringDevelopment
        ? createElementFn({
            element: elements.p,
            classes: [classNames.sneakPeek.ribbonText],
            innerHTML: info.duringDevelopment,
          })
        : null

      return {
        linkWrapper,
        container,
        thubnail,
        prevContainer,
        title,
        intro,
        iconsContainer,
        icons,
        ribbonContainer,
        ribbonText,
      }
    })
  }

  createComponents() {
    this.sneakPeekComponents = this.elements.map(
      ({
        linkWrapper,
        container,
        thubnail,
        prevContainer,
        title,
        intro,
        iconsContainer,
        icons,
        ribbonContainer,
        ribbonText,
      }) => {
        const prevComponent = appendElementsToContainerFn({
          elements: [title, intro],
          container: prevContainer,
        })

        const iconComponents = appendElementsToContainerFn({
          elements: icons,
          container: iconsContainer,
        })

        let sneakPeekComponent = appendElementsToContainerFn({
          elements: [thubnail, prevComponent, iconComponents],
          container,
        })

        if (ribbonContainer && ribbonText) {
          const ribbonComponent = appendElementsToContainerFn({
            elements: [ribbonText],
            container: ribbonContainer,
          })

          sneakPeekComponent = appendElementsToContainerFn({
            elements: [
              thubnail,
              prevComponent,
              iconComponents,
              ribbonComponent,
            ],
            container,
          })
        }

        const linkSneakPeekComponent = appendElementsToContainerFn({
          elements: [sneakPeekComponent],
          container: linkWrapper,
        })

        return linkSneakPeekComponent
      }
    )

    this.mainComponent = appendElementsToContainerFn({
      elements: this.sneakPeekComponents,
      container: this.mainContainer,
    })
  }

  handleOnEnterTriggerEl() {
    setClassesFn({
      objs: [
        {
          elements: [this.triggerElement],
          classes: [classNames.utilities.h.full],
        },
        {
          elements: [this.wrapperElement],
          classes: [classNames.utilities.animations.slideInFromTop],
        },
      ],
    })
  }
}

export default SneakPeeks
