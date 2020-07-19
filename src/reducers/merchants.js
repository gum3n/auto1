export default function(state = [], action) {
  switch(action.type) {
  case 'MERCHANTS_ADD':
    return [{ ...action.values, bids: [] }, ...state]
  case 'MERCHANTS_EDIT':
    return state.map(merchant => {
      if(merchant.id !== action.id) return merchant
      return { ...merchant, ...action.values }
    })
  case 'MERCHANTS_REMOVE':
    return state.filter(({ id }) => id !== action.id)
  case 'MERCHANTS_BIDS_ADD':
    return state.map(merchant => {
      if(merchant.id !== action.merchantId) return merchant
      return { ...merchant, bids: [action.bid, ...merchant.bids] }
    })
  case 'MERCHANTS_BIDS_EDIT':
    return state.map(merchant => {
      if(merchant.id !== action.merchantId) return merchant
      return {
        ...merchant,
        bids: merchant.bids.map((bid) => {
          if(bid.id !== action.bidId) return bid
          return { ...bid, ...action.values }
        })
      }
    })
  case 'MERCHANTS_BIDS_REMOVE':
    return state.map(merchant => {
      if(merchant.id !== action.merchantId) return merchant
      return {
        ...merchant,
        bids: merchant.bids.filter(({ id }) => id !== action.bidId)
      }
    })
  default:
    return state
  }
}
