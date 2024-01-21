import { CartType } from '@/types'
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart') || '[]')

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.find((item: CartType) => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
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
      const item = state.find(
        (item: CartType) => item.cartItemId === action.payload.cartItemId
      )
      if (item?.quantity > 1) {
        item.quantity -= 1
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const newState = state.filter(
        (item: CartType) => item.cartItemId !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    },
    clear() {
      return []
    }
  },
})

export const { addToCart, decrementCartItem, removeFromCart, clear } =
  cartSlice.actions

export default cartSlice.reducer
