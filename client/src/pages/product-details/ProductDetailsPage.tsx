import { Link, useParams } from 'react-router-dom'
// @ts-expect-error - no type defination for RIG
import ImageGallery from 'react-image-gallery'

import Loader from '@/components/loader/Loader'
import useHandleDispatch from '@/hooks/useHandleDispatch'
import { useGetProductByIdQuery } from '@/state/services/productApi'
import { useAppSelector } from '@/state/store'
import { getOriginalAndThumbnailImg, isItemInCart } from '@/utils'
import styles from './ProductDetailsPage.module.css'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { handleAddToCart } = useHandleDispatch()
  const { data, isFetching } = useGetProductByIdQuery(String(id))

  const cartData = useAppSelector((state) => state.cart)
  if (isFetching || !data) return <Loader />

  const Images = getOriginalAndThumbnailImg(data.images)

  return (
    <div className={styles.productDetailsContainer}>
      <div>
        <div className={styles.imageGalleryWrapper}>
          <ImageGallery
            items={Images}
            thumbnailPosition="left"
            showPlayButton={false}
            showFullscreenButton={false}
            lazyLoad={true}
          />
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
      </div>
    </div>
  )
}
