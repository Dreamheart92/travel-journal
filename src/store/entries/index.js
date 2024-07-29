import { createSlice } from '@reduxjs/toolkit';
import entriesKeys from './types';
import INITIAL_KEY_STATE from './initialState';
import extraReducers from './extraReducers';

const INITIAL_KEY_STATE = {
  results: null,
  loading: false,
  success: false,
  error: null,
};

const initialState = {
  [entriesKeys.JOURNAL_ENTRY]: {
    result: null,
    loading: false,
    success: false,
    error: null,
  },
  [entriesKeys.JOURNAL_ENTRIES]: INITIAL_KEY_STATE,
  [entriesKeys.COMMENTS]: {
    results: null,
  },
};

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
