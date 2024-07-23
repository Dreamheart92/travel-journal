import { createAsyncThunk } from '@reduxjs/toolkit';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';
import { getAccessTokenAndId } from '../../helpers/storage';

export const fetchJournalById = createAsyncThunk(
  'details/fetchJournalById',
  async (journalId, { signal }) => {
    return sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`);
  },
);

export const postComment = createAsyncThunk(
  'details/postComment',
  async (commentMetaData, { signal }) => {
    const { commentData, journalId } = commentMetaData;

    const { accessToken } = getAccessTokenAndId();

    const settings = {
      method: 'Post',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    };

    return sendHttpRequest(`${API.COMMENTS.COMMENTS}/${journalId}`, settings);
  },
);

export const postCommentReaction = createAsyncThunk(
  'details/postCommentReaction',
  async (reactionMetaData, { signal }) => {
    const { accessToken } = getAccessTokenAndId();

    const { path, requestMethod, commentId } = reactionMetaData;

    const settings = {
      requestMethod,
      headers: {
        Authorization: accessToken,
      },
    };

    return sendHttpRequest(`${API.COMMENTS.COMMENTS}/${path}/${commentId}`, settings);
  },
);
