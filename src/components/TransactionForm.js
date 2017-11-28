import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tabs, { Tab } from 'material-ui/Tabs'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import Input, { InputLabel } from 'material-ui/Input'

const styles = {
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%%'
  }
}

class TransactionForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      orderType: 0
    }
  }

  changeOrderType (event, value) {
    this.setState({
      'orderType': value
    })
  }

  render () {
    const { onSelectChange } = this.props

    return (
      <div>
        <Paper style={{ width: "100%" }}>
          <Tabs
            value={this.state.orderType}
            onChange={this.changeOrderType}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Buy" style={{ maxWidth: "100%" }} />
            <Tab label="Sell" style={{ maxWidth: "100%" }} />
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
                  onChange={onSelectChange('exchange')}
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
      </div>
    )
  }
}

TransactionForm.propTypes = {
}

TransactionForm.defaultProps = {
}

export default TransactionForm
