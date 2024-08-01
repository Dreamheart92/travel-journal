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

const journalsSlice = createSlice({
  name: 'journals',
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

export const journalsActions = journalsSlice.actions;
export default journalsSlice.reducer;
