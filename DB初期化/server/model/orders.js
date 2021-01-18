const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrdersSchema = new Schema({
  ordno: {type: Number, maxlength: [8, '最大8文字までです']},
  custno: {type: Number, required: true, maxlength: [5, '最大5文字までです']},
  date_ordered: {type:Date, required: true, maxlength: [10, '最大10文字までです']},
  date_shipped: {type: Date, maxlength: [10, '最大10文字までです']},
  salesman_no: {type: Number, maxlength: [4, '最大4文字までです']},
  payment_type: {type: String, maxlength: [10, '最大10文字までです']}
})

module.exports = mongoose.model('Order', OrdersSchema)