import { useDispatch } from 'react-redux'
import { removeFromCart } from '../state/slices/cartSlice'
import { clearFilters, filterRating, sort } from '../state/slices/filtersSlice'

export default function useHandleDispatch() {
  const dispatch = useDispatch()
  // const handlePriceClick = (item) => {
  //   dispatch({ type: 'SORT_BY_PRICE_HIGH_TO_LOW', payload: item.target.value })
  // }
  // const handleRatingClick = (item) => {
  // dispatch()
  // }

  const handleFilterRating = (filterValue: number) => {
    dispatch(filterRating(filterValue))
  }

  const handleSort = (sortType: string) => {
    dispatch(sort(sortType))
  }

  const handleRemoveFromCart = (cartItemId: string) => {
    dispatch(removeFromCart(cartItemId))
  }

  const handleClearFilter = () => {
    dispatch(clearFilters())
  }
  
  return { handleFilterRating, handleSort, handleRemoveFromCart, handleClearFilter }
}
