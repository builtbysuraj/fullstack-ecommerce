import { Link } from 'react-router-dom'

import Filters from '../components/Filters'
import useFilter from '../hooks/useFilters'
import { Product } from '../types/'

export default function ProductListingPage() {
  const { filteredData } = useFilter()
  return (
    <>
      <div>ProductListingPage</div>

      <Filters />
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
