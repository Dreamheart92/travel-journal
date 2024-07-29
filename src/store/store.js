import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './destinations';
import crudReducer from './crud';
import entriesReducer from './entries';
import authReducer from './auth';
import searchReducer from './search';
import optimisticReducer from './optimistic';

const store = configureStore({
  reducer: {
    auth: authReducer,
    destinations: destinationsReducer,
    crud: crudReducer,
    entries: entriesReducer,
    search: searchReducer,
    optimistic: optimisticReducer,
  },
});

export default store;
