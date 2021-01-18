import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';

const routes: Routes = [
  { path: 'order', component:OrderComponent}
  ]
  

@NgModule({
  declarations: [
      OrderComponent
   ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
  ],
  bootstrap: []
})
export class OrderModule { }
