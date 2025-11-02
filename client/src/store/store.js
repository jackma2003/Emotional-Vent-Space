import { configureStore } from '@reduxjs/toolkit';
import ventsReducer from './slices/ventsSlice';

export const store = configureStore({
  reducer: {
    vents: ventsReducer,
  },
});

