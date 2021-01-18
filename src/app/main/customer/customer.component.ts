import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/main.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/custmer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [new Customer("",0,"","","","")]
  selectCustomer: Customer = new Customer("",0,"","","","")
  customerId: string = ""

  exportPath: any = []  

  constructor(
    private mainService: MainService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomers()
    this.resetPage()
  }

  // データ取得処理
  getCustomers() {
    const customersObservable = this.mainService.getCustomers()
    customersObservable.subscribe(
      (data) => {
        this.customers = data
        console.log(this.customers)
      },
      (err) => {
        console.error('ERROR: ' + err)
        alert("顧客データを取得できませんでした。")
      },
      () => {
        console.log('Got Customers Data.')
      }
    )
  }

  selectRow(customer:any):void {
    this.selectCustomer = customer
  }

  addCustomer(editForm:any):void {

    let addData: Customer = new Customer("",0,"","","","")
    addData = editForm.value

    for(let c of this.customers){
      if(c.CUSTNO == addData.CUSTNO){
        return alert("重複した顧客番号です。別の顧客番号で登録してください。")
      }
    }

    if(!addData.CUSTNO){
      return alert("顧客番号は必須項目です。")
    } else if(addData.CUSTNO > 99999){
      return alert("顧客番号は5桁までです。")
    }
    if(addData.CNAME.length > 20){
      return alert("顧客名は20文字までです。")
    }
    if(addData.ADDRESS.length > 30){
      return alert("住所は30文字までです。")
    }
    if(addData.PHONE.length > 12){
      return alert("電話番号は12文字までです。")
    }
    if(addData.CREDIT_RATING.length > 6){
      return alert("信用は6文字までです。")
    }

    this.mainService.addCustomer(editForm.value).subscribe(
      (result) => {
        console.log('Add New Customer.')
        // バックにpost処理を行った後、フロント側にもデータを追加する
        this.getCustomers()
      },
      (err: HttpErrorResponse) => {
        console.error(err)
        alert("新規顧客の追加に失敗しました。")
      }
    )
  }

  // 更新処理
  updateCustomer(editForm:any) {

    let editData: Customer = new Customer("",0,"","","","")
    editData = editForm.value

 // 入力値判定＆エラー処理
    if(!editData.CUSTNO){
      return alert("顧客番号は必須項目です。")
    } else if(editData.CUSTNO > 99999){
      return alert("顧客番号は5桁までです。")
    }
    if(editData.CNAME.length > 20){
      return alert("顧客名は20文字までです。")
    }
    if(editData.ADDRESS.length > 30){
      return alert("住所は30文字までです。")
    }
    if(editData.PHONE.length > 12){
      return alert("電話番号は12文字までです。")
    }
    if(editData.CREDIT_RATING.length > 6){
      return alert("信用は6文字までです。")
    }

  // 社員番号検索
    for(let customer of this.customers) {
      if(customer.CUSTNO === editForm.value.CUSTNO) {
        this.customerId = customer.Id
      }
    }

    if(!this.customerId){
      return alert("指定した番号の顧客が見つかりませんでした。")
    }

    this.mainService.updateCustomer(this.customerId, editForm.value).subscribe(
      (result) => {
        this.getCustomers()
      },
      (err: HttpErrorResponse) => {
        console.error(err)
        return alert(err.error)
      },
      () => {
        this.customerId = ""
        console.log('Update Customer.')
      }
    )
  }

  // 削除処理
  deleteCustomer(editForm:any):void {

    for(let customer of this.customers) {
      if(customer.CUSTNO === editForm.value.CUSTNO) {
        this.customerId = customer.Id
      }
    }

// 検索処理
    if(!this.customerId){
      return alert("指定した番号の顧客が見つかりませんでした。")
    }

    this.mainService.deleteCustomer(this.customerId).subscribe(
      () => {
        console.log('Delete Customer.')
      },
      (err: HttpErrorResponse) => {
        console.error(err)
        return alert(err.error)
      }

    )
  }

  // ページ更新処理
  resetPage() {
    this.selectCustomer = new Customer("",0,"","","","")
    this.exportPath = []
    this.router.navigate(['/main/Customer'])
  }

  // フォームリセット処理
  clearForm(form: NgForm):void{
    form.resetForm({
      CUSTNO: null,
      CNAME: "",
      ADDRESS: "",
      PHONE: "",
      CREDIT_RATING: ""
    })
  }

  exportExcel(): void {
    this.mainService.exportCustomers().subscribe(
      (result) => {
        this.exportPath = result;
        alert(this.exportPath + 'が出力されました。')
        console.log('Export Excel File.')
      },
      (err: HttpErrorResponse) => {
        console.error(err)
        alert("Excel出力に失敗しました。")
      }
    )
    this.exportPath = []
  }

}
