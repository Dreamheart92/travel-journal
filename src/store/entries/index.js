import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import extraReducers from './extraReducers';

import {
  resetState,
  addLocalComment,
  deleteLocalComment,
  updateLocalCommentWithRealData,
  updateLocalCommentReaction,
} from './reducers';

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    resetState,
    addLocalComment,
    deleteLocalComment,
    updateLocalCommentWithRealData,
    updateLocalCommentReaction,
  },
  extraReducers,
});

export const entriesActions = entriesSlice.actions;
export default entriesSlice.reducer;
