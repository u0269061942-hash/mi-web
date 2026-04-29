# Cómo Actualizar tu Google Sheets con URLs Directas de Imágenes

## Opción A: AUTOMÁTICO (Recomendado) - Usar Google Apps Script

### Paso 1: Abre tu Google Sheets
Ve a: https://docs.google.com/spreadsheets/d/e/2PACX-1vRkYUy5O3wpSKkrzp2zeiZsYq2cg7rTR4Q1ahtknnE9HYzyVWX7JAdp4OH5jFXoNf0NOdua5QoA8zCG/edit

### Paso 2: Abre el Editor de Apps Script
1. En el menú, haz clic en **Extensiones**
2. Selecciona **Apps Script**
3. Se abrirá una nueva pestaña con el editor

### Paso 3: Copia el Script
1. Borra todo el código existente (si hay)
2. Copia el contenido de `google_apps_script.js` 
3. Pégalo en el editor
4. Presiona **Ctrl+S** para guardar

### Paso 4: Ejecuta el Script
1. En la barra de funciones (arriba), selecciona **extraerURLsDirectas**
2. Haz clic en el botón ▶️ (Ejecutar)
3. Autoriza la aplicación cuando te lo pida
4. Espera a que termine (verás un mensaje "✅ Proceso completado" en los logs)

### Paso 5: Verifica el resultado
- Vuelve a tu Google Sheets
- Verás una nueva columna **"Imagen directa"** con todas las URLs

---

## Opción B: MANUAL - Copiar las URLs directas

Si prefieres hacerlo manualmente, aquí están TODAS las URLs correctas:

| Fila | Imagen antigua | URL Directa |
|------|---|---|
| 2 | https://ibb.co/JjmdGKsX | https://i.ibb.co/PGFYPN6B/foto.png |
| 3 | https://ibb.co/XwMjYZF | https://i.ibb.co/mxgbNCh/foto1.png |
| 4 | https://ibb.co/TxYDdJG3 | https://i.ibb.co/JwmWg8TJ/foto2.png |
| 5 | https://ibb.co/nMsskqNV | https://i.ibb.co/3myyh598/foto4.png |
| 6 | https://ibb.co/Kp7yRSVS | https://i.ibb.co/S40vWGVG/foto5.png |
| 7 | https://ibb.co/jPSW0FbR | https://i.ibb.co/fzsn67qv/foto6.png |
| 8 | https://ibb.co/DHL0WVCV | https://i.ibb.co/wFY5g0W0/foto7.png |
| 9 | https://ibb.co/LzLrNYCJ | https://i.ibb.co/0jgKsmfF/foto8.png |
| 10 | https://ibb.co/qYBTq0vq | https://i.ibb.co/jkhn0VS0/foto9.png |
| 11 | https://ibb.co/bjQ5yjfd | https://i.ibb.co/V0JYh0KB/foto16.png |
| 12 | https://ibb.co/rfxWz4Zq | https://i.ibb.co/Tq4C7mHJ/foto17.png |
| 13 | https://ibb.co/LD4gpjjx | https://i.ibb.co/HLmPgwwt/foto18.png |
| 14 | https://ibb.co/6qW5Y9x | https://i.ibb.co/jjrFh02/foto19.png |
| 15 | https://ibb.co/S441KQ5F | https://i.ibb.co/YFFKtDPH/foto20.png |
| ... | (ver archivo bicicletas_espanolas_directos.csv para todas) | ... |

---

## Paso para tu página web

Una vez actualizado tu Google Sheets con las URLs directas:

1. Publica la hoja nuevamente como CSV (File > Share > Publish to the web)
2. En tu HTML, usa esta nueva URL publicada para cargar las bicicletas
3. Reemplaza las referencias a `ibb.co/...` por las URLs directas en los campos de imágenes

---

## Archivos generados para ti

✅ **bicicletas_espanolas_directos.csv** - CSV completo con columna de URLs directas
✅ **urls_directas.js** - Mapeo JavaScript de todas las URLs
✅ **preview_urls.html** - Preview en HTML de todas las imágenes
✅ **google_apps_script.js** - Script para automatizar en Google Sheets

Todos están en: `/home/alex/Escritorio/web santiago/`
