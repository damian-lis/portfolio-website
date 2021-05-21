import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import { classNames, info, elements } from '/data/global/names.js'

class SneakPeeks {
  constructor(container, trigger, wrapper, sneakPeeksDescription) {
    this.sneakPeeksDescription = sneakPeeksDescription

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.mainComponent], container)

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

    this.elements = this.sneakPeeksDescription.map((sneakPeekDescription) => {
      const linkWrapper = sneakPeekDescription.duringDevelopment
        ? createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeek.linkWrapper],
          })
        : createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeek.linkWrapper],
            href: sneakPeekDescription.href,
          })

      const container = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.container],
      })

      const thubnail = createElementFn({
        element: elements.img,
        classes: [classNames.sneakPeek.thubnail],
        src: sneakPeekDescription.image,
        alt: sneakPeekDescription.alt,
      })

      const prevContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.preview],
      })

      const title = createElementFn({
        element: elements.h(6),
        classes: [classNames.sneakPeek.title],
        textContent: sneakPeekDescription.title,
      })

      const intro = createElementFn({
        element: elements.p,
        classes: [classNames.sneakPeek.intro],
        textContent: sneakPeekDescription.intro,
      })

      const iconsContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.iconsContainer],
      })

      const icons = sneakPeekDescription.icons.map((iconEl) =>
        createElementFn({
          element: elements.img,
          src: iconEl.image,
        })
      )

      const ribbonContainer = sneakPeekDescription.duringDevelopment
        ? createElementFn({
            element: elements.div,
            classes: [classNames.sneakPeek.ribbon],
          })
        : null

      const ribbonText = sneakPeekDescription.duringDevelopment
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
        const prevComponent = appendElementsToContainerFn(
          [title, intro],
          prevContainer
        )

        const iconComponents = appendElementsToContainerFn(
          icons,
          iconsContainer
        )

        let sneakPeekComponent = appendElementsToContainerFn(
          [thubnail, prevComponent, iconComponents],
          container
        )

        if (ribbonContainer && ribbonText) {
          const ribbonComponent = appendElementsToContainerFn(
            [ribbonText],
            ribbonContainer
          )

          sneakPeekComponent = appendElementsToContainerFn(
            [thubnail, prevComponent, iconComponents, ribbonComponent],
            container
          )
        }

        const linkSneakPeekComponent = appendElementsToContainerFn(
          [sneakPeekComponent],
          linkWrapper
        )

        return linkSneakPeekComponent
      }
    )

    this.mainComponent = appendElementsToContainerFn(
      this.sneakPeekComponents,
      this.mainContainer
    )
  }

  handleOnEnterTriggerEl() {
    setClassesFn([
      {
        element: this.triggerElement,
        classes: [classNames.utilities.h.full],
      },
      {
        element: this.wrapperElement,
        classes: [classNames.utilities.animations.slideInFromTop],
      },
    ])
  }
}

export default SneakPeeks
