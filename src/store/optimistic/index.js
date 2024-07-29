import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import extraReducers from './extraReducers';

const optimisticSlice = createSlice({
  name: 'optimistic',
  initialState,
  reducers: {},
  extraReducers,
});

export const optimisticActions = optimisticSlice.actions;
export default optimisticSlice.reducer;
