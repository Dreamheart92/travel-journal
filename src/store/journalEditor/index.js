import { createSlice } from '@reduxjs/toolkit';
import { deleteJournal, postJournal, updateJournal } from './thunks';

const initialState = {
  create: {
    data: null,
    loading: false,
    success: false,
    error: null,
  },
  delete: {
    loading: false,
    success: false,
    error: null,
  },
  update: {
    data: null,
    loading: false,
    success: false,
    error: null,
  },
};

const journalEditorSlice = createSlice({
  name: 'journalEditor',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postJournal.pending, (state) => {
      state.create.loading = true;
    });
    builder.addCase(postJournal.fulfilled, (state, action) => {
      state.create.data = action.payload.data;
      state.create.loading = false;
    });
    builder.addCase(postJournal.rejected, (state, action) => {
      state.create.loading = false;
    });
    builder.addCase(deleteJournal.pending, (state => {
      state.delete.loading = true;
      state.delete.success = false;
    }));
    builder.addCase(deleteJournal.fulfilled, (state, action) => {
      state.delete.loading = false;
      state.delete.success = true;
    });
    builder.addCase(deleteJournal.rejected, (state, action) => {
      state.delete.loading = false;
    });
    builder.addCase(updateJournal.pending, (state) => {
      state.update.loading = true;
      state.update.success = false;
    });
    builder.addCase(updateJournal.fulfilled, (state, action) => {
      state.update.data = action.payload.data;
      state.update.loading = false;
      state.update.success = true;
    });
    builder.addCase(updateJournal.rejected, (state, action) => {
      state.update.loading = false;
      state.update.error = true;
    });
  },
});

export const journalEditorActions = journalEditorSlice.actions;
export default journalEditorSlice.reducer;
