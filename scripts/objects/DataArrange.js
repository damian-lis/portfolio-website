import {
  createElementFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { classNames, common } from '../../data/global/names.js'

class DataArrange {
  constructor(container, data) {
    const containerSent = document.querySelector(container)
    this.data = data

    this.createElements()
    appendElementsToContainerFn(this.elements, containerSent)
  }

  createElements() {
    this.elements = this.data.map((element) => {
      const elName = Object.keys(element)[0]
      switch (elName) {
        case common.headline:
          const headline = createElementFn({
            element: common.elements.h(2),
            classes: [
              classNames.utilities.text.center,
              classNames.utilities.margin('t', 10),
            ],
            textContent: element.headline,
          })

          return headline

        case common.title:
          const title = createElementFn({
            element: common.elements.h(3),
            textContent: element.title,
            classes: [
              classNames.utilities.margin('t', 40),
              classNames.utilities.margin('b', 20),
            ],
          })

          return title

        case common.image:
          const image = createElementFn({
            element: common.elements.img,
            classes: [
              classNames.utilities.border.rounded,
              classNames.utilities.width.full,
              classNames.utilities.margin('y', 20),
            ],
            src: element.image,
          })

          return image

        case common.text:
          return element.text.map((el) => {
            const text = createElementFn({
              element: common.elements.p,
              classes: [
                classNames.utilities.margin('y', 10),
                classNames.utilities.text.justify,
                classNames.utilities.text.smLeft,
                classNames.utilities.text.lh(25),
              ],
              textContent: el,
            })

            return text
          })

        case common.links:
          return element.links.map((linkEl) => {
            const link = createElementFn({
              element: common.elements.a,
              target: common.props.values.blank,
              classes: [
                classNames.utilities.text.justify,
                classNames.utilities.text.smLeft,
              ],
              href: linkEl.path,
              textContent: linkEl.linkText,
            })
            const text = createElementFn({
              element: common.elements.p,
              classes: [classNames.utilities.margin('y', 10)],
              textContent: linkEl.label,
            })
            text.appendChild(link)

            return text
          })

        case common.code:
          const pre = createElementFn({
            element: common.elements.pre,
          })
          const code = createElementFn({
            element: common.elements.code,
            classes: [common.classNames.prism.languageJS],
            textContent: element.code,
          })
          pre.appendChild(code)

          return pre

        default:
          break
      }
    })
  }
}

export default DataArrange
