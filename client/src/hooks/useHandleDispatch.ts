import { removeFromCart } from '../state/slices/cartSlice'
import {
  clearFilters,
  filterRating,
  filterSearch,
  priceRange,
  sort,
} from '../state/slices/filtersSlice'
import { useAppDispatch } from '../state/store'

export default function useHandleDispatch() {
  const dispatch = useAppDispatch()
  // const handlePriceClick = (item) => {
  //   dispatch({ type: 'SORT_BY_PRICE_HIGH_TO_LOW', payload: item.target.value })
  // }
  // const handleRatingClick = (item) => {
  // dispatch()
  // }

  const handlePriceRange = (event: Event, newValue: number | number[]) => {
    dispatch(priceRange(newValue))
  }

  const handleFilterRating = (filterValue: string) => {
    dispatch(filterRating(filterValue))
  }

  const handleSort = (sortType: string) => {
    dispatch(sort(sortType))
  }

  const handleSearchQuery = (query: string) => {
    dispatch(filterSearch(query))
  }

  const handleRemoveFromCart = (cartItemId: string) => {
    dispatch(removeFromCart(cartItemId))
  }

  const handleClearFilter = () => {
    dispatch(clearFilters())
  }

  return {
    handleFilterRating,
    handleSort,
    handleRemoveFromCart,
    handlePriceRange,
    handleSearchQuery,
    handleClearFilter,
  }
}
