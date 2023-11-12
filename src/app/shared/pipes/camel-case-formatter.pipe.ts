import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseFormatter'
})
export class CamelCaseFormatterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    // Reemplaza camelCase por espacios y mayúsculas
    let formatted = value.replace(/([A-Z])/g, ' $1').trim();

    // Convierte la primera letra de cada palabra en mayúscula
    return formatted.replace(/\b\w/g, char => char.toUpperCase());
  }

}
