import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAccessTokenAndId } from '../../helpers/storage';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';
import { entriesActions } from '../entries';

export const postJournalRequest = createAsyncThunk(
  'crud/thunk/postJournalRequest',
  async (arg, { signal }) => {
    const { journalData } = arg;
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
