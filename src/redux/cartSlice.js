import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const findItem = state.items.find((obj) => obj.id === payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, elem) => {
        return elem.count * elem.price + sum;
      }, 0);
    },
    setCountPlus: (state, { payload }) => {
      const findItem = state.items.find((obj) => obj.id === payload.id);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce((sum, elem) => {
        return elem.count * elem.price + sum;
      }, 0);
    },
    deleteCategory: (state, { payload }) => {
      state.items = state.items.filter((obj) => obj.id != payload);
    },
    setCountMinus: (state, { payload }) => {
      const findItem = state.items.find((obj) => obj.id === payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, elem) => {
        return elem.count * elem.price + sum;
      }, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const { addItem, setCountMinus, setCountPlus, clearCart, deleteCategory } =
  cartSlice.actions;
export default cartSlice.reducer;
