import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getMerchantsList } from './actionCreators.js'

import 'normalize.css'
import './App.css'

import MerchantsList from './components/MerchantsList.js'
import MerchantDetails from './components/MerchantDetails'
import MerchantAdd from './components/MerchantAdd.js'

const App = ({ getMerchantsList }) => {
  useEffect(getMerchantsList)

  return (
    <BrowserRouter>
      <Route exact path='/' component={MerchantsList} />
      <Route path='/merchant/:id' component={MerchantDetails} />
      <Route path='/add' component={MerchantAdd} />
    </BrowserRouter>
  )
}

App.propTypes = {
  getMerchantsList: PropTypes.func.isRequired
}

export default connect(null, { getMerchantsList })(App)
