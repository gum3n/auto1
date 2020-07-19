import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import MerchantForm from './MerchantForm.js'

const mapDispatchToProps = (dispatch) => ({
  // TODO use action creator
  merchantsAdd: (values) => dispatch({ type: 'MERCHANTS_ADD', values })
})

const MerchantAdd = (props) => {
  const onSubmit = (formData) => {
    const id = uuidv4()

    props.merchantsAdd({ id, ...formData })

    // TODO Redirect to created merchant.  This action will be
    //      asynchronous so redirection should happen after new
    //      merchant was added.

    props.history.push('/merchant/' + id)
  }

  return (
    <>
      <p><Link to="/">Bo Back</Link></p>
      <h1>Add New Merchant</h1>
      <MerchantForm onSubmit={onSubmit} />
    </>
  )
}

export default connect(null, mapDispatchToProps)(MerchantAdd)
