import { h, l } from '/data/descriptions/structure.js';
import { txtAlign } from '/data/global/names.js';

export default [
  h('Skills', {
    mt: 10,
    mb: 10,
    align: txtAlign.center,
    underline: true,
    smAlign: txtAlign.center,
  }),

  h('1. Frontend:', { size: 5, mt: 20, mb: 5 }),

  l(
    [
      'HTML (semantic),',
      'CSS (RWD, SASS, BEM, TailwindCSS, Bootstrap, Bulma),',
      'JavaScript (OOP, Design Patterns, GSAP),',
      'React (Redux, Hooks, Formik, Styled Components, Compound Components, Material-UI, Atomic Design),',
      'Next (basic knowledge of the concept of server side rendering and how to use it),',
      'TypeScript (basic knowledge of types and how to use it in React),',
      'GraphQL (basic queries).',
    ],
    { listAlign: txtAlign.left }
  ),

  h('2. Backend:', { size: 5, mt: 40, mb: 5 }),

  l(
    [
      `Node/Express (REST API, handling services: SendGrid, Mailgun and Nodemailer),`,
      'MongoDB (basic handling with Express),',
    ],
    { listAlign: txtAlign.left }
  ),
];
