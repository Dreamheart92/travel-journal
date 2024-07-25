import { createSlice } from '@reduxjs/toolkit';
import entriesConstants from '../../constants/entriesConstants';
import { fetchEntries, fetchEntry, fetchUserEntries } from './thunks';

const INITIAL_KEY_STATE = {
  results: null,
  loading: false,
  success: false,
  error: null,
};

const initialState = {
  [entriesConstants.JOURNAL_ENTRY]: {
    result: null,
    loading: false,
    success: false,
    error: null,
  },
  [entriesConstants.JOURNAL_ENTRIES]: INITIAL_KEY_STATE,
  [entriesConstants.COMMENTS]: {
    results: null,
  },
};

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
  },
});

export const entriesActions = entriesSlice.actions;
export default entriesSlice.reducer;
