import { createElementFn, appendElementsToContainer } from '../helpers/index.js'

class DataArrange {
  constructor(container, data) {
    const containerSent = document.querySelector(container)
    const dataArrangeElements = this.createDataArrangeElements(data)
    appendElementsToContainer(dataArrangeElements, containerSent)
  }

  createDataArrangeElements(elements) {
    const dataArrangeElements = []

    elements.map((element) => {
      if (element.headline) {
        const headline = createElementFn({
          element: 'h2',
          classes: ['text-center', 'mt-10'],
          textContent: element.headline,
        })
        dataArrangeElements.push(headline)
      } else if (element.title) {
        const title = createElementFn({
          element: 'h3',
          textContent: element.title,
          classes: ['mt-40', 'mb-20'],
        })

        dataArrangeElements.push(title)
      } else if (element.image) {
        const image = createElementFn({
          element: 'img',
          classes: ['rounded', 'w-full', 'my-20'],
          src: element.image,
        })

        dataArrangeElements.push(image)
      } else if (element.text) {
        element.text.map((el) => {
          const text = createElementFn({
            element: 'p',
            classes: ['my-10', 'text-justify', 'text-lh-25'],
            textContent: el,
          })

          dataArrangeElements.push(text)
        })
      } else if (element.links) {
        element.links.map((linkEl) => {
          const link = createElementFn({
            element: 'a',
            target: '_blank',
            classes: ['text-justify', 'sm-text-left'],
            href: linkEl.path,
            textContent: linkEl.linkText,
          })
          const text = createElementFn({
            element: 'p',
            classes: ['my-10'],
            textContent: linkEl.label,
          })

          text.appendChild(link)
          dataArrangeElements.push(text)
        })
      }
    })
    return dataArrangeElements
  }
}

export default DataArrange
