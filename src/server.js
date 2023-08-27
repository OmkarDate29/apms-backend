import 'dotenv/config'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 1437

app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
