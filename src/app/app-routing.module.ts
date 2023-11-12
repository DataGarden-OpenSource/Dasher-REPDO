import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasherComponent } from './dashboard/dasher/dasher.component';
import { RegionDasherComponent } from './dashboard/region-dasher/region-dasher.component';

const routes: Routes = [
  {path:'', component:DasherComponent},
  {path:'dashboard', component:DasherComponent},
  {path:'region', component:RegionDasherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
