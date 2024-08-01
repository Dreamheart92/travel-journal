import entriesKeys from './types';

const INITIAL_KEY_STATE = {
  results: null,
  loading: false,
  success: false,
  error: null,
};

const initialState = {
  [entriesKeys.JOURNAL_ENTRY]: {
    result: null,
    loading: false,
    success: false,
    error: null,
  },
  [entriesKeys.JOURNAL_ENTRIES]: INITIAL_KEY_STATE,
  [entriesKeys.COMMENTS]: {
    results: null,
  },
};

export { INITIAL_KEY_STATE, initialState };
