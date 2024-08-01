import crudKeys from './types';

export const INITIAL_KEY_STATE = {
  data: null,
  loading: false,
  success: false,
  error: null,
};

const initialState = {
  [crudKeys.CREATE]: INITIAL_KEY_STATE,
  [crudKeys.READ]: INITIAL_KEY_STATE,
  [crudKeys.UPDATE]: INITIAL_KEY_STATE,
  [crudKeys.DELETE]: INITIAL_KEY_STATE,
};

export default initialState;
