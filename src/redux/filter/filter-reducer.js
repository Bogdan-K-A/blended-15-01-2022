import { contactsFilter } from '../filter/filter-actions'
import { createReducer } from '@reduxjs/toolkit'

const filter = ''

const filterReducer = createReducer(filter, {
  [contactsFilter]: (state, { payload }) => (state = payload),
})

export default filterReducer
