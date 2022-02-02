# Prueba de MaxiPublica
API de palabras permitidas

# Requisitos

- Tener instalado node ( esta api esta creada en la v16.10.0 )
	- https://nodejs.org/en/
- Tener MongoDB, se utilizo la versión community
	- https://www.mongodb.com/try/download/community

#  Comenzar

##  Base de datos
- Levantar el entorno de MongoDB
- Abrir la terminar de mongo y crear una base de datos con el comando `use nombre_db` ( En el ejercicio la bd se llamo palabras )
- Insertar un documento y crear la colección words
	> db.words.insertOne({
		"word": "Hola mundos",
		"allowed": false,
		"status":"deleted",
		"dateCreate":"2022-02-01T18:26:33.668+00:00",
		"lastDateUpdated":"2022-02-02T04:45:52.210+00:00"
		});
- Copiar la cadena de conexión de la base de datos apuntando a la bd creada en el archivo .env que se encuentra en la raíz del proyecto y establecer el puerto para la API

Archivo .env

> PORT=8080
>
> MONGODB_CNN=mongodb://host/nombre_db

Ejemplo: Nombre de db palabras
> MONGODB_CNN=mongodb://192.168.100.146/palabras

 
##  Levantar el entorno
En la raíz del proyecto ejecutar los siguientes comandos: 
- Ejecutar el comando `npm install` para instalar las dependencias
- Ejecutar el comando `npm start` para inicializar el servidor

## Documentación 
- En LANGUAGE seleccionar HTTP para una mejor visualización

> Enlace:  [Prueba MaxiPublica (getpostman.com)](https://documenter.getpostman.com/view/15453720/UVeFLRBU)

## APP de pruebas
- Puede ejecutar opcionalmente la siguiente app para consumir la API

> Enlace: [APP MaxiPublica ](https://github.com/JaredLevi23/cliente-palabras-permitidas)