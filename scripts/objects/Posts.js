import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '../helpers/index.js'
import { classNames } from '../../data/global/names.js'

class Posts {
  constructor(container, trigger, wrapper, data) {
    const containerSent = document.querySelector(container)
    this.triggerElement = document.querySelector(trigger)
    this.wrapperToRelease = document.querySelector(wrapper)
    this.data = data

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.postsComponent], containerSent)

    triggerActionOnWindowScrollFn({
      onWhatElement: this.triggerElement,
      cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
    })
  }

  createElements() {
    this.postsContainer = createElementFn({
      element: 'div',
      classes: [classNames.posts.container],
    })

    this.postsElements = this.data.map((dataPortion) => {
      const linkWrapper = dataPortion.duringDevelopment
        ? createElementFn({
            element: 'a',
            classes: [classNames.post.linkWrapper],
          })
        : createElementFn({
            element: 'a',
            classes: [classNames.post.linkWrapper],
            href: dataPortion.route,
          })

      const postContainer = createElementFn({
        element: 'div',
        classes: [classNames.post.container],
      })

      const thubnail = createElementFn({
        element: 'img',
        classes: [classNames.post.thubnail],
        src: dataPortion.image,
        alt: dataPortion.alt,
      })

      const postPrevContainer = createElementFn({
        element: 'div',
        classes: [classNames.post.preview],
      })

      const postTitle = createElementFn({
        element: 'h6',
        classes: [classNames.post.title],
        textContent: dataPortion.title,
      })

      const postIntro = createElementFn({
        element: 'p',
        classes: [classNames.post.intro],
        textContent: dataPortion.intro,
      })

      const iconsContainer = createElementFn({
        element: 'div',
        classes: [classNames.post.iconsContainer],
      })

      const icons = dataPortion.icons.map((iconEl) => {
        const icon = createElementFn({
          element: 'img',
          src: iconEl.image,
        })
        return icon
      })

      const postRibbonContainer = dataPortion.duringDevelopment
        ? createElementFn({
            element: 'div',
            classes: [classNames.post.ribbon],
          })
        : null

      const postRibbonText = dataPortion.duringDevelopment
        ? createElementFn({
            element: 'p',
            classes: [classNames.post.ribbonText],
            innerHTML: 'During dev...',
          })
        : null

      return {
        linkWrapper,
        postContainer,
        thubnail,
        postPrevContainer,
        postTitle,
        postIntro,
        iconsContainer,
        icons,
        postRibbonContainer,
        postRibbonText,
      }
    })
  }

  createComponents() {
    this.postComponents = this.postsElements.map(
      ({
        linkWrapper,
        postContainer,
        thubnail,
        postPrevContainer,
        postTitle,
        postIntro,
        iconsContainer,
        icons,
        postRibbonContainer,
        postRibbonText,
      }) => {
        const postPrevComponent = appendElementsToContainerFn(
          [postTitle, postIntro],
          postPrevContainer
        )

        const iconComponents = appendElementsToContainerFn(
          icons,
          iconsContainer
        )

        let postComponent = appendElementsToContainerFn(
          [thubnail, postPrevComponent, iconComponents],
          postContainer
        )

        if (postRibbonContainer && postRibbonText) {
          const postRibbonComponent = appendElementsToContainerFn(
            [postRibbonText],
            postRibbonContainer
          )

          postComponent = appendElementsToContainerFn(
            [thubnail, postPrevComponent, iconComponents, postRibbonComponent],
            postContainer
          )
        }

        const linkWrapperComponent = appendElementsToContainerFn(
          [postComponent],
          linkWrapper
        )

        return linkWrapperComponent
      }
    )

    this.postsComponent = appendElementsToContainerFn(
      this.postComponents,
      this.postsContainer
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

export default Posts
