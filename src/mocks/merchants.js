import { v4 as uuidv4 } from 'uuid'
import random from './random.js'
import firstnames from './firstnames.js'
import lastnames from './lastnames.js'
import carTitles from './carTitles.js'
import avatars from './avatars.js'

export const getRandomBids = (count) => {
  count = count ? Math.min(1, count) : random.int(1, 30)

  return new Array(count).fill({}).map(() => ({
    id: uuidv4(),
    carTitle: random.fromList(carTitles),
    amount: random.int(1, 100),
    created: random.time(),
  }))
}

// TODO generate merchants random list only on npm start
export const getRandomMerchants = (count=1) => {
  return new Array(count).fill({}).map(() => {
    const firstname = random.fromList(firstnames)
    const lastname  = random.fromList(lastnames)

    return {
      id: uuidv4(),
      firstname,
      lastname,
      avatarUrl: random.fromList(avatars),
      email: `${firstname}.${lastname}@gmail.com`,
      phone: random.phone(),
      hasPremium: random.fromList([true, false]),
      bids: getRandomBids(),
    }
  })
}
