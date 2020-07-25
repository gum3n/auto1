import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { merchantsRemove } from './../../actionCreators.js'
import InvalidId from './InvalidId.js'
import PersonalData from './PersonalData'
import Bids from './Bids.js'

const mapStateToProps = (state, { match }) => ({
  merchant: state.merchants.find(({ id }) => id === match.params.id)
})

const MerchantDetails = ({ merchant, history, merchantsRemove }) => {
  if(!merchant) return <InvalidId />

  return (
    <>
      <p><Link to="/">Bo Back</Link></p>

      <PersonalData merchant={merchant} />

      <button onClick={() => merchantsRemove(merchant.id, history)}>
        Remove Merchant
      </button>

      <hr />

      <Bids merchantId={merchant.id} bids={merchant.bids} />
    </>
  )
}

export default connect(mapStateToProps, { merchantsRemove })(MerchantDetails)
