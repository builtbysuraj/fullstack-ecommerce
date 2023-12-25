import { Link } from 'react-router-dom'

import SORT_TYPE from '../constants/filterConstants'
import useFilter from '../hooks/useFilters'
import useHandleDispatch from '../hooks/useHandleDispatch'
import { Product } from '../types/type'

export default function ProductListingPage() {
  const { filteredData } = useFilter()
  const { handleFilterRating, handleSort } = useHandleDispatch()
  return (
    <>
      <div>ProductListingPage</div>

      <button onClick={() => handleSort(SORT_TYPE.PRICE_HIGH_TO_LOW)}>
        Sort by high to low price
      </button>
      <button onClick={() => handleSort(SORT_TYPE.PRICE_LOW_TO_HIGH)}>
        Sort by low to high price
      </button>
      <button onClick={() => handleFilterRating(4.6)}>
        filter rating more then 3
      </button>
      <button onClick={() => handleSort(SORT_TYPE.RATING_HIGH_TO_LOW)}>
        Rating High To Low
      </button>
      {filteredData?.map((product: Product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            {/* <img
              loading='lazy'
              width={100}
              src={product.thumbnail}
              alt={product.title}
            /> */}
            {/* <h3>{product.title}</h3> */}
            <p>
              ${product.price} | Rating: {product.rating}
            </p>
            {/* <hr /> */}
          </Link>
        </div>
      ))}
    </>
  )
}
