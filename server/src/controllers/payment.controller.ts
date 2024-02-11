import crypto from 'crypto'
// import { Payment } from '../models/payment.model.js'
import { ENV } from '../conf/conf'
import { CLIENT_BASE_URL } from '../constants'
import { razorpayInstance } from '../index'
import { Payment } from '../models/payment.model'

export const checkout = async (req, res) => {
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

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body

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
