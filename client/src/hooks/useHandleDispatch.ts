import { useSearchParams } from 'react-router-dom'

import {
  addToCart,
  decrementCartItem,
  removeFromCart,
} from '@/state/slices/cartSlice'
import { useAppDispatch } from '@/state/store'
import type { CartType, ProductType } from '@/types'

export default function useHandleDispatch() {
  const dispatch = useAppDispatch()
  const setSearchParams = useSearchParams()[1]

  const handlePriceRange = (event: Event, newValue: number | number[]) => {
    setSearchParams((prev) => {
      // @ts-expect-error - MUI's fault?
      prev.set('price', `${newValue[0]}-${newValue[1]}`)
      return prev
    })
  }

  const handleFilterRating = (filterValue: string) => {
    setSearchParams((prev) => {
      prev.set('rating', filterValue)
      return prev
    })
  }

  const handleSort = (sortType: string) => {
    setSearchParams((prev) => {
      prev.set('sort', sortType)
      return prev
    })
  }

  const handleSearchQuery = (query: string) => {
    setSearchParams((prev) => {
      prev.set('q', query)
      return prev
    })
  }

  const handleAddToCart = (data: ProductType) => {
    dispatch(addToCart(data))
  }

  const handleDecrementCartItem = (data: CartType) => {
    dispatch(decrementCartItem(data))
  }

  const handleRemoveFromCart = (cartItemId: string) => {
    dispatch(removeFromCart(cartItemId))
  }

  const handleCategoryFilter = (category: string) => {
    setSearchParams((prev) => {
      prev.set('category', category)
      prev.delete('q')
      return prev
    })
  }

  const handleBrandFilter = (brand: string) => {
    setSearchParams((prev) => {
      prev.set('brand', brand)
      prev.delete('q')
      return prev
    })
  }

  const handleClearFilter = () => {
    setSearchParams((prev) => {
      prev.delete('q')
      prev.delete('category')
      prev.delete('rating')
      prev.delete('price')
      prev.delete('sort')
      prev.delete('brand')
      return prev
    })
  }

  return {
    handleFilterRating,
    handleSort,
    handleAddToCart,
    handleDecrementCartItem,
    handleRemoveFromCart,
    handlePriceRange,
    handleSearchQuery,
    handleCategoryFilter,
    handleBrandFilter,
    handleClearFilter,
  }
}
