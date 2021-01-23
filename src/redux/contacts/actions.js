// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

// const addContact = createAction('contacts/add', ({ name, number }) => ({
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// }));

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// export const deleteContact = createAction('contacts/delete', contactId => ({
//   payload: contactId,
// }));

export const changeFilter = createAction('contacts/filter', value => ({
  payload: value,
}));

// const actions = {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContact,
//   changeFilter,
// };

// export default actions;
