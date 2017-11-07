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
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import MenuIcon from 'material-ui-icons/Menu'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import Tabs, { Tab } from 'material-ui/Tabs'
import Grid from 'material-ui/Grid'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'

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
  }, 
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%%'
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
      tabValue: 0,
      exchange: 'kraken',
      drawer: false,
      dialog: {
        open: false
      }
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.toggleDialog = this.toggleDialog.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleSelectChange = name => event => {
    this.setState({ [name]: event.target.value });
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

  handleTabChange (event, value) {
    this.setState({
      'tabValue': value
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
          transition={Transition}>
          <DialogTitle>
            Trade #137
          </DialogTitle>
          <DialogContent>
            <Paper style={{ width: "100%" }}>
              <Tabs
                value={this.state.tabValue}
                onChange={this.handleTabChange}
                fullWidth
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Buy" style={{ maxWidth: "100%" }}/>
                <Tab label="Sell" style={{ maxWidth: "100%" }}/>
              </Tabs>
            </Paper>
            <form style={styles.formContainer} noValidate autoComplete="off">
              <Grid container spacing={24} style={{flexGrow: 1}}>
                <Grid item xs={4}>
                  <TextField
                    style={styles.textField}
                    autoFocus
                    margin="dense"
                    id="amount"
                    label="Amount"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    style={styles.textField}
                    margin="dense"
                    id="coin"
                    label="Coin"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    style={styles.textField}
                    margin="dense"
                    id="currency"
                    label="Currency"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl style={{width: "100%"}}>
                    <InputLabel htmlFor="exchange-simple">Exchange</InputLabel>
                    <Select
                      value={this.state.exchange}
                      onChange={this.handleSelectChange('exchange')}
                      input={<Input id="exchange-simple" />}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'kraken'}>Kraken</MenuItem>
                      <MenuItem value={'bittrex'}>Bittrex</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    style={styles.textField}
                    margin="dense"
                    id="price"
                    label="Price"
                    type="text"
                    fullWidth
                  />
                </Grid>
              </Grid>
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
              <ListItemText primary='Settings' />
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default App
