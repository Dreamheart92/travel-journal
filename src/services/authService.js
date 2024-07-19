import sendHttpRequest from './sendHttpRequest';
import API from '../constants/api';

const login = (loginData) => {
  const settings = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  };

  return sendHttpRequest(API.AUTH.LOGIN, settings);
};

const signup = (signupData) => {
  const settings = {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
  };

  return sendHttpRequest(API.AUTH.SIGNUP, settings);
};

export default {
  signup,
  login,
};
