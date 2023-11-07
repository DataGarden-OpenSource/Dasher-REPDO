export interface NoElectrificados {
  provincia: string;
  noElectrificados: number; // Store as a decimal number
  coccionCombustiblesNoModernos: number; // Store as a decimal number
}

// Mapper for NoElectrificados.csv
export function mapNoElectrificados(data: any): NoElectrificados {
  return {
    provincia: data.Provincia,
    noElectrificados: parseFloat(data.NoElectrificados.replace('%', '')) / 100,
    coccionCombustiblesNoModernos: parseFloat(data['Cocción Combustibles No Modernos'].replace('%', '')) / 100
  };
}
