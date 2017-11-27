import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function CryptoIcon ({ name, color }) {
  const props = {
    className: classNames('cc', name),
    title: name,
    style: {
      color: color || '#fff',
      fontSize: '36px'
    }
  }
  return (
    <i {...props} />
  )
}

export default CryptoIcon

CryptoIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
}
