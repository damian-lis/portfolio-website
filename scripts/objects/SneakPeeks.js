import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import { classNames, info, elements } from '/data/global/names.js'

class SneakPeeks {
  constructor(container, trigger, wrapper, data) {
    const containerSent = document.querySelector(container)
    this.data = data

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.sneakPeeksComponent], containerSent)

    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperToRelease = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: this.triggerElement,
        cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
      })
    }
  }

  createElements() {
    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.sneakPeeks.container],
    })

    this.elements = this.data.map((dataPortion) => {
      const linkWrapper = dataPortion.duringDevelopment
        ? createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeek.linkWrapper],
          })
        : createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeekapper],
            href: dataPortion.route,
          })

      const container = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.container],
      })

      const thubnail = createElementFn({
        element: elements.img,
        classes: [classNames.sneakPeek.thubnail],
        src: dataPortion.image,
        alt: dataPortion.alt,
      })

      const prevContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.preview],
      })

      const title = createElementFn({
        element: elements.h(6),
        classes: [classNames.sneakPeek.title],
        textContent: dataPortion.title,
      })

      const intro = createElementFn({
        element: elements.p,
        classes: [classNames.sneakPeek.intro],
        textContent: dataPortion.intro,
      })

      const iconsContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.iconsContainer],
      })

      const icons = dataPortion.icons.map((iconEl) => {
        const icon = createElementFn({
          element: elements.img,
          src: iconEl.image,
        })
        return icon
      })

      const ribbonContainer = dataPortion.duringDevelopment
        ? createElementFn({
            element: elements.div,
            classes: [classNames.sneakPeek.ribbon],
          })
        : null

      const ribbonText = dataPortion.duringDevelopment
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

        const linkWrapperComponent = appendElementsToContainerFn(
          [sneakPeekComponent],
          linkWrapper
        )

        return linkWrapperComponent
      }
    )

    this.sneakPeeksComponent = appendElementsToContainerFn(
      this.sneakPeekComponents,
      this.mainContainer
    )
  }

  handleOnEnterTriggerEl() {
    setClassesFn([
      {
        element: this.triggerElement,
        classes: [classNames.utilities.height.full],
      },
      {
        element: this.wrapperToRelease,
        classes: [classNames.utilities.animations.slideInFromTop],
      },
    ])
  }
}

export default SneakPeeks
