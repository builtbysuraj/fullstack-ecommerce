import { SORT_TYPE } from '@/constants/filterConstants'
import { useGetAllProductsQuery } from '@/state/services/productApi'
import type { ProductType } from '@/types'
import useGetParams from './useGetParams'

export default function useFilter() {
  const { data, isLoading } = useGetAllProductsQuery(null)

  const { q, category, rating, price, sort } = useGetParams()
  const products = data?.products

  const filteredData = products
    ?.filter((item: ProductType) => {
      // Price filter
      if (price && !(item.price >= price[0] && item.price <= price[1]))
        return false

      // Rating filter
      if (rating && !(item.rating >= Number(rating))) return false

      // Search filter
      if (
        q &&
        !item.title.toLowerCase().includes(q.toLowerCase()) &&
        !item.category.toLowerCase().includes(q.toLowerCase()) &&
        !item.brand.toLowerCase().includes(q.toLowerCase())
      )
        return false

      // category filter
      if (category && !(item.category === category)) return false

      // Add more filters as needed
      return true
    })
    .sort((a: ProductType, b: ProductType) => {
      switch (sort) {
        case SORT_TYPE.PRICE_HIGH_TO_LOW:
          return b.price - a.price
        case SORT_TYPE.PRICE_LOW_TO_HIGH:
          return a.price - b.price
        case SORT_TYPE.RATING_HIGH_TO_LOW:
          return b.rating - a.rating
        // Add more sort as needed
        default:
          return 0
      }
    })

  return { filteredData, isLoading }
}
