import React from 'react'

const Show = ({ merchant, setEdit }) => (
  <>
    <img src={'/' + merchant.avatarUrl} alt="avatar" />
    <p><small><code>{merchant.id}</code></small></p>
    {merchant.hasPremium ? (<p><strong>premium</strong></p>) : ''}
    <h3>{merchant.firstname} {' '} {merchant.lastname}</h3>

    <ul>
      <li>{merchant.email}</li>
      <li>{merchant.phone}</li>
    </ul>

    <button onClick={() => setEdit(true)}>
      Edit Merchant Personal Data
    </button>
  </>
)

export default Show
