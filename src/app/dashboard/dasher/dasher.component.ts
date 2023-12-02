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

  constructor(private csvService: CsvService) { }

  myType = ChartType.GeoChart

  myData = [
    ['Azua', 63.5],
    ['Baoruco', 65.4],
    ['Barahona', 61.1],
    ['Dajabón', 54.3],
    ['Distrito Nacional', 28.3],
    ['Duarte', 46.6],
    ['El Seibo', 68.3],
    ['Elías Piña', 79.3],
    ['Espaillat', 42.8],
    ['Hato Mayor', 59.9],
    ['Hermanas Mirabal', 44.3],
    ['Independencia', 63.8],
    ['La Altagracia', 53.4],
    ['La Romana', 46.1],
    ['La Vega', 44.6],
    ['María Trinidad Sánchez', 47.8],
    ['Monseñor Nouel', 40.4],
    ['Monte Cristi', 59.7],
    ['Monte Plata', 63.5],
    ['Pedernales', 71.7],
    ['Peravia', 47.4],
    ['Puerto Plata', 47.5],
    ['Samaná', 54.3],
    ['San Cristóbal', 48.6],
    ['San José de Ocoa', 64.5],
    ['San Juan', 60.7],
    ['San Pedro de Macorís', 49.9],
    ['Sánchez Ramírez', 48.3],
    ['Santiago', 36.4],
    ['Santiago Rodríguez', 50.2],
    ['Santo Domingo', 36.2],
    ['Valverde', 51.1]
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
    this.loadIndiceEnergetico();
    this.loadNoElectrificados();
    this.loadGeneradores();
    this.loadResumenVivienda();
    this.loadKPIS();
    this.loadLineCharts();
    this.loadMapChart('masked');
  }

  onSelect(event: any): void {
    var selectedIndex = event.selection[0].row;
    this.selectedProvince = String(this.myData[selectedIndex][0]);
    console.log("onSelectTrigger: "+this.selectedProvince);
    this.loadKPIS();
  }

  loadNoElectrificados(){
    this.csvService.getCsvData<NoElectrificados>('assets/csv/no-electrificados.csv').subscribe(
      data => {;
        this.noElectrificadosData = data.map((item: NoElectrificados) => { return mapNoElectrificados(item) });
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
        console.log(this.generadoresData);
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
        console.log(this.IndicePobrezaData);
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
        console.log(this.resumenViviendaData);
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
        this.KPI1value = item.total.toFixed(3);
      }
    });
    //get KPI2
    this.IndicePobrezaData.find((item: any) => {
      if(item.provincia === this.selectedProvince){
        this.KPI2value = item.rural.toFixed(3);
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
        console.log(this.accesoElectricidadData);
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
        console.log(this.indiceMortalidadData);
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
          tempDataList.find((tempItem: any) => {
            if (item[0] === tempItem[0]) {
              item[1] = tempItem[1]*100;
            }
          });
        });

      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );

  }

}
