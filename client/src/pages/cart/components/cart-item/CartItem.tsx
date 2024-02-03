import useHandleDispatch from '@/hooks/useHandleDispatch'
import type { CartType } from '@/types'
import styles from './CartItem.module.css'

type CartItemProps = {
  product: CartType
}

export default function CartItem({ product }: CartItemProps) {
  const { handleRemoveFromCart, handleDecrementCartItem, handleAddToCart } =
    useHandleDispatch()

  return (
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
          –
        </button>
        <span>{product.quantity}</span>
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
  )
}
