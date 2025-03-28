import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../store/reducer/userReducer'

export const store = configureStore({
  reducer: { 
    user: userSlice
  },
})