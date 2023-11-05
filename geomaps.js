function setText(id, newvalue) {
  var s = document.getElementById(id);
  s.innerHTML = newvalue;
}

google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyCyg8PduZ1Av2zYlunDtl0w73vTGQmB48U'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
    ['Provincia','Indice de Pobreza Energética','Viviendas totales','Cantidad de Generadores'],
    ["Azua",63.5,3.4,3.4],
    ["Bahoruco",65.4,3.4,3.4],
    ["Barahona",61.1,3.4,3.4],
    ["Dajabón",54.3,3.4,3.4],
    ["Distrito Nacional",28.3,3.4,3.4],
    ["Duarte",46.6,3.4,3.4],
    ["El Seibo",68.3,3.4,3.4],
    ["Elías Piña",79.3,3.4,3.4],
    ["Espaillat",42.8,3.4,3.4],
    ["Hato Mayor",59.9,3.4,3.4],
    ["Hermanas Mirabal",44.3,3.4,3.4],
    ["Independencia",63.8,3.4,3.4],
    ["La Altagracia",53.4,3.4,3.4],
    ["La Romana",46.1,3.4,3.4],
    ["La Vega",44.6,3.4,3.4],
    ["María Trinidad Sánchez",47.8,3.4,3.4],
    ["Monseñor Nouel",40.4,3.4,3.4],
    ["Monte Cristi",59.7,3.4,3.4],
    ["Monte Plata",63.5,3.4,3.4],
    ["Pedernales",71.7,3.4,3.4],
    ["Peravia",47.4,3.4,3.4],
    ["Puerto Plata",47.5,3.4,3.4],
    ["Samaná",54.3,3.4,3.4],
    ["San Cristóbal",48.6,3.4,3.4],
    ["San José de Ocoa",64.5,3.4,3.4],
    ["San Juan",60.7,3.4,3.4],
    ["San Pedro de Macorís",49.9,3.4,3.4],
    ["Sánchez Ramírez",48.3,3.4,3.4],
    ["Santiago",36.4,3.4,3.4],
    ["Santiago Rodríguez",50.2,3.4,3.4],
    ['Santo Domingo',36.2,4.1,3.4],
    ["Valverde",51.1,3.4,3.4]
  ]);


  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1]);

  var GeoChart = new google.visualization.ChartWrapper({
    chartType: 'GeoChart',
    containerId: 'chart_div',
    dataTable: view,
    options: {
      regioncoderVersion: 1,
      region: 'DO',
      displayMode: 'regions',
      resolution: 'provinces',
      colorAxis: {minValue: 0, maxValue:100, colors: ['green','yellow', 'red']},
      backgroundColor: '#81d4fa',
      
    }
  });

  google.visualization.events.addListener(GeoChart, 'ready', function () {
    google.visualization.events.addListener(GeoChart.getChart(), 'select', function () {
      var selection = GeoChart.getChart().getSelection();
      if (selection.length > 0) {
        setText('nombre-provincia',data.getValue(selection[0].row, 0));
        setText('indice-p',data.getValue(selection[0].row, 1));
        setText('viviendas-t',data.getValue(selection[0].row, 2));
        setText('generadores',data.getValue(selection[0].row, 3));
        
        //window.open('http://' + data.getValue(selection[0].row, 2), '_blank');
      }
    });
  });

  GeoChart.draw();
}