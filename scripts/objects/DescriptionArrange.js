import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { common, elementProps } from '/data/global/names.js'

class DataArrange {
  constructor(container, description) {
    this.containerSent = document.querySelector(container)
    this.description = description

    this.createElements()
    appendElementsToContainerFn(this.elements, this.containerSent)
  }

  createElements() {
    this.elements = this.description.map((object) => {
      switch (object.type) {
        case common.headline:
          const headline = createElementFn({
            element: object.element,
            classes: object.classes,
            textContent: object.content,
          })

          return headline

        case common.header:
          const title = createElementFn({
            element: object.element,
            textContent: object.content,
            classes: object.classes,
          })

          return title

        case common.image:
          const image = createElementFn({
            element: object.element,
            classes: object.classes,
            src: object.content,
          })

          return image

        case common.paragraph:
          return object.content.map((paragraphContent) => {
            const paragraph = createElementFn({
              element: object.element,
              classes: object.classes,
              textContent: paragraphContent,
            })

            return paragraph
          })

        case common.link:
          const link = createElementFn({
            element: object.elements.link,
            target: elementProps.values.sblank,
            classes: object.classes.link,
            href: object.path,
            textContent: object.content.link,
          })
          const paragraph = createElementFn({
            element: object.elements.paragraph,
            classes: object.classes.paragraph,
            textContent: object.content.paragraph,
          })
          paragraph.appendChild(link)

          return paragraph

        case common.list:
          const list = createElementFn({
            element: object.elements.list,
          })

          const listItems = object.content.map((listItemContent) =>
            createElementFn({
              element: object.elements.listItem,
              classes: object.classes.listItem,
              textContent: listItemContent,
            })
          )

          listItems.map((listItem) => list.appendChild(listItem))

          return list

        // case common.code:
        //   const pre = createElementFn({
        //     element: common.elements.pre,
        //   })
        //   const code = createElementFn({
        //     element: common.elements.code,
        //     classes: [common.classNames.prism.languageJS],
        //     textContent: object.value,
        //   })
        //   pre.appendChild(code)

        //   return pre

        default:
          break
      }
    })
  }
}

export default DataArrange
