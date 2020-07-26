import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MerchantListItem = ({ merchant }) => (
  <li className={merchant.hasPremium && 'premium'}>
    <Link to={'/merchant/' + merchant.id}>
      <img src={'/' + merchant.avatarUrl} alt='avatar' />
      <hgroup>
        <h2>
          {merchant.firstname} {' '} {merchant.lastname}
        </h2>
        <h3>
          <span>{merchant.phone}</span>
          <span>{merchant.email}</span>
          <span>bids count: {merchant.bids.length}</span>
          <span>{merchant.id}</span>
        </h3>
      </hgroup>
    </Link>
  </li>
)

MerchantListItem.propTypes = {
  merchant: PropTypes.shape({
    id         : PropTypes.string.isRequired,
    hasPremium : PropTypes.bool.isRequired,
    avatarUrl  : PropTypes.string.isRequired,
    firstname  : PropTypes.string.isRequired,
    lastname   : PropTypes.string.isRequired,
    email      : PropTypes.string.isRequired,
    phone      : PropTypes.string.isRequired,
    bids       : PropTypes.array.isRequired,
  }).isRequired
}

export default MerchantListItem
