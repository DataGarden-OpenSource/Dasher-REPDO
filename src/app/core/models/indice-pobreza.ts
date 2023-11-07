// Model for IndicePobreza.csv
export interface IndicePobreza {
  provincia: string;
  rural: number; // Store as a decimal number
  urbana: number; // Store as a decimal number
  total: number; // Store as a decimal number
}

// Mapper for IndicePobreza.csv
export function mapIndicePobreza(data: any): IndicePobreza {
  return {
    provincia: data.Provincia,
    rural: parseFloat(data.Rural.replace('%', '')) / 100,
    urbana: parseFloat(data.Urbana.replace('%', '')) / 100,
    total: parseFloat(data.Total.replace('%', '')) / 100
  };
}
