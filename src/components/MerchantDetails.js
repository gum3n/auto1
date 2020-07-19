import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = (state, { match }) => ({
  merchant: state.merchants.find(({ id }) => id === match.params.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: (id) => {
    dispatch({ type: 'MERCHANTS_REMOVE', id })
    ownProps.history.push('/')
  }
})

const MerchantDetails = ({ merchant, onRemove }) => {
  if(!merchant) {
    return (
      <>
        <p><strong>Invalid merchant id</strong></p>
        <Link to="/">Go Back</Link>
      </>
    )
  }

  return (
    <>
      <img src={'/' + merchant.avatarUrl} alt="avatar" />
      <p><small><code>{merchant.id}</code></small></p>
      {merchant.hasPremium ? (<p><strong>premium</strong></p>) : ''}
      <h3>{merchant.firstname} {' '} {merchant.lastname}</h3>

      <ul>
        <li>{merchant.email}</li>
        <li>{merchant.phone}</li>
      </ul>

      <button onClick={() => onRemove(merchant.id)}>
        Remove Merchant
      </button>

      <hr />

      <ol>
        {merchant.bids.map(bid =>
          <li key={bid.id}>
            <ul>
              <li>{bid.id}</li>
              <li>{bid.carTitle}</li>
              <li>{bid.amount}</li>
              <li>{new Date(bid.created).toString()}</li>
            </ul>
          </li>
        )}
      </ol>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantDetails)
