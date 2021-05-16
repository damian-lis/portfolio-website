import { common, classNames, elements } from '/data/global/names.js'

export default [
  {
    type: common.headline,
    element: elements.h(3),
    content: 'Skills',
    classes: [
      classNames.utilities.m.t(10),
      classNames.utilities.text.center,
      classNames.utilities.text.underline,
    ],
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '1. Frontend:',
    classes: [classNames.utilities.m.t(30), classNames.utilities.text.lh(30)],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      'HTML (semantic),',
      'CSS (RWD, SASS, BEM, TailwindCSS, Bootstrap),',
      'JavaScript (OOP, Design Patterns),',
      'React (Redux, Hooks, Styled Components, Compound Components, Atomic Design),',
      'Next (basic knowledge of the concept of server side rendering and how to use it),',
      'TypeScript (basic knowledge of types)',
    ],
    classes: {
      list: [
        classNames.utilities.m.y(10),
        classNames.utilities.position.relative,
      ],
      listItem: [
        classNames.utilities.m.b(15),
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
      lastListItem: [
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
    },
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '2. Backend:',
    classes: [classNames.utilities.m.t(40), classNames.utilities.text.lh(30)],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      'Node/Express (e-commerce REST API),',
      'MongoDB (basic handling with Express),',
      'PHP (basic syntax and logic)',
    ],
    classes: {
      list: [
        classNames.utilities.m.t(10),
        classNames.utilities.m.b(0),
        classNames.utilities.position.relative,
      ],
      listItem: [
        classNames.utilities.m.b(15),
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
      lastListItem: [
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
    },
  },
]
