import { createSlice } from '@reduxjs/toolkit';

const filterContact = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterContact.actions;

export const filtersReducer = filterContact.reducer;

export const getFilter = state => state.filter;