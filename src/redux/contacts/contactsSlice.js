import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  setFilterValue,
} from './operations';

import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

const contactInitialState = {
  contacts: { items: [], isLoading: false, error: null },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      if (
        state.contacts.items.some(cont => cont.name === action.payload.name)
      ) {
        toast({
          title: 'Contact alredy exist',
          position: 'top-right',
          status: 'warning',
          isClosable: true,
        });

        return;
      } else {
        toast({
          title: `${action.payload.name}, add to contacts`,
          position: 'top-right',
          status: 'success',
          isClosable: true,
        });
      }
      state.contacts.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
      toast({
        title: `Сontact ${action.payload.name} has been deleted `,
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [setFilterValue.pending](state) {
      state.contacts.isLoading = true;
    },
    [setFilterValue.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.filter = action.payload;
    },
    [setFilterValue.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
