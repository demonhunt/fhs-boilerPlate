'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
var configureStore = require('./store/configureStore')
import BookshelfApp from './BookshelfApp'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    }
  }
  render() {
    if (this.state.isLoading) {
      return null
    }
    return (
      <Provider store={this.state.store}>
        <BookshelfApp />
      </Provider>
    )
  }
}
module.exports = Root
