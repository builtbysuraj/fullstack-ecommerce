import { razorpayInstance } from '../..'
import connectDB from '../../db/db'

export const checkout = async (req, res) => {
  await connectDB()
  const options = {
    amount: Number(req.body.amount * 100),
    currency: 'INR',
  }
  const order = await razorpayInstance.orders.create(options)

  res.status(200).json({
    success: true,
    order,
  })
}
