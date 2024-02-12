import Razorpay from 'razorpay'
import app from './app'
import connectDB from './db/db'

const PORT = process.env.PORT || 5000

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
})

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running at port : ${PORT}`))
  })
  .catch((err) => console.log('MONGO db connection failed ! ', err))
