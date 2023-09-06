import places from '../data/places.js'

const getPlace = (req, res) => {
  res.send(places)
}

const createPlace = (req, res) => {
  res.send({ message: 'createPlace' })
}

export { getPlace, createPlace }
