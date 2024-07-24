import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAccessTokenAndId } from '../../helpers/storage';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';

export const postJournal = createAsyncThunk(
  'journalEditor/postJournal',
  async (journalData, { signal }) => {
    const { accessToken } = getAccessTokenAndId();

    const settings = {
      method: 'Post',
      headers: {
        Authorization: accessToken,
      },
      body: journalData,
    };

    return sendHttpRequest(API.JOURNAL.JOURNAL, settings);
  },
);

export const deleteJournal = createAsyncThunk(
  'journalEditor/deleteJournal',
  async (journalId, { signal }) => {
    const { accessToken } = getAccessTokenAndId();

    const settings = {
      method: 'Delete',
      headers: {
        Authorization: accessToken,
      },
    };

    try {
      await sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`, settings);
      return { success: true };
    } catch (error) {
      throw error;
    }
  },
);
