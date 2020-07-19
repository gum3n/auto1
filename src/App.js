import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MerchantsList from './components/MerchantsList.js'
import MerchantDetails from './components/MerchantDetails.js'
import MerchantAdd from './components/MerchantAdd.js'

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MerchantsList} />
      <Route path="/merchant/:id" component={MerchantDetails} />
      <Route path="/add" component={MerchantAdd} />
    </BrowserRouter>
  )
}
