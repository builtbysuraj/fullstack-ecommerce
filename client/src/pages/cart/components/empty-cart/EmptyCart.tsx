import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import emptyCart from '@/assets/img/empty-cart.png'
import styles from './EmptyCart.module.css'

const cx = classNames.bind(styles)

export default function EmptyCart() {
  return (
    <div className={cx('empty-cart-container')}>
      <img width={280} src={emptyCart} alt="Empty Cart" />
      <h2>No items in Cart</h2>
      <Link to="/">
        <button className={cx('empty-cart-btn')}>Back to Home</button>
      </Link>
    </div>
  )
}
