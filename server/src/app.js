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
import paymentRoute from './routes/payment.routes.js'

app.use('/api/v1', paymentRoute)

app.get('/api/v1/get-key', (req, res) =>
  res.status(200).json({ key: ENV.RAZORPAY_API_KEY })
)

export default app
