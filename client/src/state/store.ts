import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { cartReducer, filtersReducer } from './slices'

const store = configureStore({
  reducer: {
    cartReducer,
    filtersReducer,
  },
})

// Types for our store.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Hooks for reading data and triggering changes.
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
