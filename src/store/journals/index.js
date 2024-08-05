import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import extraReducers from './extraReducers';

import {
  resetState,
  addLocalComment,
  deleteLocalComment,
  updateLocalCommentWithRealData,
  updateLocalCommentReaction,
  updateLocalJournalLike,
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
    updateLocalJournalLike,
  },
  extraReducers,
});

export const journalsActions = journalsSlice.actions;
export default journalsSlice.reducer;
