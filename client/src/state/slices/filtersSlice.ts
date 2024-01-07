import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { products } from '../../db/productData'
import { ProductType } from '../../types'

type InitialStateType = {
  data: ProductType[]
  sort: string
  stateRating: string | null
  priceRange: number[]
  searchQuery: string
}

export const initialState: InitialStateType = {
  data: products,
  sort: '',
  stateRating: null,
  priceRange: [10, 2000],
  searchQuery: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    sort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },
    filterRating(state, action: PayloadAction<string>) {
      state.stateRating = action.payload
    },
    priceRange(state, action) {
      state.priceRange = action.payload
    },
    filterSearch(state, action) {
      state.searchQuery = action.payload
    },
    clearFilters() {
      return initialState
    },
  },
})

export const { filterRating, sort, priceRange, filterSearch, clearFilters } =
  filtersSlice.actions

export default filtersSlice.reducer
