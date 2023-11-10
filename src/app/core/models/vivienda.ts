
// Model for ResumenVivienda.csv
export interface ResumenVivienda {
  code: number;
  provincia: string;
  viviendasParticulares: number;
  viviendasColectivas: number;
  personasSinVivienda: number;
}

// Mapper for ResumenVivienda.csv
export function mapResumenVivienda(data: any): ResumenVivienda {
  console.log();
  return {
    code: data['Code'],
    provincia: data['Provincia'].trim(),
    viviendasParticulares: parseInt(data['Viviendas particulares'].trim().replace(" ","")),
    viviendasColectivas: parseInt(data['Viviendas colectivas'].trim().replace(" ","")),
    personasSinVivienda: parseFloat(data['Personas sin Vivienda'].trim())
  };
}
