import { createSlice } from '@reduxjs/toolkit';
import { storeUser, clearUser } from './reducers';
import { getInitialAuthState } from '../../helpers/helpers';

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialAuthState,
  reducers: {
    storeUser,
    clearUser,
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
