import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js';
import { classNames, paths, elements } from '/data/global/names.js';

class Back {
  constructor({ container }) {
    this.createElements();
    this.createComponents();

    appendElementsToContainerFn({ elements: [this.linkComponent], container });
  }

  createElements() {
    this.link = createElementFn({
      element: elements.a,
      href: '/',
      classes: [classNames.global.leftBtn],
    });
    this.arrowImg = createElementFn({
      element: elements.img,
      src: paths.arrowImg,
    });
  }

  createComponents() {
    this.linkComponent = appendElementsToContainerFn({
      elements: [this.arrowImg],
      container: this.link,
    });
  }
}

export default Back;
