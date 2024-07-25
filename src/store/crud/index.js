import { createSlice } from '@reduxjs/toolkit';
import crudConstants from '../../constants/crudConstants';

const INITIAL_KEY_STATE = {
  data: null,
  loading: false,
  success: false,
  error: null,
  currentAction: null,
};

const initialState = {
  [crudConstants.LIST]: INITIAL_KEY_STATE,
  [crudConstants.CURRENT]: INITIAL_KEY_STATE,
  [crudConstants.CREATE]: INITIAL_KEY_STATE,
  [crudConstants.READ]: INITIAL_KEY_STATE,
  [crudConstants.UPDATE]: INITIAL_KEY_STATE,
  [crudConstants.DELETE]: INITIAL_KEY_STATE,
};

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    resetState(state, action) {
      const { key } = action.payload;
      state[key] = INITIAL_KEY_STATE;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.startsWith('crud/thunk/'),
      (state, action) => {
        const { requestStatus } = action.meta;
        const { key, currentAction } = action.meta.arg;

        if (!currentAction) {
          throw new Error('Current action is missing');
        }

        switch (requestStatus) {
          case 'pending': {
            state[key].loading = true;
            state[key].data = null;
            state[key].error = null;
            state[key].success = false;
            state[key].currentAction = currentAction;
            break;
          }

          case 'fulfilled': {
            state[key].data = action.payload;
            state[key].loading = false;
            state[key].success = true;
            break;
          }

          case 'rejected': {
            state[key].loading = false;
            state[key].error = { error: true, message: action.error.message };
            break;
          }

          default:
        }
      },
    );
  },
});

export const crudActions = crudSlice.actions;
export default crudSlice.reducer;
