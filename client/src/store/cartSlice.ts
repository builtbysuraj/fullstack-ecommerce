import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../types/type"

let item = localStorage.getItem("cart")
const initialState = item ? JSON.parse(item) : []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex(
        (item: Product) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state[itemIndex].quantity += 1
      } else {
        state.push({
          ...action.payload,
          cartItemId: Date.now().toString(),
          quantity: 1,
        })
      }
      localStorage.setItem("cart", JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(
        (item: Product) => item.cartItemId !== action.payload.cartItemId
      )
      localStorage.setItem("cart", JSON.stringify(newState))
      return newState
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
