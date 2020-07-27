import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import GoBack from './../GoBack.js'
import Loading from './../Loading.js'
import InvalidId from './InvalidId.js'
import PersonalData from './PersonalData'
import Bids from './Bids.js'

const mapStateToProps = (state, { match }) => ({
  pendingAdd: state.pending.includes('MERCHANTS_ADD'),
  merchant: state.merchants.find(({ id }) => id === match.params.id)
})

const MerchantDetails = ({ pendingAdd, merchant }) => {
  if(pendingAdd) return <Loading />
  if(!merchant) return <InvalidId />

  return (
    <>
      <p><GoBack /></p>
      <PersonalData merchant={merchant} />
      <hr />
      <Bids merchantId={merchant.id} bids={merchant.bids} />
    </>
  )
}

MerchantDetails.propTypes = {
  merchant: PropTypes.shape({
    id   : PropTypes.string.isRequired,
    bids : PropTypes.array.isRequired,
  })
}

export default connect(mapStateToProps)(MerchantDetails)
