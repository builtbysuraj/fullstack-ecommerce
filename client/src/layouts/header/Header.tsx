import { memo } from 'react'
import { Link } from 'react-router-dom'

import cart from '@/assets/img/cart.svg'
import search from '@/assets/img/search.svg'
import Input from '@/components/ui/Input'
import useGetParams from '@/hooks/useGetParams'
import useHandleDispatch from '@/hooks/useHandleDispatch'
import { useAppSelector } from '@/state/store'
import styles from './Header.module.css'
import flipkart from '/flipkart.png'

function Header() {
  const cartData = useAppSelector((state) => state.cart)
  const { handleSearchQuery } = useHandleDispatch()
  const { q } = useGetParams()
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div>
          <Link to="/">
            <img width="75" src={flipkart} alt="Flipkart" title="Flipkart" />
          </Link>
        </div>
        <div className={styles.inputWrapper}>
          <Input
            type="text"
            className={styles.headerInput}
            placeholder="Search for products, brands and more"
            value={q}
            onChange={(e) => handleSearchQuery(e.target.value)}
          />
          <img
            className={styles.headerSearchIcon}
            src={search}
            alt="Search Icon"
          />
        </div>
        <div>
          <Link to="/login">
            <button className={styles.headerLoginBtn}>Login</button>
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
          <Link className={styles.cartWrapper} to="/cart">
            <img width={18} src={cart} alt="Cart Icon" />
            <div className={styles.cartItem}>{cartData.length}</div>
            <span>cart</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

const MemoizedHeader = memo(Header)
export default MemoizedHeader
