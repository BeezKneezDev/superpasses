import mongoose from 'mongoose'
import slug from 'mongoose-slug-maker'
mongoose.plugin(slug)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      slug: 'title',
      unique: true
    },
    image: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    activity: {
      type: String,
      required: true
    },
    superpass: {
      type: Boolean,
      default: false
    },
    attraction: {
      type: Array,
      required: true
    },
    category: {
      type: Array,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    adultPrice: { type: Number, required: true, default: 0 },
    childPrice: { type: Number, required: false, default: 0 },
    familyPrice: { type: Number, required: false, default: 0 }
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
