import { addToCart, removeFromCart } from '../state/slices/cartSlice'
import {
  clearFilters,
  filterRating,
  filterSearch,
  priceRange,
  sort,
} from '../state/slices/filtersSlice'
import { useAppDispatch } from '../state/store'
import { Product } from '../types'

export default function useHandleDispatch() {
  const dispatch = useAppDispatch()

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

  const handleAddToCart = (data: Product) => {
    dispatch(addToCart(data))
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
    handleAddToCart,
    handleRemoveFromCart,
    handlePriceRange,
    handleSearchQuery,
    handleClearFilter,
  }
}
