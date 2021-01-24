import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { operations, actions } from 'redux/contacts';

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [operations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [operations.fetchContacts.pending]: () => true,
  [operations.fetchContacts.fulfilled]: () => false,
  [operations.fetchContacts.rejected]: () => false,
  [operations.addContact.pending]: () => true,
  [operations.addContact.fulfilled]: () => false,
  [operations.addContact.rejected]: () => false,
  [operations.deleteContact.pending]: () => true,
  [operations.deleteContact.fulfilled]: () => false,
  [operations.deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [operations.fetchContacts.rejected]: (_, { payload }) => payload,
  [operations.fetchContacts.pending]: () => null,
  [operations.addContact.rejected]: (_, { payload }) => payload,
  [operations.addContact.pending]: () => null,
  [operations.deleteContact.rejected]: (_, { payload }) => payload,
  [operations.deleteContact.pending]: () => null,
});

export default combineReducers({ items, filter, loading, error });
