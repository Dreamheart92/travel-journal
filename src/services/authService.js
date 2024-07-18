import sendHttpRequest from './sendHttpRequest';
import API from '../constants/api';

export const login = (loginData) => {
  const settings = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  };

  return sendHttpRequest(API.AUTH.LOGIN, settings);
};
