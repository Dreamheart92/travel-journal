import API from '../constants/api';
import { getAccessTokenAndId } from '../helpers/storage';
import sendHttpRequest from './sendHttpRequest';

const createComment = (commentData, journalId) => {
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
};

export default {
  createComment,
};
