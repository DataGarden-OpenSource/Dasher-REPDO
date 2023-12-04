import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasherComponent } from './modules/dashboard/dasher/dasher.component';
import { SolargeoComponent } from './modules/dashboard/solargeo/solargeo.component';
import { PdfViewerComponent } from './modules/pdf-viewer/pdf-viewer.component';
import { ShowcaseComponent } from './modules/showcase/showcase.component';

const routes: Routes = [
  {path:'', component:DasherComponent},
  {path:'presenter',component: PdfViewerComponent},
  {path:'dashboard', component:DasherComponent},
  {path:'solarmap', component:SolargeoComponent},
  {path:'showcase', component:ShowcaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
