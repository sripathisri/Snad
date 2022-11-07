import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoansComponent } from './loans/loans.component';
import { LoantypesComponent } from './loantypes/loantypes.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'loans',component:LoansComponent,outlet:'addloans     '},
  {path: 'loans-types',component:LoantypesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
