# myApiSpotify
Api con manejo de la api de Spotify
Se exponen tres endpoints donde se puede consultar:

* Un artista por el id
* Los albums de un artista
* Los traks de un album, poniendo un limite de traks para mostrar.

Los resultados se retornan en formato json.

Para tener las apis disponibles en el servidor local, es necesario:

- clonar el repositorio
- descargar e instalar node.js (https://nodejs.org/es/download/)
- instalar dotenv (npm install dotenv)
- configurar el archivo .env

El archivo .env debe ser creado en la raiz del proyecto y contener:

PORT= NRO_DE_PUERTO
CLIENT_ID=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA
CLIENT_SECRET=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA
REDIRECT_URI=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA

(puede modificar "demo.env" quitando la palabra "demo")

Estos valores se enviaran personalmente.

Correr la app con "node app" desde la linea de comandos.
Al correr la app, debemos entrar en localhost:NRO_DE_PUERTO y loguearse en Spotify.
Al loguearse nos dará un token que debemos copiar para hacer las pruebas en Postman.

puede encontrar la documentacion de postman aqui: 
https://documenter.getpostman.com/view/20209460/2s83zpHzmn

El token debe ser ubicado en Authorization, como Bearer Token

Utilizar la API desde la web

Puede utilizar esta api sin descargar el repositorio, ya que se encuentra alojada en:

https://my-api-spotify.herokuapp.com/

Consulte la documentacion para utilizar la api desde el servidor remoto.

https://documenter.getpostman.com/view/20209460/2s83zpHzvY





