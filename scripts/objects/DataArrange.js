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
      const elName = Object.keys(element)[0]
      switch (elName) {
        case 'headline':
          const headline = createElementFn({
            element: 'h2',
            classes: [
              classNames.utilities.text.center,
              classNames.utilities.margin.t10,
            ],
            textContent: element.headline,
          })
          dataArrangeElements.push(headline)
          break

        case 'title':
          const title = createElementFn({
            element: 'h3',
            textContent: element.title,
            classes: [
              classNames.utilities.margin.t40,
              classNames.utilities.margin.b40,
            ],
          })
          dataArrangeElements.push(title)
          break

        case 'image':
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
          break

        case 'text':
          element.text.map((el) => {
            const text = createElementFn({
              element: 'p',
              classes: [
                classNames.utilities.margin.y10,
                classNames.utilities.text.justify,
                classNames.utilities.text.smLeft,
                classNames.utilities.text.lh25,
              ],
              textContent: el,
            })
            dataArrangeElements.push(text)
          })
          break

        case 'links':
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
          break

        default:
          break
      }
    })
    return dataArrangeElements
  }
}

export default DataArrange
