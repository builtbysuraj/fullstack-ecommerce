import { totalCartPrice } from '@/utils'
import axios from 'axios'

type Props = {
  cartData: []
}

export default function PlaceOrder({ cartData }: Props) {
  const amount = totalCartPrice(cartData)

  const handleCheckout = async () => {
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
    // @ts-expect-error Custom Razorpay script in index.html
    const razor = new window.Razorpay(options)

    razor.open()
  }

  return (
    <div className="">
      <button onClick={handleCheckout}>PLACE ORDER</button>
    </div>
  )
}
