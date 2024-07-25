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

    const result = await sendHttpRequest(API.JOURNAL.JOURNAL, settings);

    return result.data;
  },
);

export const updateJournalRequest = createAsyncThunk(
  'crud/thunk/updateJournalRequest',
  async (arg, { signal }) => {
    const { accessToken } = getAccessTokenAndId();
    const { journalData, journalId } = arg.journalMetaData;

    const settings = {
      method: 'Put',
      headers: {
        Authorization: accessToken,
      },
      body: journalData,
    };

    const result = await sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`, settings);
    return result.data;
  },
);

export const postCommentRequest = createAsyncThunk(
  'crud/thunk/postCommentRequest',
  async (arg, { dispatch, signal }) => {
    const { commentData, journalId } = arg.commentMetaData;

    const { accessToken } = getAccessTokenAndId();

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
  'crud/thunk/DeleteCommentRequest',
  async (arg, { dispatch, signal }) => {
    const { commentId } = arg;
    const { accessToken } = getAccessTokenAndId();

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

export const postCommentReactionRequest = createAsyncThunk(
  'crud/thunk/postCommentReactionRequest',
  async (arg, { dispatch, signal }) => {
    const { accessToken } = getAccessTokenAndId();

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
      requestMethod,
      headers: {
        Authorization: accessToken,
      },
    };

    return sendHttpRequest(`${API.COMMENTS.COMMENTS}/${path}/${commentId}`, settings);
  },
);

export const deleteJournalRequest = createAsyncThunk(
  'crud/thunk/deleteJournalRequest',
  async (arg, { signal }) => {
    const { journalId } = arg;
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

export const updateProfileRequest = createAsyncThunk(
  'crud/thunk/updateProfileRequest',
  async (arg, { signal }) => {
    const { userData } = arg;
    const { accessToken } = getAccessTokenAndId();

    const settings = {
      method: 'Put',
      headers: {
        Authorization: accessToken,
      },
      body: userData,
    };

    const result = await sendHttpRequest(API.AUTH.UPDATE_PROFILE, settings);
    return result.data;
  },
);

export const sendLoginRequest = createAsyncThunk(
  'crud/thunk/sendLoginRequest',
  async (arg, { signal }) => {
    const { loginData } = arg;

    const settings = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    };

    const result = await sendHttpRequest(API.AUTH.LOGIN, settings);
    return result.data;
  },
);

export const sendSignupRequest = createAsyncThunk(
  'crud/thunk/sendSignupRequest',
  async (arg, { signal }) => {
    const { signupData } = arg;

    const settings = {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    };

    const result = await sendHttpRequest(API.AUTH.SIGNUP, settings);
    return result.data;
  },
);
