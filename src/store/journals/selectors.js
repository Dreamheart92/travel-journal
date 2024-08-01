import { createSelector } from '@reduxjs/toolkit';
import entriesKeys from './types';

const selectJournalsSlice = (state) => state.journals;

export const selectJournals = (state) => state.journals[entriesKeys.JOURNAL_ENTRIES];

export const selectJournal = (state) => state.journals[entriesKeys.JOURNAL_ENTRY];

export const selectComments = createSelector(
  [selectJournalsSlice, selectJournals],
  (journalsSlice, journalEntries) => ({
    comments: journalsSlice[entriesKeys.COMMENTS],
    loading: journalEntries.loading,
  }),
);
