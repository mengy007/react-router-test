import React, { Component } from 'react'
import Menu from './admin/menu'

export default class Admin extends Component {
  render() {
    return (
      <div className="main-content">
        <Menu />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}
