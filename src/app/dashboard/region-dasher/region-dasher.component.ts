import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { EstadisticaPoblacional, mapearDatosAPoblacion } from 'src/app/core/models/poblacion-general';
import { CsvService } from 'src/app/services/csvreader.service';

@Component({
  selector: 'app-region-dasher',
  templateUrl: './region-dasher.component.html',
  styleUrls: ['./region-dasher.component.scss']
})
export class RegionDasherComponent implements OnInit {

  chartType = ChartType.Map;
  chartData = [
    [18.87561856420881, -71.7014728168527, 'Elías Piña'] // Coordenadas aproximadas de Elías Piña+
  ];
  chartOptions = {
    mapType: 'styledMap',
    zoomLevel: 9,
    showTooltip: true,
    showInfoWindow: true,
    maps: {
      // Your custom mapTypeId holding custom map styles.
      styledMap: {
        name: 'Styled Map', // This name will be displayed in the map type control.
        styles: [
          {featureType: 'poi.attraction',
           stylers: [{color: '#fce8b2'}]
          },
          {featureType: 'road.highway',
           stylers: [{hue: '#0277bd'}, {saturation: -50}]
          },
          {featureType: 'road.highway',
           elementType: 'labels.icon',
           stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
          },
          {featureType: 'landscape',
           stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
          }
    ]}}
  };

  dataRegional : EstadisticaPoblacional | undefined;

  constructor(private csvService: CsvService) { }

  ngOnInit(): void {
    this.loadRegionalData();
  }

  loadRegionalData() {
      this.csvService.getCsvData<EstadisticaPoblacional>('assets/csv/poblacion_general_elias_pina.csv').subscribe(
        data => {;
          this.dataRegional = mapearDatosAPoblacion(data)
          console.log(this.dataRegional);
        },
        error => {
          console.error('Error fetching CSV data: ', error);
        }
      );
  }


}
