import { combineReducers } from 'redux'
import merchants from './merchants.js'
import pending from './pending.js'

export default combineReducers({ merchants, pending })
