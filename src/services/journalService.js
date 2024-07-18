import sendHttpRequest from './sendHttpRequest';
import API from '../constants/api';

export const getJournals = () => sendHttpRequest(API.JOURNAL.JOURNAL);
