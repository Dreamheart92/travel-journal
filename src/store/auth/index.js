import { createSlice } from '@reduxjs/toolkit';
import { storeUser, clearUser } from './reducers';
import { getInitialAuthState } from '../../helpers/getInitialAuthState';

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
