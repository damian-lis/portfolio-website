import {
  createElementFn,
  triggerActionOnWindowScroll,
  appendElementsToContainer,
} from '../helpers/index.js'

class Posts {
  constructor(container, trigger, wrapper, data) {
    const wrapperToRelease = document.querySelector(wrapper)
    const triggerElement = document.querySelector(trigger)
    const containerSent = document.querySelector(container)
    const postsContainer = createElementFn({
      element: 'div',
      classes: ['posts-container'],
    })
    const postsElements = this.createPostsElements(data)
    const postComponents = this.joinPostsElements(postsElements)
    const mainComponent = appendElementsToContainer(
      postComponents,
      postsContainer
    )
    appendElementsToContainer(mainComponent, containerSent)

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
          classes: ['post-link-wrapper'],
        })
      : createElementFn({
          element: 'a',
          classes: ['post-link-wrapper'],
          target: '_blank',
          href: dataPortion.route,
        })

    this.postContainer = createElementFn({
      element: 'div',
      classes: ['post-container'],
    })

    this.thubnail = createElementFn({
      element: 'img',
      classes: ['post-thubnail'],
      src: dataPortion.image,
      alt: dataPortion.alt,
    })

    this.postPrevContainer = createElementFn({
      element: 'div',
      classes: ['post-preview'],
    })

    this.postTitle = createElementFn({
      element: 'h6',
      classes: ['post-title'],
      textContent: dataPortion.title,
    })

    this.postIntro = createElementFn({
      element: 'p',
      classes: ['post-intro'],
      textContent: dataPortion.intro,
    })

    this.iconsContainer = createElementFn({
      element: 'div',
      classes: ['post-icons-container'],
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
          classes: ['post-ribbon'],
        })
      : null

    this.postRibbonText = dataPortion.duringDevelopment
      ? createElementFn({
          element: 'p',
          classes: ['post-ribbon-text'],
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
    triggerActionOnWindowScroll({
      onWhatElement: triggerElement,
      cbWhenTrue: () => {
        triggerElement.classList.add('h-full')
        wrapperToRelease.classList.add('slideInFromTop')
      },
    })
  }
}

export default Posts
