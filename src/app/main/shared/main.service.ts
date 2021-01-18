import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class MainService {

  constructor(private http: HttpClient){}

  getEmployees(): Observable<any> {
    return this.http.get('/api/employees')
  }

  getCustomers(): Observable<any> {
    return this.http.get('/api/Customer')
  }

  getDepartments(): Observable<any> {
    return this.http.get('/api/departments')
  }

  getEmployee(employeeId:any): Observable<any> {
    return this.http.get('/api/employees' + employeeId)
  }

  addEmployee(employeeData: any): Observable<any> {
    return this.http.post('/api/employees', employeeData)
  }

  addCustomer(CustomerData: any): Observable<any> {
    return this.http.post('/api/customers', CustomerData)
  }

  updateEmployee( employeeId: any,employeeData: any): Observable<any> {
    return this.http.put('/api/employees/' + employeeId, employeeData)
  }

  updateCustomer(customerId: any, customerData: any): Observable<any> {
    return this.http.put('/api/customers/' + customerId, customerData)
  }

  deleteEmployee(employeeId: string): Observable<any> {
    // const url = `${this.employeeUrl}/${employeeId}`
    return this.http.delete('/api/employees/' + employeeId)
  }

  deleteCustomer(customerId: string): Observable<any> {
    return this.http.delete('/api/customers/' + customerId)
  }

  exportEmployees() {
    return this.http.get("/api/employees/exportExcelSheet")
  }

  exportCustomers() {
    return this.http.get("/api/customers/exportExcelSheet")
  }
}