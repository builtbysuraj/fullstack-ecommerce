import { SORT_TYPE } from '../constants/filterConstants'
import { useGetAllProductsQuery } from '../state/services/productApi'
import { useAppSelector } from '../state/store'

export default function useFilter() {
  const stateData = useAppSelector((state) => state.filtersReducer)
  const { data } = useGetAllProductsQuery()
  const filteredData = data?.products
    ?.filter((item) => {
      // Price filter
      if (
        stateData.priceRange &&
        !(
          item.price >= stateData.priceRange[0] &&
          item.price <= stateData.priceRange[1]
        )
      )
        return false

      // Rating filter
      if (
        stateData.stateRating &&
        !(item.rating >= Number(stateData.stateRating))
      )
        return false

      // Search filter
      if (
        stateData.searchQuery &&
        !item.title.toLowerCase().includes(stateData.searchQuery) &&
        !item.category.toLowerCase().includes(stateData.searchQuery) &&
        !item.brand.toLowerCase().includes(stateData.searchQuery)
      )
        return false
      // Add more filters as needed
      return true
    })
    .sort((a, b) => {
      switch (stateData.sort) {
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

  return { filteredData }
}
