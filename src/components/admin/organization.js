import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Organization extends Component {
  render() {

    const org = this.props.org

    return (
      <div className="content">
        <Link to={ `/admin/organizations/${ org.id }` }>{ org.id } : { org.name }</Link>
      </div>
    )
  }
}
