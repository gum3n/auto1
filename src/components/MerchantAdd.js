import React, { useState } from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const mapDispatchToProps = (dispatch) => ({
  // TODO use action creator
  onSubmit: (values) => dispatch({ type: 'MERCHANTS_ADD', values })
})

const MerchantAdd = (props) => {
  const [ firstname  , setFirstname  ] = useState('')
  const [ lastname   , setLastname   ] = useState('')
  const [ avatarUrl  , setAvatarUrl  ] = useState('')
  const [ email      , setEmail      ] = useState('')
  const [ phone      , setPhone      ] = useState('')
  const [ hasPremium , setHasPremium ] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()

    const id = uuidv4()

    props.onSubmit({
      id,
      firstname,
      lastname,
      avatarUrl,
      email,
      phone,
      hasPremium,
    })

    // TODO after proper implementation of redirection this step will
    //      not be required
    setFirstname('')
    setLastname('')
    setAvatarUrl('')
    setEmail('')
    setPhone('')
    setHasPremium(false)

    // TODO Redirect to created merchant.  This action will be
    //      asynchronous so redirection should happen after new
    //      merchant was added.

    props.history.push('/merchant/' + id)
  }

  return (
    <>
      <h1>Add New Merchant</h1>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="firstname">Firstname</label>
          <input
            required
            id="firstname"
            type="text"
            name="firstname"
            onChange={event => setFirstname(event.target.value)}
            value={firstname}
            placeholder="Firstname"
          />
        </p>

        <p>
          <label htmlFor="lastname">Lastname</label>
          <input
            required
            id="lastname"
            type="text"
            name="lastname"
            onChange={event => setLastname(event.target.value)}
            value={lastname}
            placeholder="Lastname"
          />
        </p>

        <p>
          <label htmlFor="avatar-url">Avatar URL</label>
          <input
            required
            id="avatar-url"
            type="url"
            name="avatar-url"
            onChange={event => setAvatarUrl(event.target.value)}
            value={avatarUrl}
            placeholder="Avatar URL"
          />
        </p>

        <p>
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="email"
            name="email"
            onChange={event => setEmail(event.target.value)}
            value={email}
            placeholder="Email"
          />
        </p>

        <p>
          <label htmlFor="phone">Phone</label>
          <input
            required
            id="phone"
            type="tel"
            pattern="(\+[0-9]{2})?[0-9]{9}"
            title="Pattern: 123456789 or +00123456789"
            name="phone"
            onChange={event => setPhone(event.target.value)}
            value={phone}
            placeholder="[+48]000000000"
          />
        </p>

        <p>
          <label htmlFor="has-premium">Has Premium</label>
          <input
            id="has-premium"
            type="checkbox"
            name="has-premium"
            onChange={event => setHasPremium(event.target.checked)}
            checked={hasPremium}
          />
        </p>

        <p>
          <input type="submit" value="Add" />
        </p>
      </form>
    </>
  )
}

export default connect(null, mapDispatchToProps)(MerchantAdd)
