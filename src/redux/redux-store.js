import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import filterSlice from './filterSlice';
import perfumeSlice from './perfumeSlice';

let store = configureStore({
  reducer: {
    allPerfumes: perfumeSlice,
    filter: filterSlice,
    cart: cartSlice,
  },
});

export default store;
