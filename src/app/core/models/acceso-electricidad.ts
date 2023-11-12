export interface AccesoElectricidad {
  countryName: string;
  countryCode: string;
  indicatorName: string;
  indicatorCode: string;
  years: Array<{ year: number, value: number | null }>;
}

export function mapToAccesoElectricidad(row: any): AccesoElectricidad {
  const accesoElectricidad: AccesoElectricidad = {
      countryName: row['Country Name'],
      countryCode: row['Country Code'],
      indicatorName: row['Indicator Name'],
      indicatorCode: row['Indicator Code'],
      years: []
  };

  // Iterar sobre cada año en la fila
  for (let year = 1960; year <= 2022; year++) {
      const value = row[year.toString()];
      accesoElectricidad.years.push({
          year: year,
          value: value !== '' ? parseFloat(value) : null
      });
  }

  return accesoElectricidad;
}
