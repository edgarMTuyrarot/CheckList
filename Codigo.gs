function doGet(e) {
  var html = HtmlService.createTemplateFromFile('index');
  var evaluated = html.evaluate();
  evaluated.setTitle("Check List por Llamadas") 
  evaluated.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  //evaluated.setFaviconUrl('https://www.freepik.es/icono/cheque_6785304');
  return evaluated.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  

  
}

function include(filename) {
   return HtmlService.createHtmlOutputFromFile(filename)
   .getContent();
}


function guardar(dato){
  var libro = SpreadsheetApp.openById("xxx")
  var ss = libro.getSheetByName("reporte");
  var date = new Date()
  ss.appendRow([
  dato.u,
  dato.linea,
	dato.validaDatos,
	dato.explicaFT,
	dato.vigenciaPromo,
  dato.aumentoPrecio,
  dato.pagoTC,
  dato.mediosPago,
  dato.miPersonal,
  dato.personalPay,
  dato.hub,
  dato.whts,
  dato.encuesta,
  dato.cierre,
  dato.porcentaje,
  date

]);
}