import { Payment } from '../../model/payment.model'

export const verifyPayment = async (req, res) => {
  const paymentId = req.query.paymentId
  console.log(paymentId)
  try {
    const payment = await Payment.findOne({ razorpay_payment_id: paymentId })

    if (payment) {
      res.json({ success: true })
    } else {
      res.json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
}
