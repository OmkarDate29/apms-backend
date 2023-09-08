import { Router } from 'express'
import { getPlace, createPlace } from '../controllers/placeController.js'

const router = Router()

router.get('/places', getPlace)
router.post('/create/places', createPlace)

export default router
