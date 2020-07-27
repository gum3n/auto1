import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { merchantsRemove } from './../../../actionCreators.js'

const mapStateToProps = (state) => ({
  pendingRemove: state.pending.includes('MERCHANTS_REMOVE'),
})

const Show = ({ pendingRemove, merchantsRemove, merchant, setEdit }) => {
  const history = useHistory()

  return (
    <section className='personal-data'>
      <div>
        <img src={'/' + merchant.avatarUrl} alt='avatar' />
      </div>
      <div className='data'>
        <h3>{merchant.firstname} {' '} {merchant.lastname}</h3>
        <p><small><code>{merchant.id}</code></small></p>
        {merchant.hasPremium && (
          <p style={{
               position: 'relative',
               paddingLeft: '2em',
             }}>
            <strong className='premium'>premium</strong>
          </p>)}

        <ul>
          <li>{merchant.email}</li>
          <li>{merchant.phone}</li>
        </ul>

        <button
          onClick={() => setEdit(true)}
          disabled={pendingRemove}
        >
          Edit Merchant Personal Data
        </button>

        <button
          onClick={() => merchantsRemove(merchant.id, history)}
          disabled={pendingRemove}
        >
          {pendingRemove ? 'Removing In Progress ...' : 'Remove Merchant'}
        </button>
      </div>
    </section>
  )
}

Show.propTypes = {
  merchantsRemove : PropTypes.func.isRequired,
  setEdit         : PropTypes.func.isRequired,

  merchant: PropTypes.shape({
    id         : PropTypes.string.isRequired,
    hasPremium : PropTypes.bool.isRequired,
    firstname  : PropTypes.string.isRequired,
    lastname   : PropTypes.string.isRequired,
    email      : PropTypes.string.isRequired,
    phone      : PropTypes.string.isRequired,
  }).isRequired
}

export default connect(mapStateToProps, { merchantsRemove })(Show)
