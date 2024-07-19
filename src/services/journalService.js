import sendHttpRequest from './sendHttpRequest';
import API from '../constants/api';

const getJournals = () => sendHttpRequest(API.JOURNAL.JOURNALS);
const getDestinations = () => sendHttpRequest(API.JOURNAL.DESTINATIONS);

export default {
  getJournals,
  getDestinations,
};
