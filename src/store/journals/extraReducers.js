import { buildErrorObject } from '../../utils/errorUtils';
import { JOURNALS_STATE_KEYS } from '../../constants/redux';

const extraReducers = (builder) => {
  builder.addMatcher(
    (action) => action.type.startsWith('journals/fetchJournals'),
    (state, action) => {
      const { requestStatus } = action.meta;
      const { key } = action.meta.arg;

      switch (requestStatus) {
        case 'pending': {
          state[key].loading = true;
          state[key].success = false;
          state[key].error = null;
          break;
        }
        case 'fulfilled': {
          if (key === JOURNALS_STATE_KEYS.JOURNAL) {
            state[key].results = action.payload.journal;
            state[JOURNALS_STATE_KEYS.COMMENTS] = action.payload.comments;
          } else {
            state[key].results = action.payload;
          }

          state[key].loading = false;
          state[key].success = true;
          break;
        }
        case 'rejected': {
          if (action.error.message !== 'Aborted') {
            state[key].error = buildErrorObject('Failed to fetch journals. Please try again.');
            state[key].loading = false;
          }
          break;
        }
        default:
      }
    },
  );
};

export default extraReducers;
