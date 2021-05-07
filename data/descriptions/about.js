import { common } from '/data/global/names.js'

export default [
  {
    type: common.header,
    element: common.elements.h(3),
    content: 'About me',
    classes: ['sm-text-center'],
  },

  {
    type: common.paragraph,
    element: common.elements.p,
    content: [
      'Over a year and a half, I have been developing as a frontend developer with basic backend skills.',
    ],
    classes: [],
  },
  {
    type: common.paragraph,
    element: common.elements.p,
    content: [
      'I fell in love with programming because of the logic it uses, the ability to create amazing projects and developing my problem-solving skills.',
    ],
    classes: [],
  },
  {
    type: common.paragraph,
    element: common.elements.p,
    content: [
      `On a daily basis I love creating React technology applications, mainly e-commerce with lots of useful business options in the admin dashbord. Apart from that, for the artist's soul, I also like to play around creating various pseudo-intelligent games in JavaScript technology.`,
    ],
    classes: [],
  },
]
