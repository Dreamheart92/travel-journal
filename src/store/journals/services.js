import { createAsyncThunk } from '@reduxjs/toolkit';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';
import { getAccessTokenAndIdFromLocalStorage } from '../../utils/storage';
import { resolveUserId } from '../../utils/authUtils';

export const fetchJournalsService = createAsyncThunk(
  'journals/fetchJournals',
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

export const fetchJournalService = createAsyncThunk(
  'journals/fetchJournal',
  async (arg, { dispatch, signal }) => {
    const { journalId } = arg;

    const result = await sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`, { signal });

    const userId = resolveUserId();
    const isJournalOwner = result.data.author._id === userId;

    if (!result.data.views.userIds.includes(userId)) {
      dispatch(registerJournalViewService({ userId, journalId }));
    }

    return {
      result: result.data,
      comments: result.data.comments,
      isJournalOwner,
    };
  },
);

export const fetchUserJournalsService = createAsyncThunk(
  'journals/fetchJournals',
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

export const registerJournalViewService = createAsyncThunk(
  'journals/registerJournalView',
  async (arg, { signal }) => {
    const { userId, journalId } = arg;

    const settings = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    };

    return sendHttpRequest(`${API.JOURNAL.REGISTER_JOURNAL_VIEW}/${journalId}`, settings);
  },
);
