import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MerchantForm = (props) => {
  const merchant = props.merchant || {}

  const [ firstname  , setFirstname  ] = useState(merchant.firstname  || '')
  const [ lastname   , setLastname   ] = useState(merchant.lastname   || '')
  const [ avatarUrl  , setAvatarUrl  ] = useState(merchant.avatarUrl  || '')
  const [ email      , setEmail      ] = useState(merchant.email      || '')
  const [ phone      , setPhone      ] = useState(merchant.phone      || '')
  const [ hasPremium , setHasPremium ] = useState(merchant.hasPremium || false)

  const onSubmit = (event) => {
    event.preventDefault()

    props.onSubmit({
      firstname,
      lastname,
      avatarUrl,
      email,
      phone,
      hasPremium
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <p>
        <label htmlFor='firstname'>Firstname</label>
        <input
          required
          id='firstname'
          type='text'
          name='firstname'
          onChange={event => setFirstname(event.target.value)}
          value={firstname}
          placeholder='Firstname'
        />
      </p>

      <p>
        <label htmlFor='lastname'>Lastname</label>
        <input
          required
          id='lastname'
          type='text'
          name='lastname'
          onChange={event => setLastname(event.target.value)}
          value={lastname}
          placeholder='Lastname'
        />
      </p>

      <p>
        <label htmlFor='avatar-url'>Avatar URL</label>
        <input
          required
          id='avatar-url'
          type='text'
          name='avatar-url'
          onChange={event => setAvatarUrl(event.target.value)}
          value={avatarUrl}
          placeholder='Avatar URL'
        />
      </p>

      <p>
        <label htmlFor='email'>Email</label>
        <input
          required
          id='email'
          type='email'
          name='email'
          onChange={event => setEmail(event.target.value)}
          value={email}
          placeholder='Email'
        />
      </p>

      <p>
        <label htmlFor='phone'>Phone</label>
        <input
          required
          id='phone'
          type='tel'
          pattern='(\+[0-9]{2})?[0-9]{9}'
          title='Pattern: 123456789 or +00123456789'
          name='phone'
          onChange={event => setPhone(event.target.value)}
          value={phone}
          placeholder='[+48]000000000'
        />
      </p>

      <p>
        <label htmlFor='has-premium'>Has Premium</label>
        <input
          id='has-premium'
          type='checkbox'
          name='has-premium'
          onChange={event => setHasPremium(event.target.checked)}
          checked={hasPremium}
        />
      </p>

      <p>
        <input className="button" type='submit' value='Submit' />
      </p>
    </form>
  )
}

MerchantForm.propTypes = {
  merchant: PropTypes.exact({
    id         : PropTypes.string,
    firstname  : PropTypes.string,
    lastname   : PropTypes.string,
    avatarUrl  : PropTypes.string,
    email      : PropTypes.string,
    phone      : PropTypes.string,
    hasPremium : PropTypes.bool,
    bids       : PropTypes.array,
  }),
  onSubmit: PropTypes.func.isRequired,
}

export default MerchantForm
