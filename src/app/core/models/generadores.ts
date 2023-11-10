
// Model for Generadores.csv
export interface Generador {
  agenteMEM: string;
  capInstOC: number;
  clasific: string;
  email: string;
  fuentePri: string;
  nombre: string;
  provincia: string;
  ptotal12me: number;
  startYear: number;
  website: string;
}

// Mapper for Generadores.csv
export function mapGenerador(data: any): Generador{
  return {
    agenteMEM: data['AgenteMEM'],
    capInstOC: typeof data['CapInstOC'] === 'string' ? parseFloat(data['CapInstOC'].replace(',', '.')):0,
    clasific: data['Clasific'],
    email: data['Email'],
    fuentePri: data['FuentePri'],
    nombre: data['Nombre'],
    provincia: data['Provincia'],
    ptotal12me: typeof data['Ptotal12me'] === 'string' ? parseFloat(data['Ptotal12me'].replace('.', '').replace(',', '.')):0,
    startYear: parseFloat(data['StartYear']),
    website: data['Website']
  };
}
