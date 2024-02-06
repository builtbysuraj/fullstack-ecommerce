import { Divider } from '@mui/material'

import type { CartType } from '@/types'
import { calculateTotalDiscount, cx, totalCartPrice } from '@/utils'
import shield from '../../../../assets/img/shield.svg'
import styles from './CartPriceDetails.module.css'

type CartDataProps = {
  cartData: CartType[]
}

export default function CartPriceDetails({ cartData }: CartDataProps) {
  return (
    <div>
      <div className={styles.cartPrice}>
        <span className={styles.cartPriceHeading}>PRICE DETAILS</span>
        <Divider />
        <section className={styles.price}>
          <span>{`Price (${cartData.length} items) `}</span>
          <span>${`${totalCartPrice(cartData)}`}</span>
        </section>
        <section>
          <span>Discount</span>
          <span className={styles.green}>
            − ${calculateTotalDiscount(cartData)}
          </span>
        </section>
        <section className={styles.delivery}>
          <span>Delivery Charges</span>
          <span>
            <s>$40</s>
            <span className={styles.green}>Free</span>
          </span>
        </section>
        <Divider />
        <section className={styles.totalAmount}>
          <div>Total Amount</div>
          <span>${`${totalCartPrice(cartData)}`}</span>
        </section>
        <Divider />
        <p className={cx(styles.green, styles.saving)}>
          You will save ${calculateTotalDiscount(cartData)} on this order
        </p>
      </div>
      <div className={styles.secureSection}>
        <span>
          <img width={25} src={shield} alt="shield" />
        </span>
        <span>
          Safe and Secure Payments. Easy returns. <br /> 100% Authentic
          products.
        </span>
      </div>
    </div>
  )
}
