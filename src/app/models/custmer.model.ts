export class Customer {
     constructor(
        public Id: string,
        public CUSTNO: number, //顧客番号
        public CNAME: string, //顧客名
        public ADDRESS: string, //住所
        public PHONE: string, //電話番号
        public CREDIT_RATING: string //信用
      ){}
}