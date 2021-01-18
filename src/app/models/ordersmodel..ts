export class Employees {
    name: any;

    constructor(
         public empno: number,
         public ename:string,
         public yomi:string,
         public job:string,
         public mgr:number,
         public hiredate:Date,
         public sal:number,
         public comm:number,
         public deptno:number
      ) {  }
}