import { combineReducers, configureStore } from '@reduxjs/toolkit';

import searchSlicer from './slicers/searchSlicer';

import { searchAPI } from '../utils/api/search-api';


const rootReducer = combineReducers({
  search: searchSlicer,
  [searchAPI.reducerPath]: searchAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchAPI.middleware),
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
