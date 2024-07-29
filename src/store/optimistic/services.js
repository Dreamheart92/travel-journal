import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAccessTokenAndIdFromLocalStorage } from '../../helpers/storage';
import { entriesActions } from '../entries';
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

    dispatch(entriesActions.updateLocalCommentReaction({
      reactionType,
      isReacted,
      commentId,
      userId,
    }));

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

    dispatch(entriesActions.updateLocalCommentWithRealData(result));
    return result.data;
  },
);

export const deleteCommentRequest = createAsyncThunk(
  'optimistic',
  async (arg, { dispatch, signal }) => {
    const { commentId } = arg;
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

    const settings = {
      method: 'Delete',
      headers: {
        Authorization: accessToken,
      },
    };

    dispatch(entriesActions.deleteLocalComment({ commentId }));

    try {
      await sendHttpRequest(`${API.COMMENTS.COMMENTS}/${commentId}`, settings);
      return { success: true };
    } catch (error) {
      throw error;
    }
  },
);
