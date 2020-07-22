import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import 'normalize.css'
import './App.css'

import MerchantsList from './components/MerchantsList.js'
import MerchantDetails from './components/MerchantDetails'
import MerchantAdd from './components/MerchantAdd.js'

export default function App() {
  // TODO update document.title to show currently displayed page
  return (
    <BrowserRouter>
      <Route exact path="/" component={MerchantsList} />
      <Route path="/merchant/:id" component={MerchantDetails} />
      <Route path="/add" component={MerchantAdd} />
    </BrowserRouter>
  )
}
