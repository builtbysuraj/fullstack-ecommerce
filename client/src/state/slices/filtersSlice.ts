import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '@/types'

type InitialStateType = {
  data: ProductType[]
  sort: string
  stateRating: string | null
  priceRange: number[]
  searchQuery: string
  category: string
}

export const initialState: InitialStateType = {
  data: [],
  sort: '',
  stateRating: null,
  priceRange: [10, 2000],
  searchQuery: '',
  category: '',
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
    categoryFilter(state, action) {
      state.category = action.payload
    },
    clearFilters() {
      return initialState
    },
  },
})

export const {
  filterRating,
  sort,
  priceRange,
  filterSearch,
  categoryFilter,
  clearFilters,
} = filtersSlice.actions

export default filtersSlice.reducer
