import { parse } from './../../../../node_modules/postcss/lib/postcss.d';
import { AccesoElectricidad, mapToAccesoElectricidad } from './../../core/models/acceso-electricidad';
import { IndicePobreza, mapIndicePobreza } from './../../core/models/indice-pobreza';
import { ResumenVivienda, mapResumenVivienda } from './../../core/models/vivienda';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Generador, mapGenerador } from 'src/app/core/models/generadores';
import { InfantMortalityRate, mapToInfantMortalityRate } from 'src/app/core/models/indice-mortalidad';
import { NoElectrificados, mapNoElectrificados } from 'src/app/core/models/no-electrificados';
import { CsvService } from 'src/app/services/csvreader.service';

@Component({
  selector: 'app-dasher',
  templateUrl: './dasher.component.html',
  styleUrls: ['./dasher.component.scss']
})
export class DasherComponent implements OnInit {

  constructor(private csvService: CsvService) {
    this.loadIndiceEnergetico();
    this.loadNoElectrificados();
    this.loadGeneradores();
    this.loadResumenVivienda();
    this.loadKPIS();
    this.loadLineCharts();
    this.loadMapChart('masked');
  }

  myType = ChartType.GeoChart

  myData = [
    ['Azua', 58.1],
    ['Baoruco', 57.2],
    ['Barahona', 56.3],
    ['Dajabón', 45.6],
    ['Distrito Nacional', 28.3],
    ['Duarte', 59.4],
    ['El Seibo', 61.7],
    ['Elías Piña', 64.7],
    ['Espaillat', 41.4],
    ['Hato Mayor', 55.5],
    ['Hermanas Mirabal', 50.0],
    ['Independencia', 62.2],
    ['La Altagracia', 51.2],
    ['La Romana', 43.0],
    ['La Vega', 49.7],
    ['María Trinidad Sánchez', 54.6],
    ['Monseñor Nouel', 48.5],
    ['Monte Cristi', 53.7],
    ['Monte Plata', 58.1],
    ['Pedernales', 92.10],
    ['Peravia', 49.3],
    ['Puerto Plata', 50.0],
    ['Samaná', 55.1],
    ['San Cristóbal', 51.1],
    ['San José de Ocoa', 58.5],
    ['San Juan', 56.4],
    ['San Pedro de Macorís', 47.8],
    ['Sánchez Ramírez', 54.3],
    ['Santiago', 35.6],
    ['Santiago Rodríguez', 53.5],
    ['Santo Domingo', 35.4],
    ['Valverde', 54.4]
  ];

  chartColumns = ['Provincia', 'Indice de Pobreza Energética'];

  myOptions = {
    regioncoderVersion: 1,
    region: 'DO',
    displayMode: 'regions',
    resolution: 'provinces',
    colorAxis: { minValue: 0, maxValue: 100, colors: ['green', 'yellow', 'red'] },
    backgroundColor: { fill:'transparent' }
  }

  selectedProvince: string = 'Pedernales';

  KPI1title = 'Pobreza energetica';
  KPI2title = 'Pobreza energetica rural';
  KPI3title = 'Viviendas totales';
  KPI4title = 'Cantidad de Generadores';
  lineChart1Title = 'Acceso a la electricidad (% de población)';
  columnChartTitle = 'Cantidad de Centros de Salud';

  KPI1value = 0;
  KPI2value = 0;
  KPI3value = 0;
  KPI4value = 0;

  noElectrificadosData : NoElectrificados[] = [];
  generadoresData: Generador[] = [];
  resumenViviendaData: ResumenVivienda[] = [];
  IndicePobrezaData: IndicePobreza[] = [];
  accesoElectricidadData: any[] = [];
  indiceMortalidadData: any[] = [];


  ngOnInit(): void {

  }

  onSelect(event: any): void {
    var selectedIndex = event.selection[0].row;
    this.selectedProvince = String(this.myData[selectedIndex][0]);
    this.loadKPIS();
  }

  loadNoElectrificados(){
    this.csvService.getCsvData<NoElectrificados>('assets/csv/no-electrificados.csv').subscribe(
      data => {;
        this.noElectrificadosData = data.map((item: NoElectrificados) => { return mapNoElectrificados(item) });
        this.loadKPIS();
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );
  }

  loadGeneradores(){
    this.csvService.getCsvData<Generador>('assets/csv/generadores.csv').subscribe(
      data => {;
        this.generadoresData = data.map((item: Generador) => { return mapGenerador(item) });
        this.loadKPIS();
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );
  }

  loadIndiceEnergetico(){
    this.csvService.getCsvData<IndicePobreza>('assets/csv/indice-pobreza.csv').subscribe(
      data => {;
        this.IndicePobrezaData = data.map((item: IndicePobreza) => { return mapIndicePobreza(item) });
        this.loadKPIS();
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );
  }

  loadResumenVivienda(){
    this.csvService.getCsvData<ResumenVivienda>('assets/csv/resumen-vivienda.csv').subscribe(
      data => {;
        this.resumenViviendaData = data.map((item: ResumenVivienda) => { return mapResumenVivienda (item) });
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );
  }

  loadKPIS(){
    //get KPI1
    this.IndicePobrezaData.find((item: any) => {
      if (item.provincia === this.selectedProvince) {
        this.KPI1value = parseFloat ((item.total * 100).toFixed(3));
      }
    });
    //get KPI2
    this.IndicePobrezaData.find((item: any) => {
      if(item.provincia === this.selectedProvince){
        this.KPI2value = parseFloat((item.rural * 100).toFixed(3));
      }
    });
    //get KPI3
    this.resumenViviendaData.find((item: ResumenVivienda) => {
      if(item.provincia === this.selectedProvince){
        this.KPI3value = item.viviendasParticulares+item.viviendasColectivas;
      }
    });
    //get KPI4
    this.KPI4value = 0;
    this.generadoresData.forEach((item: Generador) => {
      if(item.provincia === this.selectedProvince){
        this.KPI4value += 1;
      }
    });

  }

  loadLineCharts(){
    this.csvService.getCsvData<AccesoElectricidad>('assets/csv/acceso-electricidad.csv').subscribe(
      data => {;
        this.accesoElectricidadData = data.map((item: AccesoElectricidad) => { return mapToAccesoElectricidad(item) });
        this.loadKPIS();
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );

    this.csvService.getCsvData<InfantMortalityRate>('assets/csv/infant_mortality_rates.csv').subscribe(
      data => {
        var indiceMortalidad = data.map((item: InfantMortalityRate) => { return mapToInfantMortalityRate(item) });
        this.indiceMortalidadData = [{
          'name': 'República Dominicana',
          'data': indiceMortalidad.map((item: InfantMortalityRate) => {
            return [item.year, item.mortalityRate];
          })
        }]
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );
  }

  loadMapChart(indice: string) {

    var tempDataList: (string | number)[][] = [];

    this.csvService.getCsvData<IndicePobreza>('assets/csv/indice-pobreza.csv').subscribe(
      data => {;
        this.IndicePobrezaData = data.map((item: IndicePobreza) => { return mapIndicePobreza(item) })
        this.IndicePobrezaData.forEach((item: IndicePobreza) => {
          switch (indice) {
              case 'total':
                tempDataList.push([item.provincia, item.total]);break;
              case 'rural':
                tempDataList.push([item.provincia, item.rural]);break;
              case 'urbana':
                tempDataList.push([item.provincia, item.urbana]);break;
              case 'masked':
                if(item.provincia === 'Pedernales') {tempDataList.push([item.provincia, item.rural]);break;}
                tempDataList.push([item.provincia, item.urbana]);break;
              default:
                tempDataList.push([item.provincia, item.total]);break;
            }
          }
        );

        this.myData.forEach((item: any) => {
          const tempItem = tempDataList.find((tempItem: any) => item[0] === tempItem[0]);
          if (tempItem) {
            item[1] = Number(tempItem[1]) * 100;
          }
        });

      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );

  }

}
