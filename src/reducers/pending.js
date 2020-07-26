export default function(state = [], action) {
  const isPending   = action.type.startsWith('PENDING_')
  const pendingName = action.type.replace('PENDING_', '')

  return isPending ?
    [...new Set([...state, pendingName])] :
    state.filter(name => name !== pendingName)
}
