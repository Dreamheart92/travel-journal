import { createSlice } from '@reduxjs/toolkit';
import { fetchLatestJournals } from './thunks';

// TODO : Handle reject cases

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
  extraReducers: (builder) => {
    builder.addCase(fetchLatestJournals.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLatestJournals.fulfilled, (state, action) => {
      state.latestJournals = action.payload.data.journals;
      state.loading = false;
    });
    builder.addCase(fetchLatestJournals.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const homeActions = homeSlice.actions;
export default homeSlice.reducer;
