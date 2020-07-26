import * as api from './api.js'

export const getMerchantsList = () => (dispatch) => {
  dispatch({ type: 'PENDING_MERCHANTS_LIST' })
  api.getMerchantsList().then((merchantsList) => {
    dispatch({ type: 'MERCHANTS_LIST', merchantsList })
  })
}

export const merchantsAdd = (values) => (dispatch) => {
  dispatch({ type: 'PENDING_MERCHANTS_ADD' })
  api.addMerchant(values).then((merchantsList) => {
    dispatch({ type: 'MERCHANTS_ADD', merchantsList })
  })
}

export const merchantsEdit = (id, values) => (dispatch) => {
  dispatch({ type: 'PENDING_MERCHANTS_EDIT' })
  api.editMerchant(id, values).then((merchantsList) => {
    dispatch({ type: 'MERCHANTS_EDIT', merchantsList })
  })
}

export const merchantsRemove = (id, history) => (dispatch) => {
  dispatch({ type: 'PENDING_MERCHANTS_REMOVE' })
  api.removeMerchant(id).then((merchantsList) => {
    dispatch({ type: 'MERCHANTS_REMOVE', merchantsList })
    history.push('/')
  })
}

export const onSort = (id, column, ascending) => (dispatch) => {
  dispatch({ type: 'MERCHANTS_SORT_BIDS', id, column, ascending })
}
