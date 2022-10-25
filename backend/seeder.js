import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import attractions from './data/attractions.js'
import activities from './data/activities.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Attraction from './models/attractionModel.js'
import Activity from './models/activityModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await Attraction.deleteMany()
    //await Activity.deleteMany()
    await User.deleteMany()

    const createdUser = await User.insertMany(users)
    await Attraction.insertMany(attractions)
    //await Activity.insertMany(activities)

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: createdUser[0]._id
      }
    })

    await Product.insertMany(sampleProducts)
    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const deleteData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Deleted!'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  deleteData()
} else {
  importData()
}
