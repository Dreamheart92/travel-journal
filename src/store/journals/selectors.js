import { JOURNALS_STATE_KEYS } from '../../constants/redux';

const selectJournalsSlice = (state) => state.journals;

export const selectJournal = (state) => state.journals[JOURNALS_STATE_KEYS.JOURNAL];

export const selectComments = (state) => state.journals[JOURNALS_STATE_KEYS.COMMENTS];

export const selectHomeJournals = (state) => state.journals[JOURNALS_STATE_KEYS.HOME];

export const selectCatalogue = (state) => state.journals[JOURNALS_STATE_KEYS.CATALOGUE];

export const selectUserJournals = (state) => state.journals[JOURNALS_STATE_KEYS.USER_JOURNALS];
