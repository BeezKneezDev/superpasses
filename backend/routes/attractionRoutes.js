import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import { getAttractions } from '../controllers/attractionController.js'

const router = express.Router()

router.route('/').get(getAttractions)

export default router
