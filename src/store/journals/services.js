import { createAsyncThunk } from '@reduxjs/toolkit';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';
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
  'journals/fetchJournals',
  async (arg, { dispatch, signal }) => {
    const { journalId } = arg;

    const result = await sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`, { signal });

    const userId = resolveUserId();
    result.data.isJournalOwner = result.data.author._id === userId;

    if (!result.data.views.userIds.includes(userId)) {
      dispatch(registerJournalViewService({ userId, journalId }));
    }

    return {
      journal: result.data,
      comments: result.data.comments,
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

export const fetchLatestAndMostLikedJournals = createAsyncThunk(
  'journals/fetchJournals',
  async (arg, { signal }) => {
    const latestJournals = sendHttpRequest(`${API.JOURNAL.JOURNALS}?sortBy=newest&limit=3`, { signal });
    const mostLikedJournals = sendHttpRequest(`${API.JOURNAL.JOURNALS}?sortBy=mostLiked&limit=3`, { signal });

    const result = await Promise.all([latestJournals, mostLikedJournals]);

    return {
      latestJournals: result[0].data.journals,
      mostLikedJournals: result[1].data.journals,
    };
  },
);
