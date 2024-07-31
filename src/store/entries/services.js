import { createAsyncThunk } from '@reduxjs/toolkit';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';
import { getAccessTokenAndIdFromLocalStorage } from '../../helpers/storage';

export const fetchEntries = createAsyncThunk(
  'entries/fetchEntries',
  async (arg, { signal }) => {
    const { query = '', destination = null } = arg || {};

    const url = `${API.JOURNAL.JOURNALS}/${destination || ''}${query}`;
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

    const { id: userId } = getAccessTokenAndIdFromLocalStorage();
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
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

    const settings = {
      method: 'Get',
      headers: {
        Authorization: accessToken,
      },
      signal,
    };

    const result = await sendHttpRequest(`${API.JOURNAL.USER_JOURNALS}/${userId}`, settings);

    return {
      journals: result.data,
      totalPages: 1,
    };
  },
);
