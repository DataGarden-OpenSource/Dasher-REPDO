export interface InfantMortalityRate {
  year: number;
  mortalityRate: number | null;
}

export function mapToInfantMortalityRate(row: any): InfantMortalityRate {
  return {
      year: row['Year'],
      mortalityRate: row['Mortality Rate'] !== '' ? parseFloat(row['Mortality Rate']) : null
  };
}
