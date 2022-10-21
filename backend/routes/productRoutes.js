import express from 'express'
import {
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getsuperpasses,
  getProductById
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.get('/superpasses', getsuperpasses)
router.route('/:slug').get(getProductById)

router.route('/:id').put(protect, admin, updateProduct)
router.route('/:id').delete(protect, admin, deleteProduct)

export default router
