import { getRandomMerchants, getRandomBids } from './../mocks/merchants.js'

export default function(state = [], action) {
  switch(action.type) {
  case 'MERCHANTS_RANDOM_LIST':
    return getRandomMerchants(34)
  case 'MERCHANTS_ADD':
    return [{ ...action.values, bids: getRandomBids() }, ...state]
  case 'MERCHANTS_EDIT':
    return state.map(merchant => {
      if(merchant.id !== action.id) return merchant
      return { ...merchant, ...action.values }
    })
  case 'MERCHANTS_REMOVE':
    return state.filter(({ id }) => id !== action.id)
  case 'MERCHANTS_SORT_BIDS':
    return state.map(merchant => {
      if(merchant.id !== action.id) return merchant

      let bids = merchant.bids.sort(
        (action.column === 'id' || action.column === 'carTitle') ?
          (a, b) => a[action.column].localeCompare(b[action.column]) :
          (a, b) => a[action.column] - b[action.column])

      if(action.ascending) bids = bids.reverse()

      return { ...merchant, bids }
    })
  default:
    return state
  }
}
