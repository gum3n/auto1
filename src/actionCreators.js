export const generateRandomList = () => (dispatch) => {
  dispatch({ type: 'MERCHANTS_RANDOM_LIST' })
}

export const merchantsAdd = (values) => (dispatch) => {
  dispatch({ type: 'MERCHANTS_ADD', values })
}

export const merchantsEdit = (id, values) => (dispatch) => {
  dispatch({ type: 'MERCHANTS_EDIT', id, values })
}

export const merchantsRemove = (id, history) => (dispatch) => {
  dispatch({ type: 'MERCHANTS_REMOVE', id })
  history.push('/')
}

export const onSort = (id, column, ascending) => (dispatch) => {
  dispatch({ type: 'MERCHANTS_SORT_BIDS', id, column, ascending })
}
