import React, { Component } from 'react'
import { Link } from 'react-router'

export default class EditOrg extends Component {
  render() {

    const i = this.props.organizations.findIndex((org) => org.id == this.props.params.orgId)
    const org = this.props.organizations[i]

    console.log(this.props.organizations)
    console.log("this.props.params.orgId: " + this.props.params.orgId)

    return (
      <div className="content">
        { org.name }<br />
        { org.address }<br />
        { org.city }, { org.state } { org.zip }
      </div>
    )
  }
}
