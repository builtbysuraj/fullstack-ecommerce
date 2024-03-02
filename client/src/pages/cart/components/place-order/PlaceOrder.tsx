import axios from 'axios'

import useServerStatus from '@/hooks/useServerStatus'
import { useAppSelector } from '@/state/store'
import { totalCartPrice } from '@/utils'
import toast from 'react-hot-toast'
import styles from './PlaceOrder.module.css'
import { ENV } from '@/conf'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any
  }
}

axios.defaults.withCredentials = true

export default function PlaceOrder() {
  const cartData = useAppSelector((state) => state.cart)
  const serverStatus = useServerStatus()

  const amount = totalCartPrice(cartData)

  const performCheckout = async () => {
    const {
      data: { key },
    } = await axios.get(`${ENV.SERVER_URL}/get-key`)

    const {
      data: { order },
    } = await axios.post(`${ENV.SERVER_URL}/checkout`, {
      amount,
    })

    const options = {
      key,
      amount: order.amount,
      currency: 'INR',
      name: 'RazorPay',
      description: 'Secure payment through RazorPay',
      // image: '',
      order_id: order.id,
      callback_url: `${ENV.SERVER_URL}/paymentverification`,
      notes: {
        address: 'Razorpay Corporate Office',
      },
    }

    const razor = new window.Razorpay(options)

    razor.open()
  }

  const handleCheckout = async () => {
    if (!serverStatus?.status) {
      // @ts-expect-error ...
      return toast.error(serverStatus?.message)
    }
    if (serverStatus?.status)
      toast.promise(performCheckout(), {
        loading: 'Processing...',
        success: 'Done!',
        error: 'Server is not running',
      })
  }

  return (
    <div className={styles.placeOrder}>
      <button onClick={handleCheckout}>PLACE ORDER</button>
    </div>
  )
}
