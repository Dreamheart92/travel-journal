import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

import {
  setCurrentPage,
  setSearch,
  setTotalPages,
  resetState, setSortBy,
} from './reducers';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch,
    setTotalPages,
    setCurrentPage,
    setSortBy,
    resetState,
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
