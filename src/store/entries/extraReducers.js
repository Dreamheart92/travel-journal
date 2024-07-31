import { fetchEntry } from './services';
import entriesKeys from './types';
import { buildErrorObject } from '../../helpers';

const extraReducers = (builder) => {
  builder.addCase(fetchEntry.pending, (state) => {
    state[entriesKeys.JOURNAL_ENTRY].loading = true;
    state[entriesKeys.JOURNAL_ENTRY].success = false;
    state[entriesKeys.JOURNAL_ENTRY].error = null;
  });
  builder.addCase(fetchEntry.fulfilled, (state, action) => {
    state[entriesKeys.JOURNAL_ENTRY].result = action.payload.result;
    state[entriesKeys.JOURNAL_ENTRY].result.isJournalOwner = action.payload.isJournalOwner;
    state[entriesKeys.COMMENTS].results = action.payload.comments;

    state[entriesKeys.JOURNAL_ENTRY].loading = false;
    state[entriesKeys.JOURNAL_ENTRY].success = true;
  });
  builder.addCase(fetchEntry.rejected, (state, action) => {
    if (action.error.message !== 'Aborted') {
      state[entriesKeys.JOURNAL_ENTRY].loading = false;
      state[entriesKeys.JOURNAL_ENTRY].error = action.error;
    }
  });
  builder.addMatcher(
    (action) => action.type.startsWith('entries/fetchEntries'),
    (state, action) => {
      const { requestStatus } = action.meta;

      switch (requestStatus) {
        case 'pending': {
          state[entriesKeys.JOURNAL_ENTRIES].loading = true;
          state[entriesKeys.JOURNAL_ENTRIES].success = false;
          state[entriesKeys.JOURNAL_ENTRIES].error = null;
          break;
        }
        case 'fulfilled': {
          state[entriesKeys.JOURNAL_ENTRIES].results = {
            journals: action.payload.journals,
            totalPages: action.payload.totalPages,
          };

          state[entriesKeys.JOURNAL_ENTRIES].loading = false;
          state[entriesKeys.JOURNAL_ENTRIES].success = true;
          break;
        }
        case 'rejected': {
          if (action.error.message !== 'Aborted') {
            state[entriesKeys.JOURNAL_ENTRIES].error = buildErrorObject('Failed to fetch journals. Please try again.');
            state[entriesKeys.JOURNAL_ENTRIES].loading = false;
          }
          break;
        }
        default:
      }
    },
  );
};

export default extraReducers;
