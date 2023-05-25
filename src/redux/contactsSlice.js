import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const addContact = createSlice(
  'contacts/addContact',
  (nameText, numberText) => {
    return {
      type: 'contacts/addContact',
      payload: {
        id: nanoid(),
        name: nameText,
        number: numberText,
      },
    };
  }
);

const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedReducer = persistReducer(
  persistConfig,
  addContact.reducer
);

export const delContact = createSlice ('contacts/deleteContact');
export const setFilter = createSlice ('filter/setFilter');

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: contactId,
//   };
// };

// export const setFilter = value => {
//   return {
//     type: 'filter/setFilter',
//     payload: value,
//   };
// };
