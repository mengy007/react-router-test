import React, { Component } from 'react'
import { Link } from 'react-router'

export default class User extends Component {
  render() {

    const user = this.props.user

    return (
      <div className="content">
        <Link to={ `/admin/users/${ user.id }` }>{ user.id } : { user.firstName } { user.lastName }</Link>
      </div>
    )
  }
}
