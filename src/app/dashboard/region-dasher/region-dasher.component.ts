import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

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
    zoomLevel: 9,
    showTooltip: true,
    showInfoWindow: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
