import app from './app.js'
import connectDB from './db/db.js'
import Razorpay from 'razorpay'

const PORT = process.env.PORT || 5000

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
})

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`\n ⚙️ Server is running at port : ${PORT}🎉`)
    )
  })
  .catch((err) => console.log('MONGO db connection failed ! ', err))
