import React, { Component } from 'react'
import lodash from 'lodash'

import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer'

export default class Main extends Component {
  render() {
    return (
      <div className="main-div">
        <Header />
        <Menu />
        { React.cloneElement(this.props.children, lodash.omit(this.props, 'children')) }
        <Footer />
      </div>
    )
  }
}
