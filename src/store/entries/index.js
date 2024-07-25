import { createSlice } from '@reduxjs/toolkit';
import entriesConstants from '../../constants/entriesConstants';
import { fetchEntry } from './thunks';

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
    resetState(state, action) {
      const { key } = action.payload;
      state[key] = INITIAL_KEY_STATE;
    },
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
    updateLocalCommentReaction(state, action) {
      const {
        reactionType,
        isReacted,
        commentId,
        userId,
      } = action.payload;

      const reactions = {
        likes: 'likes',
        dislikes: 'dislikes',
      };

      const currentReaction = reactions[reactionType];

      const oppositeReaction = currentReaction === reactions.likes
        ? reactions.dislikes
        : reactions.likes;

      const reactedLocalComment = state[entriesConstants.COMMENTS].results.find((localComment) => (
        localComment._id === commentId));

      if (isReacted) {
        const indexOfReactedUser = reactedLocalComment[currentReaction].findIndex((reactedId) => (
          reactedId === userId));

        reactedLocalComment[currentReaction].splice(indexOfReactedUser, 1);
      } else {
        reactedLocalComment[currentReaction].push(userId);

        const indexOfOppositeReaction = reactedLocalComment[oppositeReaction]
          .findIndex((reactedId) => (
            reactedId === userId));

        if (indexOfOppositeReaction !== -1) {
          reactedLocalComment[oppositeReaction].splice(indexOfOppositeReaction, 1);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntry.pending, (state) => {
      state[entriesConstants.JOURNAL_ENTRY].loading = true;
      state[entriesConstants.JOURNAL_ENTRY].success = false;
      state[entriesConstants.JOURNAL_ENTRY].error = null;
    });
    builder.addCase(fetchEntry.fulfilled, (state, action) => {
      state[entriesConstants.JOURNAL_ENTRY].result = action.payload.result;
      state[entriesConstants.JOURNAL_ENTRY].isJournalOwner = action.payload.isJournalOwner;
      state[entriesConstants.COMMENTS].results = action.payload.comments;

      state[entriesConstants.JOURNAL_ENTRY].loading = false;
      state[entriesConstants.JOURNAL_ENTRY].success = true;
    });
    builder.addCase(fetchEntry.rejected, (state, action) => {
      state[entriesConstants.JOURNAL_ENTRY].loading = false;
      state[entriesConstants.JOURNAL_ENTRY].error = true;
    });
    builder.addMatcher(
      (action) => action.type.startsWith('entries/fetchEntries'),
      (state, action) => {
        const { requestStatus } = action.meta;

        switch (requestStatus) {
          case 'pending': {
            state[entriesConstants.JOURNAL_ENTRIES].loading = true;
            state[entriesConstants.JOURNAL_ENTRIES].success = false;
            state[entriesConstants.JOURNAL_ENTRIES].error = null;
            break;
          }
          case 'fulfilled': {
            state[entriesConstants.JOURNAL_ENTRIES].results = {
              journals: action.payload.journals,
              totalPages: action.payload.totalPages,
            };

            state[entriesConstants.JOURNAL_ENTRIES].loading = false;
            state[entriesConstants.JOURNAL_ENTRIES].success = true;
            break;
          }
          case 'rejected': {
            state[entriesConstants.JOURNAL_ENTRIES].loading = false;
            state[entriesConstants.JOURNAL_ENTRIES].error = true;
            break;
          }
          default:
        }
      },
    );
  },
});

export const entriesActions = entriesSlice.actions;
export default entriesSlice.reducer;
