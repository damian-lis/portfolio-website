import { classNames, common } from '/data/global/names.js'

export default [
  {
    type: common.headline,
    element: common.elements.h(2),
    content: 'Short app description',
    classes: [
      classNames.utilities.text.center,
      classNames.utilities.margin('t', 10),
    ],
  },
  {
    type: common.header,
    element: common.elements.h(3),
    content: '1. Introduction',
    classes: [
      classNames.utilities.margin('t', 40),
      classNames.utilities.margin('b', 20),
    ],
  },
  {
    type: common.image,
    element: common.elements.img,
    content: '/images/projects/FluentBlog/viewSites.gif',
    classes: [
      classNames.utilities.border.rounded,
      classNames.utilities.width.full,
      classNames.utilities.margin('y', 20),
    ],
  },
  {
    type: common.paragraph,
    element: common.elements.p,
    content: [
      'The application was built using the Next.js technology due to the speed and ease of development, efficiency and the ability to render the code on the server side, which contributes to better SEO.',
      'Below is quickly view of app:',
    ],
    classes: [
      classNames.utilities.margin('y', 10),
      classNames.utilities.text.justify,
      classNames.utilities.text.smLeft,
      classNames.utilities.text.lh(25),
    ],
  },

  {
    type: common.link,
    elements: {
      link: common.elements.a,
      paragraph: common.elements.p,
    },
    content: {
      paragraph: 'Check entire website ',
      link: 'here!',
    },
    classes: {
      link: [
        classNames.utilities.text.justify,
        classNames.utilities.text.smLeft,
      ],
      paragraph: [classNames.utilities.margin('y', 10)],
    },
    path: 'https://fluent-blog.vercel.app/',
  },

  {
    type: common.link,
    elements: {
      link: common.elements.a,
      paragraph: common.elements.p,
    },
    content: {
      paragraph: 'Check github repository ',
      link: 'here!',
    },
    classes: {
      link: [
        classNames.utilities.text.justify,
        classNames.utilities.text.smLeft,
      ],
      paragraph: [classNames.utilities.margin('y', 10)],
    },
    path: 'https://github.com/damian-lis/Fluent-Blog',
  },
]

// export default [
//   { headline: 'Short app description' },
//   { title: '1. Introduction' },
//   { image: '/images/projects/FluentBlog/viewSites.gif' },
//   {
//     text: [
//       'The application was built using the Next.js technology due to the speed and ease of development, efficiency and the ability to render the code on the server side, which contributes to better SEO.',
//       'Below is quickly view of app:',
//     ],
//   },
//   { image: '/images/projects/FluentBlog/styles.gif' },
//   { title: '2. Application content' },
//   {
//     text: [
//       'The project includes 3 subpages such as: Blog, About and Projects nad one which generate article from .md file',
//       'You can see it in the example below',
//     ],
//   },
//   { image: '/images/projects/FluentBlog/browseArticle.gif' },
//   {
//     text: [
//       'Below is a high abstraction of code that is responsible for dynamic article creation using the getStaticPaths and getStaticProps methods characteristic of Next.js',
//       '(all logic under the visible layer is available on my repository, the link to which will be at the bottom of page)',
//     ],
//   },
//   { image: '/images/projects/FluentBlog/articleCode.gif' },
//   {
//     text: ['Below is article example write in markdown extension'],
//   },
//   { image: '/images/projects/FluentBlog/article.gif' },
//   { title: '3. Loader component' },
//   {
//     text: [
//       'Due to the fact that not everyone can access high-speed internet, the Loader component was created to inform the user that his article is loading. Thanks to this, the user will immediately receive feedback on what is happening on the website.',
//     ],
//   },
//   { image: '/images/projects/FluentBlog/loading.gif' },
//   { text: ['Below is a solution in the code.'] },
//   { image: '/images/projects/FluentBlog/loaderCode.gif' },
//   { title: '4. Mobile version' },
//   { image: '/images/projects/FluentBlog/mobile.gif' },
//   {
//     text: [
//       'The use of the application with intuitively arranged website components was made as pleasant as possible. The mobile version has a responsive layout and hamburger menu to fast navigate.',
//     ],
//   },
//   {
//     title: '4. Check the app!',
//   },
//   {
//     links: [
//       {
//         label: 'Check entire website ',
//         linkText: 'here!',
//         path: 'https://fluent-blog.vercel.app/',
//       },
//       {
//         label: 'Check github repository ',
//         linkText: 'here!',
//         path: 'https://github.com/damian-lis/Fluent-Blog',
//       },
//     ],
//   },
// ]
