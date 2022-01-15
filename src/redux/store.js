import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../redux/filter/filter-reducer'
import contactsReducer from '../redux/contacts/contacs-reducer'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
