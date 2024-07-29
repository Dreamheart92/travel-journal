import crudKeys from './types';

export const INITIAL_KEY_STATE = {
  data: null,
  loading: false,
  success: false,
  error: null,
  currentAction: null,
};

const initialState = {
  [crudKeys.LIST]: INITIAL_KEY_STATE,
  [crudKeys.CURRENT]: INITIAL_KEY_STATE,
  [crudKeys.CREATE]: INITIAL_KEY_STATE,
  [crudKeys.READ]: INITIAL_KEY_STATE,
  [crudKeys.UPDATE]: INITIAL_KEY_STATE,
  [crudKeys.DELETE]: INITIAL_KEY_STATE,
};

export default initialState;
