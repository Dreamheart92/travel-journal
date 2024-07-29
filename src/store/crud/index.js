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
import { resetState } from './reducers';

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    resetState,
  },
  extraReducers,
});

export const crudActions = crudSlice.actions;
export default crudSlice.reducer;
