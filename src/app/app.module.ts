import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DasherComponent } from './modules/dashboard/dasher/dasher.component';
import { SharedModule } from './shared/shared.module';
import { NoElectrificadoChartComponent } from './modules/dashboard/dasher/no-electrificado-chart/no-electrificado-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { GeneradoresChartComponent } from './modules/dashboard/dasher/generadores-chart/generadores-chart.component';
import { RegionDasherComponent } from './modules/dashboard/region-dasher/region-dasher.component';
import { AccesoLineChartComponent } from './modules/dashboard/dasher/acceso-line-chart/acceso-line-chart.component';
import { MunicipioTableComponent } from './modules/dashboard/region-dasher/municipio-table/municipio-table.component';
import { SolargeoComponent } from './modules/dashboard/solargeo/solargeo.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerComponent } from './modules/pdf-viewer/pdf-viewer.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowcaseComponent } from './modules/showcase/showcase.component';
import { ImageSlideComponent } from './modules/showcase/image-slide/image-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    DasherComponent,
    NoElectrificadoChartComponent,
    GeneradoresChartComponent,
    RegionDasherComponent,
    AccesoLineChartComponent,
    MunicipioTableComponent,
    SolargeoComponent,
    PdfViewerComponent,
    ShowcaseComponent,
    ImageSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HighchartsChartModule,
    HttpClientModule,
    GoogleChartsModule.forRoot({ mapsApiKey: 'AIzaSyCyg8PduZ1Av2zYlunDtl0w73vTGQmB48U' }),
    NgxExtendedPdfViewerModule,
    NgbModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
