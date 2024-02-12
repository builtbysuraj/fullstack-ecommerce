import { Link } from 'react-router-dom'

import emptyCart from '@/assets/img/empty-cart.png'
import styles from './EmptyCart.module.css'

export default function EmptyCart() {
  return (
    <div className={styles.emptyCartContainer}>
      <img width={280} src={emptyCart} alt="Empty Cart" />
      <h2>No items in Cart</h2>
      <Link to="/">
        <button className={styles.emptyCartBtn}>Back to Home</button>
      </Link>
    </div>
  )
}
