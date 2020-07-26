import React from 'react'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

import { merchantsAdd } from './../actionCreators.js'
import GoBack from './GoBack.js'
import MerchantForm from './MerchantForm.js'

const MerchantAdd = (props) => {
  const onSubmit = (formData) => {
    const id = uuidv4()
    props.merchantsAdd({ id, ...formData })
    props.history.push('/merchant/' + id)
  }

  return (
    <>
      <p><GoBack /></p>
      <h1>Add New Merchant</h1>
      <MerchantForm onSubmit={onSubmit} />
    </>
  )
}

MerchantAdd.propTypes = {
  merchantsAdd: PropTypes.func.isRequired
}

export default connect(null, { merchantsAdd })(MerchantAdd)
