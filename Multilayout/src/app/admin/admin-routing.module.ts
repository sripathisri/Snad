import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { DeportmentComponent } from './deportment/deportment.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: '',component:AdminDashbordComponent},
  {path: 'employee',component:EmployeeComponent},
  {path:'deportment',component:DeportmentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
