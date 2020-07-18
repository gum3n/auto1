import { createStore } from 'redux'
import reducers from './reducers'
import mocks from './mocks.js'

export default createStore(
  reducers,
  mocks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
