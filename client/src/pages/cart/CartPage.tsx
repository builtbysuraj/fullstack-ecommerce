import classNames from 'classnames/bind'
import useHandleDispatch from '@/hooks/useHandleDispatch'
import { useAppSelector } from '@/state/store'
import { CartType } from '@/types'
import styles from './CartPage.module.css'
import CartPriceDetails from './components/cart-price-details/CartPriceDetails'
import EmptyCart from './components/empty-cart/EmptyCart'

const cx = classNames.bind(styles)

export default function CartPage() {
  const cartData = useAppSelector((state) => state.cartReducer)
  const { handleRemoveFromCart, handleDecrementCartItem, handleAddToCart } =
    useHandleDispatch()

  if (!cartData?.length) {
    return <EmptyCart />
  }

  return (
    <div className={cx('cart-container')}>
      <div>
        {cartData?.map((product: CartType) => (
          <div className={cx('cart-item')} key={product.cartItemId}>
            <div className={cx('cart-item-product-info')}>
              <div className={cx('cart-image')}>
                <img width={200} src={product.thumbnail} />
              </div>
              <div className={cx('item-margin-top')}>
                <p>{product.title}</p>
                <small>{product.description}</small>
                <s>$871</s> <strong>${product.price} </strong>
                <span> {product.discountPercentage}% Off </span>
                <small> 3 offers available</small>
                <br />
                <small>Seller: Internet</small>
              </div>
              <small>
                Delivery by Mon Jan 15 | $80Free
              </small>
            </div>
            <div className={cx('cart-item-quantity')}>
              <button
                className={cx('cart-quantity-btn')}
                onClick={() => handleDecrementCartItem(product)}
              >
                -
              </button>
              <span style={{ border: '1px solid black', padding: '5px 15px' }}>
                {product.quantity}
              </span>
              <button
                className={cx('cart-quantity-btn')}
                onClick={() => handleAddToCart(product)}
              >
                +
              </button>
              <button className={cx('cart-item-btn')}>SAVE FOR LATER</button>
              <button
                className={cx('cart-item-btn')}
                onClick={() => handleRemoveFromCart(product.cartItemId)}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
        <div className={cx('cart-item', 'place-order')}>
          <button>PLACE ORDER</button>
        </div>
      </div>
      <CartPriceDetails cartData={cartData} />
    </div>
  )
}
