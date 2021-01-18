const Product = require('../model/products')

class InitProductsDb {
  constructor() {
    this.products = [
      {
        prodno: 'A01',
        pname: '100円ボールペン',
        price: 100
      },
      {
        prodno: 'A02',
        pname: '芯強シャープペンシル',
        price: 100
      },
      {
        prodno: 'A03',
        pname: '10色ボールペン',
        price: 300
      },
      {
        prodno: 'A04',
        pname: '最高級万年筆',
        price: 1000
      },
      {
        prodno: 'A05',
        pname: 'なないろ鉛筆',
        price: 30
      },
      {
        prodno: 'A06',
        pname: '健康ボールペン',
        price: 500
      },
      {
        prodno: 'B01',
        pname: '無地A4ノート',
        price: 160
      },
      {
        prodno: 'B02',
        pname: 'メルヘンA4ノート',
        price: 160
      },
      {
        prodno: 'B03',
        pname: '仮面ライダーメモ帳',
        price: 150
      },
      {
        prodno: 'B04',
        pname: '暗記スムーズノート',
        price: 200
      },
      {
        prodno: 'B05',
        pname: '無地B5ノート',
        price: 160
      },
      {
        prodno: 'B06',
        pname: 'ポケモンB5ノート',
        price: 160
      },
      {
        prodno: 'C01',
        pname: 'キレイ印刷A4用紙',
        price: 500
      },
      {
        prodno: 'C02',
        pname: 'キレイ印刷B5用紙',
        price: 500
      },
      {
        prodno: 'C03',
        pname: 'キレイ印刷A3用紙',
        price: 600
      },
      {
        prodno: 'C04',
        pname: 'ソコソコキレイA4用紙',
        price: 350
      },
      {
        prodno: 'C05',
        pname: 'ソコソコキレイB5用紙',
        price: 350
      },
      {
        prodno: 'C06',
        pname: '目に優しいA4用紙',
        price: 400
      },
      {
        prodno: 'D01',
        pname: 'ねりねり消しゴム',
        price: 50
      },
      {
        prodno: 'D02',
        pname: 'なんでも消去消しゴム',
        price: 100
      },
      {
        prodno: 'D03',
        pname: 'キエナーイ消しゴム',
        price: 200
      },
      {
        prodno: 'D04',
        pname: '100%マッシロ修正液',
        price: 350
      },
      {
        prodno: 'D05',
        pname: 'カレーの香り消しゴム',
        price: 80
      },
      {
        prodno: 'D06',
        pname: 'いちごの香り消しゴム',
        price: 80
      }
    ]
  }
  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  async cleanDb(){
    await Product.deleteMany({})
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }
}

module.exports = InitProductsDb