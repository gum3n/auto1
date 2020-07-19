export default function(state = [], action) {
  switch(action.type) {
  case 'MERCHANTS_ADD':
    return [...state, { ...action.values, bids: [] }]
  case 'MERCHANTS_REMOVE':
    return state.filter(({ id }) => id !== action.id)
  default:
    return state
  }
}
