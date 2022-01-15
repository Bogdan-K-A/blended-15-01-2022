import { createReducer } from '@reduxjs/toolkit'
import {
  addContact,
  contactDelete,
  getContactFromLocaleStorage,
} from './contact-actions'

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const contactsReducer = createReducer(contacts, {
  [addContact]: (state, { payload }) => [...state, payload],
  [contactDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [getContactFromLocaleStorage]: (_, { payload }) => payload,
})

export default contactsReducer

// [keyName] : (state, action) => { }
