import React from 'react';

export default function MerchantListItem(props) {
  return (
    <li className={props.hasPremium ? 'premium' : ''}>
      <img src={props.avatarUrl} />
      <h3>{props.firstname} {' '} {props.lastname}</h3>
    </li>
  )
}
