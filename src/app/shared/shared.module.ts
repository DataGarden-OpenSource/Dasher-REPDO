import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardComponent } from './kpi-card/kpi-card.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CamelCaseFormatterPipe } from './pipes/camel-case-formatter.pipe';



@NgModule({
  declarations: [
    KpiCardComponent,
    LineChartComponent,
    CamelCaseFormatterPipe
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
  ],
  exports: [
    KpiCardComponent,
    LineChartComponent,
    CamelCaseFormatterPipe
  ]
})
export class SharedModule { }
