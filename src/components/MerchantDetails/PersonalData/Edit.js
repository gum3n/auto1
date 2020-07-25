import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { merchantsEdit } from './../../../actionCreators.js'
import MerchantForm from './../../MerchantForm.js'

const Edit = ({ merchant, setEdit, merchantsEdit }) => {
  const onSubmit = (formData) => {
    merchantsEdit(merchant.id, formData)
    setEdit(false)
  }

  return (
    <>
      <h2>Edit Merchant Personal Data</h2>
      <MerchantForm onSubmit={onSubmit} merchant={merchant} />
    </>
  )
}

Edit.propTypes = {
  setEdit       : PropTypes.func.isRequired,
  merchantsEdit : PropTypes.func.isRequired,

  merchant: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
}

export default connect(null, { merchantsEdit })(Edit)
