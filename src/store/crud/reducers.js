import { INITIAL_KEY_STATE } from './initialState';

const resetState = (state, action) => {
  const { key } = action.payload;
  state[key] = INITIAL_KEY_STATE;
};

export { resetState };
