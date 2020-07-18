import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ merchants: state.merchants })

const MarchentsList = ({ merchants }) => (
  <ul>
    {merchants.map(merchant => (
      <li key={merchant.id} className={merchant.hasPremium ? 'premium' : ''}>
        <img src={merchant.avatarUrl} />
        <h3>{merchant.firstname} {' '} {merchant.lastname}</h3>
      </li>
     ))}
  </ul>
)

export default connect(mapStateToProps)(MarchentsList)
