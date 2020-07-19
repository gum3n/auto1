export default function(state = [], action) {
  switch(action.type) {
  case 'MERCHANTS_ADD':
    return [
      ...state,
      { ...action.values, bids: [] }
    ]
  default:
    return state
  }
}
