import { map } from 'rxjs/operators';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NoElectrificados, mapNoElectrificados } from 'src/app/core/models/no-electrificados';
import { CsvService } from 'src/app/services/csvreader.service';

@Component({
  selector: 'app-no-electrificado-chart',
  templateUrl: './no-electrificado-chart.component.html',
  styleUrls: ['./no-electrificado-chart.component.scss']
})
export class NoElectrificadoChartComponent implements OnInit, OnChanges {
  @Input() title: string = 'Viviendas no Electrificadas de ';
  @Input() selectedProvince: string = 'Azua';
  @Input() noElectrificadosData: NoElectrificados[] = [];

  public Highcharts: typeof Highcharts = Highcharts; // required
  public chartOptions: Highcharts.Options = {};

  provinceData : NoElectrificados | undefined;

  constructor(private csvService: CsvService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['noElectrificadosData']||changes['selectedProvince']){
      this.loadChart();
    }
  }

  ngOnInit() {
    this.loadChart();
  }

  loadChart(){
    this.provinceData = this.noElectrificadosData.find((item: NoElectrificados) => item.provincia === this.selectedProvince);

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
        name: 'Porcentaje',
        size: '80%',
        data: [
          {
            name: 'Electrificados',
            y: 1 - this.provinceData?.noElectrificados!,
            value: 1 - this.provinceData?.noElectrificados!// example to select a specific area
          },
          {
            name: 'No Electrificados',
            y: this.provinceData?.noElectrificados,
            value: this.provinceData?.noElectrificados// example to select a specific area
          }
        ]
      }]
    };
  }



}
