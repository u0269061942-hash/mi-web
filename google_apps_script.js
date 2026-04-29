// Script para Google Sheets - Agrega URLs directas de imágenes
// Copia este código en Apps Script de tu Google Sheets (Extensiones > Apps Script)

function extraerURLsDirectas() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Encontrar columna de Imagen (asume que es la primera)
  let imagenCol = -1;
  for (let i = 0; i < data[0].length; i++) {
    if (data[0][i].toString().toLowerCase().includes('imagen')) {
      imagenCol = i;
      break;
    }
  }
  
  if (imagenCol === -1) {
    Logger.log("No se encontró columna 'Imagen'");
    return;
  }
  
  // Agregar columna "Imagen directa" si no existe
  let directaCol = -1;
  for (let i = 0; i < data[0].length; i++) {
    if (data[0][i].toString().toLowerCase() === 'imagen directa') {
      directaCol = i;
      break;
    }
  }
  
  if (directaCol === -1) {
    // Insertar nueva columna
    sheet.insertColumns(imagenCol + 2);
    directaCol = imagenCol + 1;
    sheet.getRange(1, directaCol + 1).setValue('Imagen directa');
  }
  
  // Procesar cada fila
  for (let row = 2; row < data.length; row++) {
    const pageUrl = data[row][imagenCol].toString().trim();
    
    if (pageUrl.length === 0) continue;
    
    try {
      // Obtener el HTML de la página de ibb.co
      const response = UrlFetchApp.fetch(pageUrl, {muteHttpExceptions: true, timeout: 15});
      const html = response.getContentText();
      
      // Buscar la URL directa usando regex
      const matches = html.match(/https:\/\/i\.ibb\.co\/[A-Za-z0-9/._-]+\.(?:jpg|png|gif|webp)/);
      
      if (matches && matches.length > 0) {
        const directUrl = matches[0];
        sheet.getRange(row + 1, directaCol + 1).setValue(directUrl);
        Logger.log(`Fila ${row}: ${directUrl}`);
      } else {
        Logger.log(`Fila ${row}: No se encontró URL directa`);
      }
    } catch (error) {
      Logger.log(`Error en fila ${row}: ${error}`);
    }
    
    // Esperar un poco para no saturar las solicitudes
    Utilities.sleep(500);
  }
  
  Logger.log("✅ Proceso completado");
}
