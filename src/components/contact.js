import React, { Component } from 'react'

export default class Contact extends Component {
  render() {

    const contact = this.props.contact
    const orgIndex = this.props.organizations.findIndex((org) => org.id == contact.organization_id)
    const org = this.props.organizations[orgIndex]

    return (
      <div className="content">
        { contact.firstName } { contact.lastName } : { org.name }
      </div>
    )
  }
}
