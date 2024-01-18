import { Link } from 'react-router-dom'

import cart from '@/assets/img/cart.svg'
import search from '@/assets/img/search.svg'
import useHandleDispatch from '@/hooks/useHandleDispatch'
import { useAppSelector } from '@/state/store'
import classNames from 'classnames/bind'
import styles from './Header.module.css'
import flipkart from '/flipkart.png'

const cx = classNames.bind(styles)

export default function Header() {
  const stateData = useAppSelector((state) => state.filter)
  const cartData = useAppSelector((state) => state.cart)
  const { handleSearchQuery } = useHandleDispatch()

  return (
    <header className={cx('header-container')}>
      <div className={cx('header-wrapper')}>
        <div>
          <Link to="/">
            <img width="75" src={flipkart} alt="Flipkart" title="Flipkart" />
          </Link>
        </div>
        <div className={cx('input-wrapper')}>
          <input
            className={cx('header-input')}
            placeholder="Search for products, brands and more"
            value={stateData.searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
          />
          <img
            className={cx('header-search-icon')}
            src={search}
            alt="Search Icon"
          />
        </div>
        <div>
          <Link to="/login">
            <button className={cx('header-login-btn')}>Login</button>
          </Link>
        </div>
        <div>
          <Link to="/products">All products</Link>
        </div>
        <div>
          <Link to="#">Become a Seller</Link>
        </div>
        <div>
          <Link to="#">More</Link>
        </div>
        <div>
          <Link className={cx('cart-wrapper')} to="/cart">
            <img width={18} src={cart} alt="Cart Icon" />
            <div className={cx('cart-item')}>{cartData.length}</div>
            <span>cart</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
