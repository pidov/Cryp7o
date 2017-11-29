import React, { Component } from 'react'
import autobind from 'react-autobind'
import Paper from 'material-ui/Paper'
import AppBar from 'containers/AppBar'
import Sidebar from 'containers/Sidebar'
import Fab from 'containers/Fab'

class App extends Component {
  constructor (props) {
    super(props)
    autobind(this)

    this.state = {
      drawer: false
    }
  }

  toggleDrawer (open) {
    this.setState({
      'drawer': open
    })
  }

  render () {
    const { children } = this.props

    return (
      // TODO: Use fragment when support lands in create-react-app.
      <div>
        <AppBar onMenuItemClick={() => this.toggleDrawer(true)} />
        <Sidebar open={this.state.drawer} onRequestClose={() => this.toggleDrawer(false)} />
        <Paper>
          {children}
        </Paper>
        <Fab onClick={() => this.toggleDialog(true)} />
      </div>
    )
  }
}

export default App
