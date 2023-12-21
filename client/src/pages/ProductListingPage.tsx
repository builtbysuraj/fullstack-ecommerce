import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { Product } from "../types/type"

export default function ProductListingPage() {
  const { data } = useFetch("http://localhost:5000/api/v1/data/")

  return (
    <>
      <div>ProductListingPage</div>
      {data?.map((product: Product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img width={100} src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.rating}</p>
          </Link>
        </div>
      ))}
    </>
  )
}
