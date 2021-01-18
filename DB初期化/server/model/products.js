const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductsSchema = new Schema({
  prodno: {type: String, required: true, maxlength: [3, '最大3文字までです']},
  pname: {type: String, maxlength: [30, '最大30文字までです']},
  price: {type: Number, maxlength: [6, '最大6文字までです']}
})

module.exports = mongoose.model('Product', ProductsSchema)