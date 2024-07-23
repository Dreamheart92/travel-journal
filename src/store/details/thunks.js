import { createAsyncThunk } from '@reduxjs/toolkit';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';

export const fetchJournalById = createAsyncThunk(
  'details/fetchJournalById',
  async (journalId, { signal }) => {
    return sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`);
  },
);
