
// Model for ResumenVivienda.csv
export interface ResumenVivienda {
  code: number;
  provincia: string;
  viviendasParticulares: string;
  viviendasColectivas: string;
  personasSinVivienda: number;
}

// Mapper for ResumenVivienda.csv
export function mapResumenVivienda(data: any): ResumenVivienda {
  return {
    code: data.Code,
    provincia: data.Provincia,
    viviendasParticulares: data['Viviendas particulares'].replace(/ /g, ''),
    viviendasColectivas: data['Viviendas colectivas'].replace(/ /g, ''),
    personasSinVivienda: data['Personas sin Vivienda']
  };
}
