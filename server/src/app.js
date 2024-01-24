import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { ENV } from './conf/conf.js'

const app = express()

app.use(
  cors({
    origin: ENV.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

// Routes
import { Payment } from './models/payment.model.js'
import paymentRoute from './routes/payment.routes.js'

app.use('/api/v1', paymentRoute)

app.get('/api/v1/get-key', (req, res) =>
  res.status(200).json({ key: ENV.RAZORPAY_API_KEY })
)

app.get('/verify-payment', async (req, res) => {
  const paymentId = req.query.paymentId
  console.log(paymentId)
  try {
    const payment = await Payment.findOne({ razorpay_payment_id: paymentId })

    if (payment) {
      // console.log(payment)
      res.json({ success: true })
    } else {
      // console.log(payment)
      res.json({ success: false })
    }
  } catch (error) {
    res.status(500).json({ success: false })
  }
})

export default app
