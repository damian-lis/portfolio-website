import { h, l } from '/data/descriptions/structure.js'
export default [
  h('Skills', {
    mt: 10,
    mb: 10,
    align: 'center',
    underline: true,
    smAlign: 'center',
  }),

  h('1. Frontend:', { size: 5, mt: 20, mb: 5 }),

  l(
    [
      'HTML (semantic),',
      'CSS (RWD, SASS, BEM, TailwindCSS, Bootstrap),',
      'JavaScript (OOP, Design Patterns),',
      'React (Redux, Hooks, Styled Components, Compound Components, Atomic Design),',
      'Next (basic knowledge of the concept of server side rendering and how to use it),',
      'TypeScript (basic knowledge of types).',
    ],
    { listAlign: 'left' }
  ),

  h('2. Backend:', { size: 5, mt: 40, mb: 5 }),

  l(
    [
      `Node/Express (e-commerce REST API's),`,
      'MongoDB (basic handling with Express),',
      'PHP (basic syntax and logic).',
    ],
    { listAlign: 'left' }
  ),
]
