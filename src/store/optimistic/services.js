import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAccessTokenAndIdFromLocalStorage } from '../../utils/storage';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';

export const postCommentReactionRequest = createAsyncThunk(
  'optimistic',
  async (arg, { dispatch, signal }) => {
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

    const {
      reactionType,
      isReacted,
      commentId,
      userId,
    } = arg.reactionMetaData;

    const path = reactionType === 'likes' ? 'like' : 'dislike';
    const requestMethod = isReacted ? 'Delete' : 'Get';

    const settings = {
      method: requestMethod,
      headers: {
        Authorization: accessToken,
      },
    };

    const result = await sendHttpRequest(`${API.COMMENTS.COMMENTS}/${path}/${commentId}`, settings);
    return result.data;
  },
);

export const postCommentRequest = createAsyncThunk(
  'optimistic',
  async (arg, { dispatch, signal }) => {
    const { commentData, journalId } = arg.commentMetaData;

    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

    const settings = {
      method: 'Post',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    };

    const result = await sendHttpRequest(`${API.COMMENTS.COMMENTS}/${journalId}`, settings);
    return result.data;
  },
);

export const deleteCommentRequest = createAsyncThunk(
  'optimistic',
  async (arg, { dispatch, signal }) => {
    const { commentId, journalId } = arg;
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

    const settings = {
      method: 'Delete',
      headers: {
        Authorization: accessToken,
      },
    };

    try {
      await sendHttpRequest(`${API.COMMENTS.COMMENTS}/${journalId}/${commentId}`, settings);
      return { success: true };
    } catch (error) {
      throw error;
    }
  },
);
