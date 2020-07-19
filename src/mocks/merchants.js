import { v4 as uuidv4 } from 'uuid'
import firstnames from './firstnames.js'
import lastnames from './lastnames.js'
import carTitles from './carTitles.js'
import avatars from './avatars.js'

// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomFromList(list) {
  return list[getRandomInt(0, list.length)]
}

function getRandomPhone() {
  return new Array(3)
    .fill(new Array(3).fill(0))
    .map((part) => part.map(() => getRandomInt(0, 10)).join(''))
    .join('-')
}

function getRandomTime() {
  return new Date().getTime() - getRandomInt(0, 100000000000)
}

// TODO generate merchants random list only on npm start
export const getRandomMerchants = (count=1) => {
  return new Array(count).fill({}).map(() => {
    const firstname = getRandomFromList(firstnames)
    const lastname  = getRandomFromList(lastnames)

    return {
      id: uuidv4(),
      firstname,
      lastname,
      avatarUrl: getRandomFromList(avatars),
      email: `${firstname}.${lastname}@gmail.com`,
      phone: getRandomPhone(),
      hasPremium: getRandomFromList([true, false]),
      bids: new Array(getRandomInt(1, 30)).fill({}).map(() => ({
        id: uuidv4(),
        carTitle: getRandomFromList(carTitles),
        amount: getRandomInt(1, 100),
        created: getRandomTime(),
      }))
    }
  })
}
