import { types, events } from '/data/global/names.js';

export default ({
  onWhatElement: trigerElement,
  cbOnEnterTriggerEl = () => {},
  cbOnExitTriggerEl = () => {},
  modifier = 0,
}) => {
  if (!trigerElement) return;

  let flag = true;
  let element = trigerElement;

  if (typeof trigerElement === types.string) {
    element = document.querySelector(trigerElement);
  }

  window.addEventListener(events.scroll, () => {
    if (
      window.innerHeight + window.pageYOffset - modifier >
      element.offsetTop
    ) {
      flag && cbOnEnterTriggerEl(element);
      flag = false;
    } else {
      !flag && cbOnExitTriggerEl(element);
      flag = true;
    }
  });
};
