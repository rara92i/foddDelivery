import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import restaurantSlice from './slices/RestaurantSlice'

export const store = configureStore({
  reducer: {
    Cart: CartSlice,
    restaurant: restaurantSlice
  },
})