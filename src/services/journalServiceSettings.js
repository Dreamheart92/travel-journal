import API from '../constants/api';

const getJournalsSettings = (destination, search) => {
  let query = '?';

  if (search) {
    query += `search=${search}`;
  }

  return {
    url: `${API.JOURNAL.JOURNALS}/${destination || ''}${query}`,
  };
};

const getJournalByIdSettings = (journalId) => ({ url: `${API.JOURNAL.JOURNAL}/${journalId}` });

const getDestinationsSettings = () => ({
  url: API.JOURNAL.DESTINATIONS,
});

export default {
  getJournalsSettings,
  getJournalByIdSettings,
  getDestinationsSettings,
};
