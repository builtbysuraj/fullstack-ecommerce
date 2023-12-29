import { useSelector } from 'react-redux'

import useHandleDispatch from '../hooks/useHandleDispatch'
import { RootState } from '../state/store'
import { Product } from '../types'

export default function CartPage() {
  const cartData = useSelector((state: RootState) => state.cartReducer)

  const { handleRemoveFromCart } = useHandleDispatch()

  console.log(cartData)
  return (
    <>
      <div>CartPage</div>
      {cartData?.map((product: Product) => (
        <div key={product.cartItemId}>
          {product.title}
          <br />
          <h3>
            {product.id} : {product.quantity}
          </h3>
          <button
            onClick={() =>
              product.cartItemId && handleRemoveFromCart(product.cartItemId)
            }
          >
            remove
          </button>
        </div>
      ))}
    </>
  )
}
