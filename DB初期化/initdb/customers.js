const Customer = require('../model/')

class InitCustomersDb {
  constructor() {
    this.customers = [
      {
        custno: 1000,
        cname: '品川商事',
        address: '東京都港区1-x-x',
        phone: '03-1234-xxxx',
        credit_rating: '優良'
      },
      {
        custno: 1001,
        cname: '横浜商店',
        address: '横浜市磯子区2-x-x',
        phone: '045-753-xxx',
        credit_rating: '要注意'
      },
      {
        custno: 1002,
        cname: '川口や',
        address: '川口市本町1-x-xx',
        phone: '048-336-xxx',
        credit_rating: '要注意'
      },
      {
        custno: 1003,
        cname: 'OX商店',
        address: '横浜市鶴見区2-xx',
        phone: '045-505-xxx',
        credit_rating: '良'
      },
      {
        custno: 1004,
        cname: '川崎ストア',
        address: '川崎市川崎区10-xx',
        phone: '044-567-xxx',
        credit_rating: '優良'
      },
      {
        custno: 1005,
        cname: 'DBマート',
        address: '東京都板橋区9-xx',
        phone: '03-3334-xxxx',
        credit_rating: '優良'
      },
      {
        custno: 1006,
        cname: '大手町文具',
        address: '東京都千代田区1-x-x',
        phone: '03-2236-xxxx',
        credit_rating: '良'
      },
      {
        custno: 1007,
        cname: 'バラエティグッズ',
        address: 'さいたま市中央区xxx',
        phone: '048-556-xxx',
        credit_rating: '良'
      },
      {
        custno: 1008,
        cname: 'ワールドストア',
        address: '横浜市神奈川区xx-x',
        phone: '045-654-xxxx',
        credit_rating: '要注意'
      },
      {
        custno: 1009,
        cname: 'DBストア',
        address: '東京都渋谷区xx-xx',
        phone: '045-654-xxx',
        credit_rating: '要注意'
      },
    ]
  }

  pushCustomersToDb() {
    this.customers.forEach(
      (customer) => {
        const newCustomer = new Customer(customer)
        newCustomer.save()
      }
    )
  }

  async cleanDb(){
    await Customer.deleteMany({})
  }

  async initDb() {
    await this.cleanDb()
    this.pushCustomersToDb()
  }
}

module.exports = InitCustomersDb
