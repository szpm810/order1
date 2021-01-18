import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { MenuComponent } from './common/menu/menu.component';

const routes: Routes = [
  { 
    path: '',component:MenuComponent }
];//親（最初の画面）から子（リンク先）

@NgModule ({
  declarations:[
    MenuComponent
  ],//親
  imports: [
    RouterModule.forRoot(routes),
　 MainModule
  ],//子
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
