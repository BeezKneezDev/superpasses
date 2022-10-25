import mongoose from 'mongoose'

const activitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

const Activity = mongoose.model('Activity', activitySchema)

export default Activity
