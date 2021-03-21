import { createElementFn } from '../helpers/index.js'

export default class Post {
  constructor(container, data) {
    this.container = document.querySelector(container)
    const postElements = this.createPostElements(data)
    this.attachToContainer(postElements)
  }

  createPostElements(data) {
    const linkContainer = createElementFn({
      element: 'a',
      target: '_blank',
      href: data.route,
    })

    const postContainer = createElementFn({
      element: 'div',
      classes: ['post'],
    })

    const thubnail = createElementFn({
      element: 'img',
      classes: ['thubnail'],
      src: data.image,
      alt: data.alt,
    })

    const postPrevContainer = createElementFn({
      element: 'div',
      classes: ['post-preview'],
    })

    const postTitle = createElementFn({
      element: 'h6',
      classes: ['post-title'],
      text: data.title,
    })

    const postIntro = createElementFn({
      element: 'p',
      classes: ['post-intro'],
      text: data.intro,
    })

    const iconsContainer = createElementFn({
      element: 'div',
      classes: ['icons-container'],
    })

    const icons = data.icons.map((iconEl) => {
      const icon = createElementFn({
        element: 'img',
        src: iconEl.image,
      })
      return icon
    })

    return {
      linkContainer,
      postContainer,
      thubnail,
      postPrevContainer,
      postTitle,
      postIntro,
      iconsContainer,
      icons,
    }
  }

  attachToContainer(elements) {
    const {
      linkContainer,
      postContainer,
      thubnail,
      postPrevContainer,
      postTitle,
      postIntro,
      iconsContainer,
      icons,
    } = elements

    postPrevContainer.appendChild(postTitle)
    postPrevContainer.appendChild(postIntro)

    icons.map((icon) => iconsContainer.appendChild(icon))

    postContainer.appendChild(thubnail)
    postContainer.appendChild(postPrevContainer)
    postContainer.appendChild(iconsContainer)

    linkContainer.appendChild(postContainer)
    this.container.appendChild(linkContainer)
  }
}
