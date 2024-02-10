import { Link, useParams } from 'react-router-dom'

import Loader from '@/components/loader/Loader'
import useHandleDispatch from '@/hooks/useHandleDispatch'
import { useGetProductByIdQuery } from '@/state/services/productApi'
import { useAppSelector } from '@/state/store'
import { isItemInCart } from '@/utils'
import { Rating } from '@mui/material'
import styles from './ProductDetailsPage.module.css'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { handleAddToCart } = useHandleDispatch()
  const { data, isFetching } = useGetProductByIdQuery(String(id))

  const cartData = useAppSelector((state) => state.cart)
  if (isFetching || !data) return <Loader />

  return (
    <div className={styles.productDetailsContainer}>
      <div>
        <div className={styles.productImage}>
          <img src={data.thumbnail} alt={data.title} />
        </div>
        {isItemInCart(cartData, data) ? (
          <Link to="/cart">
            <button className={styles.goToCartPage}>Go to Cart</button>
          </Link>
        ) : (
          <button
            className={styles.addToCartBtn}
            onClick={() => {
              data && handleAddToCart(data)
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
      <div>
        <h3>{data?.title}</h3>
        <p>{data.description}</p>
        <p>{data.stock}</p>
        <Rating name="read-only" value={data.rating} readOnly size="small" />
        <p>{data.category}</p>
        <p>{data.brand}</p>
        <p>${data.price}</p>
        <p>{data.discountPercentage}%</p>
      </div>
    </div>
  )
}
