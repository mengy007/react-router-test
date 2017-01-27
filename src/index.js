// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import { Provider } from 'react-redux'

// Components
import App from './components/app'
import Main from './Main'
import Dashboard from './components/dashboard'
import Login from './components/login'
import Logout from './components/logout'
import Admin from './components/admin'
import AdminOrganizations from './components/admin/organizations'
import AdminEditOrg from './components/admin/editorg'
import AdminUsers from './components/admin/users'
import AdminEditUser from './components/admin/edituser'
import AdminPermissions from './components/admin/permissions'
import Contacts from './components/contacts'
import store, { history } from './store'

// CSS
import './index.css'

const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Dashboard } />
        <Route path="/login" component={ Login } />
        <Route path="/logout" component={ Logout } />
        <Route path="/admin" component={ Admin }>
          <IndexRoute component={ AdminOrganizations } />
          <Route path="/admin/organizations/:orgId" component={ AdminEditOrg } />
          <Route path="/admin/users" component={ AdminUsers } />
          <Route path="/admin/users/:userId" component={ AdminEditUser } />
          <Route path="/admin/permissions" component={ AdminPermissions } />
        </Route>
        <Route path="/contacts" component={ Contacts } />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
