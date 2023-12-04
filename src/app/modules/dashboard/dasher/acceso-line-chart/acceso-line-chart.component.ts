import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as Highcharts from 'highcharts';
import { AccesoElectricidad } from 'src/app/core/models/acceso-electricidad';

@Component({
  selector: 'app-acceso-line-chart',
  templateUrl: './acceso-line-chart.component.html',
  styleUrls: ['./acceso-line-chart.component.scss'],
})
export class AccesoLineChartComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() accesoElectricidadData: AccesoElectricidad[] = [];

  // Supongamos que estas son tus dos instancias del modelo AccesoElectricidad
  acceso1: AccesoElectricidad = {
    countryName: 'País A',
    countryCode: 'PA',
    indicatorName: 'Acceso a la electricidad',
    indicatorCode: 'ACCELC',
    years: [
      { year: 2000, value: 75 },
      { year: 2001, value: 78 },
    ], // y así sucesivamente
  };

  acceso2: AccesoElectricidad = {
    countryName: 'País B',
    countryCode: 'PB',
    indicatorName: 'Acceso a la electricidad',
    indicatorCode: 'ACCELC',
    years: [
      { year: 2000, value: 75 },
      { year: 2001, value: 78 },
    ], // y así sucesivamente
  };
  // Convertir estos datos en series para Highcharts
  series: any[] = [];

  public Highcharts: typeof Highcharts = Highcharts; // required
  public chartOptions: Highcharts.Options = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['accesoElectricidadData']) {
      this.loadChart();
    }
  }

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    // Convertir estos datos en series para Highcharts
    if (this.accesoElectricidadData.length > 0) {
      this.acceso1 = this.accesoElectricidadData[1];
    }

    this.series = [this.acceso1].map((acceso) => ({
      name: acceso.countryName,
      data: acceso.years.map((yearData) => [
        yearData.year,
        yearData.value !== null ? yearData.value : null,
      ]),
    }));

    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: 'transparent'
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
          pointStart: 2010,
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
