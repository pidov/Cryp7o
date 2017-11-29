import React, { Component } from 'react'
import autobind from 'react-autobind'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import 'cryptocoins-icons/webfont/cryptocoins.css'
import Theme from './Theme'
import CoinList from './CoinList'
import AppBar from '../containers/AppBar'
import TransactionForm from '../containers/TransactionForm'
import Sidebar from '../containers/Sidebar'
import Fab from '../containers/Fab'

function Transition (props) {
  return <Slide direction="up" {...props} />
}
class App extends Component {
  constructor (props) {
    super(props)
    autobind(this)

    this.state = {
      drawer: false,
      dialog: {
        open: false
      }
    }
  }

  toggleDrawer (open) {
    this.setState({
      'drawer': open
    })
  }

  toggleDialog (open) {
    this.setState({
      'dialog': {
        open
      }
    })
  }

  render () {
    const coins = [{
      ticker: 'BTC',
      name: 'Bitcoin',
      valuation: 630.3,
      holdings: 0.01234,
      price: 8174
    }, {
      ticker: 'LTC',
      name: 'Litecoin',
      valuation: 130.3,
      holdings: 2.1234,
      price: 70
    }]

    return (
      <Theme>
        <AppBar onMenuItemClick={() => this.toggleDrawer(true)} />
        <Sidebar open={this.state.drawer} onRequestClose={() => this.toggleDrawer(false)} />
        <Paper>
          <CoinList items={coins} />
        </Paper>
        <Fab onClick={() => this.toggleDialog(true)} />
        <Dialog
          fullScreen
          open={this.state.dialog.open}
          onRequestClose={() => this.toggleDialog(false)}
          transition={Transition}>
          <DialogTitle>
            Trade #137
          </DialogTitle>
          <DialogContent>
            <TransactionForm />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.toggleDialog(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.toggleDialog(false)} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </Theme>
    )
  }
}

export default App
