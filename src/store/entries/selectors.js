import { createSelector } from '@reduxjs/toolkit';
import entriesConstants from '../../constants/entriesConstants';

const selectEntriesSlice = (state) => state.entries;

export const selectJournalsEntries = (state) => state.entries[entriesConstants.JOURNAL_ENTRIES];

export const selectJournalEntry = (state) => state.entries[entriesConstants.JOURNAL_ENTRY];

export const selectComments = createSelector(
  [selectEntriesSlice, selectJournalEntry],
  (entriesSlice, journalEntry) => ({
    comments: entriesSlice[entriesConstants.COMMENTS],
    loading: journalEntry.loading,
  }),
);
