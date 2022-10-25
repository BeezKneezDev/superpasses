import asyncHandler from 'express-async-handler'
import Attraction from '../models/attractionModel.js'

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
