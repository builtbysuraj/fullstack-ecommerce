import { Link, useParams } from 'react-router-dom'

import { useState } from 'react'
import useHandleDispatch from '../../hooks/useHandleDispatch'
import { useGetProductByIdQuery } from '../../state/services/productApi'

export default function ProductDetailsPage() {
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const { id } = useParams()
  const { handleAddToCart } = useHandleDispatch()

  const { data } = useGetProductByIdQuery(String(id))
  console.log(data)
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>
        <img width={200} src={data?.thumbnail} alt={data?.title} />
      </div>
      <div>
        <h3>{data?.title}</h3>
        {isAddedToCart ? (
          <>
            <button>
              <Link to="/cart"> Go to Cart</Link>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                handleAddToCart(data)
              }}
            >
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  )
}
