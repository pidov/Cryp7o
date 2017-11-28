import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import SettingsIcon from 'material-ui-icons/Settings'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List'
import MenuIcon from 'material-ui-icons/Menu'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import Grid from 'material-ui/Grid'
import 'cryptocoins-icons/webfont/cryptocoins.css'
import Theme from './Theme'
import CoinList from './CoinList'
import TransactionForm from '../containers/TransactionForm'

let id = 0

function createData (coin, amount, price) {
  id += 1
  return { id, coin, amount, price }
}

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

const data = [
  createData('Bitcoin', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0)
]

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
        <Drawer anchor="left" open={this.state.drawer} onRequestClose={() => this.toggleDrawer(false)}>
          <IconButton onClick={() => this.toggleDrawer(false)}>
            <MenuIcon />
          </IconButton>
          <List style={{width: '300px'}}>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>
          </List>
        </Drawer>
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
