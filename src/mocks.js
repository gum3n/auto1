// Bid {
//   id: string,
//   carTitle: string,
//   amount: number,
//   created: string
// }

// Merchant {
//   id: string,
//   firstname: string,
//   lastname: string,
//   avatarUrl: string,
//   email: string,
//   phone: string,
//   hasPremium: boolean,
//   bids: Array<Bid>
// }

// TODO make it random
export const merchants = [
  {
    id         : 'some_uuid_1',                     // TODO uuid
    firstname  : 'some_first_name_1',
    lastname   : 'some_last_name_1',
    avatarUrl  : 'https://i.pinimg.com/236x/a7/71/26/a77126ed93bff8d24aaa4aa44c77a9b8.jpg',
    email      : 'some_mail_1@auto1.com',
    phone      : '+00123456789',
    hasPremium : true,           // TODO indicator for premium marchant
    bids: [
      { id: 'uuid_1', carTitle: 'car_title_1', amount: 10000, created: '1595059249181' },
      { id: 'uuid_2', carTitle: 'car_title_2', amount: 20000, created: '1595059249182' },
      { id: 'uuid_3', carTitle: 'car_title_3', amount: 30000, created: '1595059249183' },
      { id: 'uuid_4', carTitle: 'car_title_4', amount: 40000, created: '1595059249184' },
    ]
  },
  {
    id         : 'some_uuid_2',
    firstname  : 'some_first_name_2',
    lastname   : 'some_last_name_2',
    avatarUrl  : 'https://i.pinimg.com/236x/a7/71/26/a77126ed93bff8d24aaa4aa44c77a9b8.jpg',
    email      : 'some_mail_2@auto1.com',
    phone      : '+00123456789',
    hasPremium : false,
    bids: [
      { id: 'uuid_1', carTitle: 'car_title_1', amount: 10000, created: '1595059249181' },
      { id: 'uuid_2', carTitle: 'car_title_2', amount: 20000, created: '1595059249182' },
      { id: 'uuid_3', carTitle: 'car_title_3', amount: 30000, created: '1595059249183' },
      { id: 'uuid_4', carTitle: 'car_title_4', amount: 40000, created: '1595059249184' },
    ]
  }
]

export default { merchants }
