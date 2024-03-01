import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { ENV } from './conf/conf'

const app = express()

app.use(
  cors({
    origin: [ENV.CLIENT_URL],
    credentials: true,
  })
)
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

// Routes
import generalRoute from './routes/general.route'
import paymentRoute from './routes/payment.route'
import userRoute from './routes/user.route'

app.use('/api/v1', generalRoute)
app.use('/api/v1', paymentRoute)
app.use('/api/v1', userRoute)

export default app
