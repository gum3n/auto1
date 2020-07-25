import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css'
import './App.css'

import MerchantsList from './components/MerchantsList.js'
import MerchantDetails from './components/MerchantDetails'
import MerchantAdd from './components/MerchantAdd.js'

const mapDispatchToProps = (dispatch) => ({
  generateRandomList: () => dispatch({ type: 'MERCHANTS_RANDOM_LIST' })
})

const App = ({ generateRandomList }) => {
  useEffect(generateRandomList)

  // TODO update document.title to show currently displayed page
  return (
    <BrowserRouter>
      <Route exact path="/" component={MerchantsList} />
      <Route path="/merchant/:id" component={MerchantDetails} />
      <Route path="/add" component={MerchantAdd} />
    </BrowserRouter>
  )
}

export default connect(null, mapDispatchToProps)(App)
