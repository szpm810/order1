const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const EmployeesSchema = new Schema({
  empno: {type: Number, required: true, maxlength:[4, '最大4文字までです']},
  ename: {type: String, maxlength:[10, '最大10文字までです']},
  yomi: {type: String, maxlength:[20, '最大20文字までです']},
  job: {type: String, maxlength:[8, '最大8文字までです']},
  mgr: {type: Number, maxlength:[4, '最大4文字までです']},
  hiredate: {type: Date, maxlength:[10, '最大10文字までです']},
  sal: {type: Number, maxlength:[7, '最大7文字までです']},
  comm: {type: Number, maxlength:[7, '最大7文字までです']},
  deptno: {type: Number, maxlength:[2, '最大2文字までです']}
})

module.exports = mongoose.model('Employee', EmployeesSchema)