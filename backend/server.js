import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.use('/api/mail', async (req, res) => {
  console.log(req.body)
  res.json({ message: 'Email sent!' })
})

const PORT = 5000

app.listen(
  PORT,
  console.log(`Server running in development mode on port ${PORT}`)
)
