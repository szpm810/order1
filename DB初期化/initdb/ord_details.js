const Ord_Detail = require('../model/ord_details')

class InitOrd_DetailsDb {
  constructor() {
    this.ord_details = [
      {
        ordno: 1,
        prodno: 'A02',
        quantity: 30,
      },
      {
        ordno: 1,
        prodno: 'C01',
        quantity: 20,
      },
      {
        ordno: 2,
        prodno: 'A01',
        quantity: 5,
      },      {
        ordno: 2,
        prodno: 'B01',
        quantity: 5,
      },      {
        ordno: 2,
        prodno: 'B02',
        quantity: 10,
      },      {
        ordno: 2,
        prodno: 'B06',
        quantity: 10,
      },      {
        ordno: 3,
        prodno: 'A04',
        quantity: 10,
      },      {
        ordno: 3,
        prodno: 'B01',
        quantity: 20,
      },      {
        ordno: 3,
        prodno: 'C01',
        quantity: 10,
      },      {
        ordno: 3,
        prodno: 'C02',
        quantity: 10,
      },      {
        ordno: 4,
        prodno: 'A01',
        quantity: 10,
      },      {
        ordno: 4,
        prodno: 'A02',
        quantity: 10,
      },      {
        ordno: 4,
        prodno: 'B01',
        quantity: 5,
      },      {
        ordno: 5,
        prodno: 'B01',
        quantity: 15,
      },      {
        ordno: 5,
        prodno: 'B06',
        quantity: 15,
      },      {
        ordno: 6,
        prodno: 'A01',
        quantity: 30,
      },      {
        ordno: 6,
        prodno: 'A02',
        quantity: 50,
      },      {
        ordno: 6,
        prodno: 'A04',
        quantity: 20,
      },      {
        ordno: 6,
        prodno: 'B01',
        quantity: 20,
      },      {
        ordno: 6,
        prodno: 'B06',
        quantity: 20,
      },      {
        ordno: 7,
        prodno: 'A01',
        quantity: 10,
      },      {
        ordno: 7,
        prodno: 'A02',
        quantity: 5,
      },
      {
        ordno: 7,
        prodno: 'B01',
        quantity: 8,
      },
      {
        ordno: 8,
        prodno: 'B02',
        quantity: 5,
      },
      {
        ordno: 8,
        prodno: 'B06',
        quantity: 5,
      },
      {
        ordno: 9,
        prodno: 'A01',
        quantity: 10,
      },
      {
        ordno: 9,
        prodno: 'D01',
        quantity: 30,
      },
      {
        ordno: 9,
        prodno: 'D15',
        quantity: 30,
      },
      {
        ordno: 10,
        prodno: 'A01',
        quantity: 10,
      },
      {
        ordno: 10,
        prodno: 'B06',
        quantity: 30,
      },
      {
        ordno: 10,
        prodno: 'C02',
        quantity: 50,
      },
      {
        ordno: 11,
        prodno: 'A02',
        quantity: 50,
      },
      {
        ordno: 11,
        prodno: 'B01',
        quantity: 20,
      },
      {
        ordno: 11,
        prodno: 'B02',
        quantity: 5,
      },
      {
        ordno: 11,
        prodno: 'D01',
        quantity: 10,
      },
      {
        ordno: 12,
        prodno: 'A05',
        quantity: 10,
      },
      {
        ordno: 12,
        prodno: 'B02',
        quantity: 15,
      },
      {
        ordno: 12,
        prodno: 'C02',
        quantity: 15,
      },
      {
        ordno: 12,
        prodno: 'D04',
        quantity: 10,
      },
      {
        ordno: 12,
        prodno: 'D16',
        quantity: 10,
      },
      {
        ordno: 13,
        prodno: 'A01',
        quantity: 20,
      },
      {
        ordno: 13,
        prodno: 'A02',
        quantity: 25,
      },
    ]
  }
  pushOrd_DetailsToDb() {
    this.ord_details.forEach(
      (ord_detail) => {
        const newOrd_Detail = new Ord_Detail(ord_detail)
        newOrd_Detail.save()
      }
    )
  }

  async cleanDb(){
    await Ord_Detail.deleteMany({})
  }

  async initDb() {
    await this.cleanDb()
    this.pushOrd_DetailsToDb()
  }
}

module.exports = InitOrd_DetailsDb