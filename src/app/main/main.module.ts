import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { MainService } from './shared/main.service';

const routes: Routes = [
  {
     path: 'main', component:MainComponent,
   children:[
  { path: 'Customer', component:CustomerComponent},
  { path: 'employees', component:EmployeesComponent },
  ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    CustomerComponent,
    EmployeesComponent
   ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule

  ],
  providers: [
    MainService
  ],
  bootstrap: []
})
export class MainModule { }
