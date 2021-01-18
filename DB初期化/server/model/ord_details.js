const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ord_DetailsSchema = new Schema({
  ordno: {type: Number, maxlength: [8, '最大8文字までです']},
  prodno: {type: String, required: true, maxlength: [3, '最大3文字までです']},
  quantity: {type: Number, required: true, maxlength: [5, '最大5文字までです']}
})

module.exports = mongoose.model('Ord_Detail', Ord_DetailsSchema)