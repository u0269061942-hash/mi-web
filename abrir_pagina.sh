#!/bin/bash
echo "Iniciando servidor local para Clásicos Salamanca..."
cd "$(dirname "$0")"
python3 -m http.server 8080 &
sleep 1
xdg-open http://localhost:8080/clasicos_salamanca.html
echo "Pulsa Ctrl+C para cerrar el servidor."
wait
