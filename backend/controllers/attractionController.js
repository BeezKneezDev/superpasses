import asyncHandler from 'express-async-handler'
import Attraction from '../models/attractionModel.js'

//@desc Create product
//@route POST /api/products/
//@access Private/Admin
// const createAttraction = asyncHandler(async (req, res) => {
//   const attraction = new Attraction({
//     name: req.body.name,
//     image: req.body.image
//   })

//   const createdAttraction = await attraction.save()
//   res.status(201).json(createdAttraction)
// })

//@desc Get all attractions
//@route GET /api/attractions/
//@access Public/Admin
const getAttractions = asyncHandler(async (req, res) => {
  const activity = req.query.activity
    ? {
        activity: {
          $regex: req.query.activity,
          $options: 'i'
        }
      }
    : {}
  const attractions = await Attraction.find({ ...activity })
  res.json(attractions)
})

export { getAttractions }
