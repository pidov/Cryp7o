import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Portfolio from 'views/Portfolio'

export default class Routes extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={Portfolio} exact />
      </Switch>
    )
  }
}
