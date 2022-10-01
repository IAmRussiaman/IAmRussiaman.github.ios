import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterId: '',
  sort: {
    name: 'Price(DESC)',
    order: 'desc',
    title: 'price',
  },
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortInfo: (state, { payload }) => {
      return { ...state, sort: payload };
    },
    setFilterId: (state, { payload }) => {
      return { ...state, filterId: payload };
    },
  },
});
export const { setSortInfo, setFilterId } = filterSlice.actions;
export default filterSlice.reducer;
