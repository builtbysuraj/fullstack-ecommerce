import { useSelector } from 'react-redux'

import SORT_TYPE from '../constants/filterConstants'
import { RootState } from '../state/store'

export default function useFilter() {
  const stateData = useSelector((state: RootState) => state.filtersReducer)

  const filteredData = stateData.data
    .filter((item) => {
      // Price filter
      // if (state.price && item.price !== state.price) return false
      if (
        stateData.priceRange &&
        !(
          item.price >= stateData.priceRange[0] &&
          item.price <= stateData.priceRange[1]
        )
      )
        return false

      if (stateData.stateRating && !(item.rating >= stateData.stateRating))
        // Rating filter
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
