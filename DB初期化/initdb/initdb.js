const express = require('express')
const mongoose = require('mongoose')
const config = require('../config/dev')
const InitEmployeesDb = require('../initdb/employees')
const InitCustomersDb = require('../initdb/customers')
const InitOrdersDb = require('../initdb/orders')
const InitOrd_DetailsDb = require('../initdb/ord_details')
const InitProductsDb = require('../initdb/products')
const InitDepartmentsDb = require('../initdb/departments')

const app = express()
const PORT = process.env.PORT || '3001'

mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    // DB初期化
    const initEmployeesDb = new InitEmployeesDb()
    const initCustomersDb = new InitCustomersDb()
    const initOrdersDb = new InitOrdersDb()
    const initOrd_DetailsDb = new InitOrd_DetailsDb
    const initProductsDb = new InitProductsDb()
    const initDepartmentsDb = new InitDepartmentsDb()

    initEmployeesDb.initDb()
    initCustomersDb.initDb()
    initOrdersDb.initDb()
    initOrd_DetailsDb.initDb()
    initProductsDb.initDb()
    initDepartmentsDb.initDb()
  }
)

app.listen(PORT, function () {
  console.log('Initialized!')
})