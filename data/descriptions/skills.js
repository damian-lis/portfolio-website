import { common, classNames, elements } from '/data/global/names.js'

export default [
  {
    type: common.headline,
    element: elements.h(3),
    content: 'My skills',
    classes: [
      classNames.utilities.margin('t', 10),
      classNames.utilities.text.center,
    ],
  },

  {
    type: common.header,
    element: elements.h(5),
    content: '1. Level enough to write more advanced frontend',
    classes: [classNames.utilities.margin('t', 30), ,],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      'HTML (Semanthic writing),',
      'CSS (SASS, BEM, TailwindCSS and basic level of Bootstrap),',
      'JavaScript (OOP, Design Patterns, Functional Programming),',
      'React (Redux, Hooks, Styled Components, Compound Components etc.),',
      'Next (basic understanding the concept of server side rendering),',
    ],
    classes: {
      listItem: [
        classNames.utilities.margin('b', 15, classNames.utilities.dash),
      ],
    },
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '2. Level enough to write basic backend',
    classes: [classNames.utilities.margin('t', 30), ,],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      'Node/Express (simple E-COMMERCE backend with REST API),',
      'MongoDB (simple handle with Express)',
    ],
    classes: {
      listItem: [
        classNames.utilities.margin('b', 15, classNames.utilities.dash),
      ],
    },
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '3. When i have a free time',
    classes: [classNames.utilities.margin('t', 30), ,],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: ['PHP (basic level)'],
    classes: {
      listItem: [
        classNames.utilities.margin('b', 0, classNames.utilities.dash),
      ],
    },
  },
]
