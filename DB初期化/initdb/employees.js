const Employee = require('../model/employees')

class InitEmployeesDb {
  constructor() {
    this.employees = [
      {
        empno: 1001,
        ename: '佐藤',
        yomi: 'sato',
        job: '社長',
        mgr: null,
        hiredate: '2001/02/25',
        sal: 500000,
        comm: null,
        deptno: 10
      },
      {
        empno: 1002,
        ename: '鈴木',
        yomi: 'suzuki',
        job: '事務',
        mgr: 1013,
        hiredate: '2000/03/26',
        sal: 200000,
        comm: null,
        deptno: 20
      },
      {
        empno: 1003,
        ename: '高橋',
        yomi: 'takahashi',
        job: '営業',
        mgr: 1007,
        hiredate: '2000/05/30',
        sal: 300000,
        comm: 30000,
        deptno: 30
      },
      {
        empno: 1004,
        ename: '田中',
        yomi: 'tanaka',
        job: '営業',
        mgr: 1007,
        hiredate: '2002/06/02',
        sal: 355000,
        comm: 50000,
        deptno: 30
      },
      {
        empno: 1005,
        ename: '渡辺',
        yomi: 'watanabe',
        job: '部長',
        mgr: 1001,
        hiredate: '2002/07/11',
        sal: 280000,
        comm: null,
        deptno: 20
      },
      {
        empno: 1006,
        ename: '伊藤',
        yomi: 'ito',
        job: '営業',
        mgr: 1007,
        hiredate: '2008/01/06',
        sal: 300000,
        comm: 140000,
        deptno: 30
      },
      {
        empno: 1007,
        ename: '山本',
        yomi: 'yamamoto',
        job: '部長',
        mgr: 1001,
        hiredate: '2000/08/09',
        sal: 285000,
        comm: null,
        deptno: 30
      },
      {
        empno: 1008,
        ename: '中村',
        yomi: 'nakamura',
        job: '部長',
        mgr: 1001,
        hiredate: '2000/09/17',
        sal: 245000,
        comm: null,
        deptno: 10
      },
      {
        empno: 1009,
        ename: '小林',
        yomi: 'kobayashi',
        job: '主任',
        mgr: 1005,
        hiredate: '2006/10/21',
        sal: 300000,
        comm: null,
        deptno: 20
      },
      {
        empno: 1010,
        ename: '斉藤',
        yomi: 'saito',
        job: '営業',
        mgr: 1007,
        hiredate: '2001/12/17',
        sal: 150000,
        comm: 0,
        deptno: 30
      },
      {
        empno: 1011,
        ename: '加藤',
        yomi: 'kato',
        job: '事務',
        mgr: 1009,
        hiredate: '2006/10/21',
        sal: 110000,
        comm: null,
        deptno: 20
      },
      {
        empno: 1012,
        ename: '吉田',
        yomi: 'yoshida',
        job: '事務',
        mgr: 1007,
        hiredate: '2009/03/13',
        sal: 295000,
        comm: null,
        deptno: 30
      },
      {
        empno: 1013,
        ename: '山田',
        yomi: 'yamada',
        job: '主任',
        mgr: 1005,
        hiredate: '2001/03/13',
        sal: 280000,
        comm: null,
        deptno: 20
      },
      {
        empno: 1014,
        ename: '佐々木',
        yomi: 'sasaki',
        job: '事務',
        mgr: 1008,
        hiredate: '2004/05/02',
        sal: 230000,
        comm: null,
        deptno: 10
      },
      {
        empno: 1015,
        ename: '林',
        yomi: 'hayashi',
        job: '事務',
        mgr: 1005,
        hiredate: '2004/04/16',
        sal: 230000,
        comm: null,
        deptno: 10
      },
    ]
  }

  pushEmployeesToDb() {
    this.employees.forEach(
      (employee) => {
        const newEmployee = new Employee(employee)
        newEmployee.save()
      }
    )
  }

  async cleanDb(){
    await Employee.deleteMany({})
  }

  async initDb() {
    await this.cleanDb()
    this.pushEmployeesToDb()
  }
}

module.exports = InitEmployeesDb

