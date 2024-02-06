import { useAppSelector } from '@/state/store'
import type { CartType } from '@/types'
import styles from './CartPage.module.css'
import { CartItem, CartPriceDetails, EmptyCart, PlaceOrder } from './components'

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cart)

  if (!cartData?.length) return <EmptyCart />

  return (
    <>
      <div className={styles.cartContainer}>
        <div>
          {cartData?.map((product: CartType) => (
            <CartItem product={product} key={product.id} />
          ))}
          <PlaceOrder cartData={cartData} />
        </div>
        <CartPriceDetails cartData={cartData} />
      </div>
    </>
  )
}
