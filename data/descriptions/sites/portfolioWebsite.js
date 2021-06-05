import { p, h, a } from '/data/descriptions/structure.js'

export default [
  h(
    `Announcement
    `,
    {
      align: 'center',
      size: 2,
      mt: 10,
      smAlign: 'center',
    }
  ),

  p([
    `The full description is available
    ${a(
      'here',
      'https://github.com/damian-lis/portfolio-website/blob/main/README.md'
    )}
    and has not been included on this page due to the very large size.`,
  ]),
]
