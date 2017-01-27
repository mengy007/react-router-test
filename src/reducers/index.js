import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import users from './users'
import organizations from './organizations'
import contacts from './contacts'

const rootReducer = combineReducers({
  users,
  organizations,
  contacts,
  routing: routerReducer
})

export default rootReducer
