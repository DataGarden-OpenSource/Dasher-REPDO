import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasherComponent } from './dashboard/dasher/dasher.component';
import { SolargeoComponent } from './dashboard/solargeo/solargeo.component';

const routes: Routes = [
  {path:'', component:DasherComponent},
  {path:'dashboard', component:DasherComponent},
  {path:'solarmap', component:SolargeoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
