import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link to="/">Dashboard</Link> | <Link to="/admin">Admin</Link> | <Link to="/contacts">Contacts</Link>
      </div>
    )
  }
}
