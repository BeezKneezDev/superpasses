import asyncHandler from 'express-async-handler'
import Product from './../models/productModel.js'
import slug from 'limax'

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

  const location = req.query.location
    ? {
        location: {
          $regex: req.query.location,
          $options: 'i'
        }
      }
    : {}

  //const count = await Product.count({ ...keyword })
  //const products = await Product.find({ attraction: 'Rotorua Canopy Tours' })
  console.log(attraction)
  const products = await Product.find({
    ...keyword,
    ...attraction,
    ...activity,
    ...location
  })

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
  const product = await Product.findOne({ slug: req.params.slug })

  console.log(product.attraction[0])

  // getting related products
  let products = await Product.find({
    $and: [
      {
        $or: [
          { attraction: product.attraction[0] },
          { attraction: product.attraction[1] },
          { attraction: product.attraction[3] },
          { attraction: product.attraction[4] },
          { attraction: product.attraction[5] }
        ]
      }
    ]
  })

  // exclude current product
  products = products.filter(
    (products) => products._id != product._id.toString()
  )

  if (product) {
    res.json({ product, products })
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
    slug: 'sample-name',
    user: req.user._id,
    image: '/images/sample.jpg',
    summary: 'Sample summary',
    location: 'Rotorua',
    attraction: [],
    activity: 'adventure',
    superpass: false,
    description: 'Sample description',
    adultPrice: 0,
    childPrice: 0,
    familyPrice: 0
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    adultPrice,
    childPrice,
    superpass,
    summary,
    location,
    activity,
    attraction,
    description
  } = req.body
  console.log(req.params.id)
  const product = await Product.findById(req.params.id)
  if (product) {
    ;(product.name = name),
      (product.slug = slug(name)),
      (product.image = image),
      (product.adultPrice = adultPrice),
      (product.childPrice = childPrice),
      (product.superpass = superpass),
      (product.summary = summary),
      (product.location = location),
      (product.activity = activity),
      (product.attraction = attraction),
      (product.description = description)

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get superpasses products
// @route   GET /api/products/superpasses
// @access  Public
const getsuperpasses = asyncHandler(async (req, res) => {
  const products = await Product.find({ superpass: true })
  res.json(products)
})

// const getProductsByAttraction = asyncHandler(async (req, res) => {
//   const products = await Product.find({ attraction: req.params.slug })
//   res.json(products)
// })

export {
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductById,
  getsuperpasses
  //getProductsByAttraction
}
