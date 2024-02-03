import { useAppSelector } from '@/state/store'
import type { CartType } from '@/types'
import styles from './CartPage.module.css'
import CartItem from './components/cart-item/CartItem'
import CartPriceDetails from './components/cart-price-details/CartPriceDetails'
import EmptyCart from './components/empty-cart/EmptyCart'
import PlaceOrder from './components/place-order/PlaceOrder'

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cart)

  if (!cartData?.length) {
    return <EmptyCart />
  }

  return (
    <div className={styles.cartContainer}>
      <div>
        {cartData?.map((product: CartType) => (
          <CartItem product={product} key={product.id} />
        ))}
        <PlaceOrder cartData={cartData} />
      </div>
      <CartPriceDetails cartData={cartData} />
    </div>
  )
}
