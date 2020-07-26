import random from './mocks/random.js'
import { getRandomMerchants, getRandomBids } from './mocks/merchants.js'

// Fake merchants database state
let merchantsList = getRandomMerchants(random.int(20,60))

// Fake asnyc api calls
const fakeAsync = (data) => new Promise((resolve) => {
  setTimeout(() => resolve(data), random.int(500, 3000))
})

export const getMerchantsList = () => {
  return fakeAsync(merchantsList)
}

export const addMerchant = (values) => {
  const newMerchant = { ...values, bids: getRandomBids() }
  merchantsList = [newMerchant, ...merchantsList]
  return fakeAsync(merchantsList)
}

export const editMerchant = (id, values) => {
  merchantsList = merchantsList.map(merchant => {
    if(merchant.id !== id) return merchant
    return { ...merchant, ...values }
  })
  return fakeAsync(merchantsList)
}

export const removeMerchant = (id) => {
  merchantsList = merchantsList.filter((merchant) => merchant.id !== id)
  return fakeAsync(merchantsList)
}
