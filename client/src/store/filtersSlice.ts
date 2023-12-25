import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { products } from '../db/productData'
import { Product } from '../types/type'

type InitialStateType = {
  data: Product[]
  sort: string
  stateRating: number | null
}

const initialState: InitialStateType = {
  data: products,
  sort: '',
  stateRating: null,
}

const filtersSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    sort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    filterRating: (state, action: PayloadAction<number>) => {
      state.stateRating = action.payload
    },
  },
})

export const { filterRating, sort } = filtersSlice.actions

export default filtersSlice.reducer
