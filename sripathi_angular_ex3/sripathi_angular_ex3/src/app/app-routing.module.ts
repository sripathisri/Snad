import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "",loadChildren:()=>import("./login/login.module").then((m)=> m.LoginModule)},

  {path:"dashboard",loadChildren:()=>import("./dashboard/dashboard.module").then((m)=>m.DashboardModule)},

  {path:"department",loadChildren:()=>import("./department/department.module").then((m)=>m.DepartmentModule)},

  {path:"employee",loadChildren:()=>import("./employee/employee.module").then((m)=>m.EmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
