import { h, p, c, l, b, s, a } from '/data/descriptions/structure.js'
import { txtAlign } from '/data/global/names.js'

export default [
  h(`App description`, {
    align: txtAlign.center,
    size: 2,
    mt: 10,
    smAlign: txtAlign.center,
  }),

  h(`Table of contents:`),

  l(
    [
      s(a('1. Introduction', '#introduction')),
      s(a('2. Technologies', '#technologies')),
      s(a('3. Features', '#features')),
    ],
    {
      itemDash: false,
      listSize: 20,
      itemMl: 5,
    }
  ),

  b(),

  h(`1. Introduction`, { id: 'introduction' }),

  p([
    `The main purpose of the application is to handle messages sent via the form on the portfolio website
    (${a('website', 'https://damianlis.pl/')},
    ${a('github', 'https://github.com/damian-lis/Portfolio-Website')})
    and via the messenger in the Talk to Gisapia and the others app 
    (${a('website', 'https://talktogisapiaandtheothers.pl/')},
    ${a(
      'github',
      'https://github.com/damian-lis/Talk-to-Gisapia-and-the-Others'
    )}).
    `,
  ]),

  b(),

  p([
    `Live version is ${a('here', 'http://www.emailshandler.pl/')}.`,

    `Github is ${a('here', 'https://github.com/damian-lis/emails-handler')}.`,
  ]),

  h(`2. Technologies`, { id: 'technologies' }),

  p([`The following technologies were used in the project:`]),

  l([`Node/Express`, `Nodemailer`, ` Mailgun`, `SendGrid`]),

  h(`3. Features`, { id: 'features' }),

  p([`The app uses services such as nodemailer, mailgun and sendgrid.`]),

  b(),

  p([
    `The list of the most interesting features used in the app is presented below:`,
  ]),

  l(
    [
      a(`3.1. Routes,`, '#routes'),
      a(`3.2. Handle mailgun/nodemailer services,`, '#mailgun'),
      a(`3.3. Handle sendgrid service,`, '#sendgrid'),
    ],
    { itemDash: false, itemMl: 5 }
  ),

  h(`3.1. Routes`, { size: 5, id: 'routes' }),

  p([`The app supports two query paths:`]),

  l([`the route that handle query from the porfolio website:`]),

  c(
    `//index.js file:

app.use('/api/mail/portfolio', sendPortfolioMail)`,
    'js'
  ),

  l([`the route that handle query from the porfolio website:`]),

  c(
    `//index.js file:

app.use('/api/mail/gisapia', sendGisapiaMail)`,
    'js'
  ),

  h(`3.2. Handle mailgun/nodemailer services`, { size: 5, id: 'mailgun' }),

  p([
    `Below is the code responsible for sending email to my mailbox from the portfolio website via mailgun/nodemailer sercices.`,
  ]),

  b(),

  p([`The example of this solution is below:`]),

  c(
    `//nodemailer/index.js file:

  const nodemailer = require('nodemailer')
  const mailGun = require('nodemailer-mailgun-transport')
  const keys = require('/env.js')
  
  const auth = {
    auth: {
      api_key: keys.MAILGUN_API_KEY,
      domain: keys.MAILGUN_DOMAIN,
    },
  }
  
  const transporter = nodemailer.createTransport(mailGun(auth))
  
  const sendPortfolioMail = (req, res) => {
    const { email, subject, name, message } = req.body
  
    const mailOptions = {
      from: email,
      to: 'damian.lis1293@gmail.com',
      subject: 'Portfolio - $ {subject}',
      html: '<p><strong>From: </strong>$ {name}</p><p>$ {message}</p>',
    }
  
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        res.status(500).json({success: false})
      } else {
        res.json({ success: true })
      }
    })
  }
  
  module.exports = sendPortfolioMail`,
    'js'
  ),

  p([`The following processes take place in the example above:`]),

  l([
    `assigning the nodemailer (package) object to the nodemailer variable,`,

    `assigning the nodemailer-mailgun-transport (package) function to the mailGun variable,`,

    `assigning the appropriate mailGun keys to the keys variable,`,

    `returning the so-called transporter object using the createTransport method of the nodemailer object (along with calling the mailGun function with passing the object argument containing the auth keys),`,

    `calling the sendPortfolioMail function as a result of sending a query to the appropriate server route ('/api/mail/portfolio'), which destructs the passed data and uses them to dynamically complete the object assigned to the mailOptions variable. At the very end, in the discussed function, the sendMail method of the transporter object is called, which is responsible for sending the e-mail (when the e-mail is sent, json is returned with information about success, otherwise the status 500 with information about failure).`,
  ]),

  h(`4.3. Handle sendgrid service`, { size: 5, id: 'sendgrid' }),

  p([
    `Below is the code responsible for sending email to user mailbox from the Talk to Gisapia and the others app via sendgrid sercice.`,
  ]),

  b(),

  p([`The example of this solution is below:`]),

  c(
    `//sendgrid/index.js file:

  const sgMail = require('@sendgrid/mail')
  const keys = require('../../env.js')
  
  sgMail.setApiKey(keys.SENDGRID_API_KEY)
  
  const sendGisapiaMail = (req, res) => {
    const charEmail = req.body
  
    sgMail
      .send(charEmail)
      .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
        res.json({
          success: true,
        })
      })
      .catch((error) => {
        console.error(error)
         res.status(500).json({success: false})
      })
  }
  
  module.exports = sendGisapiaMail`,
    'js'
  ),

  p([`The following processes take place in the example above:`]),

  l([
    `assigning the sendgrid/mail (package) object to the sgMail variable,`,

    `assigning the appropriate sendgrid key to the keys variable,`,

    `calling the sendGisapiaMail function as a result of sending a query to the appropriate server route ('/api/mail/gisapia'), in which we assign the passed req.body object to the charEmail variable and call send method of sgMail object which is responsible for sending the e-mail to user email (when the e-mail is sent, json is returned with information about success, otherwise the status 500 with information about failure).`,
  ]),

  b(),

  p([
    `This description is also on my github ${a(
      'here',
      'https://github.com/damian-lis/emails-handler/blob/main/README.md'
    )}`,
  ]),
]
