import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import 'cryptocoins-icons/webfont/cryptocoins.css'
import Theme from './Theme'
import CoinList from './CoinList'
import TransactionForm from '../containers/TransactionForm'
import Sidebar from '../containers/Sidebar'

function Transition (props) {
  return <Slide direction="up" {...props} />
}

const styles = {
  fab: {
    position: 'fixed',
    bottom: '25px',
    right: '25px'
  }
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      exchange: 'kraken',
      drawer: false,
      dialog: {
        open: false
      }
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.toggleDialog = this.toggleDialog.bind(this)
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
        <AppBar position='static'>
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography type='title' color='inherit'>
              MyCrypotoFolio
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar open={this.state.drawer} onRequestClose={() => this.toggleDrawer(false)} />
        <Paper>
          <CoinList items={coins} />
        </Paper>
        <Button fab color='accent'style={styles.fab} onClick={() => this.toggleDialog(true)} aria-label='add'>
          <AddIcon />
        </Button>
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
