import useFilter from '@/hooks/useFilters'
import type { ProductType } from '@/types'
import ProductCard from '../product-card/ProductCard'

export default function Products() {
  const { filteredData } = useFilter()

  return (
    <>
      {filteredData?.map((product: ProductType) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  )
}
