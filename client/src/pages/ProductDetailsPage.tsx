import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { addToCart } from "../store/cartSlice"

export default function ProductDetailsPage() {
  const { id } = useParams()

  const { data } = useFetch(`http://localhost:5000/api/v1/data/${id}`)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(data))
  }

  return (
    <>
      <div>ProductDetailsPage</div>
      <div>
        <img width={100} src={data?.thumbnail} alt={data?.title} />
        <h3>{data?.title}</h3>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  )
}
