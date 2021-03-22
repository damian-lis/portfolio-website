import { createElementFn } from '../helpers/index.js'

export default class Posts {
  constructor(postsContainer, mainContainer, data) {
    const elToAnimate = document.querySelector(mainContainer)
    const posts = this.createPosts(data)

    this.attachElementsToContainer(
      posts,
      document.querySelector(postsContainer)
    )
    this.setAnimation(elToAnimate)
    this.setAnimationAfterResize(elToAnimate)
  }

  runAnimationOnScroll(elToAnimate, elToAnimateHeight) {
    window.onscroll = function () {
      if (
        window.innerHeight + window.pageYOffset + elToAnimateHeight >=
        document.body.offsetHeight
      ) {
        elToAnimate.classList.add('slideInFromTop')
        window.onscroll = null
      }
    }
  }

  setAnimationAfterResize(elToAnimate) {
    window.addEventListener('resize', () => {
      this.setAnimation(elToAnimate)
    })
  }

  setAnimation(elToAnimate) {
    const elToAnimateHeight = this.checkElementHeight(elToAnimate)
    this.runAnimationOnScroll(elToAnimate, elToAnimateHeight)
  }

  checkElementHeight(element) {
    let elementHeight = element.clientHeight

    return elementHeight
  }

  attachElementsToContainer(elements, container) {
    elements.map((el) => {
      container.appendChild(el)
    })
  }

  createPosts(data) {
    const posts = data.map((dataEl) => {
      const postElements = this.createPostElements(dataEl)
      const post = this.joinPostElements(postElements)
      return post
    })

    return posts
  }

  createPostElements(dataEl) {
    const linkWrapper = createElementFn({
      element: 'a',
      target: '_blank',
      href: dataEl.route,
    })

    const postContainer = createElementFn({
      element: 'div',
      classes: ['post'],
    })

    const thubnail = createElementFn({
      element: 'img',
      classes: ['thubnail'],
      src: dataEl.image,
      alt: dataEl.alt,
    })

    const postPrevContainer = createElementFn({
      element: 'div',
      classes: ['post-preview'],
    })

    const postTitle = createElementFn({
      element: 'h6',
      classes: ['post-title'],
      text: dataEl.title,
    })

    const postIntro = createElementFn({
      element: 'p',
      classes: ['post-intro'],
      text: dataEl.intro,
    })

    const iconsContainer = createElementFn({
      element: 'div',
      classes: ['icons-container'],
    })

    const icons = dataEl.icons.map((iconEl) => {
      const icon = createElementFn({
        element: 'img',
        src: iconEl.image,
      })
      return icon
    })

    return {
      linkWrapper,
      postContainer,
      thubnail,
      postPrevContainer,
      postTitle,
      postIntro,
      iconsContainer,
      icons,
    }
  }

  joinPostElements(elements) {
    const {
      linkWrapper,
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

    linkWrapper.appendChild(postContainer)

    return linkWrapper
  }
}
