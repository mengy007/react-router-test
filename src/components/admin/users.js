import React, { Component } from 'react'
import User from './user'

export default class Users extends Component {
  render() {
    return (
      <div className="content">
        { this.props.users.map((user, i) => <User { ...this.props } key={ i } id={ i } user={ user } />) }
      </div>
    )
  }
}
