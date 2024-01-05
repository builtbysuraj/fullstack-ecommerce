import { useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import useHandleDispatch from '../hooks/useHandleDispatch'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { handleAddToCart } = useHandleDispatch()

  const { data } = useFetch(
    `${import.meta.env.VITE_API_BASE_URL}/products/${id}`
  )
  console.log(data)
  return (
    <div style={{display:'flex' , gap: '1rem'}}>
      <div>
        <img width={200} src={data?.thumbnail} alt={data?.title} />
      </div>
      <div>
        <h3>{data?.title}</h3>
        <button onClick={() => handleAddToCart(data)}>Add to Cart</button>
      </div>
    </div>
  )
}
