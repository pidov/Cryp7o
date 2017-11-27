import React, { Component } from 'react'
import PropTypes from 'prop-types'
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'
import CryptoIcon from './CryptoIcon'

class CoinList extends Component {
  render () {
    const { items } = this.props
    return (
      <List>
        {items.map(({name, ticker, holdings, valuation, price}, index) => (
          <ListItem button color='#fff'>
            <CryptoIcon name={ticker} color='#fff'/>
            <ListItemText primary={`${name}`} secondary={`${holdings} @ $${price}`} />
            <ListItemSecondaryAction>
              <ListItemText primary={`${holdings * price}`} secondary='6.82% / 8% / 1%' />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    )
  }
}

CoinList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    ticker: PropTypes.string.isRequired,
    holdings: PropTypes.number,
    valuation: PropTypes.number
  })).isRequired
}

CoinList.defaultProps = {
  items: []
}

export default CoinList
