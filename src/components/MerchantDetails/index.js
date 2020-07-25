import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

MerchantDetails.propTypes = {
  history         : PropTypes.object.isRequired,
  merchantsRemove : PropTypes.func.isRequired,

  merchant: PropTypes.shape({
    id   : PropTypes.string.isRequired,
    bids : PropTypes.array.isRequired,
  })
}

export default connect(mapStateToProps, { merchantsRemove })(MerchantDetails)
