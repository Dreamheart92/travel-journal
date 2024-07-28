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
    const result = await sendHttpRequest(url, { signal });
    return {
      journals: result.data.journals,
      totalPages: result.data.totalPages,
    };
  },
);

export const fetchEntry = createAsyncThunk(
  'entries/fetchEntry',
  async (arg, { signal }) => {
    const { journalId } = arg;
    const result = await sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`, { signal });

    const { id: userId } = getAccessTokenAndId();
    const isJournalOwner = result.data.author._id === userId;

    return {
      result: result.data,
      comments: result.data.comments,
      isJournalOwner,
    };
  },
);

export const fetchUserEntries = createAsyncThunk(
  'entries/fetchEntries',
  async (arg, { signal }) => {
    const { userId } = arg;
    const { accessToken } = getAccessTokenAndId();

    const settings = {
      method: 'Get',
      headers: {
        Authorization: accessToken,
      },
    };

    const result = await sendHttpRequest(`${API.JOURNAL.USER_JOURNALS}/${userId}`, settings);

    return {
      journals: result.data,
      totalPages: 1,
    };
  },
);
