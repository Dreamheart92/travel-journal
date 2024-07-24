import { createSelector } from '@reduxjs/toolkit';

export const selectDetails = (state) => state.details;

export const selectDetailsState = createSelector(
  [selectDetails],
  (details) => ({
    journal: details.journal,
    comments: details.comments,
    loading: details.loading,
    error: details.error,
    isJournalOwner: details.isJournalOwner,
  }),
);

export const selectCommentDeleteState = (state) => state.details.commentCrud.delete;
