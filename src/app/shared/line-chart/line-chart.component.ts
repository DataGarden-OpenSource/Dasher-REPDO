import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() seriesData: any[] = [{'name':'República Dominicana', 'data':[[1994,25]]}];

  public Highcharts: typeof Highcharts = Highcharts; // required
  public chartOptions: Highcharts.Options = {};
  series = [{'name':'República Dominicana', 'data':[[1994,25]]}];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['seriesData']) {
      this.loadChart();
    }
  }

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    console.log(this.seriesData);
    if (this.seriesData.length > 0) {
      this.series = this.seriesData;
    }

    this.chartOptions = {
      chart: {
        type: 'line',
      },
      title: {
        text: this.title,
      },
      xAxis: {
        title: {
          text: 'Año',
        },
      },
      yAxis: {
        title: {
          text: 'Porcentaje de Acceso',
        },
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 1998,
        },
      },
      series: this.series as Highcharts.SeriesOptionsType[],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
  }

}
