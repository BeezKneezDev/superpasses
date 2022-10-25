import asyncHandler from 'express-async-handler'
import Activity from '../models/activityModel.js'

const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find()
  res.json(activities)
})

export { getActivities }
