import { createAsyncThunk } from '@reduxjs/toolkit';
import { buildJournalUrlRequest } from '../../helpers';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';
import { getAccessTokenAndId } from '../../helpers/storage';

export const fetchEntries = createAsyncThunk(
  'entries/fetchEntries',
  async (arg, { signal }) => {
    const query = arg?.query || '';
    const url = buildJournalUrlRequest(query);
    const result = await sendHttpRequest(url);
    return {
      journals: result.data.journals,
      totalPages: result.data.totalPages,
    };
  },
);

