import React, { Component } from 'react'
import TransactionFormComponent from '../components/TransactionForm'

class TransactionForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      orderType: 0
    }    
    
    this.handleSelectChange = this.handleSelectChange.bind(this)
    
  }

  handleSelectChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  render () {
    const props = {
      onSelectChange: this.handleSelectChange
    }

    return (
      <TransactionFormComponent {...props} />
    )
  }
}

TransactionForm.propTypes = {
}

TransactionForm.defaultProps = {
}

export default TransactionForm
