import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// root reducer
import rootReducer from './reducers/index'

// dummy data
import users from './data/users'
import organizations from './data/organizations'
import contacts from './data/contacts'

// default state
const defaultState = {
  users,
  organizations,
  contacts
}

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
