import React from 'react'
import { connect } from 'react-redux'

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

export default connect(null, { onSort })(Sort)
