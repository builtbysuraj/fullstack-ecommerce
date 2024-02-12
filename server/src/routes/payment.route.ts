import { Router } from 'express'
import { checkout } from '../controller/payment/checkout.controller'
import {
  getKey,
  paymentVerification,
} from '../controller/payment/payment.controller'
import { verifyPayment } from '../controller/payment/verifyPayment.controller'

const paymentRoute = Router()

paymentRoute.route('/checkout').post(checkout)
paymentRoute.route('/paymentverification').post(paymentVerification)
paymentRoute.route('/verify-payment').get(verifyPayment)
paymentRoute.route('/get-key').get(getKey)

export default paymentRoute
