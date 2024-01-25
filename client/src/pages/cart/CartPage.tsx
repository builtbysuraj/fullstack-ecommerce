import useHandleDispatch from '@/hooks/useHandleDispatch'
import { useAppSelector } from '@/state/store'
import type { CartType } from '@/types'
import styles from './CartPage.module.css'
import CartPriceDetails from './components/cart-price-details/CartPriceDetails'
import EmptyCart from './components/empty-cart/EmptyCart'
import PlaceOrder from './components/place-order/PlaceOrder'

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cart)
  const { handleRemoveFromCart, handleDecrementCartItem, handleAddToCart } =
    useHandleDispatch()

  if (!cartData?.length) {
    return <EmptyCart />
  }

  return (
    <div className={styles.cartContainer}>
      <div>
        {cartData?.map((product: CartType) => (
          <div className={styles.cartItem} key={product.cartItemId}>
            <div className={styles.cartItemProductInfo}>
              <div className={styles.cartImage}>
                <img width={200} src={product.thumbnail} />
              </div>
              <div className={styles.itemMarginTop}>
                <p>{product.title}</p>
                <small>{product.description}</small>
                <s>$871</s> <strong>${product.price} </strong>
                <span> {product.discountPercentage}% Off </span>
                <small> 3 offers available</small>
                <br />
                <small>Seller: Internet</small>
              </div>
              <small>Delivery by Mon Jan 15</small>
            </div>
            <div className={styles.cartItemQuantity}>
              <button
                className={styles.cartQuantityBtn}
                onClick={() => handleDecrementCartItem(product)}
              >
                -
              </button>
              <span style={{ border: '1px solid black', padding: '5px 15px' }}>
                {product.quantity}
              </span>
              <button
                className={styles.cartQuantityBtn}
                onClick={() => handleAddToCart(product)}
              >
                +
              </button>
              <button className={styles.cartItemBtn}>SAVE FOR LATER</button>
              <button
                className={styles.cartItemBtn}
                onClick={() => handleRemoveFromCart(product.cartItemId)}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
        <PlaceOrder cartData={cartData} />
      </div>
      <CartPriceDetails cartData={cartData} />
    </div>
  )
}
