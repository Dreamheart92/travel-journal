import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAccessTokenAndIdFromLocalStorage } from '../../utils/storage';
import sendHttpRequest from '../../services/sendHttpRequest';
import API from '../../constants/api';
import { destinationsActions } from '../destinations';

export const postJournalRequest = createAsyncThunk(
  'crud/thunk/postJournalRequest',
  async (arg, { dispatch, signal }) => {
    const { journalData } = arg;
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

    const settings = {
      method: 'Post',
      headers: {
        Authorization: accessToken,
      },
      body: journalData,
    };

    const result = await sendHttpRequest(API.JOURNAL.JOURNAL, settings);

    dispatch(destinationsActions.updateDestinationCount({ destinationId: result.data.destination, isAdding: true }));

    return result.data;
  },
);

export const updateJournalRequest = createAsyncThunk(
  'crud/thunk/updateJournalRequest',
  async (arg, { signal }) => {
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();
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

export const deleteJournalRequest = createAsyncThunk(
  'crud/thunk/deleteJournalRequest',
  async (arg, { dispatch, signal }) => {
    const { journalId, destinationId } = arg;
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

    const settings = {
      method: 'Delete',
      headers: {
        Authorization: accessToken,
      },
    };

    try {
      await sendHttpRequest(`${API.JOURNAL.JOURNAL}/${journalId}`, settings);
      dispatch(destinationsActions.updateDestinationCount({ destinationId, isAdding: false }));
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
    const { accessToken } = getAccessTokenAndIdFromLocalStorage();

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
