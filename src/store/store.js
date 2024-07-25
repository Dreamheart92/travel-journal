import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './destinations';
import crudReducer from './crud';
import entriesReducer from './entries';
import authReducer from './auth';

const store = configureStore({
  reducer: {
    auth: authReducer,
    destinations: destinationsReducer,
    crud: crudReducer,
    entries: entriesReducer,
  },
});

export default store;
