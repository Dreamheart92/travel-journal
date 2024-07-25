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
    addLocalComment(state, action) {
      state[entriesConstants.COMMENTS].results.unshift(action.payload);
    },
    deleteLocalComment(state, action) {
      const { commentId } = action.payload;

      const indexOfTargetedComment = state[entriesConstants.COMMENTS].results
        .findIndex((localComment) => (
          localComment._id === commentId));

      if (indexOfTargetedComment !== -1) {
        state[entriesConstants.COMMENTS].results.splice(indexOfTargetedComment, 1);
      }
    },
    updateLocalCommentWithRealData(state, action) {
      const commentRealData = action.payload.data;

      const localCommentIndex = state[entriesConstants.COMMENTS].results
        .findIndex((localComment) => (
          String(new Date(localComment.createdAt)) === String(new Date(commentRealData.createdAt))
          && localComment.comment === commentRealData.comment
          && localComment.author._id === commentRealData.author._id
        ));

      state[entriesConstants.COMMENTS].results[localCommentIndex] = commentRealData;
    },
  },
});

export const entriesActions = entriesSlice.actions;
export default entriesSlice.reducer;
