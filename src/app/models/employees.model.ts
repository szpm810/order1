export class Employees {
    name: any;

    constructor(
         public empno: number, //社員番号
         public ename:string,//社員名
         public yomi:string,//読み
         public job:string,//職務
         public mgr:number,//上司番号
         public hiredate:Date,//入社日
         public sal:number,//給料
         public comm:number,//歩合給
         public deptno:number//部門番号
      ) {  }
}