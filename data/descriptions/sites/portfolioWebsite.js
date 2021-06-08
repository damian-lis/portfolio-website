import { p, a, b, im } from '/data/descriptions/structure.js'

export default [
  p([
    `The full description is available on my github
    ${a(
      'here',
      'https://github.com/damian-lis/portfolio-website/blob/main/README.md'
    )}
    and has not been included on this page due to the very large size (very detailed description).`,
  ]),

  b(),

  p([`This is what the description looks like on my github:`]),

  im(`portfolioWebsite/portfolioWebsiteGitHub.gif`, { mb: 0 }),
]
