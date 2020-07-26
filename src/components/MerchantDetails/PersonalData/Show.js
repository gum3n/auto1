import React from 'react'
import PropTypes from 'prop-types'

const Show = ({ merchant, setEdit }) => (
  <>
    <img src={'/' + merchant.avatarUrl} alt='avatar' />
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

Show.propTypes = {
  setEdit: PropTypes.func.isRequired,
  merchant: PropTypes.shape({
    id         : PropTypes.string.isRequired,
    hasPremium : PropTypes.bool.isRequired,
    firstname  : PropTypes.string.isRequired,
    lastname   : PropTypes.string.isRequired,
    email      : PropTypes.string.isRequired,
    phone      : PropTypes.string.isRequired,
  }).isRequired
}

export default Show
