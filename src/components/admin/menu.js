import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Menu extends Component {
  render() {
    return (
      <div className="sub-menu">
        <Link to="/admin">Organizations</Link> | <Link to="/admin/users">Users</Link> | <Link to="/admin/permissions">Permissions</Link>
      </div>
    )
  }
}
