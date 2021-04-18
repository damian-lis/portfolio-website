import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { classNames } from '../../data/global/names.js'

class Posts {
  constructor(container, trigger, wrapper, data) {
    const wrapperToRelease = document.querySelector(wrapper)
    const triggerElement = document.querySelector(trigger)
    const containerSent = document.querySelector(container)
    const postsContainer = createElementFn({
      element: 'div',
      classes: [classNames.posts.container],
    })
    const postsElements = this.createPostsElements(data)
    const postComponents = this.joinPostsElements(postsElements)
    const mainComponent = appendElementsToContainerFn(
      postComponents,
      postsContainer
    )
    appendElementsToContainerFn([mainComponent], containerSent)

    this.handleWindowScroll(triggerElement, wrapperToRelease)
  }

  createPostsElements(data) {
    this.postsElements = data.map((dataPortion) =>
      this.createPostElements(dataPortion)
    )
    return this.postsElements
  }

  createPostElements(dataPortion) {
    this.linkWrapper = dataPortion.duringDevelopment
      ? createElementFn({
          element: 'a',
          classes: [classNames.post.linkWrapper],
        })
      : createElementFn({
          element: 'a',
          classes: [classNames.post.linkWrapper],
          href: dataPortion.route,
        })

    this.postContainer = createElementFn({
      element: 'div',
      classes: [classNames.post.container],
    })

    this.thubnail = createElementFn({
      element: 'img',
      classes: [classNames.post.thubnail],
      src: dataPortion.image,
      alt: dataPortion.alt,
    })

    this.postPrevContainer = createElementFn({
      element: 'div',
      classes: [classNames.post.preview],
    })

    this.postTitle = createElementFn({
      element: 'h6',
      classes: [classNames.post.title],
      textContent: dataPortion.title,
    })

    this.postIntro = createElementFn({
      element: 'p',
      classes: [classNames.post.intro],
      textContent: dataPortion.intro,
    })

    this.iconsContainer = createElementFn({
      element: 'div',
      classes: [classNames.post.iconsContainer],
    })

    this.icons = dataPortion.icons.map((iconEl) => {
      const icon = createElementFn({
        element: 'img',
        src: iconEl.image,
      })
      return icon
    })

    this.postRibbonContainer = dataPortion.duringDevelopment
      ? createElementFn({
          element: 'div',
          classes: [classNames.post.ribbon],
        })
      : null

    this.postRibbonText = dataPortion.duringDevelopment
      ? createElementFn({
          element: 'p',
          classes: [classNames.post.ribbonText],
          innerHTML: 'During dev...',
        })
      : null

    return [
      this.linkWrapper,
      this.postContainer,
      this.thubnail,
      this.postPrevContainer,
      this.postTitle,
      this.postIntro,
      this.iconsContainer,
      this.icons,
      this.postRibbonContainer,
      this.postRibbonText,
    ]
  }

  joinPostsElements(postsElements) {
    const postComponents = postsElements.map((postElements) => {
      const [
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
      ] = postElements

      postPrevContainer.appendChild(postTitle)
      postPrevContainer.appendChild(postIntro)

      icons.map((icon) => iconsContainer.appendChild(icon))

      const elementsGroup = [thubnail, postPrevContainer, iconsContainer]

      elementsGroup.map((el) => {
        postContainer.appendChild(el)
      })

      if (postRibbonContainer) {
        postRibbonContainer.appendChild(postRibbonText)
        postContainer.appendChild(postRibbonContainer)
      }

      linkWrapper.appendChild(postContainer)

      return linkWrapper
    })
    return postComponents
  }

  handleWindowScroll(triggerElement, wrapperToRelease) {
    triggerActionOnWindowScrollFn({
      onWhatElement: triggerElement,
      cbWhenTrue: () => {
        triggerElement.classList.add(classNames.utilities.height.full)
        wrapperToRelease.classList.add(
          classNames.utilities.animations.slideInFromTop
        )
      },
    })
  }
}

export default Posts
