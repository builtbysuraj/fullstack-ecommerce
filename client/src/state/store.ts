import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { productApi } from './services'
import { cartReducer, filtersReducer } from './slices'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filtersReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

// Types for store.
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

// Hooks for reading data and triggering changes.
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
