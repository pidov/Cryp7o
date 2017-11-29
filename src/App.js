import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'Routes'
import Theme from 'components/Theme'
import Layout from 'components/Layout'

class App extends Component {
  render () {
    return (
      <Theme>
        <Router onChange={this.handleRoute}>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </Theme>
    )
  }
}

export default App
