import { JOURNALS_STATE_KEYS } from '../../constants/redux';

const INITIAL_KEY_STATE = {
  results: null,
  loading: false,
  success: false,
  error: null,
};

const initialState = {
  [JOURNALS_STATE_KEYS.JOURNAL]: INITIAL_KEY_STATE,
  [JOURNALS_STATE_KEYS.CATALOGUE]: INITIAL_KEY_STATE,
  [JOURNALS_STATE_KEYS.HOME]: INITIAL_KEY_STATE,
  [JOURNALS_STATE_KEYS.USER_JOURNALS]: INITIAL_KEY_STATE,
  [JOURNALS_STATE_KEYS.COMMENTS]: null,
};

export { INITIAL_KEY_STATE, initialState };
