import type { ProductType } from '@/types'
import ProductCard from '../product-card/ProductCard'

type Props = {
  filteredData: ProductType[]
}

export default function Products({ filteredData }: Props) {
  return (
    <div>
      {filteredData?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}
