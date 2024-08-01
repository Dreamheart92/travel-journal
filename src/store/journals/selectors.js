import { createSelector } from '@reduxjs/toolkit';
import entriesKeys from './types';

const selectEntriesSlice = (state) => state.journals;

export const selectJournalsEntries = (state) => state.journals[entriesKeys.JOURNAL_ENTRIES];

export const selectJournalEntry = (state) => state.journals[entriesKeys.JOURNAL_ENTRY];

export const selectComments = createSelector(
  [selectEntriesSlice, selectJournalsEntries],
  (journalsSlice, journalEntries) => ({
    comments: journalsSlice[entriesKeys.COMMENTS],
    loading: journalEntries.loading,
  }),
);
