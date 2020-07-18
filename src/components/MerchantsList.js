import React from 'react';
import { connect } from 'react-redux'
import MerchantListItem from './MerchantListItem.js'

const mapStateToProps = (state) => ({ merchants: state.merchants })

const MarchentsList = ({ merchants }) => (
  <ul>
    {merchants.map(merchant => (
      <MerchantListItem
        key={merchant.id}
        hasPremium={merchant.hasPremium}
        avatarUrl={merchant.avatarUrl}
        firstname={merchant.firstname}
        lastname={merchant.lastname}
      />
    ))}
  </ul>
)

export default connect(mapStateToProps)(MarchentsList)
