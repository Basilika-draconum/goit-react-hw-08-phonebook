import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactThunk,
  getContactsThunk,
  postContactThunk,
} from './contacts-thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact.id !== payload);
      })
      .addCase(deleteContactThunk.rejected, handleRejected)
      .addCase(postContactThunk.pending, handlePending)
      .addCase(postContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
        // state.items = [...state.items, ...payload];
        // return { ...state, newContact: payload };
      })
      .addCase(postContactThunk.rejected, handleRejected);
  },

  // reducers: {
  //   addContactAction(state, { payload }) {
  //     state.items = [...state.items, payload];
  //   },
  //   deleteContactAction(state, { payload }) {
  //     state.items = state.items.filter(item => item.id !== payload);
  //   },
  // },
});

export const { addContactAction, deleteContactAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
