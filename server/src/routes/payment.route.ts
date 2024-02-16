import { Router } from 'express'
import { checkout } from '../controller/payment/checkout.controller'
import {
  getKey,
  paymentVerification,
} from '../controller/payment/payment.controller'
import { verifyPayment } from '../controller/payment/verifyPayment.controller'
import { verifyToken } from '../middleware/verifyToken.middleware'

const paymentRoute = Router()

paymentRoute.route('/checkout').post(verifyToken, checkout)
paymentRoute
  .route('/paymentverification')
  .post(verifyToken, paymentVerification)
paymentRoute.route('/verify-payment').get(verifyPayment)
paymentRoute.route('/get-key').get(getKey)

export default paymentRoute
