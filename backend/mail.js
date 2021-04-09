import nodemailer from 'nodemailer'
import mailGun from 'nodemailer-mailgun-transport'
import { MAILGUN_API_KEY, MAILGUN_DOMAIN } from './env.js'

const auth = {
  auth: {
    api_key: MAILGUN_API_KEY,
    domain: MAILGUN_DOMAIN,
  },
}

const transporter = nodemailer.createTransport(mailGun(auth))

export const sendMail = (req, res) => {
  const { email, subject, name, message } = req.body

  const mailOptions = {
    from: email,
    to: 'damian.lis1293@gmail.com',
    subject: `Portfolio - ${subject}`,
    html: `<p><strong>From: </strong>${name}</p><p>${message}</p>`,
  }

  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong, try again! 😬',
      })
    } else {
      res.json({ success: true, message: 'Message sent! 😎' })
    }
  })
}
