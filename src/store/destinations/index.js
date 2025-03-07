import { createSlice } from '@reduxjs/toolkit';
import { fetchDestinations } from './services';
import { updateDestinationCount, updateDestinationCountOnJournalEdit } from './reducers';

const initialState = {
  destinations: [],
  loading: false,
  error: null,
  success: false,
};

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    updateDestinationCount,
    updateDestinationCountOnJournalEdit,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDestinations.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchDestinations.fulfilled, (state, action) => {
      state.destinations = action.payload.data;
      state.loading = false;
      state.success = true;
    });
    builder.addCase(fetchDestinations.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const destinationsActions = destinationsSlice.actions;
export default destinationsSlice.reducer;
