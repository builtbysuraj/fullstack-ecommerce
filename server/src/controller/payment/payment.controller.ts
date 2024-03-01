import crypto from 'crypto'
import { ENV } from '../../conf/conf'
import { CLIENT_BASE_URL } from '../../constants'
import connectDB from '../../db/db'
import { Payment } from '../../model/payment.model'

export const paymentVerification = async (req, res) => {
  await connectDB()

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body
  const userId = req.user.id

  const body = razorpay_order_id + '|' + razorpay_payment_id

  const expectedSignature = crypto
    .createHmac('sha256', ENV.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest('hex')

  const isAuthentic = expectedSignature === razorpay_signature

  if (isAuthentic) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      user: userId,
    })

    res.redirect(
      `${CLIENT_BASE_URL}/payment-success?reference=${razorpay_payment_id}`
    )
  } else {
    res.status(400).json({
      success: false,
    })
  }
}

export const getKey = (req, res) => {
  res.status(200).json({ key: ENV.RAZORPAY_API_KEY })
}
