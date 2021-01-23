import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { actions } from 'redux/contacts';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactRequest]: (state, { payload }) => [...state, payload],
  [actions.deleteContactRequest]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.fetchContactsRequest]: () => null,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.addContactRequest]: () => null,
  [actions.deleteContactError]: (_, { payload }) => payload,
  [actions.deleteContactRequest]: () => null,
});

export default combineReducers({ items, filter, loading, error });
