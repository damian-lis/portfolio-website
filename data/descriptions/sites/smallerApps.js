import { p, a, h, im } from '/data/descriptions/structure.js';

const folder = (path) => `SmallerApps/${path}.gif`;

export default [
  h(`1. My Contact Book App`, { mt: 0 }),

  p(['Technologies: React/Redux/Material-UI/GoogleLogin/Express/MongoDB']),

  im(folder('myContactBookApp'), { mb: 0 }),

  p([
    'An application that allows you to log into the system in which you can add or remove various contacts.',
  ]),

  p([
    `Live version is ${a(
      'here',
      'https://my-contact-book-frontend-app.vercel.app/'
    )}.`,

    `Github (frontend) is ${a(
      'here',
      'https://github.com/damian-lis/my-contact-book-frontend-app'
    )}.`,

    `Github (backend) is ${a(
      'here',
      'https://github.com/damian-lis/my-contact-book-backend-app'
    )}.`,
  ]),

  h(`2. My Apple App`),

  p(['Technologies: React(Styled Components/Compound Components)']),

  im(folder('myAppleApp'), { mb: 0 }),

  p(['A website that maps navbar and footer from apple.com']),

  p([
    `Live version is ${a('here', 'https://my-apple-app.vercel.app/')}.`,

    `Github is ${a('here', 'https://github.com/damian-lis/my-apple-app')}.`,
  ]),

  h(`3. My Task List TS App`),

  p(['Technologies: React/Redux/TypeScript/Material-UI']),

  im(folder('myTaskListTsApp'), { mb: 0 }),

  p([
    'Application thanks to which you can create various lists of tasks, and in them specific tasks to be performed.',
  ]),

  p([
    `Live version is ${a(
      'here',
      'https://my-task-list-ts-app.herokuapp.com/'
    )}.`,

    `Github is ${a(
      'here',
      'https://github.com/damian-lis/my-task-list-ts-app'
    )}.`,
  ]),

  h(`4. My Formik App`),

  p(['Technologies: React/Formik/Yup/Material-UI']),

  im(folder('myFormikApp'), { mb: 0 }),

  p(['An extensive form with various fields to fill in.']),

  p([
    `Live version is ${a('here', 'https://my-formik-app.vercel.app/')}.`,

    `Github is ${a('here', 'https://github.com/damian-lis/my-formik-app')}.`,
  ]),

  h(`5. My Countries App`),

  p(['Technologies: React/GraphQL']),

  im(folder('countries'), { mb: 0 }),

  p(['An application thanks to which we can search for a specific country.']),

  p([
    `Live version is ${a('here', 'https://my-countries-app.vercel.app/')}.`,

    `Github is ${a('here', 'https://github.com/damian-lis/my-countries-app')}.`,
  ]),
];
