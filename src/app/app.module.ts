import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DasherComponent } from './dashboard/dasher/dasher.component';
import { SharedModule } from './shared/shared.module';
import { NoElectrificadoChartComponent } from './dashboard/dasher/no-electrificado-chart/no-electrificado-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { GeneradoresChartComponent } from './dashboard/dasher/generadores-chart/generadores-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DasherComponent,
    NoElectrificadoChartComponent,
    GeneradoresChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HighchartsChartModule,
    HttpClientModule,
    GoogleChartsModule.forRoot({ mapsApiKey: 'AIzaSyCyg8PduZ1Av2zYlunDtl0w73vTGQmB48U' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
