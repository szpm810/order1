const Order = require('../model/orders')

class InitOrdersDb {
  constructor() {
    this.orders = [
      {
        ordno: 1,
        custno: 1001,
        date_ordered: '2009/12/20',
        date_shipped: '2009/12/27',
        salesman_no: 1003,
        payment_type: 'クレジット'
      },
      {
        ordno: 2,
        custno: 1001,
        date_ordered: '2009/12/21',
        date_shipped: '2009/12/28',
        salesman_no: 1003,
        payment_type: 'クレジット'
      },
      {
        ordno: 3,
        custno: 1001,
        date_ordered: '2010/01/10',
        date_shipped: '2010/01/17',
        salesman_no: 1003,
        payment_type: 'クレジット'
      },
      {
        ordno: 4,
        custno: 1002,
        date_ordered: '2010/01/11',
        date_shipped: '2010/01/18',
        salesman_no: 1010,
        payment_type: 'クレジット'
      },
      {
        ordno: 5,
        custno: 1008,
        date_ordered: '2010/01/15',
        date_shipped: '2010/01/22',
        salesman_no: 1003,
        payment_type: 'クレジット'
      },
      {
        ordno: 6,
        custno: 1005,
        date_ordered: '2010/01/20',
        date_shipped: '2010/01/27',
        salesman_no: 1003,
        payment_type: 'クレジット'
      },
      {
        ordno: 7,
        custno: 1007,
        date_ordered: '2010/01/22',
        date_shipped: '2010/01/29',
        salesman_no: 1006,
        payment_type: 'クレジット'
      },
      {
        ordno: 8,
        custno: 1006,
        date_ordered: '2010/01/22',
        date_shipped: '2010/01/29',
        salesman_no: 1010,
        payment_type: '現金'
      },
      {
        ordno: 9,
        custno: 1007,
        date_ordered: '2010/01/25',
        date_shipped: '2010/02/02',
        salesman_no: 1006,
        payment_type: 'クレジット'
      },
      {
        ordno: 10,
        custno: 1003,
        date_ordered: '2010/02/15',
        date_shipped: '2010/02/22',
        salesman_no: 1003,
        payment_type: 'クレジット'
      },
      {
        ordno: 11,
        custno: 1007,
        date_ordered: '2010/02/20',
        date_shipped: '2010/02/27',
        salesman_no: 1006,
        payment_type: 'クレジット'
      },
      {
        ordno: 12,
        custno: 1006,
        date_ordered: '2010/03/16',
        date_shipped: null,
        salesman_no: 1010,
        payment_type: '現金'
      },
      {
        ordno: 13,
        custno: 1009,
        date_ordered: '2010/04/02',
        date_shipped: null,
        salesman_no: 1006,
        payment_type: '現金'
      }
    ]
  }

  pushOrdersToDb() {
    this.orders.forEach(
      (order) => {
        const newOrder = new Order(order)
        newOrder.save()
      }
    )
  }

  async cleanDb(){
    await Order.deleteMany({})
  }

  async initDb() {
    await this.cleanDb()
    this.pushOrdersToDb()
  }

}

module.exports = InitOrdersDb