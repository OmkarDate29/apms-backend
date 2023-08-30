import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import placesRoutes from './routes/places.js'

const app = express()
const PORT = process.env.PORT || 1437

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'welcome!' })
})

app.use('/api', placesRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
