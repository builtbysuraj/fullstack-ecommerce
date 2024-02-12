import { useAppSelector } from '@/state/store'
import styles from './CartPage.module.css'
import { CartPriceDetails, EmptyCart, PlaceOrder } from './components'
import CartItems from './components/cart-items/CartItems'

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cart)

  if (!cartData?.length) return <EmptyCart />

  return (
    <div className={styles.cartContainer}>
      <div>
        <CartItems />
        <PlaceOrder />
      </div>
      <CartPriceDetails />
    </div>
  )
}
