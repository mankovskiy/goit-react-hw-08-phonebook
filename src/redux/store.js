import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    auth: authReducer,
  },
});
