import classNames from 'classnames/bind'
import useHandleDispatch from '../../hooks/useHandleDispatch'
import { useAppSelector } from '../../state/store'
import { CartType } from '../../types'
import { calculateCartPrice } from '../../utils'
import styles from './CartPage.module.css'

const cx = classNames.bind(styles)

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cartReducer)
  const { handleRemoveFromCart, handleDecrementCartItem, handleAddToCart } =
    useHandleDispatch()

  return (
    <div className={cx('cart-container')}>
      <div>
        {cartData?.map((product: CartType) => (
          <div className={cx('cart-products')} key={product.cartItemId}>
            <div className={cx('cart-image')}>
              <img width={200} src={product.thumbnail} />
            </div>
            <h2>{product.title}</h2>
            <div>
              <button
                className={cx('cart-btn')}
                onClick={() => handleDecrementCartItem(product)}
              >
                -
              </button>
              <span style={{ border: '1px solid black', padding: '5px 15px' }}>
                {product.quantity}
              </span>
              <button
                className={cx('cart-btn')}
                onClick={() => handleAddToCart(product)}
              >
                +
              </button>
              <button
                className={cx('cart-removefromcart')}
                onClick={() =>
                  product.cartItemId && handleRemoveFromCart(product.cartItemId)
                }
              >
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {cartData.length > 0 ? (
        <div className={cx('cart-price')}>
          <h1>Price Details</h1>
          <section>
            <span>{`Price (${cartData.length}) items `}</span>
            <span>${`${calculateCartPrice(cartData)}`}</span>
          </section>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      ) : null}
    </div>
  )
}
