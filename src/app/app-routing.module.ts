import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'' , component:LoginComponent},
  {path:'**' , component:PagenotfoundComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
