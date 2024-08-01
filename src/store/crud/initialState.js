import { CRUD_STATE_KEYS } from '../../constants/redux';

export const INITIAL_KEY_STATE = {
  data: null,
  loading: false,
  success: false,
  error: null,
};

const initialState = {
  [CRUD_STATE_KEYS.CREATE]: INITIAL_KEY_STATE,
  [CRUD_STATE_KEYS.READ]: INITIAL_KEY_STATE,
  [CRUD_STATE_KEYS.UPDATE]: INITIAL_KEY_STATE,
  [CRUD_STATE_KEYS.DELETE]: INITIAL_KEY_STATE,
};

export default initialState;
