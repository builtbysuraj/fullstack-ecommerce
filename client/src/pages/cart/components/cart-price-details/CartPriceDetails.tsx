import { Divider } from '@mui/material'
import classNames from 'classnames/bind'

import { CartType } from '@/types'
import { totalCartPrice } from '@/utils'
import styles from './CartPriceDetails.module.css'

const cx = classNames.bind(styles)

type Props = {
  cartData: CartType[]
}

export default function CartPriceDetails({ cartData }: Props) {
  return (
    <div className={cx('cart-price')}>
      <span>PRICE DETAILS</span>
      <Divider />
      <section>
        <span>{`Price (${cartData.length} items) `}</span>
        <span>${`${totalCartPrice(cartData)}`}</span>
      </section>
      <section>
        <span>Discount</span>
        <span>- $134</span>
      </section>
      <section>
        <span>Delivery Charges</span>
        <span>
          <s>$340</s> Free
        </span>
      </section>
      <Divider />
      <section>
        <strong>Total Amount</strong>
        <strong>${`${totalCartPrice(cartData)}`}</strong>
      </section>
      <p>You will save $134 on this order</p>
    </div>
  )
}
