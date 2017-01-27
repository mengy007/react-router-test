import React, { Component } from 'react'

import Organization from './organization'

export default class Organizations extends Component {
  render() {
    return (
      <div className="content">
        { this.props.organizations.map((org, i) => <Organization { ...this.props } key={ i } id={ i } org={ org } />) }
      </div>
    )
  }
}
