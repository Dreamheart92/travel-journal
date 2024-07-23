import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import homeReducer from './home';
import destinationsReducer from './destinations';
import catalogueReducer from './catalogue';
import detailsReducer from './details';

const store = configureStore({
  reducer: {
    user: userSlice,
    home: homeReducer,
    destinations: destinationsReducer,
    catalogue: catalogueReducer,
    details: detailsReducer,
  },
});

export default store;
