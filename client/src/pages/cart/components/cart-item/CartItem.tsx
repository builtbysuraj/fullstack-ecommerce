import useHandleDispatch from '@/hooks/useHandleDispatch'
import type { CartType } from '@/types'
import { cx } from '@/utils'
import fa from '../../../../assets/img/fa.png'
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
        <div className={styles.itemInfo}>
          <p className={styles.title}>{product.title}</p>
          <span className={styles.seller}>
            Seller:Internet
            <span>
              <img src={fa} width={56} alt="flipkart assured" />
            </span>
          </span>
          <section className={styles.itemPriceOfferDiscount}>
            <s>$871</s> <div className={styles.price}>${product.price}</div>
            <span className={cx(styles.green, styles.discount)}>
              {product.discountPercentage}% Off
            </span>
            <span className={styles.green}>3 offers applied</span>
          </section>
        </div>
        <span className={styles.deliveryBy}>
          Delivery by Mon Jan 15 | <s>$3</s>{' '}
          <span className={styles.green}>Free</span>{' '}
        </span>
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
