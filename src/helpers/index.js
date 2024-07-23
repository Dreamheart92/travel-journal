import moment from 'moment';
import API from '../constants/api';

export const normalizeName = (value) => value[0].toUpperCase() + value.slice(1);

export const formatDate = (date) => moment(new Date(date)).format('MMMM Do YYYY');

export const convertToRelativeTime = (date) => moment(new Date(date)).fromNow();

export const splitByNewLine = (content) => content.split('\n');

export const formatCommentsCount = (comments) => `${comments.length} comment${comments.length > 1 ? 's' : ''}`;

export const buildJournalUrlRequest = (queryParams) => {
  if (queryParams) {
    const { search, destination } = queryParams;

    let query = '?';

    if (search) {
      query += `search=${search}`;
    }

    return `${API.JOURNAL.JOURNALS}/${destination || ''}${query}`;
  }

  return API.JOURNAL.JOURNALS;
};
