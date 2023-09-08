import places from '../data/places.js'

const getPlace = (req, res) => {
  res.send(places)
}

const createPlace = (req, res) => {
  res.send({ message: 'Create Place!' })
}

export { getPlace, createPlace }
