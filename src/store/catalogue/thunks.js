import { createAsyncThunk } from '@reduxjs/toolkit';
import { buildJournalUrlRequest } from '../../helpers';
import sendHttpRequest from '../../services/sendHttpRequest';

export const fetchCatalogue = createAsyncThunk(
  'catalogue/fetchCatalogue',
  async (query, { signal }) => {
    const catalogueUrl = buildJournalUrlRequest(query);
    return sendHttpRequest(catalogueUrl);
  },
);
