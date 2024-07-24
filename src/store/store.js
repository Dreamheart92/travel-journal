import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import homeReducer from './home';
import destinationsReducer from './destinations';
import catalogueReducer from './catalogue';
import detailsReducer from './details';
import journalEditorReducer from './journalEditor';

const store = configureStore({
  reducer: {
    user: userSlice,
    home: homeReducer,
    destinations: destinationsReducer,
    catalogue: catalogueReducer,
    details: detailsReducer,
    journalEditor: journalEditorReducer,
  },
});

export default store;
