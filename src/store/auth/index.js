import { createSlice } from '@reduxjs/toolkit';
import { storeUser, clearUser } from './reducers';
import { getInitialAuthState } from '../../helpers/getInitialAuthState';

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialAuthState,
  reducers: {
    storeUser(state, action) {
      state.user = action.payload.userData;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
