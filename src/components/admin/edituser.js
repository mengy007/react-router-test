import React, { Component } from 'react'

export default class User extends Component {
  render() {

    const i = this.props.users.findIndex((user) => user.id == this.props.params.userId)
    const user = this.props.users[i]

    return (
      <div className="content">
        Name: { user.firstName } { user.lastName }<br />
        Email: { user.email }<br />
      </div>
    )
  }
}
