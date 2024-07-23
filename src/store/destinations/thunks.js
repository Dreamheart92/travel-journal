import { createAsyncThunk } from '@reduxjs/toolkit';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';

export const fetchDestinations = createAsyncThunk(
  'destinations/fetchDestinations',
  async () => sendHttpRequest(API.JOURNAL.DESTINATIONS),
);
