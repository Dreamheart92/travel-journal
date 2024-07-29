import { createSelector } from '@reduxjs/toolkit';
import entriesKeys from './types';

const selectEntriesSlice = (state) => state.entries;

export const selectJournalsEntries = (state) => state.entries[entriesKeys.JOURNAL_ENTRIES];

export const selectJournalEntry = (state) => state.entries[entriesKeys.JOURNAL_ENTRY];

export const selectComments = createSelector(
  [selectEntriesSlice, selectJournalEntry],
  (entriesSlice, journalEntry) => ({
    comments: entriesSlice[entriesKeys.COMMENTS],
    loading: journalEntry.loading,
  }),
);
