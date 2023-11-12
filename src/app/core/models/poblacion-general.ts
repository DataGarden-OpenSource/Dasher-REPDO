export interface EstadisticaPoblacional {
  poblacionTotal: number;
  hombres: number;
  mujeres: number;
  poblacionUrbana: number;
  poblacionRural: number;
  viviendasUrbanas: number;
  viviendasRurales: number;
  densidadPoblacional: number;
}

export function mapearDatosAPoblacion(datos: any[]): EstadisticaPoblacional {
  const estadistica = {
    poblacionTotal: 0,
    hombres: 0,
    mujeres: 0,
    poblacionUrbana: 0,
    poblacionRural: 0,
    viviendasUrbanas: 0,
    viviendasRurales: 0,
    densidadPoblacional: 0,
  };

  datos.forEach(row => {
    switch (row.Categoria) {
      case 'Población Total':
        estadistica.poblacionTotal = parseInt(row.Cantidad, 10);
        break;
      case 'Hombres':
        estadistica.hombres = parseInt(row.Cantidad, 10);
        break;
      case 'Mujeres':
        estadistica.mujeres = parseInt(row.Cantidad, 10);
        break;
      case 'Población Urbana':
        estadistica.poblacionUrbana = parseInt(row.Cantidad, 10);
        break;
      case 'Población Rural':
        estadistica.poblacionRural = parseInt(row.Cantidad, 10);
        break;
      case 'Viviendas Urbanas':
        estadistica.viviendasUrbanas = parseInt(row.Cantidad, 10);
        break;
      case 'Viviendas Rurales':
        estadistica.viviendasRurales = parseInt(row.Cantidad, 10);
        break;
      case 'Densidad Poblacional':
        estadistica.densidadPoblacional = parseInt(row.Cantidad, 10);
        break;
    }
  });

  return estadistica;
}
