import optimisticKeys from './types';

const INITIAL_KEY_STATE = {
  data: null,
  error: null,
  success: false,
};

const initialState = {
  [optimisticKeys.POST_COMMENT]: INITIAL_KEY_STATE,
  [optimisticKeys.DELETE_COMMENT]: INITIAL_KEY_STATE,
  [optimisticKeys.POST_COMMENT_REACTION]: INITIAL_KEY_STATE,
};

export { INITIAL_KEY_STATE, initialState };
