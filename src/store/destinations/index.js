import { createSlice } from '@reduxjs/toolkit';
import { fetchDestinations } from './thunks';

const initialState = {
  destinations: [],
  loading: false,
  error: null,
  success: false,
};
const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {},
});
export default destinationsSlice.reducer;
