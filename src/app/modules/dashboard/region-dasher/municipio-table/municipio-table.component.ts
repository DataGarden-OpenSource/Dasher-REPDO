import { Component, OnInit } from '@angular/core';
import { CsvService } from 'src/app/services/csvreader.service';

@Component({
  selector: 'app-municipio-table',
  templateUrl: './municipio-table.component.html',
  styleUrls: ['./municipio-table.component.scss']
})
export class MunicipioTableComponent implements OnInit {
  csvData: any[] = [];

  constructor(private csvService: CsvService) {}

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(){
    this.csvService.getCsvData<any>('assets/csv/poblacion_municipios_elias_pina.csv').subscribe(
      data => {;
        this.csvData = data;
      },
      error => {
        console.error('Error fetching CSV data: ', error);
      }
    );
  }

}
