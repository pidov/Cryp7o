import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import SettingsIcon from 'material-ui-icons/Settings'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

let id = 0

function createData (coin, amount, price) {
  id += 1
  return { id, coin, amount, price }
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
      drawer: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer (open) {
    this.setState({
      'drawer': open
    })
  }

  render () {
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography type='title' color='inherit'>
              MyCrypotoFolio
            </Typography>
          </Toolbar>
        </AppBar>
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
        <Button fab color='accent' aria-label='add' onClick={() => this.toggleDrawer(true)}>
          <AddIcon />
        </Button>
        <Drawer anchor="left" open={this.state.drawer} onRequestClose={() => this.toggleDrawer(false)}>
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
