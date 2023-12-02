import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bars-chart',
  templateUrl: './bars-chart.component.html',
  styleUrls: ['./bars-chart.component.scss']
})
export class BarsChartComponent implements OnInit {
  @Input() title: string = '';
  @Input() seriesData: any[] = [{'name':'Centro de Diagnostico', 'data':[0]},
  {'name':'CPN', 'data':[6]},
  {'name':'Unap', 'data':[9]},
  {'name':'Hospitales', 'data':[1]}];

  public Highcharts: typeof Highcharts = Highcharts; // required
  public chartOptions: Highcharts.Options = {};
  series = [{'name':'pdernales', 'data':[[25]]}];


  constructor() { }

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
        type: 'column',
      },
      title: {
        text: this.title,
      },
      xAxis: {
        categories: ['Pedernales'],
      },
      yAxis: {
        title: {
          text: 'Cantidad de Centros',
        },
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          }
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
