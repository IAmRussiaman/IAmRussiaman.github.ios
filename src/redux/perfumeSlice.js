import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchPerfumesThunk = createAsyncThunk('perfumes/fetchPerfumesThunk', async (data) => {
  let { filter, sortTitle, sortOrder, currentPage, search } = data;
  let response = await axios.get(
    `https://6310c4a9826b98071a4a3b1b.mockapi.io/perfumes?${
      filter > 0 ? `category=${filter}` : ''
    }&sortBy=${sortTitle}&order=${sortOrder}&page=${currentPage}&limit=6&${
      search != '' ? `search=${search}` : ''
    }`,
  );

  return response.data;
});

const initialState = {
  perfumes: [],
  pageSize: 6,
  totalCount: 13,
  currentPage: 1,
  preloader: false,
};
const perfumesSlice = createSlice({
  name: 'perfumes',
  initialState,
  reducers: {
    setCurrentPageRedux: (state, { payload }) => {
      return { ...state, currentPage: payload };
    },
    activatePreloader: (state, { payload }) => {
      return { ...state, preloader: payload };
    },
  },
  extraReducers: {
    [fetchPerfumesThunk.fulfilled]: (state, { payload }) => {
      return { ...state, perfumes: payload, preloader: false };
    },
  },
});
export const { setCurrentPageRedux, activatePreloader } = perfumesSlice.actions;
export default perfumesSlice.reducer;
