import { IndicePobreza, mapIndicePobreza } from './../../core/models/indice-pobreza';
import { ResumenVivienda, mapResumenVivienda } from './../../core/models/vivienda';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { Generador, mapGenerador } from 'src/app/core/models/generadores';
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
    backgroundColor: '#81d4fa',
  }

  selectedProvince: string = 'Azua';

  KPI1title = 'Indice de pobreza energetica';
  KPI2title = 'Pobreza energetica rural';
  KPI3title = 'Total de viviendas';
  KPI4title = 'Cantidad de Generadores';

  KPI1value = 0;
  KPI2value = 0;
  KPI3value = 0;
  KPI4value = 0;

  noElectrificadosData : NoElectrificados[] = [];
  generadoresData: Generador[] = [];
  resumenViviendaData: ResumenVivienda[] = [];
  IndicePobrezaData: IndicePobreza[] = [];

  ngOnInit(): void {
    this.loadNoElectrificados();
    this.loadGeneradores();
    this.loadIndiceEnergetico();
    this.loadResumenVivienda();
    this.loadKPIS();
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
    const selectedProvinceData = this.myData.find((item: any) => item[0] === this.selectedProvince);
    if (selectedProvinceData) {
      this.KPI1value = Number(selectedProvinceData[1]);
    }
  }

}
