import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { Product } from '../types/type'

let item = localStorage.getItem('cart')
const initialState = item ? JSON.parse(item) : []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.findIndex(
        (item: Product) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1
      } else {
        state.push({
          ...action.payload,
          cartItemId: String(nanoid()),
          quantity: 1,
        })
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const newState = state.filter(
        (item: Product) => item.cartItemId !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
