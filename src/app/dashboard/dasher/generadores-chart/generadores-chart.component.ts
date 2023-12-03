import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Generador } from 'src/app/core/models/generadores';
import { NoElectrificados } from 'src/app/core/models/no-electrificados';
import { CsvService } from 'src/app/services/csvreader.service';

@Component({
  selector: 'app-generadores-chart',
  templateUrl: './generadores-chart.component.html',
  styleUrls: ['./generadores-chart.component.scss']
})
export class GeneradoresChartComponent implements OnInit , OnChanges {
  @Input() title: string = 'Centrales Generadoras en ';
  @Input() selectedProvince: string = 'Azua';
  @Input() generadoresData: Generador[] = [];

  public Highcharts: typeof Highcharts = Highcharts; // required
  public chartOptions: Highcharts.Options = {};

  provinceData : Generador[] | undefined;

  constructor(private csvService: CsvService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['generadoresData']||changes['selectedProvince']){
      this.loadChart();
    }
  }

  ngOnInit() {
    this.loadChart();
  }

  loadChart(){

    this.provinceData = this.generadoresData.filter((item: Generador) => {
      return item.provincia === this.selectedProvince;
    });

    var fuentes;
    var conteo: Record<string, number> = {};
    if(this.provinceData.length > 0){
      fuentes = this.provinceData.map((item: Generador) => {
        return item.clasific;
      });

      fuentes.forEach((fuente) => {
        if (conteo[fuente]) {
          conteo[fuente]++;
        } else {
          conteo[fuente] = 1;
        }
      });
    }

    console.log(conteo);

    this.chartOptions = {
      chart: {
        type: 'pie',
        plotBackgroundColor: undefined,
        plotBorderWidth: undefined,
        plotShadow: false,
        backgroundColor: 'transparent'
      },
      title: {
        text: this.title + this.selectedProvince
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            alignTo: 'connectors',
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        type: 'pie',
        size: '80%',
        innerSize: '80%',
        data: this.provinceData.length <= 0 ?
        [
          {
            name: 'Generadores',
            y:0,
            value:0
          }
        ]
        : this.getSeries(conteo)
      }]
    };
  }

  getSeries(conteo: any){
    var series = [];
    for (const key in conteo) {
      if (Object.prototype.hasOwnProperty.call(conteo, key)) {
        const element = conteo[key];
        series.push({
          name: key,
          y: element,
          value: element
        });
      }
    }
    return series;
  }
}

