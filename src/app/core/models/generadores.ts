
// Model for Generadores.csv
export interface Generador {
  agenteMEM: string;
  capInstOC: string;
  clasific: string;
  email: string;
  fuentePri: string;
  nombre: string;
  provincia: string;
  ptotal12me: string;
  startYear: number;
  website: string;
}

// Mapper for Generadores.csv
export function mapGenerador(data: any): Generador {
  return {
    agenteMEM: data.AgenteMEM,
    capInstOC: data.CapInstOC.replace(/,/g, ''),
    clasific: data.Clasific,
    email: data.Email,
    fuentePri: data.FuentePri,
    nombre: data.Nombre,
    provincia: data.Provincia,
    ptotal12me: data.Ptotal12me.replace(/,/g, ''),
    startYear: data.StartYear,
    website: data.Website
  };
}
