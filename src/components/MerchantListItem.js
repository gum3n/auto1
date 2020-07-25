import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MerchantListItem = (props) => {
  return (
    <li>
      <Link
        to={'/merchant/' + props.id}
        style={{
          display: 'inline-block',
          borderStyle: 'solid',
          borderColor: props.hasPremium ? 'gold' : 'black'
        }}>
        <img src={'/' + props.avatarUrl} alt="avatar" />
        <h2>{props.firstname} {' '} {props.lastname}</h2>
      </Link>
    </li>
  )
}

MerchantListItem.propTypes = {
  id         : PropTypes.string.isRequired,
  hasPremium : PropTypes.bool.isRequired,
  avatarUrl  : PropTypes.string.isRequired,
  firstname  : PropTypes.string.isRequired,
  lastname   : PropTypes.string.isRequired,
}

export default MerchantListItem
