import { p, a, h, im } from '/data/descriptions/structure.js';

const folder = (path) => `SmallerApps/${path}.gif`;

export default [
  h(`1. Contact book app`, { mt: 0 }),

  p(['Technologies: React/Redux/Material-UI/GoogleLogin/Express/MongoDB']),

  im(folder('contactBook'), { mb: 0 }),

  p([
    'An application that allows you to log into the system in which you can add or remove various contacts.',
  ]),

  p([
    `Live version is ${a('here', 'https://contact-book-frontend.vercel.app/')}.`,

    `Github (frontend) is ${a(
      'here',
      'https://github.com/damian-lis/contact-book-frontend'
    )}.`,

    `Github (backend) is ${a(
      'here',
      'https://github.com/damian-lis/contact-book-backend'
    )}.`,
  ]),

  h(`2. Apple navbar and footer`),

  p(['Technologies: React(Styled Components/Compound Components)']),

  im(folder('apple'), { mb: 0 }),

  p(['A website that maps navbar and footer from apple.com']),

  p([
    `Live version is ${a('here', 'https://apple-navbar-footer.vercel.app/')}.`,

    `Github is ${a(
      'here',
      'https://github.com/damian-lis/apple-navbar-footer'
    )}.`,
  ]),

  h(`3. Task list app`),

  p(['Technologies: React/Redux/TypeScript/Material-UI']),

  im(folder('task'), { mb: 0 }),

  p([
    'Application thanks to which you can create various lists of tasks, and in them specific tasks to be performed.',
  ]),

  p([
    `Live version is ${a('here', 'https://task-list-app-ts.herokuapp.com/')}.`,

    `Github is ${a(
      'here',
      'https://github.com/damian-lis/task-list-app'
    )}.`,
  ]),

  h(`4. Extended form`),

  p(['Technologies: React/Formik/Yup/Material-UI']),

  im(folder('formik'), { mb: 0 }),

  p(['An extensive form with various fields to fill in.']),

  p([
    `Live version is ${a('here', 'https://extended-form-with-formik-yup-and-material-ui.vercel.app/')}.`,

    `Github is ${a(
      'here',
      'https://github.com/damian-lis/extended-form-with-Formik-Yup-and-Material-UI'
    )}.`,
  ]),

  h(`5. Countries app`),

  p(['Technologies: React/GraphQL']),

  im(folder('countries'), { mb: 0 }),

  p(['An application thanks to which we can search for a specific country.']),

  p([
    `Live version is ${a('here', 'https://graphql-countries-exercise.vercel.app/')}.`,

    `Github is ${a(
      'here',
      'https://github.com/damian-lis/graphql-countries-exercise'
    )}.`,
  ]),
];
