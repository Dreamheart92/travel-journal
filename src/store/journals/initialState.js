import { JOURNALS_STATE_KEYS } from '../../constants/redux';

const INITIAL_KEY_STATE = {
  results: null,
  loading: false,
  success: false,
  error: null,
};

const initialState = {
  [JOURNALS_STATE_KEYS.JOURNAL]: {
    result: null,
    loading: false,
    success: false,
    error: null,
  },
  [JOURNALS_STATE_KEYS.JOURNALS]: INITIAL_KEY_STATE,
  [JOURNALS_STATE_KEYS.COMMENTS]: {
    results: null,
  },
};

export { INITIAL_KEY_STATE, initialState };
