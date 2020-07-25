import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { onSort } from './../../actionCreators.js'

const Sort = ({ merchantId, column, children, onSort }) => {
  return (
    <>
      <span>{children}</span>
      <button onClick={() => onSort(merchantId, column, true)}>^</button>
      <button onClick={() => onSort(merchantId, column, false)}>v</button>
    </>
  )
}

Sort.propTypes = {
  merchantId : PropTypes.string.isRequired,
  column     : PropTypes.string.isRequired,
  children   : PropTypes.string.isRequired,
  onSort     : PropTypes.func.isRequired,
}

export default connect(null, { onSort })(Sort)
