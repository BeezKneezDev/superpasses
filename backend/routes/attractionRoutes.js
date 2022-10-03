import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import {
  createAttraction,
  getAttractions
} from '../controllers/attractionController.js'

const router = express.Router()

router.route('/').get(getAttractions).post(protect, admin, createAttraction)

export default router
