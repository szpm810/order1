import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return this.http.get('/api/v1/orders')
  }

  getOrderDetails(): Observable<any> {
    return this.http.get('/api/v1/orderDetails')
  }

  getProducts(): Observable<any> {
    return this.http.get('/api/v1/products')
  }

  addOrder(orderData: any): Observable<any> {
    return this.http.post('/api/v1/orders', orderData)
  }

  addOrderDetail(orderDetailData: any): Observable<any> {
    return this.http.post('/api/v1/orderDetails', orderDetailData)
  }

  updateOrder( orderId: any,orderData: any): Observable<any> {
    return this.http.put('/api/v1/orders/' + orderId, orderData)
  }

  updateOrderDetail( orderDetailId: any,orderDetailData: any): Observable<any> {
    return this.http.put('/api/v1/orderDetails/' + orderDetailId, orderDetailData)
  }

  deleteOrder(orderId: string): Observable<any> {
    return this.http.delete('/api/v1/orders/' + orderId)
  }

  deleteOrderDetail(orderDetailId: string): Observable<any> {
    return this.http.delete('/api/v1/orderDetails/' + orderDetailId)
  }

  exportOrders() {
    return this.http.get("/api/v1/orders/exportOrders")
  }

  exportOrderDetails(detail:any) {
    return this.http.post("/api/v1/orderDetails/exportSelectOrderDetails", detail)
  }

  exportSelectOrders(order:any){
    return this.http.post("/api/v1/orderDetails/exportSelectOrders", order)
  }
}
