import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../store/cartSlice"
import { Product } from "../types/type"

export type RootState = {
  cart: Product[]
}

export default function CartPage() {
  const cartData = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product))
  }
  
  console.log(cartData)
  return (
    <>
      <div>CartPage</div>
      {cartData?.map((product: Product, i: number) => (
        <div key={i}>
          {product.title}
          <br />
          <h3>
            {product.id} : {product.quantity}
          </h3>
          <button onClick={() => handleRemoveFromCart(product)}>remove</button>
        </div>
      ))}
    </>
  )
}
