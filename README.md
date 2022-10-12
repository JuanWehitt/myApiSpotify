# myApiSpotify
Api con manejo de la api de Spotify
Se exponen tres endpoints donde se puede consultar:

* Un artista por el id
* Los albums de un artista
* Los traks de un album, poniendo un limite de traks para mostrar.

Para tener las apis disponibles en el servidor y correr la aplicacion "app.js", es necesario:

- descargar e instalar node.js (https://nodejs.org/es/download/)
- configurar el archivo .env

El archivo .env debe ser creado en la raiz del proyecto y contener:

PORT= NRO_DE_PUERTO
CLIENT_ID=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA
CLIENT_SECRET=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA
REDIRECT_URI=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA

Estos valores se enviaran personalmente.

Al correr la app, debemos entrar en localhost:NRO_DE_PUERTO y loguearse en Spotify.
Al loguearse nos dará un token que debemos copiar para hacer las pruebas en Postman.









