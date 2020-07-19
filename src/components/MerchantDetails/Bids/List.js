import React from 'react'

const List = ({ bids }) => (
  <ol>
    {bids.map(bid =>
      <li key={bid.id}>
        <ul>
          <li>{bid.id}</li>
          <li>{bid.carTitle}</li>
          <li>{bid.amount}</li>
          <li>{new Date(bid.created).toString()}</li>
        </ul>
      </li>
    )}
  </ol>
)

export default List
