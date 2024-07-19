import sendHttpRequest from './sendHttpRequest';
import API from '../constants/api';

const getJournals = (destination) => sendHttpRequest(`${API.JOURNAL.JOURNALS}/${destination || ''}`);
const getDestinations = () => sendHttpRequest(API.JOURNAL.DESTINATIONS);

export default {
  getJournals,
  getDestinations,
};
