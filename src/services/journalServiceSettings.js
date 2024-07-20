import API from '../constants/api';

const getJournalsSettings = (destination) => ({
  url: `${API.JOURNAL.JOURNALS}/${destination || ''}`,
});

const getDestinationsSettings = () => ({
  url: API.JOURNAL.DESTINATIONS,
});

export default {
  getJournalsSettings,
  getDestinationsSettings,
};
