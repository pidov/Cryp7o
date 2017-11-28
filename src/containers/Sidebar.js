import React, { Component } from 'react'
import SettingsIcon from 'material-ui-icons/Settings'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import MenuIcon from 'material-ui-icons/Menu'

class Sidebar extends Component {
  render () {
    const { open, onRequestClose } = this.props

    const drawerProps = {
      open,
      anchor: 'left',
      onRequestClose
    }

    return (
      <Drawer {...drawerProps} >
        <IconButton onClick={() => onRequestClose(false)}>
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
