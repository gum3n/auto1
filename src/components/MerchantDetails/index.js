import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { merchantsRemove } from './../../actionCreators.js'
import GoBack from './../GoBack.js'
import Loading from './../Loading.js'
import InvalidId from './InvalidId.js'
import PersonalData from './PersonalData'
import Bids from './Bids.js'

const mapStateToProps = (state, { match }) => ({
  pendingAdd: state.pending.includes('MERCHANTS_ADD'),
  pendingRemove: state.pending.includes('MERCHANTS_REMOVE'),
  merchant: state.merchants.find(({ id }) => id === match.params.id)
})

const MerchantDetails = ({
  pendingAdd,
  pendingRemove,
  merchant,
  history,
  merchantsRemove
}) => {
  if(pendingAdd) return <Loading />
  if(!merchant) return <InvalidId />

  return (
    <>
      <p><GoBack /></p>

      <PersonalData merchant={merchant} />

      <button
        onClick={() => merchantsRemove(merchant.id, history)}
        disabled={pendingRemove}
      >
        {pendingRemove ? 'Removing In Progress ...' : 'Remove Merchant'}
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
