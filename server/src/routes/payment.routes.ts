import { Router } from 'express'
import {
  checkout,
  paymentVerification,
} from '../controllers/payment.controller'

const router = Router()

router.route('/checkout').post(checkout)
router.route('/paymentverification').post(paymentVerification)

export default router
