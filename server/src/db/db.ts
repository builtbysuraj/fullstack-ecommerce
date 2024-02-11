import mongoose from 'mongoose'
import { ENV } from '../conf/conf'
import { DB_NAME } from '../constants'

const connectDB = async () => {
  try {
    await mongoose.connect(`${ENV.MONGODB_URL_LOCAL}/${DB_NAME}`)
    console.log('MongoDB connected')
  } catch (error) {
    console.log('MongoDB connection FAILED ', error)
  }
}

export default connectDB
