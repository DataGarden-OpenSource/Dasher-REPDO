import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-dasher',
  templateUrl: './dasher.component.html',
  styleUrls: ['./dasher.component.scss']
})
export class DasherComponent implements OnInit {

  constructor() { }

  myType = ChartType.GeoChart

  myData = [
    ['Azua', 63.5],
    ['Bahoruco', 65.4],
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

  indice = 'Indice de pobreza energetica';

  ngOnInit(): void {
  }

}
