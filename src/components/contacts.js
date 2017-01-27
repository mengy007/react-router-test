import React, { Component } from 'react'
import Contact from './contact'

export default class Contacts extends Component {
  render() {
    return (
      <div className="main-content">
        { this.props.contacts.map((contact, i) => <Contact { ...this.props } key={ i } id={ i } contact={ contact } />) }
      </div>
    )
  }
}
