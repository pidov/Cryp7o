import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import SettingsIcon from 'material-ui-icons/Settings'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import MenuIcon from 'material-ui-icons/Menu';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import Tabs, { Tab } from 'material-ui/Tabs';


let id = 0

function createData (coin, amount, price) {
  id += 1
  return { id, coin, amount, price }
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = {
  fab: {
    position: 'fixed',
    bottom: '25px',
    right: '25px'
  }, 
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '48%',
    marginRight: '2%'
  },
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
      drawer: false,
      dialog: {
        open: false
      }
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
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
    return (
      <div>
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
        <Dialog
          fullScreen
          open={this.state.dialog.open}
          onRequestClose={() => this.toggleDialog(false)}
          transition={Transition}
        >
        <DialogTitle>
          Trade #137
          <Typography type="subheading" gutterBottom>
            07/11/2017
          </Typography>
        </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occationally.
            </DialogContentText>
            <Paper style={{ width: "100%" }}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Buy" style={{ maxWidth: "100%" }}/>
                <Tab label="Sell" style={{ maxWidth: "100%" }}/>
              </Tabs>
            </Paper>
            <form style={styles.formContainer} noValidate autoComplete="off">
              <TextField
                style={styles.textField}
                autoFocus
                margin="dense"
                id="amount"
                label="Amount"
                type="number"
                fullWidth
              />
              <TextField
                style={styles.textField}
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </form>
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
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Coin</TableCell>
                <TableCell numeric>Amount</TableCell>
                <TableCell numeric>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(n => {
                return (
                  <TableRow key={n.id}>
                    <TableCell>{n.coin}</TableCell>
                    <TableCell numeric>{n.amount}</TableCell>
                    <TableCell numeric>{n.price}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
        <Button fab color='accent'style={styles.fab} onClick={() => this.toggleDialog(true)} aria-label='add'>
          <AddIcon />
        </Button>
        <Drawer anchor="left" open={this.state.drawer} onRequestClose={() => this.toggleDrawer(false)}>
          <IconButton onClick={() => this.toggleDrawer(false)}>
            <MenuIcon />
          </IconButton>
          <List style={{width: '300px'}}>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default App
