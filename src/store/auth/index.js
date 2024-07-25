import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUser(state, action) {
      state.user = action.payload.userData;
      state.isAuthenticated = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
