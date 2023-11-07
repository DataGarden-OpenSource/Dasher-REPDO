import { Component, OnInit } from '@angular/core';
import { NoElectrificados } from 'src/app/core/models/no-electrificados';
import { CsvService } from 'src/app/services/csvreader.service';

@Component({
  selector: 'app-no-electrificado-chart',
  templateUrl: './no-electrificado-chart.component.html',
  styleUrls: ['./no-electrificado-chart.component.scss']
})
export class NoElectrificadoChartComponent implements OnInit {

  constructor(private csvService: CsvService) { }

  noElectrificadosData : NoElectrificados[] = [];

  chartData = [];



  ngOnInit() {
    this.csvService.getCsvData<NoElectrificados>('assets/no-electrificados.csv').subscribe(
      data => {
        console.log(data);
        this.noElectrificadosData = data;
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );
  }



}
