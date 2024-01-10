import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { CartType } from '../../types'

const item = localStorage.getItem('cart')
const initialState = item ? JSON.parse(item) : []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartType>) {
      const itemIndex = state.findIndex(
        (item: CartType) => item.id === action.payload.id
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
    decrementCartItem(state, action) {
      const itemIndex = state.findIndex(
        (item: CartType) => item.cartItemId === action.payload.cartItemId
      )
      if (state[itemIndex].quantity < 1) {
        const newState = state.filter(
          (item: CartType) => item.cartItemId !== action.payload.cartItemId
        )
        localStorage.setItem('cart', JSON.stringify(newState))
        return newState
      } else if (itemIndex >= 0 && state[itemIndex].quantity !== 0) {
        state[itemIndex].quantity -= 1
        localStorage.setItem('cart', JSON.stringify(state))
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const newState = state.filter(
        (item: CartType) => item.cartItemId !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    },
  },
})

export const { addToCart, decrementCartItem, removeFromCart } =
  cartSlice.actions

export default cartSlice.reducer
