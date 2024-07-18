import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUser(state, action) {
      const { userData } = action.payload;
      state.user = userData;
    },
    deleteUser(state) {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
