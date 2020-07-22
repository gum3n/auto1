import React from 'react'
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSort: (id, column, ascending) => dispatch({
    type: 'MERCHANTS_SORT_BIDS',
    id,
    column,
    ascending,
  })
})

const Sort = ({ merchantId, column, children, onSort }) => {
  return (
    <>
      <span>{children}</span>
      <button onClick={() => onSort(merchantId, column, true)}>^</button>
      <button onClick={() => onSort(merchantId, column, false)}>v</button>
    </>
  )
}

export default connect(null, mapDispatchToProps)(Sort)
