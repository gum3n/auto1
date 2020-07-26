import React from 'react'
import Sort from './Sort.js'
import PropTypes from 'prop-types'

const Bids = ({ merchantId, bids }) => (
  <table className='bids'>
    <thead>
      <tr>
        <th><Sort merchantId={merchantId} column={'id'}>id</Sort></th>
        <th><Sort merchantId={merchantId} column={'carTitle'}>Car title</Sort></th>
        <th><Sort merchantId={merchantId} column={'amount'}>Amount</Sort></th>
        <th><Sort merchantId={merchantId} column={'created'}>Date</Sort></th>
      </tr>
    </thead>

    <tbody>
      {bids.map(bid =>
        <tr key={bid.id}>
          <td>{bid.id}</td>
          <td>{bid.carTitle}</td>
          <td>{bid.amount}</td>
          <td>{new Date(bid.created).toString()}</td>
        </tr>
      )}
    </tbody>
  </table>
)

Bids.propTypes = {
  merchantId: PropTypes.string.isRequired,
  bids: PropTypes.arrayOf(PropTypes.exact({
    id       : PropTypes.string.isRequired,
    carTitle : PropTypes.string.isRequired,
    amount   : PropTypes.number.isRequired,
    created  : PropTypes.number.isRequired,
  })).isRequired
}

export default Bids
