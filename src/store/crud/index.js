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
  },
  extraReducers,
});

export const crudActions = crudSlice.actions;
export default crudSlice.reducer;
