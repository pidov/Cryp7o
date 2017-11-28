import React, { Component } from 'react'
import MaterialAppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import 'cryptocoins-icons/webfont/cryptocoins.css'

class AppBar extends Component {
  render () {
    const { onMenuItemClick } = this.props
    return (
      <MaterialAppBar position='static'>
        <Toolbar>
          <IconButton color='contrast' aria-label='Menu' onClick={onMenuItemClick}>
            <MenuIcon />
          </IconButton>
          <Typography type='title' color='inherit'>
            MyCrypotoFolio
          </Typography>
        </Toolbar>
      </MaterialAppBar>
    )
  }
}

export default AppBar
