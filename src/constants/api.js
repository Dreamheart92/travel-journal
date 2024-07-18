const BASE_URL = 'https://travel-journal-api.vercel.app/api/v1';

const AUTH = `${BASE_URL}/auth`;
const JOURNAL = `${BASE_URL}/journal`;
const JOURNALS = `${BASE_URL}/journals`;
const COMMENTS = `${BASE_URL}/comments`;

const API = {
  AUTH: {
    LOGIN: `${AUTH}/login`,
    SIGNUP: `${AUTH}/signup`,
    UPDATE_PROFILE: AUTH,
  },
  JOURNAL: {
    JOURNAL,
    JOURNALS,
    DESTINATIONS: `${BASE_URL}/destinations`,
  },
  COMMENTS: {
    COMMENTS,
    LIKE: `${COMMENTS}/like`,
    DISLIKE: `${COMMENTS}/dislike`,
  },
};

export default API;
