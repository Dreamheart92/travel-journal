import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { resetState } from './reducers';
import extraReducers from './extraReducers';

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    resetState,
  },
  extraReducers,
});

export const crudActions = crudSlice.actions;
export default crudSlice.reducer;
