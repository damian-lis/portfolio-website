import { common, elements, classNames } from '/data/global/names.js'

export default [
  {
    type: common.header,
    element: elements.h(3),
    content: 'About me',
    classes: [
      classNames.utilities.m.b(20),
      classNames.utilities.m.t(10),
      classNames.utilities.text.sm.center,
      classNames.utilities.text.underline,
    ],
  },
  {
    type: common.paragraph,
    element: elements.p,
    content: [
      'Over a year and a half, I have been developing as a frontend developer with a basic backend skills.',
      'I fell in love with programming because of the ability to create amazing projects and developing my problem-solving skills.',
      `Generaly I love creating e-commerce sites (React/Express) and pseudo-intelligent apps like chatbot (OOP/design patterns).`,
    ],
    classes: [classNames.utilities.text.lh(25)],
  },
]
