import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MerchantsList from './components/MerchantsList.js'
import MerchantDetails from './components/MerchantDetails.js'

// TODO use <IndexLink> and <IndexRoute>
export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MerchantsList} />
      <Route path="/merchant/:id" component={MerchantDetails} />
    </BrowserRouter>
  )
}
