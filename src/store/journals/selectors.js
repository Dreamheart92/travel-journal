import { createSelector } from '@reduxjs/toolkit';
import { JOURNALS_STATE_KEYS } from '../../constants/redux';

const selectJournalsSlice = (state) => state.journals;

export const selectJournals = (state) => state.journals[JOURNALS_STATE_KEYS.JOURNALS];

export const selectJournal = (state) => state.journals[JOURNALS_STATE_KEYS.JOURNAL];

export const selectComments = createSelector(
  [selectJournalsSlice, selectJournals],
  (journalsSlice, journals) => ({
    comments: journalsSlice[JOURNALS_STATE_KEYS.COMMENTS],
    loading: journals.loading,
  }),
);
