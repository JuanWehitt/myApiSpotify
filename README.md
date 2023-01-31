# myApiSpotify
Api con manejo de la api de Spotify
Se exponen tres endpoints donde se puede consultar:

* Un artista por el id
http://localhost:3000/artist/:id

* Los albums de un artista por el id
http://localhost:3000/artist/:id/albums?limit=30&offset=10&include_groups=album
Los query Params son opcionales, por defecto: limit=20, offset=0, include_groups=album,single,appears_on,compilation (todos los tipos)

* Los traks de un album, poniendo un limite de traks para mostrar, por id de album.
http://localhost:3000/albums/:id/tracks?limit=11&offset=5
Los query Params son opcionales, por defecto: limit=20, offset=0,

Los resultados se retornan en formato json.

Para tener las apis disponibles en el servidor local, es necesario:

- clonar el repositorio
- descargar e instalar node.js (https://nodejs.org/es/download/)
- instalar dotenv (npm install dotenv)
- configurar el archivo .env
- ejecutar npm install en la terminal

El archivo .env debe ser creado en la raiz del proyecto y contener:

PORT= NRO_DE_PUERTO
CLIENT_ID=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA
CLIENT_SECRET=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA
REDIRECT_URI=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA
ACCESS_TOKEN=VALOR_DE_LA_CADENA_SIN_COMILLAS_NI_PUNTO_Y_COMA

(puede modificar "demo.env" quitando la palabra "demo")

Estos valores se enviaran personalmente.

Correr la app con "node app" desde la linea de comandos.
Al correr la app, debemos entrar en localhost:NRO_DE_PUERTO y loguearse en Spotify.
Al loguearse nos dará un token que debemos copiar para hacer las pruebas en Postman o utilizarlo en su app.

puede encontrar la documentacion de postman aqui: 
https://documenter.getpostman.com/view/20209460/2s83zpHzmn

El token debe ser ubicado en Authorization, como Bearer Token
Si no es ubicado alli, debe estar en las variables del archivo .env en ACCESS_TOKEN

Para finalizar la conexion presionar Ctrl+C


<<<<<<<<< NO FUNCIONA MOMENTANEAMENTE - El plan heroku expiro >>>>>
Utilizar la API desde la web

Puede utilizar esta api sin descargar el repositorio, ya que se encuentra alojada en:

https://my-api-spotify.herokuapp.com/

Consulte la documentacion para utilizar la api desde el servidor remoto.

https://documenter.getpostman.com/view/20209460/2s83zpHzvY





