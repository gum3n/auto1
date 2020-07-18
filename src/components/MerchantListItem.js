import React from 'react';
import { Link } from 'react-router-dom';

export default function MerchantListItem(props) {
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
