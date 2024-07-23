import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  latestJournals: null,
  loading: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
  },
});
export const homeActions = homeSlice.actions;
export default homeSlice.reducer;
