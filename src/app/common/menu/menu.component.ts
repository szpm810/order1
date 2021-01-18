import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { count } from 'rxjs/operators';
import { MainService } from 'src/app/main/shared/main.service';
// import { OrderService } from 'src/app/order/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  employees: any
  customers: any
  orders: any

  data: any
  count: any

  empSub = new Subject<any>()
  custSub = new Subject<any>()
  ordSub = new Subject<any>()

  empCount: any
  custCount: any
  ordCount: any

  constructor(
    private mainService: MainService,
    // private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.getEmployees()
    this.getCustomers()
    this.getOrders()
  }

  getEmployees() {
    const employeesObservable = this.mainService.getEmployees();

    employeesObservable.subscribe(
      (data:any) => {
        this.empCount = data.length
      },
      (err:any) => {
        console.error(err)
      }
    )
  }

  getCustomers() {
    const customersObservable = this.mainService.getCustomers();

    customersObservable.subscribe(
      (data) => {
        this.custCount = data.length
      },
      (err) => {
        console.error(err)
      }
    )
  }

  getOrders() {
    // const ordersObservable = this.orderService.getOrders();

    // ordersObservable.subscribe(
    //   (data) => {
    //     this.ordCount = data.length
    //   },
    //   (err) => {
    //     console.error(err)
    //   }
    // )
  }

}
