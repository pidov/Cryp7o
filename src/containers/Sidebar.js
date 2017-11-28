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
  DialogContentText,  DialogTitle
} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import Tabs, { Tab } from 'material-ui/Tabs'
import Grid from 'material-ui/Grid'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'

let id = 0

function createData(coin, amount, price) {
  id += 1
  return { id, coin, amount, price }
}

function Transition(props) {
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

class Sidebar extends Component {
  constructor(props) {
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

  toggleDrawer(open) {
    this.setState({
      'drawer': open
    })
  }

  toggleDialog(open) {
    this.setState({
      'dialog': {
        open
      }
    })
  }

  handleTabChange(event, value) {
    this.setState({
      'tabValue': value
    })
  }

  render() {
    return (
      <Drawer anchor="left" open={this.state.drawer} onRequestClose={() => this.toggleDrawer(false)}>
        <IconButton onClick={() => this.toggleDrawer(false)}>
          <MenuIcon />
        </IconButton>
        <List style={{ width: '300px' }}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </List>
      </Drawer>
    )
  }
}

export default Sidebar
