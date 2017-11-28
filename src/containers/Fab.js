import React, { Component } from 'react'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

const styles = {
  position: 'fixed',
  bottom: '25px',
  right: '25px'
}

class Fab extends Component {
  render () {
    const props = {
      fab: true,
      color: 'accent',
      style: styles,
      'aria-label': 'add',
      ...this.props
    }

    return (
      <Button {...props} >
        <AddIcon />
      </Button>
    )
  }
}

export default Fab
