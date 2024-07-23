import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalogue } from './thunks';
// TODO : Handle reject cases

const initialState = {
  catalogue: [],
  totalPages: null,
  loading: false,
};

const catalogueSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalogue.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCatalogue.fulfilled, (state, action) => {
      state.catalogue = action.payload.data.journals;
      state.totalPages = action.payload.data.totalPages;
      state.loading = false;
    });
    builder.addCase(fetchCatalogue.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const catalogueActions = catalogueSlice.actions;
export default catalogueSlice.reducer;
