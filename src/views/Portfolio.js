import React, { Component } from 'react'
import CoinList from 'components/CoinList'

export default class Portfolio extends Component {
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
      <CoinList items={coins} />
    )
  }
}
