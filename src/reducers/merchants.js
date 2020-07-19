import { getRandomBids } from './../mocks/merchants.js'

export default function(state = [], action) {
  switch(action.type) {
  case 'MERCHANTS_ADD':
    return [{ ...action.values, bids: getRandomBids() }, ...state]
  case 'MERCHANTS_EDIT':
    return state.map(merchant => {
      if(merchant.id !== action.id) return merchant
      return { ...merchant, ...action.values }
    })
  case 'MERCHANTS_REMOVE':
    return state.filter(({ id }) => id !== action.id)
  default:
    return state
  }
}
