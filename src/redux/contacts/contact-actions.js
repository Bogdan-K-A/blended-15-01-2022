import { createAction } from '@reduxjs/toolkit'
import { ADD, DELETE, GET } from '../../redux/types'
export const addContact = createAction(ADD)
export const contactDelete = createAction(DELETE)
export const getContactFromLocaleStorage = createAction(GET)
// ===========================================================
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id: shortid.generate(),
//   },
// })

// const contactDelete = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// })

// const contactsFilter = (value) => ({
//   type: types.FILTER,
//   payload: value,
// })

// export default { addContact, contactDelete, getContactFromLocaleStorage }
