import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http: HttpClient, private papa: Papa) {}

  public getCsvData<T>(filePath: string): Observable<T[]> {
    return this.http.get(filePath, { responseType: 'text' }).pipe(
      map(csvData => this.parseCsvData<T>(csvData))
    );
  }

  private parseCsvData<T>(csvData: string): T[] {
    let parsedData: T[] = [];
    this.papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        parsedData = result.data as T[];
      }
    });
    return parsedData;
  }
}
