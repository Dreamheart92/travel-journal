import { configureStore } from '@reduxjs/toolkit';
import destinationsReducer from './destinations';
import crudReducer from './crud';
import authReducer from './auth';
import searchReducer from './search';
import optimisticReducer from './optimistic';
import journalsReducer from './journals';

const store = configureStore({
  reducer: {
    auth: authReducer,
    destinations: destinationsReducer,
    crud: crudReducer,
    journals: journalsReducer,
    search: searchReducer,
    optimistic: optimisticReducer,
  },
});

export default store;
