import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../components/features/imageSlice';

export const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});
