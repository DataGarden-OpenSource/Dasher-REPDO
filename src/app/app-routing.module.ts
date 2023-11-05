import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasherComponent } from './dashboard/dasher/dasher.component';

const routes: Routes = [
  {path:'', component:DasherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
