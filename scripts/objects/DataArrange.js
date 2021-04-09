import {
  createElementFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { classNames } from '../../data/global/names.js'

class DataArrange {
  constructor(container, data) {
    const containerSent = document.querySelector(container)
    const dataArrangeElements = this.createDataArrangeElements(data)
    appendElementsToContainerFn(dataArrangeElements, containerSent)
  }

  createDataArrangeElements(elements) {
    const dataArrangeElements = []

    elements.map((element) => {
      if (element.headline) {
        const headline = createElementFn({
          element: 'h2',
          classes: [
            classNames.utilities.text.center,
            classNames.utilities.margin.t10,
          ],
          textContent: element.headline,
        })
        dataArrangeElements.push(headline)
      } else if (element.title) {
        const title = createElementFn({
          element: 'h3',
          textContent: element.title,
          classes: [
            classNames.utilities.margin.t40,
            classNames.utilities.margin.b40,
          ],
        })

        dataArrangeElements.push(title)
      } else if (element.image) {
        const image = createElementFn({
          element: 'img',
          classes: [
            classNames.utilities.border.rounded,
            classNames.utilities.width.full,
            classNames.utilities.margin.y20,
          ],
          src: element.image,
        })

        dataArrangeElements.push(image)
      } else if (element.text) {
        element.text.map((el) => {
          const text = createElementFn({
            element: 'p',
            classes: [
              classNames.utilities.margin.y10,
              classNames.utilities.text.justify,
              classNames.utilities.text.lh25,
            ],
            textContent: el,
          })

          dataArrangeElements.push(text)
        })
      } else if (element.links) {
        element.links.map((linkEl) => {
          const link = createElementFn({
            element: 'a',
            target: '_blank',
            classes: [
              classNames.utilities.text.justify,
              classNames.utilities.text.smLeft,
            ],
            href: linkEl.path,
            textContent: linkEl.linkText,
          })
          const text = createElementFn({
            element: 'p',
            classes: [classNames.utilities.margin.y10],
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
