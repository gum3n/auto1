import React from 'react'
import { connect } from 'react-redux'

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

export default connect(null, { merchantsEdit })(Edit)
