import express from 'express'

const app = express()

app.use(express.json())

app.use('/api/mail', async (req, res) => {
  console.log(req.body)
})

const PORT = 5000

app.listen(
  PORT,
  console.log(`Server running in development mode on port ${PORT}`)
)
