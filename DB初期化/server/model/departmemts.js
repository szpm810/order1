const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DepartmentsSchema = new Schema({
  deptno: {type: Number, maxlength: [2, '最大2文字までです']},
  dname: {type: String, maxlength: [10, '最大10文字までです']},
  loc: {type: String, maxlength: [10, '最大10文字までです']}
})

module.exports = mongoose.model('Department', DepartmentsSchema)