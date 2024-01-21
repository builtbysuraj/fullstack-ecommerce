import { Link, useParams } from 'react-router-dom'

import useHandleDispatch from '@/hooks/useHandleDispatch'
import { useGetProductByIdQuery } from '@/state/services/productApi'
import { useState } from 'react'

export default function ProductDetailsPage() {
  const [isAddedToCart] = useState(false)
  const { id } = useParams()
  const { handleAddToCart } = useHandleDispatch()

  const { data, isFetching } = useGetProductByIdQuery(String(id))

  if (isFetching) return <h1>Loading...</h1>

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
                data && handleAddToCart(data)
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
