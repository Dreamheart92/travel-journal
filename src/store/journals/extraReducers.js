import { fetchJournalService } from './services';
import { JOURNALS_STATE_KEYS } from '../../constants/redux';
import { buildErrorObject } from '../../helpers';

const extraReducers = (builder) => {
  builder.addCase(fetchJournalService.pending, (state) => {
    state[JOURNALS_STATE_KEYS.JOURNAL].loading = true;
    state[JOURNALS_STATE_KEYS.JOURNAL].success = false;
    state[JOURNALS_STATE_KEYS.JOURNAL].error = null;
  });
  builder.addCase(fetchJournalService.fulfilled, (state, action) => {
    state[JOURNALS_STATE_KEYS.JOURNAL].result = action.payload.result;
    state[JOURNALS_STATE_KEYS.JOURNAL].result.isJournalOwner = action.payload.isJournalOwner;
    state[JOURNALS_STATE_KEYS.COMMENTS].results = action.payload.comments;

    state[JOURNALS_STATE_KEYS.JOURNAL].loading = false;
    state[JOURNALS_STATE_KEYS.JOURNAL].success = true;
  });
  builder.addCase(fetchJournalService.rejected, (state, action) => {
    if (action.error.message !== 'Aborted') {
      state[JOURNALS_STATE_KEYS.JOURNAL].loading = false;
      state[JOURNALS_STATE_KEYS.JOURNAL].error = action.error;
    }
  });
  builder.addMatcher(
    (action) => action.type.startsWith('journals/fetchJournals'),
    (state, action) => {
      const { requestStatus } = action.meta;

      switch (requestStatus) {
        case 'pending': {
          state[JOURNALS_STATE_KEYS.JOURNALS].loading = true;
          state[JOURNALS_STATE_KEYS.JOURNALS].success = false;
          state[JOURNALS_STATE_KEYS.JOURNALS].error = null;
          break;
        }
        case 'fulfilled': {
          state[JOURNALS_STATE_KEYS.JOURNALS].results = {
            journals: action.payload.journals,
            totalPages: action.payload.totalPages,
          };

          state[JOURNALS_STATE_KEYS.JOURNALS].loading = false;
          state[JOURNALS_STATE_KEYS.JOURNALS].success = true;
          break;
        }
        case 'rejected': {
          if (action.error.message !== 'Aborted') {
            state[JOURNALS_STATE_KEYS.JOURNALS].error = buildErrorObject('Failed to fetch journals. Please try again.');
            state[JOURNALS_STATE_KEYS.JOURNALS].loading = false;
          }
          break;
        }
        default:
      }
    },
  );
};

export default extraReducers;
