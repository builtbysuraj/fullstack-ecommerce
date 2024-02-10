import { useAppSelector } from '@/state/store'
import type { CartType } from '@/types'
import CartItemCard from '../cart-item-card/CartItemCard'

export default function CartItems() {
  const cartData = useAppSelector((state) => state.cart)

  return (
    <>
      {cartData?.map((product: CartType) => (
        <CartItemCard product={product} key={product.id} />
      ))}
    </>
  )
}
