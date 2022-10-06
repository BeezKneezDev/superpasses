import asyncHandler from 'express-async-handler'
import Product from './../models/productModel.js'

// @des     Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  //const pageSize = 999
  //const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i'
        }
      }
    : {}

  const attraction = req.query.attraction
    ? {
        attraction: {
          $regex: req.query.attraction,
          $options: 'i'
        }
      }
    : {}

  const activity = req.query.activity
    ? {
        activity: {
          $regex: req.query.activity,
          $options: 'i'
        }
      }
    : {}

  const category = req.query.category
    ? {
        category: {
          $regex: req.query.category,
          $options: 'i'
        }
      }
    : {}

  //const count = await Product.count({ ...keyword })
  //const products = await Product.find({ attraction: 'Rotorua Canopy Tours' })
  console.log(attraction)
  const products = await Product.find({ ...attraction, ...activity })

  //const products = await Product.find({ attraction: 'skyline' })
  //.limit(pageSize)
  //.skip(pageSize * (page - 1))
  // res.json({ products, page, pages: Math.ceil(count / pageSize) })
  res.json({ products })
})

// @des     Fetch single product
// @route   GET /api/products:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//@desc Delete product by id
//@rout DELETE /api/products/:id
//@access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//@desc Create product
//@route POST /api/products/
//@access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    user: req.user._id,
    image: '/images/sample.jpg',
    summary: 'Sample summary',
    location: 'Rotorua',
    attraction: [],
    category: [],
    description: 'Sample description',
    prices: []
  })

  const price = {
    name: 'Adult Pass',
    price: 155
  }

  product.prices.push(price)
  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.category = category

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3)
  res.json(products)
})

export {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductById,
  getTopProducts
}
