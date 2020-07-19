import { createStore } from 'redux'
import reducers from './reducers'
import { getRandomMerchants } from './mocks.js'

export default createStore(
  reducers,
  { merchants: getRandomMerchants(34) },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
