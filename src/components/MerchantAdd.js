import React, { useState } from 'react'

export default function MerchantAdd(props) {
  const [ firstname  , setFirstname  ] = useState('')
  const [ lastname   , setLastname   ] = useState('')
  const [ avatarUrl  , setAvatarUrl  ] = useState('')
  const [ email      , setEmail      ] = useState('')
  const [ phone      , setPhone      ] = useState('')
  const [ hasPremium , setHasPremium ] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('onSubmit')
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
            name="phone"
            onChange={event => setPhone(event.target.value)}
            value={phone}
            placeholder="Phone"
          />
        </p>

        <p>
          <label htmlFor="has-premium">Has Premium</label>
          <select
            required
            id="has-premium"
            name="has-premium"
            onChange={event => setHasPremium(event.target.value)}
            defaultValue={hasPremium}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </p>

        <p>
          <input type="submit" value="Add" />
        </p>
      </form>
    </>
  )
}
