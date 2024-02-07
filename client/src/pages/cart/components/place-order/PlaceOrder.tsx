import axios from 'axios'

import useServerStatus from '@/hooks/useServerStatus'
import { useAppSelector } from '@/state/store'
import { totalCartPrice } from '@/utils'
import toast from 'react-hot-toast'
import styles from './PlaceOrder.module.css'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any
  }
}

export default function PlaceOrder() {
  const cartData = useAppSelector((state) => state.cart)
  const serverStatus = useServerStatus()

  const amount = totalCartPrice(cartData)

  const performCheckout = async () => {
    const {
      data: { key },
    } = await axios.get('http://www.localhost:5000/api/v1/get-key')

    const {
      data: { order },
    } = await axios.post('http://localhost:5000/api/v1/checkout', {
      amount,
    })

    const options = {
      key,
      amount: order.amount,
      currency: 'INR',
      name: 'RazorPay',
      description: 'Tutorial of RazorPay',
      // image: 'https://avatars.githubusercontent.com/u/25058652?v=4',
      order_id: order.id,
      callback_url: 'http://localhost:5000/api/v1/paymentverification',
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
