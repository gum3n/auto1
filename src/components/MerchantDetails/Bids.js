import React from 'react'
import Sort from './Sort.js'

const Bids = ({ merchantId, bids }) => (
  <table>
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

export default Bids
