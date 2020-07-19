import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MerchantsList from './components/MerchantsList.js'
import MerchantDetails from './components/MerchantDetails.js'

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MerchantsList} />
      <Route path="/merchant/:id" component={MerchantDetails} />
    </BrowserRouter>
  )
}
