import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import destinationsReducer from './destinations';
import crudReducer from './crud';
import entriesReducer from './entries';

const store = configureStore({
  reducer: {
    user: userSlice,
    destinations: destinationsReducer,
    crud: crudReducer,
    entries: entriesReducer,
  },
});

export default store;
