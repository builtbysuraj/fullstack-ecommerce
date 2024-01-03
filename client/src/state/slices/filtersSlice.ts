import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { products } from '../../db/productData'
import { Product } from '../../types'

type InitialStateType = {
  data: Product[]
  sort: string
  stateRating: number | null
  priceRange: number[]
}

export const initialState: InitialStateType = {
  data: products,
  sort: '',
  stateRating: null,
  priceRange: [10, 2000],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    sort(state, action: PayloadAction<string>) {
      state.sort = action.payload
    },
    filterRating(state, action: PayloadAction<number>) {
      state.stateRating = action.payload
    },
    priceRange(state, action) {
      state.priceRange = action.payload
    },
    clearFilters() {
      return initialState
    },
  },
})

export const { filterRating, sort, priceRange, clearFilters } =
  filtersSlice.actions

export default filtersSlice.reducer
