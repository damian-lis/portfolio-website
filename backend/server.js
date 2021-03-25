import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { sendMail } from './mail.js'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.use('/api/mail', sendMail)

const PORT = 5000

app.listen(
  PORT,
  console.log(`Server running in development mode on port ${PORT}`)
)
