import { createAsyncThunk } from '@reduxjs/toolkit';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';

export const fetchLatestJournals = createAsyncThunk(
  'home/fetchLatestJournals',
  async (args, { signal }) => {
    return sendHttpRequest(`${API.JOURNAL.JOURNALS}?limit=3`);
  },
);
