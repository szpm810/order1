const Department = require('../model/departmemts')

class InitDepartmentsDb {
  constructor() {
    this.departments = [
      {
        deptno: 10,
        dname: '管理',
        loc: '大手町'
      },
      {
        deptno: 20,
        dname: '研究開発',
        loc: '横浜'
      },
      {
        deptno: 30,
        dname: '営業',
        loc: '品川'
      }
    ]
  }
  pushDepartmentsToDb() {
    this.departments.forEach(
      (department) => {
        const newDepartment = new Department(department)
        newDepartment.save()
      }
    )
  }

  async cleanDb(){
    await Department.deleteMany({})
  }

  async initDb() {
    await this.cleanDb()
    this.pushDepartmentsToDb()
  }
}

module.exports = InitDepartmentsDb