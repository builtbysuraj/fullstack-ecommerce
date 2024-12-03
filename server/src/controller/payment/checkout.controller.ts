import { razorpayInstance } from '../..'
import connectDB from '../../db/db'

export const checkout = async (req, res) => {
  try {
    // Ensure the amount is a valid number and convert to integer
    const amount = Math.floor(Number(req.body.amount) * 100) // Convert to integer and paise

    if (isNaN(amount) || amount <= 0) {
      return res
        .status(400)
        .json({ error: 'Invalid amount, must be a positive number.' })
    }

    await connectDB()

    const options = {
      amount,
      currency: 'INR',
    }

    const order = await razorpayInstance.orders.create(options)

    res.status(200).json({
      success: true,
      order,
    })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({
      error: error.message || 'An error occurred during the checkout process',
    })
  }
}
