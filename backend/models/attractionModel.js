import mongoose from 'mongoose'

const attractionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      required: true
    },
    hero: {
      type: String,
      required: true
    },
    map: {
      type: String,
      required: true
    },
    activity: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Attraction = mongoose.model('Attraction', attractionSchema)

export default Attraction
