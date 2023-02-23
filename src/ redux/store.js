import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contact-slice';
import { filterReducer } from './filter/filter-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
