export default function(state = [], action) {
  switch(action.type) {
  case 'MERCHANTS_LIST':
  case 'MERCHANTS_ADD':
  case 'MERCHANTS_EDIT':
  case 'MERCHANTS_REMOVE':
    return action.merchantsList
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
