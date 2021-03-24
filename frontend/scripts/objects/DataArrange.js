import { createElementFn } from '../helpers/index.js'

export default class DataArrange {
  constructor(container, data) {
    this.container = document.querySelector(container)
    const elementsToAttach = this.createElementsToAttach(data)
    this.attachElementsToContainer(elementsToAttach)
  }

  attachElementsToContainer(elements) {
    elements.map((element) => {
      this.container.appendChild(element)
    })
  }

  createElementsToAttach(elements) {
    const elementsToAttach = []

    elements.map((element) => {
      if (element.title) {
        const titleContainer = createElementFn({
          element: 'div',
          classes: ['col', 'mt-40', 'mb-10'],
        })

        const title = createElementFn({
          element: 'h3',
          text: element.title,
        })

        titleContainer.appendChild(title)
        elementsToAttach.push(titleContainer)
      } else if (element.image) {
        const imageContainer = createElementFn({
          element: 'div',
          classes: ['col', 'my-20'],
        })
        const image = createElementFn({
          element: 'img',
          classes: ['rounded', 'w-full'],
          src: element.image,
        })

        imageContainer.appendChild(image)
        elementsToAttach.push(imageContainer)
      } else if (element.text) {
        element.text.map((el) => {
          const textContainer = createElementFn({
            element: 'div',
            classes: ['col', 'text-justify', 'text-lh-25'],
          })
          const text = createElementFn({
            element: 'p',
            classes: ['my-10'],
            text: el,
          })

          textContainer.appendChild(text)
          elementsToAttach.push(textContainer)
        })
      } else if (element.links) {
        element.links.map((linkEl) => {
          const linkContainer = createElementFn({
            element: 'div',
            classes: ['col', 'text-justify', 'sm-text-left'],
          })
          const link = createElementFn({
            element: 'a',
            target: '_blank',
            href: linkEl.path,
            text: linkEl.linkText,
          })
          const text = createElementFn({
            element: 'p',
            classes: ['my-10'],
            text: linkEl.label,
          })

          text.appendChild(link)
          linkContainer.appendChild(text)
          elementsToAttach.push(linkContainer)
        })
      }
    })
    return elementsToAttach
  }
}
