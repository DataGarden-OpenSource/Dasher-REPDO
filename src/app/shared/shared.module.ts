import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from './kpi-card/kpi-card.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CamelCaseFormatterPipe } from './pipes/camel-case-formatter.pipe';
import { BarsChartComponent } from './bars-chart/bars-chart.component';



@NgModule({
  declarations: [
    KpiCardComponent,
    LineChartComponent,
    CamelCaseFormatterPipe,
    BarsChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
  ],
  exports: [
    KpiCardComponent,
    LineChartComponent,
    CamelCaseFormatterPipe,
    BarsChartComponent
  ]
})
export class SharedModule { }
