import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DasherComponent } from './dashboard/dasher/dasher.component';
import { SharedModule } from './shared/shared.module';
import { NoElectrificadoChartComponent } from './dashboard/dasher/no-electrificado-chart/no-electrificado-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DasherComponent,
    NoElectrificadoChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    GoogleChartsModule.forRoot({ mapsApiKey: 'AIzaSyCyg8PduZ1Av2zYlunDtl0w73vTGQmB48U' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
