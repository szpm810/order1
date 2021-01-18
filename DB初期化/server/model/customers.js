const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomersSchema = new Schema({
  custno: {type: Number, required: true, maxlength: [5, '最大5文字です']},
  cname: {type: String, maxlength: [20, '最大20文字です']},
  address: {type: String, maxlength: [30, '最大30文字です']},
  phone: {type: String, maxlength: [12, '最大12文字までです']},
  credit_rating: {type: String, maxlength: [6, '最大6文字までです']}
})

module.exports = mongoose.model('Customer', CustomersSchema)