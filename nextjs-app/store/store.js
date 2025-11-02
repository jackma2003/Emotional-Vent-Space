import { configureStore } from '@reduxjs/toolkit';
import ventsReducer from './slices/ventsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      vents: ventsReducer,
    },
  });
};

