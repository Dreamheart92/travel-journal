import { OPTIMISTIC_STATE_KEYS } from '../../constants/redux';

const INITIAL_KEY_STATE = {
  data: null,
  error: null,
  success: false,
};

const initialState = {
  [OPTIMISTIC_STATE_KEYS.POST_COMMENT]: INITIAL_KEY_STATE,
  [OPTIMISTIC_STATE_KEYS.DELETE_COMMENT]: INITIAL_KEY_STATE,
  [OPTIMISTIC_STATE_KEYS.POST_COMMENT_REACTION]: INITIAL_KEY_STATE,
};

export { INITIAL_KEY_STATE, initialState };
