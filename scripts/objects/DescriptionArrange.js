import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js';
import { common, elements } from '/data/global/names.js';

class DataArrange {
  constructor({ container, data }) {
    this.description = data;

    this.createElements();
    appendElementsToContainerFn({ elements: this.elements, container });
  }

  createElements() {
    this.elements = this.description.map((object) => {
      switch (object.type) {
        case common.header:
          return createElementFn({
            element: elements.h(object.size),
            innerHTML: object.content,
            classes: object.classes,
            id: object.id,
          });

        case common.paragraph:
          return object.content.map((paragraphContent) =>
            createElementFn({
              element: elements.p,
              classes: object.classes,
              innerHTML: paragraphContent,
              id: object.id,
            })
          );

        case common.list:
          const list = createElementFn({
            element: elements.ul,
            classes: object.classes.list,
          });

          const items = object.content.map((itemContent, index) =>
            createElementFn({
              element: elements.li,
              classes:
                object.content.length - 1 === index
                  ? object.classes.lastItem
                  : object.classes.item,
              innerHTML: itemContent,
            })
          );

          items.map((item) => list.appendChild(item));
          return list;

        case common.image:
          return createElementFn({
            element: elements.img,
            classes: object.classes,
            src: object.path,
          });

        case common.code:
          const pre = createElementFn({
            element: elements.pre,
            classes: object.classes.pre,
          });
          const code = createElementFn({
            element: elements.code,
            classes: object.classes.code,
            textContent: object.content,
          });
          pre.appendChild(code);

          return pre;

        case common.break:
          return createElementFn({
            element: elements.br,
          });

        default:
          break;
      }
    });
  }
}

export default DataArrange;
