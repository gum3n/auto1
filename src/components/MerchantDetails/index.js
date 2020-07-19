import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import InvalidId from './InvalidId.js'
import PersonalData from './PersonalData'
import Bids from './Bids'

const mapStateToProps = (state, { match }) => ({
  merchant: state.merchants.find(({ id }) => id === match.params.id)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: (id) => {
    dispatch({ type: 'MERCHANTS_REMOVE', id })
    ownProps.history.push('/')
  }
})

const EditPersonalData = ({ merchant }) => (
  <p>{'Edit'}</p>
)

const MerchantDetails = ({ merchant, onRemove }) => {
  if(!merchant) return <InvalidId />

  return (
    <>
      <p><Link to="/">Bo Back</Link></p>

      <PersonalData merchant={merchant} />

      <button onClick={() => onRemove(merchant.id)}>
        Remove Merchant
      </button>

      <hr />

      <Bids bids={merchant.bids} />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantDetails)
