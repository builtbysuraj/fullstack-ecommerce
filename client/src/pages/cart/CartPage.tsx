import { useServerStatus } from '@/context/ServerStatusProvider'
import { useAppSelector } from '@/state/store'
import type { CartType } from '@/types'
import styles from './CartPage.module.css'
import { CartItem, CartPriceDetails, EmptyCart, PlaceOrder } from './components'

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cart)
  const serverStatus = useServerStatus()
  console.log(serverStatus)

  if (!cartData?.length) {
    return <EmptyCart />
  }

  return (
    <>
      {serverStatus === 'Server is not running' && <h4>{serverStatus}</h4>}
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
