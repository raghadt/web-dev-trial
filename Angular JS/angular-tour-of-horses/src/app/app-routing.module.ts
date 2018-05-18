import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HorsesComponent} from './horses/horses.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{HorseDetailComponent} from './horse-detail/horse-detail.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HorseDetailComponent}, 
  {path: 'horses', component: HorsesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

}
